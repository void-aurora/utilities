import { createColorSrgbLinear, isColorSrgbLinear } from './srgb-linear';

describe('sRGB-linear', () => {
  test('createColorSrgbLinear()', () => {
    {
      const color = createColorSrgbLinear(0.1, 0.2, 0.3);
      expect(Object.isFrozen(color)).toBe(true);
      expect(color[Symbol.toStringTag]).toBe('srgb-linear');
      expect(color.r).toBe(0.1);
      expect(color.g).toBe(0.2);
      expect(color.b).toBe(0.3);
      expect(color.alpha).toBe(1);
    }
    {
      const color = createColorSrgbLinear(1.2, 2.3, 3.4, 4.5);
      expect(color.r).toBe(1);
      expect(color.g).toBe(1);
      expect(color.b).toBe(1);
      expect(color.alpha).toBe(1);
    }
    {
      const color = createColorSrgbLinear(-1.2, -2.3, -3.4, -4.5);
      expect(color.r).toBe(0);
      expect(color.g).toBe(0);
      expect(color.b).toBe(0);
      expect(color.alpha).toBe(0);
    }
    {
      expect(createColorSrgbLinear(0.4, 0.5, 0.6, undefined).alpha).toBe(1);
    }
  });

  test('isLinearRgb()', () => {
    expect(isColorSrgbLinear(createColorSrgbLinear(0.1, 0.2, 0.3))).toBe(true);
    expect(
      isColorSrgbLinear({
        r: 0.1,
        g: 0.2,
        b: 0.3,
        alpha: 1,
      }),
    ).toBe(false);
    expect(
      isColorSrgbLinear({
        r: 0.1,
        g: 0.2,
        b: 0.3,
        alpha: 1,
        [Symbol.toStringTag]: 'xRGB',
      }),
    ).toBe(false);
    expect(
      isColorSrgbLinear({
        alpha: 0.5,
        [Symbol.toStringTag]: 'foobar',
      }),
    ).toBe(false);
    expect(isColorSrgbLinear(null)).toBe(false);
  });
});
