import { createPlainObject } from './helpers';

describe('object helpers', () => {
  test('createPlainObject', () => {
    const obj = createPlainObject();
    expect(obj.prototype).toBeUndefined();
  });
});
