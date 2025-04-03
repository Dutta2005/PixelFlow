// import type { NextConfig } from "next";

// const nextConfig: NextConfig = {
//   /* config options here */
//   eslint: {
//     ignoreDuringBuilds: true,
//   },
//   experimental: {
//     serverActions: {
//       bodySizeLimit: '100mb', // Increased limit for server actions
//     },
//   },
//   api: {
//     bodyParser: {
//       sizeLimit: '100mb', // Increased limit for API routes
//     },
//   },

// };

// export default nextConfig;

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
  // The 'api' object needs to be inside the top level configuration
  async headers() {
    return [
      {
        source: '/api/:path*', // Applies to all API routes
        headers: [
          {
            key: 'Connection',
            value: 'keep-alive'
          }
        ]
      }
    ];
  },
  env: {
    MAX_BODY_SIZE: '100mb', // Environment variable to control body size
  }
};

// This is needed for older Next.js versions compatibility
if (typeof (nextConfig as any).api === 'undefined') {
  (nextConfig as any).api = {
    bodyParser: {
      sizeLimit: '100mb', // Increased limit for API routes
    },
    responseLimit: '100mb', // Limit for API responses
  };
}

export default nextConfig;