import pth from 'path';
import type { UserConfig } from 'vite';

const config: UserConfig = {
  build: {
    sourcemap: true,
    lib: {
      entry: pth.resolve(__dirname, 'src/index.ts'),
      name: 'VoidAuroraUtils',
      formats: ['es', 'cjs', 'iife'],
    },
    rollupOptions: {
      external: [
        '@void-aurora/utils',
        'dom-serializer',
        'domhandler',
        'domutils',
        'htmlparser2',
      ],
    },
  },
};

export default config;
