import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { resolve } from 'path';

export default defineConfig({
  plugins: [
    react(),
    {
      name: 'service-page-middleware',
      configureServer(server) {
        server.middlewares.use((req, res, next) => {
          const url = req.url?.split('?')[0];
          if (/^\/[a-z][a-z0-9-]*$/.test(url) && url !== '/parceiros') {
            req.url = '/service.html';
          }
          next();
        });
      },
    },
  ],
  server: {
    host: true,
    port: 5173,
  },
  build: {
    target: 'es2020',
    cssCodeSplit: true,
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        parceiros: resolve(__dirname, 'parceiros.html'),
        service: resolve(__dirname, 'service.html'),
      },
    },
  },
});
