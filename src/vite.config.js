import VitePWA from 'vite-plugin-pwa';

export default {
  plugins: [
    VitePWA({
      includeAssets: ['favicon.ico', 'robots.txt', 'service-worker.js'],
      manifest: {
        name: 'My React PWA',
        short_name: 'ReactPWA',
        description: 'My Progressive Web App built with React and Vite',
      },
    }),
  ],
  build: {
    rollupOptions: {
      input: 'src/main.jsx', // Specify the entry point for your application
    },
  },
};
