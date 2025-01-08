/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
      remotePatterns: [
        {
          protocol: 'https',
          hostname: 'picsum.photos',
          port: '', // Leave empty for default ports
          pathname: '/**', // Match all paths
        },
      ],
    },
  };

export default nextConfig;
