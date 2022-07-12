import { defineConfig } from 'vite';
import path from 'path';

export default defineConfig({
  server: {
    port: 3001,
  },
  build: {
    lib: {
      entry: path.resolve(__dirname, 'src/main.ts'),
      name: 'modern-error-overlay',
      fileName: (format) => `index.${format}.js`,
    },
  },
});
