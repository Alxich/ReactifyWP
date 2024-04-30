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
        hostname: "localhost",
        port: "10004",
      },
      {
        protocol: "http",
        hostname: "0.gravatar.com",
        port: "",
      },
      {
        protocol: "http",
        hostname: "1.gravatar.com",
        port: "",
      },
    ],
  },
};

export default nextConfig;
