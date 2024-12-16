// eslint and output are included strictly for building for Docker
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "cdn-icons-png.flaticon.com",
        pathname: "/256/**/*.png"
      },
      {
        protocol: "https",
        hostname: "uxwing.com",
        pathname: "/wp-content/**/*.png"
      },
      {
        protocol: "https",
        hostname: "static.vecteezy.com",
        pathname: "/system/**/*.png"
      }
    ]
  },
  eslint: {
    // This allows production builds to successfully complete even if
    // the project has ESLint errors
    // This is done because the developers of the components I use have
    // the aforementioned errors
    ignoreDuringBuilds: true
  },
  // output: "export"
};

export default nextConfig;
