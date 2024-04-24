/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // output: 'export',
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "picsum.photos",
        port: "",
      },
      {
        protocol: "http",
        hostname: "reactifywp.local",
        port: "",
      },
    ],
  },
};

export default nextConfig;
