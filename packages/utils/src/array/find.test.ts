import { isFunction } from '../type';
import { firstItem, lastItem, findFirst, findLast } from './find';

const toSet = <T>(value: T[]) => new Set(value.values());
const toMap = <T>(value: T[]) => new Map(value.entries());

const emptyArray: any[] = [];
const text = 'abcdefghijklmnopqrstuvwxyz';
const hybridArray = [1, 2, 3, 'a', 'b', 'c', { foo: 'bar' }, true, false];

const fooSet = new Set(['apple', 'banana', 'cat', 'dog']);
const barMap = new Map([
  ['a', 1],
  ['b', 2],
  ['c', 3],
  ['d', 4],
]);

const foobar = {
  *[Symbol.iterator](): Iterator<string> {
    yield 'f';
    yield 'o';
    yield 'o';
    yield 'b';
    yield 'a';
    yield 'r';
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
    console.log(firstItem(toMap([...text])));
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
    expect(lastItem(barMap)).toEqual(['d', 4]);

    expect(firstItem(foobar)).toBe('f');
    expect(lastItem(foobar)).toBe('r');
  });

  test('findFirst', () => {
    {
      const predicate = (v: unknown): v is string => typeof v === 'string';
      const findFirstFunc = findFirst<unknown, string>(predicate);

      expect(isFunction(findFirstFunc)).toBe(true);

      expect(findFirst(predicate, emptyArray)).toBeUndefined();
      expect(findFirstFunc(emptyArray)).toBeUndefined();

      expect(findFirst(predicate, text)).toBe('a');
      expect(findFirstFunc(text)).toBe('a');

      // test type
      const resultA: string | undefined = findFirst(predicate, hybridArray);
      expect(resultA).toBe('a');
      const resultB: string | undefined = findFirstFunc(hybridArray);
      expect(resultB).toBe('a');
    }
    {
      const predicate = (v: unknown): boolean => v === 'b';
      const findFirstFunc = findFirst<unknown>(predicate);

      expect(isFunction(findFirstFunc)).toBe(true);

      expect(findFirst(predicate, emptyArray)).toBeUndefined();
      expect(findFirstFunc(emptyArray)).toBeUndefined();

      expect(findFirst(predicate, text)).toBe('b');
      expect(findFirstFunc(text)).toBe('b');

      const resultA = findFirst(predicate, hybridArray);
      expect(resultA).toBe('b');
      const resultB = findFirstFunc(hybridArray);
      expect(resultB).toBe('b');
    }
  });

  test('findLast', () => {
    {
      const predicate = (v: unknown): v is number => typeof v === 'number';
      const findLastFunc = findLast<unknown, number>(predicate);

      expect(findLast(predicate, emptyArray)).toBeUndefined();
      expect(findLastFunc(emptyArray)).toBeUndefined();

      expect(findLast(predicate, text)).toBeUndefined();
      expect(findLastFunc(text)).toBeUndefined();

      // test type
      const resultA: number | undefined = findLast(predicate, hybridArray);
      expect(resultA).toBe(3);
      const resultB: number | undefined = findLastFunc(hybridArray);
      expect(resultB).toBe(3);
    }
    {
      const predicate = (v: unknown): v is { foo: string } =>
        (!!v &&
          typeof v === 'object' &&
          'foo' in v &&
          typeof (v as any).foo === 'string') ||
        false;
      const findLastFunc = findLast<unknown, { foo: string }>(predicate);

      expect(findLast(predicate, emptyArray)).toBeUndefined();
      expect(findLastFunc(emptyArray)).toBeUndefined();

      expect(findLast(predicate, text)).toBeUndefined();
      expect(findLastFunc(text)).toBeUndefined();

      // test type
      const resultA: { foo: string } | undefined = findLast(
        predicate,
        hybridArray,
      );
      expect(resultA).toEqual({ foo: 'bar' });
      const resultB: { foo: string } | undefined = findLastFunc(hybridArray);
      expect(resultB).toEqual({ foo: 'bar' });
    }
  });
});
