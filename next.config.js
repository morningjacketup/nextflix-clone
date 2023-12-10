/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "http",
        hostname: "www.impawards.com",
        port: ''
      }
    ]
  }
}

module.exports = nextConfig
