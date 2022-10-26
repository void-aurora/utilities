import { isFunction } from '../type';
import { firstItem, lastItem, findFirst, findLast } from './find';

const emptyArray: any[] = [];
const textArray = 'abcdefghiflmnopqrstuvwxyz';
const hybridArray = [1, 2, 3, 'a', 'b', 'c', { foo: 'bar' }, true, false];

describe('array find', () => {
  test('firstItem(), lastItem()', () => {
    expect(firstItem(emptyArray)).toBeUndefined();
    expect(lastItem(emptyArray)).toBeUndefined();

    expect(firstItem(textArray)).toBe('a');
    expect(lastItem(textArray)).toBe('z');

    expect(firstItem(hybridArray)).toBe(1);
    expect(lastItem(hybridArray)).toBe(false);
  });

  test('findFirst', () => {
    {
      const predicate = (v: unknown): v is string => typeof v === 'string';
      const findFirstFunc = findFirst<unknown, string>(predicate);

      expect(isFunction(findFirstFunc)).toBe(true);

      expect(findFirst(predicate, emptyArray)).toBeUndefined();
      expect(findFirstFunc(emptyArray)).toBeUndefined();

      expect(findFirst(predicate, textArray)).toBe('a');
      expect(findFirstFunc(textArray)).toBe('a');

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

      expect(findFirst(predicate, textArray)).toBe('b');
      expect(findFirstFunc(textArray)).toBe('b');

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

      expect(findLast(predicate, textArray)).toBeUndefined();
      expect(findLastFunc(textArray)).toBeUndefined();

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

      expect(findLast(predicate, textArray)).toBeUndefined();
      expect(findLastFunc(textArray)).toBeUndefined();

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
