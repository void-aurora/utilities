import { createDeDupe, deDupe } from './dedupe';

interface Foobar {
  foo: string;
  bar: string;
}

const foobarEqual = (a: Foobar, b: Foobar) =>
  a === b || (a.foo === b.foo && a.bar === b.bar);

describe('array dedupe', () => {
  test('deDupe()', () => {
    const array = ['a', 'b', 'c', 1, 2, 3, true, false];
    expect(deDupe([...array, ...array])).toEqual(array);
  });

  test('createDeDupe', () => {
    const customDeDupe = createDeDupe(foobarEqual);
    const array: Foobar[] = [
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
