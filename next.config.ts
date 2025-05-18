import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  output: "export", // Optimized for Netlify deployment
};

export default nextConfig;
