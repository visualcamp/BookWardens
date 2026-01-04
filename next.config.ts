import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",  // Enable static export for GitHub Pages
  basePath: "/BookWardensDemo20260104", // Repo name for project page
  images: {
    unoptimized: true, // Required for static export
  },
};

export default nextConfig;
