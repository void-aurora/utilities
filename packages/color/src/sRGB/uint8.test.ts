import { buildArray, hasOwn, toRawType } from '@void-aurora/utils';
import { MAX_UINT8, random, trunc } from '@void-aurora/math';

import { Color } from '../base';
import { ColorSrgbUint8 } from './uint8';
import { ColorSrgbFloat } from './float';
import { ColorKeyword, KEYWORD_HEX_MAP, KEYWORD_RGB_MAP } from './keywords';

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

  test('RGB and hex convert with invalid arguments', () => {
    expect(() => ColorSrgbUint8.fromHex('#')).toThrow('Invalid color');
    expect(() => ColorSrgbUint8.fromHex('#yyyyyy')).toThrow('Invalid color');
    expect(() => ColorSrgbUint8.fromHex('#ffffffyy')).toThrow('Invalid color');
  });

  test('RGB and hex convert for alpha', () => {
    for (let i = 0; i < MAX_UINT8; i++) {
      const hex = `#000000${i.toString(16).padStart(2, '0')}`;
      const rgb = ColorSrgbUint8.fromHex(hex);
      expect(rgb.alpha).toBe(i / MAX_UINT8);
      expect(rgb.toHexString(true)).toBe(hex);
    }
  });

  test('RGB and hex convert for short hex', () => {
    for (let i = 0; i < 0xfff; i++) {
      const short = i.toString(16).padStart(3, '0');
      const long = short
        .split('')
        .map(s => `${s}${s}`)
        .join('');

      const rgb = ColorSrgbUint8.fromHex(short);
      // results of short and long must be the same.
      expect(rgb).toEqual(ColorSrgbUint8.fromHex(long));
      // validate convert back
      expect(rgb.toHexString()).toEqual(`#${long}`);

      for (let j = 0; j < 0xf; j++) {
        const shortAlpha = j.toString(16);
        const shortWithAlpha = `${short}${shortAlpha}`;
        const longAlpha = `${shortAlpha}${shortAlpha}`;
        const longWithAlpha = `${long}${longAlpha}`;
        const rgba = ColorSrgbUint8.fromHex(shortWithAlpha);

        // results of short and long with alpha must be the same.
        expect(rgba).toEqual(ColorSrgbUint8.fromHex(longWithAlpha));
        // validate convert back with alpha
        expect(rgba.toHexString(true)).toBe(`#${longWithAlpha}`);
        // validate convert back without alpha
        expect(rgba.toHexString(false)).toBe(`#${long}`);

        expect(rgb.r).toBe(rgba.r);
        expect(rgb.g).toBe(rgba.g);
        expect(rgb.b).toBe(rgba.b);
      }
    }
  });

  test('RGB and hex convert for keywords', () => {
    (Object.keys(KEYWORD_HEX_MAP) as ColorKeyword[]).forEach(name => {
      const hex = KEYWORD_HEX_MAP[name];
      const rgb = KEYWORD_RGB_MAP[name];
      // RGB to Hex
      expect(rgb.toHexString()).toBe(hex);
      // Hex to RGB
      expect(rgb).toEqual(ColorSrgbUint8.fromHex(hex));
      // Hex without '#' to RGB
      expect(rgb).toEqual(ColorSrgbUint8.fromHex(hex.replace('#', '')));
    });
  });
});
