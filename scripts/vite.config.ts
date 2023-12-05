import fs from 'fs-extra';
import pth from 'path';
import yaml from 'yaml';
import { ConfigEnv, UserConfig, defineConfig } from 'vite';

export const presetConfig = (options: {
  __dirname: string;
  entry?: string;
  fileName?: string;
}) =>
  defineConfig(async (env: ConfigEnv): Promise<UserConfig> => {
    const { __dirname, entry = 'src/index.ts', fileName } = options;

    const {
      name,
      globalName,
      peerDependencies = {},
    } = await fs.readJSON(`${__dirname}/package.json`);

    const external: string[] = Object.keys(peerDependencies);
    const globals: Record<string, string> = Object.fromEntries(
      (
        await Promise.all(
          external.map(async pkg => {
            const { name, globalName } = await fs.readJSON(
              `node_modules/${pkg}/package.json`,
            );
            return [name, globalName];
          }),
        )
      ).filter(([, globalName]) => !!globalName),
    );

    const config: UserConfig = {
      resolve: {
        alias: {},
      },
      build: {
        sourcemap: true,
        lib: {
          entry: pth.resolve(__dirname, entry),
          formats: ['es', 'cjs', 'iife'],
          name: globalName,
          fileName: (format, entryName) =>
            `${fileName || entryName}.${format}.js`,
        },
        rollupOptions: {
          external,
          output: {
            globals,
          },
        },
      },
    };

    console.log(
      yaml.stringify(
        config,
        (k, v) => (typeof v === 'function' && v.toString()) || v,
      ),
    );

    return config;
  });
