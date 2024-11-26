import type { NextConfig } from "next";


const nextConfig: NextConfig = {
  reactStrictMode: true, // Enable React Strict Mode (optional but recommended)
  images: {
    domains: ['flowbite.s3.amazonaws.com'], // Allow external domain for images
  },
};
export default nextConfig;
            