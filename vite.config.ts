import { resolve } from 'path';
import { defineConfig } from 'vite';
import dts from 'vite-plugin-dts';
import cssInjectedByJsPlugin from 'vite-plugin-css-injected-by-js'

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
    cssInjectedByJsPlugin(),
    dts(),
  ],
});
