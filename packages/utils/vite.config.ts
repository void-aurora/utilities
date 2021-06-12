import pth from 'path';
import type { UserConfig } from 'vite';
import pkg from './package.json';

const config: UserConfig = {
  resolve: {
    alias: {
      'type-fest': './type-fest',
    },
  },
  build: {
    sourcemap: true,
    lib: {
      entry: pth.resolve(__dirname, 'src/index.ts'),
      name: pkg.globalName,
      formats: ['es', 'cjs', 'iife'],
    },
    rollupOptions: {
      // external: ['type-fest'],
    },
  },
};

export default config;
