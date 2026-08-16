import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactCompiler: true,

  compiler: {
    removeConsole: true,
  },

  images: {
    qualities: [75, 100],

    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.prismic.io",
      },
    ],
  },
};

export default nextConfig;
