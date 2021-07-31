import type { UserConfig } from 'vite';
import reactRefresh from '@vitejs/plugin-react-refresh';

const config: UserConfig = {
  base: './',
  build: {},
  server: {
    host: '0.0.0.0',
    port: 9612,
    open: true,
  },
};

export default {
  ...config,

  plugins: [reactRefresh()],
};
