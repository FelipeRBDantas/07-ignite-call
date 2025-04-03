/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  pageExtensions: ['page.tsx', 'api.ts', 'api.tsx'],
  output: 'standalone',
  experimental: {
    serverActions: true,
  },
}

module.exports = nextConfig
