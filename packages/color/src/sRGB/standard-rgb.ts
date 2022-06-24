import { clamp01 } from '@void-aurora/math';
import { isObject } from '@void-aurora/utils';
import { clampAlpha, ColorBase } from '../base';

/**
 * The standard-RGB color model.
 */
export interface StandardRgb extends ColorBase {
  /**
   * The red primary of the color, with a value ranging from 0 to 1.
   */
  readonly r: number;

  /**
   * The green primary of the color, with a value ranging from 0 to 1.
   */
  readonly g: number;

  /**
   * The blue primary of the color, with a value ranging from 0 to 1.
   */
  readonly b: number;

  /** @internal */
  readonly [Symbol.toStringTag]: 'sRGB';
}

const STRING_TAG = 'sRGB';

/**
 * Create a standard RGB color.
 * @param r The red primary of the color.
 * @param g The green primary of the color.
 * @param b The blue primary of the color
 * @param alpha The alpha channel of the color.
 * @returns
 */
export function createStandardRgb(
  r: number,
  g: number,
  b: number,
  alpha?: number,
): StandardRgb {
  const color: StandardRgb = {
    r: clamp01(r),
    g: clamp01(g),
    b: clamp01(b),
    alpha: clampAlpha(alpha),
    get [Symbol.toStringTag](): 'sRGB' {
      return STRING_TAG;
    },
  };
  return Object.freeze(color);
}

/**
 * Strictly determine whether a color is a standard RGB color.
 */
export const isStandardRgb = (color: unknown): color is StandardRgb =>
  isObject(color) && color[Symbol.toStringTag] === STRING_TAG;
