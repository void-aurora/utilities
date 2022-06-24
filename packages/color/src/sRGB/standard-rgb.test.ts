import { createStandardRgb, isStandardRgb } from './standard-rgb';

describe('standard RGB', () => {
  test('createStandardRgb()', () => {
    {
      const color = createStandardRgb(0.1, 0.2, 0.3);
      expect(Object.isFrozen(color)).toBe(true);
      expect(color[Symbol.toStringTag]).toBe('sRGB');
      expect(color.r).toBe(0.1);
      expect(color.g).toBe(0.2);
      expect(color.b).toBe(0.3);
      expect(color.alpha).toBe(1);
    }
    {
      const color = createStandardRgb(1.2, 2.3, 3.4, 4.5);
      expect(color.r).toBe(1);
      expect(color.g).toBe(1);
      expect(color.b).toBe(1);
      expect(color.alpha).toBe(1);
    }
    {
      const color = createStandardRgb(-1.2, -2.3, -3.4, -4.5);
      expect(color.r).toBe(0);
      expect(color.g).toBe(0);
      expect(color.b).toBe(0);
      expect(color.alpha).toBe(0);
    }
    {
      expect(createStandardRgb(0.4, 0.5, 0.6, undefined).alpha).toBe(1);
    }
  });

  test('isStandardRgb()', () => {
    expect(isStandardRgb(createStandardRgb(0.1, 0.2, 0.3))).toBe(true);
    expect(
      isStandardRgb({
        r: 0.1,
        g: 0.2,
        b: 0.3,
        alpha: 1,
      }),
    ).toBe(false);
    expect(
      isStandardRgb({
        r: 0.1,
        g: 0.2,
        b: 0.3,
        alpha: 1,
        [Symbol.toStringTag]: 'xRGB',
      }),
    ).toBe(false);
    expect(
      isStandardRgb({
        alpha: 0.5,
        [Symbol.toStringTag]: 'foobar',
      }),
    ).toBe(false);
    expect(isStandardRgb(null)).toBe(false);
  });
});
