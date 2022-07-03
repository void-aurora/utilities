import { isObject } from '@void-aurora/utils';
import { clamp01 } from '@void-aurora/math';
import { clampAlpha, ColorBase } from '../base';

/**
 * The linear light (un-companded) form sRGB color model.
 */
export interface ColorSrgbLinear extends ColorBase {
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
  readonly [Symbol.toStringTag]: 'srgb-linear';
}

const STRING_TAG = 'srgb-linear';

/**
 * Create a linear-light sRGB color.
 * @param r The red channel of the color.
 * @param g The green channel of the color.
 * @param b The blue channel of the color
 * @param alpha The alpha channel of the color.
 * @returns
 */
export const createColorSrgbLinear = (
  r: number,
  g: number,
  b: number,
  alpha?: number,
): ColorSrgbLinear =>
  Object.freeze<ColorSrgbLinear>({
    r: clamp01(r),
    g: clamp01(g),
    b: clamp01(b),
    alpha: clampAlpha(alpha),
    [Symbol.toStringTag]: STRING_TAG,
  });

/**
 * Strictly determine whether a color is a linear-light sRGB color.
 */
export const isColorSrgbLinear = (color: unknown): color is ColorSrgbLinear =>
  isObject(color) && color[Symbol.toStringTag] === STRING_TAG;

/**
 * Get relative luminance of a linear-light sRGB.
 */
export const getRelativeLuminance = (linearRGB: ColorSrgbLinear): number =>
  0.21263900587151027 * linearRGB.r +
  0.715168678767756 * linearRGB.g +
  0.07219231536073371 * linearRGB.b;

/**
 * Get contrast ratio between two relative luminance values.
 */
export const getContrastRatio = (l1: number, l2: number): number =>
  l1 < l2 ? (l1 + 0.05) / (l2 + 0.05) : (l2 + 0.05) / (l1 + 0.05);
