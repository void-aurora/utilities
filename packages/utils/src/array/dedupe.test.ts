import { describe, test, expect } from 'vitest';
import { isFunction } from '../type';
import { dedupe, simpleDedupe } from './dedupe';

interface Foobar {
  foo: string | number;
  bar: string | number;
}

describe('array dedupe', () => {
  test('simpleDedupe()', () => {
    const array = ['a', 'b', 'c', 1, 2, 3, true, false, NaN];
    expect(simpleDedupe([...array, ...array])).toEqual(array);
  });

  test('dedupe', () => {
    const array: Foobar[] = [
      { foo: 1, bar: '2' },
      { foo: 3, bar: '4' },
      { foo: 5, bar: '6' },
      { foo: 5, bar: '6' }, // duplicated
      { foo: 5, bar: '6' }, // duplicated
      { foo: 7, bar: '8' },
      { foo: '1', bar: 2 },
      { foo: '1', bar: 2 }, // duplicated
      { foo: '3', bar: 4 },
      { foo: '3', bar: 4 }, // duplicated
      { foo: '3', bar: 4 }, // duplicated
      { foo: '3', bar: 4 }, // duplicated
      { foo: '3', bar: 4 }, // duplicated
      { foo: '5', bar: 6 },
      { foo: '7', bar: 8 },
    ];

    const equal = (a: Foobar, b: Foobar) =>
      a === b || (a.foo === b.foo && a.bar === b.bar);
    const dedupeFunc = dedupe(equal);

    expect(isFunction(dedupeFunc)).toBe(true);

    expect(dedupe(equal, array)).toEqual(dedupeFunc(array));
    expect(dedupeFunc(array)).toEqual([
      { foo: 1, bar: '2' },
      { foo: 3, bar: '4' },
      { foo: 5, bar: '6' },
      { foo: 7, bar: '8' },
      { foo: '1', bar: 2 },
      { foo: '3', bar: 4 },
      { foo: '5', bar: 6 },
      { foo: '7', bar: 8 },
    ]);
  });
});
