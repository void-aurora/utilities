import { isFloatEqual } from './float';

describe('number float', () => {
  test('isFloatEqual()', () => {
    expect(isFloatEqual(0.1 + 0.2, 0.3)).toBe(true);
  });
});
