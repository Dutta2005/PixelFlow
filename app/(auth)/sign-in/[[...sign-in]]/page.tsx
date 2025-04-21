'use client';

import { SignIn } from '@clerk/nextjs';
import React from 'react';
import Link from 'next/link';

export default function Page() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-900 p-4 sm:p-6">
      {/* Logo or App Name */}
      <div className="mb-4 sm:mb-6">
        <h1 className="text-3xl sm:text-4xl font-bold text-indigo-600 text-center">PixelFlow</h1>
      </div>
      
      {/* Main Card */}
      <div className="bg-gray-800 rounded-lg shadow-xl w-full max-w-md border border-gray-900 overflow-hidden">
        <div className="px-4 pt-4 pb-6 sm:p-8">
          {/* Custom Header */}
          <div className="text-center mb-4 sm:mb-6">
            <h2 className="text-xl sm:text-2xl font-bold text-gray-200">Sign In</h2>
            <p className="text-xs sm:text-sm text-gray-100 mt-1">
              Access your account to manage your media
            </p>
          </div>
          
          {/* Clerk's SignIn component with improved text visibility and containment */}
          <div className="w-full">
            <SignIn 
              appearance={{
                layout: {
                  logoPlacement: "inside",
                  socialButtonsVariant: "iconButton",
                  showOptionalFields: true
                },
                elements: {
                  rootBox: "w-full max-w-full",
                  card: "shadow-none !p-0 w-full max-w-full",
                  headerTitle: "hidden",
                  headerSubtitle: "hidden",
                  formButtonPrimary: "w-full bg-indigo-600 hover:bg-indigo-700 text-white py-2 sm:py-3 px-4 rounded-md font-medium text-sm sm:text-base",
                  formFieldLabel: "text-sm font-medium text-gray-300 mb-1 block",
                  formFieldInput: "w-full px-3 py-2 border border-gray-700 rounded-md text-gray-300 bg-gray-800 focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 text-sm",
                  formFieldInputShowPasswordButton: "text-gray-400 hover:text-indigo-600",
                  footerActionText: "text-gray-300 text-sm",
                  footerActionLink: "text-indigo-500 hover:text-indigo-400 font-medium",
                  dividerLine: "bg-gray-700",
                  dividerText: "text-gray-400 bg-gray-800 px-2 text-sm",
                  socialButtonsBlockButton: "w-full border border-gray-700 text-gray-300 font-medium rounded-md py-2 mb-2 hover:bg-gray-700 text-sm",
                  socialButtonsIconButton: "p-2 border border-gray-700 rounded-md hover:bg-gray-700 text-sm",
                  alert: "p-3 bg-red-900 text-red-300 rounded-md text-sm",
                  identityPreviewEditButton: "text-xs sm:text-sm text-indigo-500 hover:text-indigo-400",
                  formFieldSuccessText: "text-green-500 text-xs sm:text-sm",
                  formFieldErrorText: "text-red-400 text-xs sm:text-sm",
                  formResendCodeLink: "text-indigo-500 hover:text-indigo-400 text-sm",
                  main: "w-full max-w-full",
                  form: "w-full max-w-full",
                  formFieldRow: "w-full max-w-full",
                  formButtonReset: "text-indigo-500",
                },
                variables: {
                  borderRadius: '0.375rem',
                  colorPrimary: '#4f46e5', // Indigo-600
                  colorText: '#d1d5db', // Gray-300
                  colorTextSecondary: '#9ca3af', // Gray-400
                  colorBackground: '#1f2937', // Gray-800
                  colorInputBackground: '#1f2937', // Gray-800
                  colorInputText: '#d1d5db', // Gray-300
                  colorDanger: '#ef4444', // Red-500
                  colorSuccess: '#10b981', // Green-500
                }
              }}
            />
          </div>
        </div>
      </div>
      
      {/* Sign Up Option */}
      <div className="mt-4 sm:mt-6 bg-gray-800 rounded-lg shadow-md p-3 sm:p-4 text-center w-full max-w-md border border-gray-900">
        <p className="text-gray-400 text-sm sm:text-base">Don't have an account? 
          <Link href="/sign-up" className="text-indigo-500 font-medium ml-1 hover:underline">
            Sign Up
          </Link>
        </p>
      </div>
      
      {/* Footer with back to home link */}
      <div className="mt-6 sm:mt-8">
        <Link href="/" className="flex items-center gap-1 text-indigo-500 hover:text-indigo-400 text-sm sm:text-base">
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M19 12H5M12 19l-7-7 7-7"/>
          </svg>
          Back to home
        </Link>
      </div>
    </div>
  );
}