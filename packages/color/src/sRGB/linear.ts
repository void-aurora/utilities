import { isNumber } from '@void-aurora/utils';
import { clamp01 } from '@void-aurora/math';

import { Color } from '../base';
import { ColorSrgbFloat } from './float';
import { gammaDecode, gammaEncode } from './gamma';

/**
 * The __linear-light  sRGB Color__ that each channel is
 * a __single precision float__ number between 0 and 1.
 * @see https://en.wikipedia.org/wiki/SRGB
 * @see https://www.w3.org/TR/css-color-3/#rgb-color
 */
export class ColorLinearRgb extends Color {
  /**
   * The __linear-light RGB Color__ that each channel is
   * a __single precision float__ number between 0 and 1.
   * Create a new instance from another.
   * @param other The another instance.
   */
  public constructor(other?: ColorLinearRgb);

  /**
   * The __linear-light RGB Color__ that each channel is
   * a __single precision float__ number between 0 and 1.
   * @param r The __red__ channel. Default is 0.
   * @param g The __green__ channel. Default is 0.
   * @param b The __blue__ channel. Default is 0.
   * @param alpha The __alpha__ channel. Default is 1.
   */
  public constructor(r?: number, g?: number, b?: number, alpha?: number);

  /**
   * @implements
   */
  public constructor(
    arg1?: number | ColorLinearRgb,
    arg2?: number,
    arg3?: number,
    arg4?: number,
  ) {
    let r: number, g: number, b: number, alpha: number | undefined;
    if (arg1 instanceof ColorLinearRgb) {
      ({ r, g, b, alpha } = arg1);
    } else {
      r = isNumber(arg1) ? clamp01(arg1) : 0;
      g = isNumber(arg2) ? clamp01(arg2) : 0;
      b = isNumber(arg3) ? clamp01(arg3) : 0;
      alpha = arg4;
    }
    super(alpha);
    this._r = r;
    this._g = g;
    this._b = b;
  }

  /**
   * Get or set value of the __red__ channel of this color.
   * The given value will be clamped between 0 and 1.
   * - If the given value is less than 0, will be set to 0.
   * - If the given value is greater than 1, will be set to 1.
   */
  public get r(): number {
    return this._r;
  }
  public set r(v: number) {
    this._r = clamp01(v);
  }
  private _r: number;

  /**
   * Get or set value of the __green__ channel of this color.
   * The given value will be clamped between 0 and 1.
   * - If the given value is less than 0, will be set to 0.
   * - If the given value is greater than 1, will be set to 1.
   */
  public get g(): number {
    return this._g;
  }
  public set g(v: number) {
    this._g = clamp01(v);
  }
  private _g: number;

  /**
   * Get or set value of the __blue__ channel of this color.
   * The given value will be clamped between 0 and 1.
   * - If the given value is less than 0, will be set to 0.
   * - If the given value is greater than 1, will be set to 1.
   */
  public get b(): number {
    return this._b;
  }
  public set b(v: number) {
    this._b = clamp01(v);
  }
  private _b: number;

  public get [Symbol.toStringTag](): string {
    return 'LinearRgb';
  }

  /**
   * Format this color to CSS RGB color value `rgba(rr%, gg%, bb%, aa%)`.
   * Each channel will be formatted to a percentage number.
   * @see https://developer.mozilla.org/en-US/docs/Web/CSS/color_value
   */
  public toString(): string {
    return `rgba(${this.r * 100}%,${this.g * 100}%,${this.b * 100}%,${
      this.alpha * 100
    }%)`;
  }

  /**
   * Convert linear-light sRGB to gamma corrected form.
   */
  public toSrgbFloat(): ColorSrgbFloat {
    return new ColorSrgbFloat(
      gammaEncode(this.r),
      gammaEncode(this.g),
      gammaEncode(this.b),
      this.alpha,
    );
  }

  /**
   * Converts sRGB to linear-light (un-companded) form.
   */
  public static fromSrgbFloat(srgbFloat: ColorSrgbFloat): ColorLinearRgb {
    return new ColorLinearRgb(
      gammaDecode(srgbFloat.r),
      gammaDecode(srgbFloat.g),
      gammaDecode(srgbFloat.b),
      srgbFloat.alpha,
    );
  }
}
