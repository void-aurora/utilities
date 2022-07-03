import { pow } from '@void-aurora/math';

/**
 * Color space responsible for converting between lumas and luminances.
 */
export interface LuminanceColorSpace {
  readonly toLuma: (luminance: number) => number;
  readonly fromLuma: (luma: number) => number;
}

export const createLuminanceColorSpace = (
  gamma: number,
): LuminanceColorSpace => {
  // Linear space - no conversion involved.
  if (gamma === 1) {
    return Object.freeze<LuminanceColorSpace>({
      toLuma: v => v,
      fromLuma: v => v,
    });
  }

  // sRGB space.
  if (gamma === 0) {
    return Object.freeze<LuminanceColorSpace>({
      toLuma: luminance => {
        // The magic numbers are derived from the sRGB specification.
        // See http://www.color.org/chardata/rgb/srgb.xalter .
        if (luminance <= 0.04045) {
          return luminance / 12.92;
        }
        return pow((luminance + 0.055) / 1.055, 2.4);
      },
      fromLuma: luma => {
        // The magic numbers are derived from the sRGB specification.
        // See http://www.color.org/chardata/rgb/srgb.xalter .
        if (luma <= 0.0031308) {
          return 12.92 * luma;
        }
        return 1.055 * pow(luma, 1 / 2.4) - 0.055;
      },
    });
  }

  // Simple gamma space - uses the `luminance ^ gamma` function.
  return Object.freeze<LuminanceColorSpace>({
    toLuma: luminance => pow(luminance, gamma),
    fromLuma: luma => pow(luma, 1 / gamma),
  });
};
