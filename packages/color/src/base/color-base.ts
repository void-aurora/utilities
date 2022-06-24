import { isNumber } from '@void-aurora/utils';
import { clamp01 } from '@void-aurora/math';

/**
 *
 */
export interface ColorBase {
  /**
   * The alpha channel of the color, with a value ranging from 0 to 1.
   * A value of 0 means that the pixel is fully transparent and the color in the pixel beneath will show through.
   * A value of 1 means that the pixel is fully opaque.
   */
  readonly alpha: number;

  /** @internal */
  readonly [Symbol.toStringTag]: string;
}

/**
 * Correct the value of the alpha channel.
 * Returns a value raging from 0 to 1.
 * Returns the default value 1 if the value passed in is not a finite number.
 */
export const clampAlpha = (value: unknown): number =>
  isNumber(value) ? clamp01(value) : 1;
