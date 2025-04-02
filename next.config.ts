import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  eslint: {
    ignoreDuringBuilds: true,
  },
  experimental: {
    serverActions: {
      bodySizeLimit: '100mb', // Increased limit for server actions
    },
  },
  api: {
    bodyParser: {
      sizeLimit: '100mb', // Increased limit for API routes
    },
  },

};

export default nextConfig;
