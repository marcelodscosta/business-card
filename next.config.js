/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ['chart.googleapis.com', 'https://unsplash.com/'],
  },
}

module.exports = nextConfig
