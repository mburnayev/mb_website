// eslint and output are included strictly for building for Docker
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "cdn-icons-png.flaticon.com",
        port: "",
        pathname: "/256/**/*.png"
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
