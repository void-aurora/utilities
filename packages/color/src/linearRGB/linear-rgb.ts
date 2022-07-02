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
