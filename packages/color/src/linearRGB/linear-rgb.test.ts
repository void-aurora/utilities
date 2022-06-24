import { createLinearRgb, isLinearRgb } from './linear-rgb';

describe('linearRGB', () => {
  test('createLinearRgb()', () => {
    {
      const color = createLinearRgb(0.1, 0.2, 0.3);
      expect(Object.isFrozen(color)).toBe(true);
      expect(color[Symbol.toStringTag]).toBe('linearRGB');
      expect(color.r).toBe(0.1);
      expect(color.g).toBe(0.2);
      expect(color.b).toBe(0.3);
      expect(color.alpha).toBe(1);
    }
    {
      const color = createLinearRgb(1.2, 2.3, 3.4, 4.5);
      expect(color.r).toBe(1);
      expect(color.g).toBe(1);
      expect(color.b).toBe(1);
      expect(color.alpha).toBe(1);
    }
    {
      const color = createLinearRgb(-1.2, -2.3, -3.4, -4.5);
      expect(color.r).toBe(0);
      expect(color.g).toBe(0);
      expect(color.b).toBe(0);
      expect(color.alpha).toBe(0);
    }
    {
      expect(createLinearRgb(0.4, 0.5, 0.6, undefined).alpha).toBe(1);
    }
  });

  test('isLinearRgb()', () => {
    expect(isLinearRgb(createLinearRgb(0.1, 0.2, 0.3))).toBe(true);
    expect(
      isLinearRgb({
        r: 0.1,
        g: 0.2,
        b: 0.3,
        alpha: 1,
      }),
    ).toBe(false);
    expect(
      isLinearRgb({
        r: 0.1,
        g: 0.2,
        b: 0.3,
        alpha: 1,
        [Symbol.toStringTag]: 'xRGB',
      }),
    ).toBe(false);
    expect(
      isLinearRgb({
        alpha: 0.5,
        [Symbol.toStringTag]: 'foobar',
      }),
    ).toBe(false);
    expect(isLinearRgb(null)).toBe(false);
  });
});
