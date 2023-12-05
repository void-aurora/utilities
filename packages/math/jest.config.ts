// jest.config.ts
import type { JestConfigWithTsJest } from 'ts-jest/dist/types';
import { defaultsESM as tsjPreset } from 'ts-jest/presets';

const config: JestConfigWithTsJest = {
  transform: {
    ...tsjPreset.transform,
  },
  globals: {
    'ts-jest': {
      tsconfig: './tsconfig.test.json',
    },
  },
  moduleNameMapper: {},
  collectCoverage: true,
  coverageDirectory: './coverage',
  collectCoverageFrom: ['src/**/*.{ts,tsx}', '!src/**/index.{ts,tsx}'],
  coverageThreshold: {
    global: {
      branches: 100,
      functions: 100,
      lines: 100,
      statements: 100,
    },
  },
};

export default config;
