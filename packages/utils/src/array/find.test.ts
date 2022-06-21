import {
  firstItem,
  lastItem,
  findFirst,
  createFindFirst,
  findLast,
  createFindLast,
} from './find';

const emptyArray: any[] = [];
const textArray = 'abcdefghiflmnopqrstuvwxyz'.split('');
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
      const arrayFindFirst = createFindFirst<unknown, string>(predicate);

      expect(findFirst(emptyArray, predicate)).toBeUndefined();
      expect(arrayFindFirst(emptyArray)).toBeUndefined();

      expect(findFirst(textArray, predicate)).toBe('a');
      expect(arrayFindFirst(textArray)).toBe('a');

      // test type
      const resultA: string | undefined = findFirst(hybridArray, predicate);
      expect(resultA).toBe('a');
      const resultB: string | undefined = arrayFindFirst(hybridArray);
      expect(resultB).toBe('a');
    }
    {
      const predicate = (v: unknown): boolean => v === 'b';
      const arrayFindFirst = createFindFirst<unknown>(predicate);

      expect(findFirst(emptyArray, predicate)).toBeUndefined();
      expect(arrayFindFirst(emptyArray)).toBeUndefined();

      expect(findFirst(textArray, predicate)).toBe('b');
      expect(arrayFindFirst(textArray)).toBe('b');

      const resultA = findFirst(hybridArray, predicate);
      expect(resultA).toBe('b');
      const resultB = arrayFindFirst(hybridArray);
      expect(resultB).toBe('b');
    }
  });

  test('findLast', () => {
    {
      const predicate = (v: unknown): v is number => typeof v === 'number';
      const arrayFindLast = createFindLast<unknown, number>(predicate);

      expect(findLast(emptyArray, predicate)).toBeUndefined();
      expect(arrayFindLast(emptyArray)).toBeUndefined();

      expect(findLast(textArray, predicate)).toBeUndefined();
      expect(arrayFindLast(textArray)).toBeUndefined();

      // test type
      const resultA: number | undefined = findLast(hybridArray, predicate);
      expect(resultA).toBe(3);
      const resultB: number | undefined = arrayFindLast(hybridArray);
      expect(resultB).toBe(3);
    }
    {
      const predicate = (v: unknown): v is { foo: string } =>
        (!!v &&
          typeof v === 'object' &&
          'foo' in v &&
          typeof (v as any).foo === 'string') ||
        false;
      const arrayFindLast = createFindLast<unknown, { foo: string }>(predicate);

      expect(findLast(emptyArray, predicate)).toBeUndefined();
      expect(arrayFindLast(emptyArray)).toBeUndefined();

      expect(findLast(textArray, predicate)).toBeUndefined();
      expect(arrayFindLast(textArray)).toBeUndefined();

      // test type
      const resultA: { foo: string } | undefined = findLast(
        hybridArray,
        predicate,
      );
      expect(resultA).toEqual({ foo: 'bar' });
      const resultB: { foo: string } | undefined = arrayFindLast(hybridArray);
      expect(resultB).toEqual({ foo: 'bar' });
    }
  });
});
