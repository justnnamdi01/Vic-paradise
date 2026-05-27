/** @type {import('next').NextConfig} */
const nextConfig = {
  // Enable static generation
  output: 'export',
  
  // Disable image optimization for static export (unless using next/image with custom loader)
  images: {
    unoptimized: true,
  },

  // SEO and performance optimizations
  compress: true,
  
  // Security headers
  async headers() {
    return [
      {
        source: '/:path*',
        headers: [
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff'
          },
          {
            key: 'X-Frame-Options',
            value: 'SAMEORIGIN'
          },
          {
            key: 'X-XSS-Protection',
            value: '1; mode=block'
          },
          {
            key: 'Referrer-Policy',
            value: 'strict-origin-when-cross-origin'
          },
          {
            key: 'Cache-Control',
            value: 'public, max-age=3600, must-revalidate'
          }
        ],
      },
    ];
  },

  // Redirects for SEO
  async redirects() {
    return [
      {
        source: '/admin',
        destination: '/admin',
        permanent: false,
      },
    ];
  },

  // Disable strict mode in production for better performance
  reactStrictMode: false,
};

module.exports = nextConfig;
