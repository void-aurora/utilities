import { isNumber } from '@void-aurora/utils';
import { clamp01 } from '@void-aurora/math';

import type { ColorSrgbFloat } from '../sRGB';

/**
 * The base class for all color spaces.
 */
export abstract class Color {
  /**
   * @param alpha The __alpha__ channel. Default is 1.
   */
  public constructor(alpha?: number) {
    this._alpha = isNumber(alpha) ? clamp01(alpha) : 1;
  }

  /**
   * Get or set value of the alpha channel of this color.
   * The given value will be clamped between 0 and 1.
   *
   * - If the given value is less than 0, will be set to 0.
   * - If the given value is greater than 1, will be set to 1.
   */
  // Use 'alpha' as a name to prevent conflicts with a channel with the name 'a'.
  public get alpha(): number {
    return this._alpha;
  }
  public set alpha(v: number) {
    this._alpha = clamp01(v);
  }
  private _alpha: number;

  get [Symbol.toStringTag](): string {
    return 'Color';
  }

  /**
   * Format this color to CSS color type text.
   */
  abstract toString(): string;

  /**
   * Convert this color to `ColorSrgbFloat`.
   */
  abstract toSrgbFloat(): ColorSrgbFloat;
}
