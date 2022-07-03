import { isObject } from '@void-aurora/utils';
import { clamp01 } from '@void-aurora/math';
import { clampAlpha, ColorBase } from '../base';

/**
 * The linear RGB color model that is linear light (un-companded) form sRGB.
 */
export interface LinearRgb extends ColorBase {
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
  readonly [Symbol.toStringTag]: 'linearRGB';
}

const STRING_TAG = 'linearRGB';

/**
 * Create a linear RGB color.
 * @param r The red channel of the color.
 * @param g The green channel of the color.
 * @param b The blue channel of the color
 * @param alpha The alpha channel of the color.
 * @returns
 */
export const createLinearRgb = (
  r: number,
  g: number,
  b: number,
  alpha?: number,
): LinearRgb =>
  Object.freeze<LinearRgb>({
    r: clamp01(r),
    g: clamp01(g),
    b: clamp01(b),
    alpha: clampAlpha(alpha),
    [Symbol.toStringTag]: STRING_TAG,
  });

/**
 * Strictly determine whether a color is a linear RGB color.
 */
export const isLinearRgb = (color: unknown): color is LinearRgb =>
  isObject(color) && color[Symbol.toStringTag] === STRING_TAG;

/**
 * Get relative luminance of a linear RGB.
 */
export const getRelativeLuminance = (linearRGB: LinearRgb): number =>
  0.21263900587151027 * linearRGB.r +
  0.715168678767756 * linearRGB.g +
  0.07219231536073371 * linearRGB.b;

/**
 * Get contrast ratio between two relative luminance values.
 */
export const getContrastRatio = (l1: number, l2: number): number =>
  l1 < l2 ? (l1 + 0.05) / (l2 + 0.05) : (l2 + 0.05) / (l1 + 0.05);
