import pth from 'path';
import type { UserConfig } from 'vite';

const resolve = (...paths: string[]) => pth.resolve(__dirname, ...paths);

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
      name: 'VoidAuroraUtils',
      formats: ['es', 'cjs', 'iife'],
    },
    rollupOptions: {
      // external: ['type-fest'],
    },
  },
};

export default config;
