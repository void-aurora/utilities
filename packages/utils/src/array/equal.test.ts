import { arrayEqual, createArrayEqual } from './equal';

interface Foobar {
  foo: string;
  bar: string;
}

const foobarEqual = (a: Foobar, b: Foobar) =>
  a === b || (a.foo === b.foo && a.bar === b.bar);

describe('array equal', () => {
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
});
