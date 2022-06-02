// https://vitejs.dev/config/
import { defineConfig } from 'vite';
import { svelte } from '@sveltejs/vite-plugin-svelte';

export default defineConfig({
  server: {
    port: 3001,
    open: '/index.html'
  },
  plugins: [svelte({
    compilerOptions: { customElement: true }
  })],
});
