export default {
  server: {
    proxy: {
      '/api': {
        target: 'https://booking-com15.p.rapidapi.com',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, ''),
      },
    },
  },
};
