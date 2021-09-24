import { firstItem, lastItem } from './find';

describe('array find', () => {
  test('firstItem(), lastItem()', () => {
    const array: string[] = [];
    expect(firstItem(array)).toBeUndefined();
    expect(lastItem(array)).toBeUndefined();
    array.push('a', 'b', 'c');
    expect(firstItem(array)).toBe('a');
    expect(lastItem(array)).toBe('c');
  });
});
