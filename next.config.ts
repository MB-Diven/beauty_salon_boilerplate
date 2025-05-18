import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  // App Router specific settings
  swcMinify: true, // Better minification
  output: "standalone", // Optimized for Netlify deployment
};

export default nextConfig;
