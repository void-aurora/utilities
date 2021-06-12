import {
  arrayEqual,
  createArrayEqual,
  createDeDupe,
  deDupe,
  firstItem,
  lastItem,
} from './helper';

interface Foobar {
  foo: string;
  bar: string;
}
const foobarEqual = (a: Foobar, b: Foobar) =>
  a === b || (a.foo === b.foo && a.bar === b.bar);

describe('array helpers', () => {
  test('firstItem(), lastItem()', () => {
    const array: string[] = [];
    expect(firstItem(array)).toBeUndefined();
    expect(lastItem(array)).toBeUndefined();
    array.push('a', 'b', 'c');
    expect(firstItem(array)).toBe('a');
    expect(lastItem(array)).toBe('c');
  });

  test('arrayEqual()', () => {
    const arrayA: string[] = [];
    const arrayB: string[] = [];
    expect(arrayEqual(arrayA, arrayA)).toBe(true);
    expect(arrayEqual(arrayA, arrayB)).toBe(true);
    arrayA.push('a', 'b', 'c');
    expect(arrayEqual(arrayA, arrayB)).toBe(false);
    arrayB.push('a', 'b');
    expect(arrayEqual(arrayA, arrayB)).toBe(false);
    arrayB.push('c');
    expect(arrayEqual(arrayA, arrayB)).toBe(true);
    arrayB[2] = 'd';
    expect(arrayEqual(arrayA, arrayB)).toBe(false);
  });

  test('createArrayEqual', () => {
    const arrayA: Foobar[] = [];
    const arrayB: Foobar[] = [];

    const customArrayEqual = createArrayEqual(foobarEqual);

    expect(customArrayEqual(arrayA, arrayA)).toBe(true);
    expect(customArrayEqual(arrayA, arrayB)).toBe(true);
    arrayA.push(
      { foo: '1', bar: '1' },
      { foo: '2', bar: '2' },
      { foo: '3', bar: '3' },
    );
    expect(customArrayEqual(arrayA, arrayB)).toBe(false);
    arrayB.push({ foo: '1', bar: '1' }, { foo: '2', bar: '2' });
    expect(customArrayEqual(arrayA, arrayB)).toBe(false);
    arrayB.push({ foo: '3', bar: '3' });
    expect(customArrayEqual(arrayA, arrayB)).toBe(true);
    arrayB[2].foo = '4';
    expect(customArrayEqual(arrayA, arrayB)).toBe(false);
  });

  test('deDupe()', () => {
    const array = ['a', 'b', 'c', 1, 2, 3, true, false];
    expect(deDupe([...array, ...array])).toEqual(array);
  });

  test('createDeDupe', () => {
    const customDeDupe = createDeDupe(foobarEqual);
    const array = [
      { foo: '1', bar: '2' },
      { foo: '3', bar: '4' },
    ];
    const duplicated = [
      ...array,
      ...array,
      ...JSON.parse(JSON.stringify(array)),
    ];
    expect(customDeDupe(duplicated)).toEqual(array);
  });
});
