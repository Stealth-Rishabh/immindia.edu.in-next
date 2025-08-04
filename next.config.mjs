/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "www.immindia.edu.in",
        port: "",
        pathname: "/api/uploads/**",
      },
      {
        protocol: "https",
        hostname: "immindia.edu.in",
        port: "",
        pathname: "/api/uploads/**",
      },
      {
        protocol: "https",
        hostname: "img.freepik.com",
        port: "",
        pathname: "/**",
      },
    ],
  },
};

export default nextConfig;
