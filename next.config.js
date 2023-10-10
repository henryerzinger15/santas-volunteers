module.exports = {
  // Other configurations
  basePath: '',
  
  async rewrites() {
    return [
      {
        source: '/images/:path*',
        destination: '/_next/static/images/:path*', // Adjust the path as needed
      },
    ];
  },
};
