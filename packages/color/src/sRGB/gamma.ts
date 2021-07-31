import { abs, pow, sign } from '@void-aurora/math';

/**
 * Converts one of sRGB channel values where in-gamut values are in the range [0 - 1]
 * to linear light (un-companded) form.
 *
 * Extended transfer function:
 * for negative values, linear portion is extended on reflection of axis,
 * then reflected power function is used.
 *
 * @see https://en.wikipedia.org/wiki/SRGB
 * @see https://drafts.csswg.org/css-color/#color-conversion-code
 *
 * @param c The gamma-compressed R, G or B.
 *
 * @internal
 */
export function gammaDecode(c: number): number {
  const absValue = abs(c);

  if (absValue <= 0.04045) {
    return c / 12.92;
  }

  return sign(c) * pow((absValue + 0.055) / 1.055, 2.4);
}

/**
 * Converts an array of linear-light sRGB values in the range [0 - 1]
 * to gamma corrected form.
 *
 * Extended transfer function:
 * For negative values, linear portion extends on reflection
 * of axis, then uses reflected pow below that.
 *
 * @see https://en.wikipedia.org/wiki/SRGB
 * @see https://drafts.csswg.org/css-color/#color-conversion-code
 *
 * @param c The linear-light R, G or B.
 */
export function gammaEncode(c: number): number {
  let absValue = abs(c);

  if (absValue <= 0.0031308) {
    return 12.92 * c;
  }

  return sign(c) * (1.055 * pow(absValue, 1 / 2.4) - 0.055);
}
