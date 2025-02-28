import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'randomuser.me',
        pathname: "/api/portraits/**",
      },
    ],
  },
  typescript: { // TODO remove after fixing TS Errors
    ignoreBuildErrors: true,
  },
};

export default nextConfig;
