/// <reference types="vitest" />
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

    const [{ name, globalName, peerDependencies = {} }, { include, exclude }] =
      await Promise.all([
        fs.readJSON(`${__dirname}/package.json`),
        fs.readJSON(`${__dirname}/tsconfig.json`),
      ]);

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
      test: {
        include: ['src/**/*.{test,spec}.{ts,tsx}'],
        reporters: 'default',
        coverage: {
          enabled: true,
          include,
          exclude: [...exclude, '**/*/index.{ts,tsx}', '**/*/.*.*'],
        },
        typecheck: {
          enabled: true,
          include: ['src/**/*.{test-d,spec-d}.{ts,tsx}'],
          tsconfig: pth.resolve(__dirname, 'tsconfig.test.json'),
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
