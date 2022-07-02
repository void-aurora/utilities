import { isObject } from '@void-aurora/utils';
import { clamp01 } from '@void-aurora/math';
import { clampAlpha, ColorBase } from '../base';

/**
 * The standard RGB color model that is gamma corrected form.
 * The `StandardRgb` user single float number that in range
 * from 0 to 1 for each channel.
 *
 *
 * CSS colors in the sRGB color space are represented by a triplet of values
 * — red, green, and blue — identifying a point in the sRGB color space [SRGB].
 * This is an internationally-recognized, device-independent color space,
 * and so is useful for specifying colors that will be displayed on a computer screen,
 * but is also useful for specifying colors on other types of devices, like printers.
 * @see {@link [sRGB Colors](https://www.w3.org/TR/css-color-4/#numeric-srgb)}
 * @see {@link [Predefined sRGB space](https://www.w3.org/TR/css-color-4/#predefined-sRGB)}
 * @see {@link [IEC 61966-2-1:1999](https://webstore.iec.ch/publication/6169)}
 */
export interface StandardRgb extends ColorBase {
  /**
   * The red channel of the color, with a value ranging from 0 to 1.
   */
  readonly r: number;

  /**
   * The green channel of the color, with a value ranging from 0 to 1.
   */
  readonly g: number;

  /**
   * The blue channel of the color, with a value ranging from 0 to 1.
   */
  readonly b: number;

  /** @internal */
  readonly [Symbol.toStringTag]: 'sRGB';
}

const STRING_TAG = 'sRGB';

/**
 * Create a standard RGB color.
 * @param r The red channel of the color.
 * @param g The green channel of the color.
 * @param b The blue channel of the color
 * @param alpha The alpha channel of the color.
 * @returns
 */
export const createStandardRgb = (
  r: number,
  g: number,
  b: number,
  alpha?: number,
): StandardRgb =>
  Object.freeze<StandardRgb>({
    r: clamp01(r),
    g: clamp01(g),
    b: clamp01(b),
    alpha: clampAlpha(alpha),
    [Symbol.toStringTag]: STRING_TAG,
  });

/**
 * Strictly determine whether a color is a standard RGB color.
 */
export const isStandardRgb = (color: unknown): color is StandardRgb =>
  isObject(color) && color[Symbol.toStringTag] === STRING_TAG;
