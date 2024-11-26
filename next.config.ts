import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images:{
    remotePatterns:[
      {
        hostname:"raw.githubusercontent.com",
        protocol:"https"
      }
    ]
  },
  eslint:{
    ignoreDuringBuilds:true
  }
};

export default nextConfig;
