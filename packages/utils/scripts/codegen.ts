import pth from 'path';

export const pathSrc = pth.resolve(__dirname, '../src');
export const pathSrcResolve = (...paths: string[]) =>
  pth.resolve(pathSrc, ...paths);
