import { describe, test, expect, expectTypeOf } from 'vitest';
import { curry } from './curry.g';

describe('functional curry', () => {
  test('normal', () => {
    function multiply(a: number, b: number, c: number): number {
      return a * b * c;
    }

    const curriedMultiply = curry(multiply, 3);

    expect(curriedMultiply(2)(3)(4)).toEqual(24);
    expect(curriedMultiply(2, 3)(4)).toEqual(24);
    expect(curriedMultiply(2)(3, 4)).toEqual(24);
    expect(curriedMultiply(2, 3, 4)).toEqual(24);
  });
});
