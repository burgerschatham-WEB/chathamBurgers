import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // All site photos are self-hosted in /public/images, so no remote image hosts are needed.
  async redirects() {
    // The v2 design moved from /preview to the main routes on 2026-11-17.
    return [
      { source: "/preview", destination: "/", permanent: true },
      { source: "/preview/menu", destination: "/menu", permanent: true },
    ];
  },
};

export default nextConfig;
