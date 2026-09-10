import { defineConfig } from 'vite';

export default defineConfig({
  base: './',
  server: {
    port: 5173,
    open: false,
    watch: {
      ignored: ['**/*.mp4', '**/*.pdf', '**/dist/**']
    }
  }
});
