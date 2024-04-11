/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
      domains: ['aceternity.com', 'assets.aceternity.com'],
      remotePatterns: [
        {
          protocol: 'https',
          hostname: 'assets.example.com',
          port: '',
          pathname: '/account123/**',
        },
      ],
    },
  };
  
  export default nextConfig;