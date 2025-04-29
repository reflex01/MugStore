/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['res.cloudinary.com'],
    minimumCacheTTL: 60,
    dangerouslyAllowSVG: true,
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'res.cloudinary.com',
        port: '',
        pathname: '/**',
      },
    ],
    unoptimized: true, // Skip image optimization for Cloudinary images
  },
  // Add this to handle self-signed certificate issues
  experimental: {
    externalDir: true
  },
}

module.exports = nextConfig;
