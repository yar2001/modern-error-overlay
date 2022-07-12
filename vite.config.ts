import { resolve } from 'path';
import { defineConfig } from 'vite';
import dts from 'vite-plugin-dts';

export default defineConfig({
  server: {
    port: 3001,
  },
  build: {
    lib: {
      entry: resolve(__dirname, 'src/index.ts'),
      name: 'modern-error-overlay',
      fileName: (format) => `index.${format}.js`,
    },
  },
  plugins: [
    dts(),
  ],
});
