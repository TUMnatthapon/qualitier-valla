/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ['images.unsplash.com','s3-ap-southeast-1.amazonaws.com','firebasestorage.googleapis.com']
  },
}

module.exports = nextConfig
