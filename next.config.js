/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    unoptimized: true
  },
  basePath: "/next-portafolio",
  assetPrefix: "/next-portafolio",
  trailingSlash: true
}

module.exports = nextConfig
