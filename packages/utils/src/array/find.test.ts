import { describe, test, expect, expectTypeOf } from 'vitest';
import { isArray, isFunction, isNumber, isString } from '../type';
import { firstItem, lastItem, findFirst, findLast } from './find';

const toSet = <T>(value: T[]) => new Set(value.values());
const toMap = <T>(value: T[]) => new Map(value.entries());

const emptyArray: any[] = [];
const text = 'abcdefghijklmnopqrstuvwxyz';
const hybridArray = [1, 2, 3, 'a', 'b', 'c', { foo: 'bar' }, true, false];

const fooSet = new Set(['apple', 'banana', 'cat', 'dog']);
const barMap = new Map<string | number, string | number>([
  ['a', 1],
  ['b', 2],
  ['c', 3],
  ['d', 4],
  [5, 'e'],
  [6, 'f'],
  [7, 'g'],
  [8, 'h'],
]);

const foobar = {
  *[Symbol.iterator](): Iterator<string | number> {
    yield 'f';
    yield 'o';
    yield 'o';
    yield 'b';
    yield 'a';
    yield 'r';
    yield 1;
    yield 0;
    yield 2;
    yield 4;
  },
};

describe('array find', () => {
  test('firstItem(), lastItem()', () => {
    expect(firstItem(emptyArray)).toBeUndefined();
    expect(firstItem(toSet(emptyArray))).toBeUndefined();
    expect(firstItem(toMap(emptyArray))).toBeUndefined();

    expect(lastItem(emptyArray)).toBeUndefined();
    expect(lastItem(toSet(emptyArray))).toBeUndefined();
    expect(lastItem(toMap(emptyArray))).toBeUndefined();

    expect(firstItem(text)).toBe('a');
    expect(firstItem(toSet([...text]))).toBe('a');
    expect(firstItem(toMap([...text]))).toEqual([0, 'a']);

    expect(lastItem(text)).toBe('z');
    expect(lastItem(toSet([...text]))).toBe('z');
    expect(lastItem(toMap([...text]))).toEqual([25, 'z']);

    expect(firstItem(hybridArray)).toBe(1);
    expect(firstItem(toSet(hybridArray))).toBe(1);
    expect(firstItem(toMap(hybridArray))).toEqual([0, 1]);

    expect(lastItem(hybridArray)).toBe(false);
    expect(lastItem(toSet(hybridArray))).toBe(false);
    expect(lastItem(toMap(hybridArray))).toEqual([8, false]);

    expect(firstItem(fooSet)).toBe('apple');
    expect(lastItem(fooSet)).toBe('dog');

    expect(firstItem(barMap)).toEqual(['a', 1]);
    expect(lastItem(barMap)).toEqual([8, 'h']);

    expect(firstItem(foobar)).toBe('f');
    expect(lastItem(foobar)).toBe(4);
  });

  test('findFirst', () => {
    // Types
    {
      expectTypeOf(findFirst((v: string) => v === 'foobar')).toMatchTypeOf<
        (iterable: Iterable<string> | ArrayLike<string>) => string | undefined
      >();
      expectTypeOf(
        findFirst((v: string | number): v is number => isNumber(v)),
      ).toMatchTypeOf<
        (
          Iterable: Iterable<string | number> | ArrayLike<string | number>,
        ) => number | undefined
      >();
    }

    const predicate = (v: unknown): v is string => isString(v);
    const findFirstFunc = findFirst<unknown, string>(predicate);

    expect(findFirstFunc).toBeTypeOf('function');

    expect(findFirst(predicate, emptyArray)).toBeUndefined();
    expect(findFirstFunc(emptyArray)).toBeUndefined();
    expect(findFirst(predicate, toSet(emptyArray))).toBeUndefined();
    expect(findFirstFunc(toSet(emptyArray))).toBeUndefined();
    expect(findFirst(predicate, toMap(emptyArray))).toBeUndefined();
    expect(findFirstFunc(toMap(emptyArray))).toBeUndefined();

    expect(findFirst(predicate, text)).toBe('a');
    expect(findFirstFunc(text)).toBe('a');
    expect(findFirst(predicate, toSet([...text]))).toBe('a');
    expect(findFirstFunc(toSet([...text]))).toBe('a');
    expect(findFirst(predicate, toMap([...text]))).toBeUndefined();
    expect(findFirstFunc(toMap([...text]))).toBeUndefined();

    expect(findFirst(predicate, hybridArray)).toBe('a');
    expect(findFirstFunc(hybridArray)).toBe('a');
    expect(findFirst(predicate, toSet(hybridArray))).toBe('a');
    expect(findFirstFunc(toSet(hybridArray))).toBe('a');
    expect(findFirst(predicate, toMap(hybridArray))).toBeUndefined();
    expect(findFirstFunc(toMap(hybridArray))).toBeUndefined();

    expect(findFirst(predicate, fooSet)).toBe('apple');
    expect(findFirstFunc(fooSet)).toBe('apple');

    expect(findFirst(predicate, barMap)).toBeUndefined();
    expect(findFirstFunc(barMap)).toBeUndefined();

    expect(findFirst(predicate, foobar)).toBe('f');
    expect(findFirstFunc(foobar)).toBe('f');

    // Type match to Map
    {
      const predicate = (
        kvp: [string | number, string | number],
      ): kvp is [number, string] => isString(kvp[1]);

      const find = findFirst(predicate);
      expectTypeOf(find).toMatchTypeOf<
        (
          iterable:
            | Iterable<[string | number, string | number]>
            | ArrayLike<[string | number, string | number]>,
        ) => [number, string] | undefined
      >();

      const result = find(barMap);
      expect(result).toEqual([5, 'e']);
      expectTypeOf(result).toMatchTypeOf<[number, string] | undefined>();

      expect(findFirst(predicate, barMap)).toEqual(result);
    }
  });

  test('findLast', () => {
    // Types
    {
      expectTypeOf(findLast((v: string) => v === 'foobar')).toMatchTypeOf<
        (iterable: Iterable<string> | ArrayLike<string>) => string | undefined
      >();
      expectTypeOf(
        findLast((v: string | number): v is number => isNumber(v)),
      ).toMatchTypeOf<
        (
          Iterable: Iterable<string | number> | ArrayLike<string | number>,
        ) => number | undefined
      >();
    }

    const predicate = (v: unknown): v is string => isString(v);
    const findLastFunc = findLast<unknown, string>(predicate);

    expect(isFunction(findLastFunc)).toBe(true);

    expect(findLast(predicate, emptyArray)).toBeUndefined();
    expect(findLastFunc(emptyArray)).toBeUndefined();
    expect(findLast(predicate, toSet(emptyArray))).toBeUndefined();
    expect(findLastFunc(toSet(emptyArray))).toBeUndefined();
    expect(findLast(predicate, toMap(emptyArray))).toBeUndefined();
    expect(findLastFunc(toMap(emptyArray))).toBeUndefined();

    expect(findLast(predicate, text)).toBe('z');
    expect(findLastFunc(text)).toBe('z');
    expect(findLast(predicate, toSet([...text]))).toBe('z');
    expect(findLastFunc(toSet([...text]))).toBe('z');
    expect(findLast(predicate, toMap([...text]))).toBeUndefined();
    expect(findLastFunc(toMap([...text]))).toBeUndefined();

    expect(findLast(predicate, hybridArray)).toBe('c');
    expect(findLastFunc(hybridArray)).toBe('c');
    expect(findLast(predicate, toSet(hybridArray))).toBe('c');
    expect(findLastFunc(toSet(hybridArray))).toBe('c');
    expect(findLast(predicate, toMap(hybridArray))).toBeUndefined();
    expect(findLastFunc(toMap(hybridArray))).toBeUndefined();

    expect(findLast(predicate, fooSet)).toBe('dog');
    expect(findLastFunc(fooSet)).toBe('dog');

    expect(findLast(predicate, barMap)).toBeUndefined();
    expect(findLastFunc(barMap)).toBeUndefined();

    expect(findLast(predicate, foobar)).toBe('r');
    expect(findLastFunc(foobar)).toBe('r');

    // Type match to Map
    {
      const predicate = (
        kvp: [string | number, string | number],
      ): kvp is [number, string] => isNumber(kvp[1]);

      const find = findLast(predicate);
      expectTypeOf(find).toMatchTypeOf<
        (
          iterable:
            | Iterable<[string | number, string | number]>
            | ArrayLike<[string | number, string | number]>,
        ) => [number, string] | undefined
      >();

      const result = find(barMap);
      expect(result).toEqual(['d', 4]);
      expectTypeOf(result).toMatchTypeOf<[number, string] | undefined>();

      expect(findLast(predicate, barMap)).toEqual(result);
    }
  });
});
