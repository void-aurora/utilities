import { buildArray, hasOwn, toRawType } from '@void-aurora/utils';
import { MAX_UINT8, random, trunc } from '@void-aurora/math';

import { Color } from '../base';
import { ColorSrgbUint8 } from './uint8';
import { ColorSrgbFloat } from './float';

describe('sRGB uint8', () => {
  test('constructor default', () => {
    const rgb = new ColorSrgbUint8();
    expect(rgb).toBeInstanceOf(Color);
    expect(rgb).toBeInstanceOf(ColorSrgbUint8);
    expect(toRawType(rgb)).toBe('SrgbUint8');
    expect(rgb.alpha).toBe(1);
    expect(rgb.r).toBe(0);
    expect(rgb.g).toBe(0);
    expect(rgb.b).toBe(0);
  });

  test('constructor clone', () => {
    const [r, g, b] = buildArray(4, () => random() * MAX_UINT8);
    const alpha = random();
    const rgb = new ColorSrgbUint8(r, g, b, alpha);
    const rgbCloned = new ColorSrgbUint8(rgb);
    expect(rgb).not.toBe(rgbCloned);
    expect(rgb).toEqual(rgbCloned);
  });

  test('channel alpha', () => {
    let rgb: ColorSrgbUint8;
    rgb = new ColorSrgbUint8(undefined, undefined, undefined, 1);
    expect(rgb.alpha).toBe(1);
    rgb = new ColorSrgbUint8(undefined, undefined, undefined, 0);
    expect(rgb.alpha).toBe(0);
    buildArray(5, () => random()).forEach(v => {
      rgb = new ColorSrgbUint8(undefined, undefined, undefined, v);
      expect(rgb.alpha).toBe(v);
    });
    expect(hasOwn(rgb, 'alpha')).toBe(false);
  });

  test('constructor parameters r, g, b should be trunc clamped to unsigned 8-bit integer.', () => {
    {
      const rgb = new ColorSrgbUint8(MAX_UINT8, MAX_UINT8, MAX_UINT8);
      expect(rgb.r).toBe(MAX_UINT8);
      expect(rgb.g).toBe(MAX_UINT8);
      expect(rgb.b).toBe(MAX_UINT8);
    }
    {
      const rgb = new ColorSrgbUint8(0, 0, 0);
      expect(rgb.r).toBe(0);
      expect(rgb.g).toBe(0);
      expect(rgb.b).toBe(0);
    }
    {
      const [r, g, b] = buildArray(3, () => random() * MAX_UINT8);
      const rgb = new ColorSrgbUint8(r, g, b);
      expect(rgb.r).toBe(trunc(r));
      expect(rgb.g).toBe(trunc(g));
      expect(rgb.b).toBe(trunc(b));
    }
    {
      const [r, g, b] = buildArray(3, () => (random() + 1) * MAX_UINT8 * 10);
      const rgb = new ColorSrgbUint8(r, g, b);
      expect(rgb.r).toBe(MAX_UINT8);
      expect(rgb.g).toBe(MAX_UINT8);
      expect(rgb.b).toBe(MAX_UINT8);
    }
    {
      const [r, g, b] = buildArray(3, () => (random() + 1) * -10);
      const rgb = new ColorSrgbUint8(r, g, b);
      expect(rgb.r).toBe(0);
      expect(rgb.g).toBe(0);
      expect(rgb.b).toBe(0);
    }
  });

  test('channels r, g, b should be trunc clamped to unsigned 8-bit integer.', () => {
    const [r, g, b] = buildArray(3, () => random() * MAX_UINT8);
    const rgb = new ColorSrgbUint8(r, g, b);

    (['r', 'g', 'b'] as const).forEach(channel => {
      rgb[channel] = MAX_UINT8;
      expect(rgb[channel]).toBe(MAX_UINT8);
      rgb[channel] = 0;
      expect(rgb[channel]).toBe(0);

      buildArray(5, () => random() * MAX_UINT8).forEach(v => {
        rgb[channel] = v;
        expect(rgb[channel]).toBe(trunc(v));
      });

      // should be clamped, when the given value is out of range between 0 and 255.
      buildArray(5, () => (random() + 1) * MAX_UINT8 * 10).forEach(v => {
        rgb[channel] = v;
        expect(rgb[channel]).toBe(MAX_UINT8);
      });
      buildArray(5, () => (random() + 1) * -10).forEach(v => {
        rgb[channel] = v;
        expect(rgb[channel]).toBe(0);
      });
    });
  });

  test('toString, format to CSS RGB color value', () => {
    const [r, g, b] = buildArray(4, () => random() * MAX_UINT8);
    const alpha = random();
    const rgb = new ColorSrgbUint8(r, g, b, alpha);
    expect(rgb.toString()).toBe(
      `rgba(${[trunc(r), trunc(g), trunc(b), alpha].join(',')})`,
    );
  });

  test('toSrgbFloat', () => {
    const [r, g, b] = buildArray(3, () => random() * MAX_UINT8);
    const alpha = random();
    const rgbUint8 = new ColorSrgbUint8(r, g, b, alpha);
    const rgbFloat = rgbUint8.toSrgbFloat();
    expect(rgbFloat.alpha).toBe(rgbUint8.alpha);
    expect(rgbFloat.r).toBe(trunc(r) / MAX_UINT8);
    expect(rgbFloat.g).toBe(trunc(g) / MAX_UINT8);
    expect(rgbFloat.b).toBe(trunc(b) / MAX_UINT8);
  });

  test('fromSrgbFloat', () => {
    const [r, g, b, alpha] = buildArray(4, () => random());
    const rgbFloat = new ColorSrgbFloat(r, g, b, alpha);
    const rgbUint8 = ColorSrgbUint8.fromSrgbFloat(rgbFloat);
    expect(rgbUint8.r).toBe(trunc(r * MAX_UINT8));
    expect(rgbUint8.g).toBe(trunc(g * MAX_UINT8));
    expect(rgbUint8.b).toBe(trunc(b * MAX_UINT8));
    expect(rgbFloat.toColor(ColorSrgbUint8)).toEqual(rgbUint8);
  });
});
