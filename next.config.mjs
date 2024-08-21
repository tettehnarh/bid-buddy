/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    formats: ["image/webp"],
    remotePatterns: [
      {
        hostname: "pub-fb9e8d6f294e4559b01a2f1c0b036cba.r2.dev",
        protocol: "https",
        port: "",
      },
    ],
  },
};

export default nextConfig;
