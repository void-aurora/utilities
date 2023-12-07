import { describe, test, expect } from 'vitest';
import { buildArray, emptyArray } from './build';

describe('array build', () => {
  test('buildArray()', () => {
    const arrayA1 = buildArray(i => i, 5);
    const arrayA2 = buildArray(i => i)(5);
    expect(arrayA1).toEqual(arrayA2);
    expect(arrayA1).toEqual([0, 1, 2, 3, 4]);

    const arrayB1 = buildArray(i => i * 2, 7);
    const arrayB2 = buildArray(i => i * 2)(7);
    expect(arrayB1).toEqual(arrayB2);
    expect(arrayB1).toEqual([0, 2, 4, 6, 8, 10, 12]);
  });

  test('emptyArray()', () => {
    const arrayA = emptyArray();
    const arrayB = emptyArray();
    expect(arrayA).toEqual([]);
    expect(arrayB).toEqual([]);
    expect(arrayA).not.toBe(arrayB);
  });
});
