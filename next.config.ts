import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Docker uses the standalone server bundle. Vercel supplies its own Next.js
  // build adapter, which is incompatible with standalone output in Next 16.3.
  output: process.env.VERCEL ? undefined : "standalone",
  allowedDevOrigins: ["192.168.0.159"],
};

export default nextConfig;
