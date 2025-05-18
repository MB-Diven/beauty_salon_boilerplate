import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  // App Router specific settings
  swcMinify: true, // Better minification
};

export default nextConfig;
