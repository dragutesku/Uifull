import { defineConfig } from 'vite';

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    port: 3001,
    open: '/index.html'
  },
  build: {
    lib: {
      name: 'wc-lit',
      entry: 'src/wc-lit.ts',
      formats: ['es', 'umd']
    },
    rollupOptions: {
      external: /^lit/
    }
  }
})
