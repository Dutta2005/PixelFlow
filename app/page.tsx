'use client';

import React from 'react';
import { useRouter } from 'next/navigation';
import { CloudIcon, VideoCameraIcon, PhotoIcon, UserIcon, ArrowRightIcon } from '@heroicons/react/24/outline';

const HomePage: React.FC = () => {
  const router = useRouter();

  const handleSignUp = () => {
    router.push('/sign-up');
  };

  const handleSignIn = () => {
    router.push('/sign-in');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-base-300 to-base-100 flex flex-col items-center justify-between">
      {/* Hero Section */}
      <div className="hero min-h-screen bg-base-200 w-full">
        <div className="hero-content flex-col lg:flex-row-reverse max-w-6xl px-4 py-16">
          {/* Visual Element */}
          <div className="w-full lg:w-1/2 flex justify-center lg:pl-12">  {/* Added lg:pl-12 for padding on desktop */}
            <div className="relative w-full max-w-md">
              <div className="absolute -top-4 -left-4 w-64 h-64 bg-primary/20 rounded-full blur-xl"></div>
              <div className="absolute bottom-8 right-8 w-40 h-40 bg-secondary/20 rounded-full blur-xl"></div>
              
              {/* Demo Cards */}
              <div className="relative z-10 bg-base-100 p-6 rounded-xl shadow-xl border border-base-300 mt-8 lg:mt-0"> {/* Added mt-8 for mobile and mt-0 for desktop */}
                <div className="flex items-center gap-3 mb-4">
                  <CloudIcon className="w-8 h-8 text-primary" />
                  <h3 className="text-xl font-bold">Cloudinary SAAS</h3>
                </div>
                
                <div className="space-y-4 mb-6">
                  <div className="bg-base-200 p-4 rounded-lg flex items-center gap-3">
                    <VideoCameraIcon className="w-6 h-6 text-accent" />
                    <div>
                      <p className="font-semibold">Video Compression</p>
                      <p className="text-sm opacity-70">Same quality, smaller size</p>
                    </div>
                  </div>
                  
                  <div className="bg-base-200 p-4 rounded-lg flex items-center gap-3">
                    <PhotoIcon className="w-6 h-6 text-secondary" />
                    <div>
                      <p className="font-semibold">Image Resizing</p>
                      <p className="text-sm opacity-70">Perfect for all platforms</p>
                    </div>
                  </div>
                </div>
                
                <div className="flex justify-end">
                  <div className="badge badge-primary">Powered by Cloudinary</div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Content */}
          <div className="w-full lg:w-1/2 text-center lg:text-left pt-8 lg:pt-0 lg:pr-8"> {/* Added lg:pr-8 for padding on desktop */}
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold mb-4">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary">
                Cloudinary SAAS
              </span>
            </h1>
            <p className="text-lg md:text-xl mb-6 max-w-md">
              Transform your media effortlessly. Compress videos without quality loss and resize images for any social platform.
            </p>
            
            <div className="stats bg-base-100 shadow mb-8 flex flex-col md:flex-row">
              <div className="stat">
                <div className="stat-figure text-primary">
                  <VideoCameraIcon className="w-8 h-8" />
                </div>
                <div className="stat-title">Video Compression</div>
                <div className="stat-value text-lg">High Quality</div>
              </div>
              
              <div className="stat">
                <div className="stat-figure text-secondary">
                  <PhotoIcon className="w-8 h-8" />
                </div>
                <div className="stat-title">Image Formats</div>
                <div className="stat-value text-lg">All Platforms</div>
              </div>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <button 
                className="btn btn-primary btn-lg gap-2 group"
                onClick={handleSignUp}
              >
                <span>Get Started</span>
                <ArrowRightIcon className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
              <button 
                className="btn btn-outline btn-lg"
                onClick={handleSignIn}
              >
                Sign In
              </button>
            </div>
          </div>
        </div>
      </div>
      
      {/* Features Section */}
      <div className="w-full py-12 bg-base-100">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">How It Works</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Feature 1 */}
            <div className="card bg-base-200 shadow-xl">
              <div className="card-body">
                <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center mb-4">
                  <UserIcon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="card-title">Create Account</h3>
                <p>Secure authentication with Clerk. Get started in seconds with your email or social accounts.</p>
              </div>
            </div>
            
            {/* Feature 2 */}
            <div className="card bg-base-200 shadow-xl">
              <div className="card-body">
                <div className="w-12 h-12 rounded-full bg-secondary/20 flex items-center justify-center mb-4">
                  <CloudIcon className="w-6 h-6 text-secondary" />
                </div>
                <h3 className="card-title">Upload Media</h3>
                <p>Drag and drop your videos or images. Our Cloudinary-powered platform handles the rest.</p>
              </div>
            </div>
            
            {/* Feature 3 */}
            <div className="card bg-base-200 shadow-xl">
              <div className="card-body">
                <div className="w-12 h-12 rounded-full bg-accent/20 flex items-center justify-center mb-4">
                  <ArrowRightIcon className="w-6 h-6 text-accent" />
                </div>
                <h3 className="card-title">Transform & Download</h3>
                <p>Compress videos without quality loss. Resize images for any social media platform instantly.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Footer */}
      <footer className="footer footer-center p-10 bg-base-300 text-base-content">
        <div>
          <p className="font-bold text-lg flex items-center gap-2">
            <CloudIcon className="w-6 h-6" />
            Cloudinary SAAS
          </p>
          <p>Built with Next.js, Cloudinary and Clerk</p>
          <p>Copyright © {new Date().getFullYear()} - All rights reserved</p>
        </div>
      </footer>
    </div>
  );
};

export default HomePage;