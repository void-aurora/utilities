import pth from 'path';
import type { UserConfig } from 'vite';
import pkg from './package.json';
import pkgUtils from '@void-aurora/utils/package.json';

const deps = [pkgUtils];
const external = deps.map(p => p.name);
const globals = Object.fromEntries(deps.map(p => [p.name, p.globalName]));

const config: UserConfig = {
  resolve: {
    alias: {},
  },
  build: {
    sourcemap: true,
    lib: {
      entry: pth.resolve(__dirname, 'src/index.ts'),
      name: pkg.globalName,
      formats: ['es', 'cjs', 'iife'],
    },
    rollupOptions: {
      external,
      output: {
        globals: globals,
      },
    },
  },
};

export default config;
