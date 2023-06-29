/** @type {import('next').NextConfig} */
const nextConfig = {
    async rewrites() {
      return [
        {
          source: '/api/:slug*',
          destination: 'http://localhost:8000/:slug*'
        },
      ]
    },
    images: {
      remotePatterns: [
        {
          protocol: "https",
          hostname: "**",
        },
      ],
    },
  }

module.exports = nextConfig
