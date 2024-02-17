import { defineConfig } from 'vitest/config';
import swc from 'unplugin-swc';

export default defineConfig({
  test: {
    globals: true,
    testTimeout: 60000,
  },
  plugins: [swc.vite()],
  define: {},
  resolve: {
    alias: [],
  },
});
