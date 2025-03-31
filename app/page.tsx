'use client';

import React from 'react';
import { useRouter } from 'next/navigation';

const HomePage: React.FC = () => {
  const router = useRouter();

  const handleSignUp = () => {
    router.push('/sign-up');
  };

  const handleSignIn = () => {
    router.push('/sign-in');
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-base-200">
      <div className="text-center p-6 max-w-md">
        <h1 className="text-5xl font-bold text-primary mb-2">Cloudinary SAAS</h1>
        <p className="text-xl text-base-content opacity-70 mb-8">
          Upload any video and crop your image for any social media site
        </p>
        <div className="flex gap-4 justify-center">
          <button 
            className="btn btn-primary btn-lg" 
            onClick={handleSignUp}
          >
            Sign Up
          </button>
          <button 
            className="btn btn-outline btn-lg"
            onClick={handleSignIn}
          >
            Sign In
          </button>
        </div>
      </div>
      
      {/* Hero pattern for background interest */}
      <div className="absolute bottom-0 w-full h-1/3 bg-gradient-to-t from-primary/10 to-transparent -z-10"></div>
    </div>
  );
};

export default HomePage;