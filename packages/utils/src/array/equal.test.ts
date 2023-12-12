import { describe, test, expect } from 'vitest';
import { arrayEqual, simpleArrayEqual } from './equal';
import { isArray, isObject } from '../type';

interface Foobar {
  foo: string;
  bar: string;
}

const foobarEqual = (a: Foobar, b: Foobar) =>
  a === b || (a.foo === b.foo && a.bar === b.bar);

describe('array equal', () => {
  test('simpleArrayEqual()', () => {
    const objectA = { foobar: 'hello world!' };
    const objectB = { foobar: 'hello world!' };
    const arrayA = ['a', 'b', 'c', 1, 2, 3, true, false, objectA];
    const arrayB = ['a', 'b', 'c', 1, 2, 3, true, false, objectB];
    const arrayC = ['a', 'b', 'c', 1, 2, 3, true, false, objectA];
    const arrayD = ['a', 'b', 'c', 1, 2, 3, true, false, objectA, objectA];

    expect(simpleArrayEqual(arrayA, arrayA)).toBe(true);
    expect(simpleArrayEqual(arrayA, arrayB)).toBe(false);
    expect(simpleArrayEqual(arrayA, arrayC)).toBe(true);
    expect(simpleArrayEqual(arrayA, arrayD)).toBe(false);

    const isEqualArrayA = simpleArrayEqual(arrayA);
    expect(isEqualArrayA(arrayA)).toBe(true);
    expect(isEqualArrayA(arrayB)).toBe(false);
    expect(isEqualArrayA(arrayC)).toBe(true);
    expect(isEqualArrayA(arrayD)).toBe(false);
  });

  test('arrayEqual', () => {
    const arrayA = [
      'a',
      1,
      true,
      { foobar: 'hello world!' } as Record<string, string>,
    ];
    const arrayB = [
      'a',
      1,
      true,
      { foo: 'hello', bar: 'world' } as Record<string, string>,
    ];
    const arrayC = [
      'a',
      1,
      true,
      { foobar: 'hello world!' } as Record<string, string>,
    ];

    const isEqual = (a: any, b: any): boolean => {
      if (a === b) {
        return true;
      }
      if (isArray(a) && isArray(b)) {
        return arrayEqual(isEqual, a, b);
      }
      if (!isArray(a) && !isArray(b) && isObject(a) && isObject(b)) {
        return arrayEqual(isEqual, Object.entries(a), Object.entries(b));
      }
      return false;
    };

    expect(arrayEqual(isEqual, arrayA, arrayB)).toBe(false);
    expect(arrayEqual(isEqual)(arrayA, arrayB)).toBe(false);
    expect(arrayEqual(isEqual)(arrayA)(arrayB)).toBe(false);
    expect(arrayEqual(isEqual, arrayA)(arrayB)).toBe(false);

    expect(arrayEqual(isEqual, arrayA, arrayC)).toBe(true);
    expect(arrayEqual(isEqual)(arrayA, arrayC)).toBe(true);
    expect(arrayEqual(isEqual)(arrayA)(arrayC)).toBe(true);
    expect(arrayEqual(isEqual, arrayA)(arrayC)).toBe(true);
  });
});
