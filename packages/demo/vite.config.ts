import type { UserConfig } from 'vite';

const config: UserConfig = {
  base: './',
  build: {},
  server: {
    host: '0.0.0.0',
    port: 9612,
    open: true,
  },
};

export default config;
