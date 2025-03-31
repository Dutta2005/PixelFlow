'use client';

import { SignUp } from '@clerk/nextjs';
import React from 'react';
import Link from 'next/link';

export default function Page() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-900 p-4">
      {/* Logo or App Name */}
      <div className="mb-6">
        <h1 className="text-4xl font-bold text-indigo-600">Cloudinary SAAS</h1>
      </div>
      
      {/* Main Card */}
      <div className="bg-gray-800 rounded-lg shadow-xl w-full max-w-md border border-gray-900">
        <div className="p-8">
          {/* Custom Header */}
          <div className="text-center mb-6">
            <h2 className="text-2xl font-bold text-gray-200">Sign Up</h2>
            <p className="text-sm text-gray-100 mt-1">
              Create your account to start using Cloudinary SAAS
            </p>
          </div>
          
          {/* Clerk's SignUp component with dark theme styling */}
          <SignUp 
            appearance={{
              layout: {
                logoPlacement: "inside",
                socialButtonsVariant: "iconButton",
                showOptionalFields: true
              },
              elements: {
                rootBox: "w-full",
                card: "shadow-none !p-0 w-full",
                headerTitle: "hidden",
                headerSubtitle: "hidden",
                formButtonPrimary: "w-full bg-indigo-600 hover:bg-indigo-700 text-white py-3 px-4 rounded-md font-medium",
                formFieldLabel: "text-sm font-medium text-gray-700 mb-1 block",
                formFieldInput: "w-full px-3 py-2 border border-gray-300 rounded-md text-gray-800 bg-white focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500",
                formFieldInputShowPasswordButton: "text-gray-500 hover:text-indigo-600",
                footerActionText: "text-gray-100",
                footerActionLink: "text-indigo-600 hover:text-indigo-700 font-medium",
                dividerLine: "bg-gray-800",
                dividerText: "text-gray-400 bg-white px-2",
                socialButtonsBlockButton: "w-full border border-gray-700 text-gray-300 font-medium rounded-md py-2 mb-2 hover:bg-gray-600",
                socialButtonsIconButton: "p-2 border border-gray-700 rounded-md hover:bg-gray-600",
                alert: "p-3 bg-red-100 text-red-700 rounded-md",
                identityPreviewEditButton: "text-sm text-indigo-600 hover:text-indigo-700",
                formFieldSuccessText: "text-green-600 text-sm",
                formFieldErrorText: "text-red-600 text-sm",
                formResendCodeLink: "text-indigo-600 hover:text-indigo-700",
              },
              variables: {
                borderRadius: '0.375rem',
                colorPrimary: '#4f46e5', // Indigo-600
                colorText: '#9ca3af', // Gray-200
                colorTextSecondary: '#9ca3af', // Gray-400
                colorBackground: '#1f2937', // Gray-900
                colorInputBackground: '#1f2937', // Gray-900
                colorInputText: '#9ca3af', // Gray-200
                colorDanger: '#dc2626', // Red-600
                colorSuccess: '#16a34a', // Green-600
              }
            }}
          />
        </div>
      </div>
      
      {/* Sign In Option */}
      <div className="mt-6 bg-gray-800 rounded-lg shadow-md p-4 text-center w-full max-w-md border border-gray-900">
        <p className="text-gray-400">Already have an account? 
          <Link href="/sign-in" className="text-indigo-600 font-medium ml-1 hover:underline">
            Sign In
          </Link>
        </p>
      </div>
      
      {/* Footer with back to home link */}
      <div className="mt-8">
        <Link href="/" className="flex items-center gap-1 text-indigo-600 hover:text-indigo-700">
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M19 12H5M12 19l-7-7 7-7"/>
          </svg>
          Back to home
        </Link>
      </div>
    </div>
  );
}