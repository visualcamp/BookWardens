import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",  // Enable static export for GitHub Pages
  basePath: "/BookWardensDemo20260104", // Repo name for project page
  images: {
    unoptimized: true, // Required for static export
  },
  typescript: {
    // !! WARN !!
    // Dangerously allow production builds to successfully complete even if
    // your project has type errors.
    // !! WARN !!
    ignoreBuildErrors: true,
  },
  // eslint: {
  //   // Warning: This allows production builds to successfully complete even if
  //   // your project has ESLint errors.
  //    ignoreDuringBuilds: true,
  // },
};

export default nextConfig;
