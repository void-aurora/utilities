import { isNumber, isObject, parseInt } from '@void-aurora/utils';
import { clampUint8, floor, MAX_UINT8, round } from '@void-aurora/math';
import { clampAlpha, ColorBase } from '../base';
import { createColorSrgb, ColorSrgb } from './srgb-float';

/**
 * The gamma corrected form sRGB color model.
 *
 * Represents RGBA screen colors with one byte per channel.
 *
 * NOTE: The `StandardRgbUint8` use 8-bit unsigned integers for each color channel
 * (rea, green, and blue, but alpha channel).
 * This color model is low-precision, not recommended.
 *
 * CSS colors in the sRGB color space are represented by a triplet of values
 * — red, green, and blue — identifying a point in the sRGB color space [SRGB].
 * This is an internationally-recognized, device-independent color space,
 * and so is useful for specifying colors that will be displayed on a computer screen,
 * but is also useful for specifying colors on other types of devices, like printers.
 *
 * @see {@link [CSS Color Module Level 4 sRGB Colors](https://www.w3.org/TR/css-color-4/#numeric-srgb)}
 * @see {@link [CSS Color Module Level 4 Predefined sRGB space](https://www.w3.org/TR/css-color-4/#predefined-sRGB)}
 * @see {@link [IEC 61966-2-1:1999](https://webstore.iec.ch/publication/6169)}
 * @see {@link [sRGB](https://www.color.org/chardata/rgb/srgb.xalter)}
 */
export interface ColorSrgbUint8 extends ColorBase {
  /**
   * The red channel of the color, with a value ranging from 0 to 255.
   */
  readonly r: number;

  /**
   * The green channel of the color, with a value ranging from 0 to 255.
   */
  readonly g: number;

  /**
   * The blue channel of the color, with a value ranging from 0 to 255.
   */
  readonly b: number;

  /** @internal */
  readonly [Symbol.toStringTag]: 'sRGB-uint8';
}

const STRING_TAG = 'sRGB-uint8';

/**
 * Create a standard RGB color with uint8 precision.
 * @param r The red channel of the color.
 * @param g The green channel of the color.
 * @param b The blue channel of the color
 * @param alpha The alpha channel of the color.
 * @returns
 */
export const createColorSrgbUint8 = (
  r: number,
  g: number,
  b: number,
  alpha?: number,
): ColorSrgbUint8 =>
  Object.freeze<ColorSrgbUint8>({
    r: clampUint8(r),
    g: clampUint8(g),
    b: clampUint8(b),
    alpha: clampAlpha(alpha),
    [Symbol.toStringTag]: STRING_TAG,
  });

/**
 * Parse a RGB hexadecimal notation text and returns a standard RGB color with uint8 precision.
 *
 * The CSS hex color notation allows an sRGB color to be specified by giving the channels as hexadecimal numbers,
 * which is similar to how colors are often written directly in computer code.
 * It’s also shorter than writing the same color out in rgb() notation.
 *
 * Supports notations: `#RRGGBB`, `#RRGGBBAA`, `#RGB`, `#RGBA`. The '#' symbol at the start is optional.
 *
 * @param hex The RGB hexadecimal notation text.
 *
 * @see {@link [The RGB hexadecimal notations: #RRGGBB](https://www.w3.org/TR/css-color-4/#hex-notation)}
 */
export function createColorSrgbUint8FromHex(hex: string): ColorSrgbUint8 {
  const hexFinal = hex.trim().replace(/^#/g, '');
  const integer = parseInt(hexFinal, 16);
  if (isNumber(integer)) {
    switch (hexFinal.length) {
      case 6:
        return createColorSrgbUint8(
          (integer & 0xff0000) >>> 16,
          (integer & 0x00ff00) >>> 8,
          integer & 0x0000ff,
        );
      case 8:
        return createColorSrgbUint8(
          (integer & 0xff000000) >>> 24,
          (integer & 0x00ff0000) >>> 16,
          (integer & 0x0000ff00) >>> 8,
          (integer & 0x000000ff) / MAX_UINT8,
        );
      case 3: {
        const r = (integer & 0xf00) >>> 8;
        const g = (integer & 0x0f0) >>> 4;
        const b = integer & 0x00f;
        return createColorSrgbUint8(r | (r << 4), g | (g << 4), b | (b << 4));
      }
      case 4: {
        const r = (integer & 0xf000) >>> 12;
        const g = (integer & 0x0f00) >>> 8;
        const b = (integer & 0x00f0) >>> 4;
        const alpha = integer & 0x000f;
        return createColorSrgbUint8(
          r | (r << 4),
          g | (g << 4),
          b | (b << 4),
          (alpha | (alpha << 4)) / MAX_UINT8,
        );
      }
      default:
    }
  }
  throw new TypeError(`Invalid RGB hexadecimal notation "${hex}".`);
}

/**
 * Strictly determine whether a color is a standard RGB color with uint8 precision.
 */
export const isColorSrgbUint8 = (color: unknown): color is ColorSrgbUint8 =>
  isObject(color) && color[Symbol.toStringTag] === STRING_TAG;

// ================================================================
// Converting

/**
 * Convert standard RGB color from uint8 precision to single float precision.
 * @param rgbUint8 The standard RGB color with uint8 precision.
 * @returns A standard RGB color with single float precision.
 */
export const convertSrgbFromUint8ToFloat = (
  rgbUint8: ColorSrgbUint8,
): ColorSrgb => {
  const { r, g, b, alpha } = rgbUint8;
  return createColorSrgb(r / MAX_UINT8, g / MAX_UINT8, b / MAX_UINT8, alpha);
};

/**
 * Convert standard RGB color from single float precision to uint8 precision.
 * @param rgbFloat The standard RGB color with single float precision.
 * @returns A standard RGB color with uint8 precision
 */
export const convertSrgbFromFloatToUint8 = (
  rgbFloat: ColorSrgb,
): ColorSrgbUint8 => {
  const { r, g, b, alpha } = rgbFloat;
  return createColorSrgbUint8(
    round(r * MAX_UINT8),
    round(g * MAX_UINT8),
    round(b * MAX_UINT8),
    alpha,
  );
};
