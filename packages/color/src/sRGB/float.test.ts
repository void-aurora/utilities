import { buildArray, hasOwn, toRawType } from '@void-aurora/utils';
import { random } from '@void-aurora/math';

import { Color } from '../base';
import { ColorSrgbFloat } from './float';

describe('sRGB float', () => {
  test('constructor default', () => {
    const rgb = new ColorSrgbFloat();
    expect(rgb).toBeInstanceOf(Color);
    expect(rgb).toBeInstanceOf(ColorSrgbFloat);
    expect(toRawType(rgb)).toBe('SrgbFloat');
    expect(rgb.alpha).toBe(1);
    expect(rgb.r).toBe(0);
    expect(rgb.g).toBe(0);
    expect(rgb.b).toBe(0);
  });

  test('constructor clone', () => {
    const [r, g, b, alpha] = buildArray(4, () => random());
    const rgb = new ColorSrgbFloat(r, g, b, alpha);
    const rgbCloned = new ColorSrgbFloat(rgb);
    expect(rgb).not.toBe(rgbCloned);
    expect(rgb).toEqual(rgbCloned);
  });

  test('channel alpha', () => {
    let rgb: ColorSrgbFloat;
    rgb = new ColorSrgbFloat(undefined, undefined, undefined, 1);
    expect(rgb.alpha).toBe(1);
    rgb = new ColorSrgbFloat(undefined, undefined, undefined, 0);
    expect(rgb.alpha).toBe(0);
    buildArray(5, () => random()).forEach(v => {
      rgb = new ColorSrgbFloat(undefined, undefined, undefined, v);
      expect(rgb.alpha).toBe(v);
    });
    expect(hasOwn(rgb, 'alpha')).toBe(false);
  });

  test('constructor parameters r, g, b should be clamped between 0 and 1.', () => {
    {
      const rgb = new ColorSrgbFloat(1, 1, 1);
      expect(rgb.r).toBe(1);
      expect(rgb.g).toBe(1);
      expect(rgb.b).toBe(1);
    }
    {
      const rgb = new ColorSrgbFloat(0, 0, 0);
      expect(rgb.r).toBe(0);
      expect(rgb.g).toBe(0);
      expect(rgb.b).toBe(0);
    }
    {
      const [r, g, b] = buildArray(3, () => random());
      const rgb = new ColorSrgbFloat(r, g, b);
      expect(rgb.r).toBe(r);
      expect(rgb.g).toBe(g);
      expect(rgb.b).toBe(b);
    }
    {
      const [r, g, b] = buildArray(3, () => (random() + 1) * 10);
      const rgb = new ColorSrgbFloat(r, g, b);
      expect(rgb.r).toBe(1);
      expect(rgb.g).toBe(1);
      expect(rgb.b).toBe(1);
    }
    {
      const [r, g, b] = buildArray(3, () => (random() + 1) * -10);
      const rgb = new ColorSrgbFloat(r, g, b);
      expect(rgb.r).toBe(0);
      expect(rgb.g).toBe(0);
      expect(rgb.b).toBe(0);
    }
  });

  test('channels r, g, b should be clamped between 0 and 1.', () => {
    const [r, g, b] = buildArray(3, () => random());
    const rgb = new ColorSrgbFloat(r, g, b);

    (['r', 'g', 'b'] as const).forEach(channel => {
      rgb[channel] = 1;
      expect(rgb[channel]).toBe(1);
      rgb[channel] = 0;
      expect(rgb[channel]).toBe(0);

      buildArray(5, () => random()).forEach(v => {
        rgb[channel] = v;
        expect(rgb[channel]).toBe(v);
      });

      // should be clamped, when the given value is out of range between 0 and 1.
      buildArray(5, () => (random() + 1) * 10).forEach(v => {
        rgb[channel] = v;
        expect(rgb[channel]).toBe(1);
      });
      buildArray(5, () => (random() + 1) * -10).forEach(v => {
        rgb[channel] = v;
        expect(rgb[channel]).toBe(0);
      });
    });
  });

  test('toString, format to CSS RGB color value', () => {
    const [r, g, b, alpha] = buildArray(4, () => random());
    const rgb = new ColorSrgbFloat(r, g, b, alpha);
    expect(rgb.toString()).toBe(
      `rgba(${[r, g, b, alpha].map(v => `${v * 100}%`).join(',')})`,
    );
  });

  test('toSrgbFloat', () => {
    const [r, g, b, alpha] = buildArray(4, () => random());
    const rgb = new ColorSrgbFloat(r, g, b, alpha);
    const rgbCloned = rgb.toSrgbFloat();
    expect(rgb).not.toBe(rgbCloned);
    expect(rgb).toEqual(rgbCloned);
  });
});
