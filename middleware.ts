import { clerkMiddleware, createRouteMatcher } from '@clerk/nextjs/server'
import { NextResponse } from 'next/server';


const isPublicRoute = createRouteMatcher([
    "/sign-in",
    "/sign-up",
    "/",
    "/home"
  ]);

const isPublicApiRoute = createRouteMatcher([
    "/api/videos",
]);

export default clerkMiddleware(async(auth, req) => {
    const {userId} = await auth();
    const currentUrl = new URL(req.url)
    const isHomePage = currentUrl.pathname === '/home'
    const isApiRequest = currentUrl.pathname.startsWith('/api')

    // If user is logged in and trying to access a public route, redirect to dashboard
    if (userId && isPublicRoute(req) && !isHomePage) {
        return NextResponse.redirect(new URL('/home', req.url))
    }

    // not logged in
    if (!userId) {
        // If user is not logged in and trying to access a private route, redirect to signin
        if (!isPublicRoute(req) && !isPublicApiRoute(req)) {
            return NextResponse.redirect(new URL('/sign-in', req.url))
        }

        // If the request is for a protected API route, and user is not logged in
        if (isApiRequest && !isPublicApiRoute(req)) {
            return NextResponse.redirect(new URL('/sign-in', req.url))
        }
    }

    return NextResponse.next()

})

export const config = {
  matcher: [
    "/((?!.*\\..*|_next).*)", "/", "/(api|trpc)(.*)"
  ],
}