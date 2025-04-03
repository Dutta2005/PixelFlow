"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useClerk, useUser } from "@clerk/nextjs";
import {
  LogOutIcon,
  MenuIcon,
  LayoutDashboardIcon,
  Share2Icon,
  UploadIcon,
  ImageIcon,
  XIcon,
} from "lucide-react";

const sidebarItems = [
  { href: "/home", icon: LayoutDashboardIcon, label: "Home Page" },
  { href: "/social-share", icon: Share2Icon, label: "Social Share" },
  { href: "/video-upload", icon: UploadIcon, label: "Video Upload" },
];

export default function AppLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const pathname = usePathname();
  const router = useRouter();
  const { signOut } = useClerk();
  const { user } = useUser();

  // Close sidebar when route changes on mobile
  useEffect(() => {
    setSidebarOpen(false);
  }, [pathname]);

  // Close sidebar when clicking outside on mobile
  useEffect(() => {
    const handleOutsideClick = (event: MouseEvent | TouchEvent) => {
      const sidebar = document.querySelector('.drawer-side');
      const toggle = document.querySelector('#menu-button');
      
      if (sidebarOpen && sidebar && !sidebar.contains(event.target as Node) && 
          toggle && !toggle.contains(event.target as Node)) {
        setSidebarOpen(false);
      }
    };

    if (typeof window !== 'undefined') {
      document.addEventListener('mousedown', handleOutsideClick);
      document.addEventListener('touchstart', handleOutsideClick);
    }

    return () => {
      if (typeof window !== 'undefined') {
        document.removeEventListener('mousedown', handleOutsideClick);
        document.removeEventListener('touchstart', handleOutsideClick);
      }
    };
  }, [sidebarOpen]);

  const handleLogoClick = () => {
    router.push("/");
  };

  const handleSignOut = async () => {
    await signOut();
  };

  // Toggle sidebar function
  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  return (
    <div className={`drawer ${sidebarOpen ? 'drawer-open' : ''} lg:drawer-open`}>
      <input
        id="sidebar-drawer"
        type="checkbox"
        className="drawer-toggle"
        checked={sidebarOpen}
        onChange={toggleSidebar}
      />
      <div className="drawer-content flex flex-col">
        {/* Navbar */}
        <header className="w-full bg-base-200 sticky top-0 z-10 shadow-sm">
          <div className="navbar max-w-7xl mx-auto px-2 sm:px-6 lg:px-8 h-16">
            <div className="flex-none lg:hidden">
              <button
                id="menu-button"
                className="btn btn-square btn-ghost"
                onClick={toggleSidebar}
                aria-label="Toggle menu"
              >
                <MenuIcon className="h-5 w-5" />
              </button>
            </div>
            <div className="flex-1 truncate">
              <Link href="/" onClick={handleLogoClick} className="truncate">
                <div className="btn btn-ghost normal-case text-lg sm:text-xl md:text-2xl font-bold tracking-tight cursor-pointer truncate">
                  Cloudinary Showcase
                </div>
              </Link>
            </div>
            <div className="flex-none flex items-center">
              {user && (
                <>
                  <div className="avatar hidden sm:flex">
                    <div className="w-8 h-8 rounded-full">
                      <img
                        src={user.imageUrl}
                        alt={
                          user.username || user.emailAddresses[0].emailAddress
                        }
                      />
                    </div>
                  </div>
                  <span className="text-sm truncate max-w-[80px] sm:max-w-xs lg:max-w-md ml-2 hidden sm:inline">
                    {user.username || user.emailAddresses[0].emailAddress}
                  </span>
                  <button
                    onClick={handleSignOut}
                    className="btn btn-ghost btn-circle ml-1"
                    aria-label="Sign out"
                  >
                    <LogOutIcon className="h-5 w-5" />
                  </button>
                </>
              )}
            </div>
          </div>
        </header>
        {/* Page content */}
        <main className="flex-grow">
          <div className="max-w-7xl mx-auto w-full px-3 sm:px-6 lg:px-8 my-4 sm:my-8">
            {children}
          </div>
        </main>
      </div>
      {/* Mobile overlay - separate from the drawer-overlay for better control */}
      {sidebarOpen && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-50 z-10 lg:hidden" 
          onClick={toggleSidebar}
          aria-hidden="true"
        ></div>
      )}
      <div className={`drawer-side z-20 ${sidebarOpen ? 'visible' : 'invisible lg:visible'}`}>
        <label 
          htmlFor="sidebar-drawer" 
          className="drawer-overlay"
          onClick={toggleSidebar}
        ></label>
        <aside className={`bg-base-200 w-64 h-full flex flex-col shadow-xl transform transition-transform duration-300 ${sidebarOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'}`}>
          <div className="flex items-center justify-between py-4 px-4">
            <div className="flex items-center">
              <ImageIcon className="w-8 h-8 text-primary" />
              <span className="ml-2 text-lg font-semibold">Menu</span>
            </div>
            <button 
              className="btn btn-ghost btn-sm btn-circle lg:hidden"
              onClick={toggleSidebar}
              aria-label="Close menu"
            >
              <XIcon className="w-5 h-5" />
            </button>
          </div>
          {user && (
            <div className="px-4 py-2 border-b border-base-300 lg:hidden">
              <div className="flex items-center">
                <div className="avatar">
                  <div className="w-10 h-10 rounded-full">
                    <img
                      src={user.imageUrl}
                      alt={user.username || user.emailAddresses[0].emailAddress}
                    />
                  </div>
                </div>
                <div className="ml-3 truncate">
                  <p className="text-sm font-medium">
                    {user.username || user.emailAddresses[0].emailAddress}
                  </p>
                </div>
              </div>
            </div>
          )}
          <ul className="menu p-4 w-full text-base-content flex-grow">
            {sidebarItems.map((item) => (
              <li key={item.href} className="mb-2">
                <Link
                  href={item.href}
                  className={`flex items-center space-x-3 px-4 py-3 rounded-lg ${
                    pathname === item.href
                      ? "bg-primary text-white"
                      : "hover:bg-base-300"
                  }`}
                  onClick={toggleSidebar}
                >
                  <item.icon className="w-5 h-5" />
                  <span>{item.label}</span>
                </Link>
              </li>
            ))}
          </ul>
          {user && (
            <div className="p-4 border-t border-base-300">
              <button
                onClick={handleSignOut}
                className="btn btn-outline btn-error w-full"
              >
                <LogOutIcon className="mr-2 h-5 w-5" />
                Sign Out
              </button>
            </div>
          )}
        </aside>
      </div>
    </div>
  );
}