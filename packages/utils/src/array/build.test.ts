import { describe, test, expect } from 'vitest';
import { buildArray, emptyArray } from './build';

describe('array build', () => {
  test('buildArray()', () => {
    const arrayA = buildArray(5, i => i);
    expect(arrayA).toEqual([0, 1, 2, 3, 4]);
    const arrayB = buildArray(7, i => i * 2);
    expect(arrayB).toEqual([0, 2, 4, 6, 8, 10, 12]);
  });

  test('emptyArray()', () => {
    const arrayA = emptyArray();
    const arrayB = emptyArray();
    expect(arrayA).toEqual([]);
    expect(arrayB).toEqual([]);
    expect(arrayA).not.toBe(arrayB);
  });
});
