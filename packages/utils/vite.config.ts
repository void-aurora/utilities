import pth from 'path';
import type { UserConfig } from 'vite';

const config: UserConfig = {
  build: {
    lib: {
      entry: pth.resolve(__dirname, 'src/index.ts'),
      name: 'VoidAuroraUtils',
      formats: ['es', 'cjs', 'iife'],
    },
    sourcemap: true,
  },
};

export default config;
