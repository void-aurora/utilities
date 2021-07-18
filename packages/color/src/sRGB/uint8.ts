import { isNumber } from '@void-aurora/utils';
import { clampUint8, MAX_UINT8 } from '@void-aurora/math';

import { Color } from '../base';
import { ColorSrgbFloat } from './float';

/**
 * The __Standard RGB Color__ that each channel is
 * a __unsigned 8-bit (1-byte) integer__ number between 0 and 255.
 */
export class ColorSrgbUint8 extends Color {
  /**
   * The __Standard RGB Color__ that each channel is
   * a __unsigned 8-bit (1-byte) integer__ number between 0 and 255.
   * Create a new instance from another.
   * @param other The another instance.
   */
  public constructor(other?: ColorSrgbUint8);

  /**
   * The __Standard RGB Color__ that each channel is
   * a __unsigned 8-bit (1-byte) integer__ number between 0 and 255.
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
    arg1?: number | ColorSrgbUint8,
    arg2?: number,
    arg3?: number,
    arg4?: number,
  ) {
    let r: number, g: number, b: number, alpha: number | undefined;
    if (arg1 instanceof ColorSrgbUint8) {
      ({ r, g, b, alpha } = arg1);
    } else {
      r = isNumber(arg1) ? clampUint8(arg1) : 0;
      g = isNumber(arg2) ? clampUint8(arg2) : 0;
      b = isNumber(arg3) ? clampUint8(arg3) : 0;
      alpha = arg4;
    }
    super(alpha);
    this._r = r;
    this._g = g;
    this._b = b;
  }

  /**
   * Get or set value of the __red__ channel of this color.
   * The given value will be clamped between 0 and 255.
   * - If the given value is less than 0, will be set to 0.
   * - If the given value is greater than 255, will be set to 255.
   */
  public get r(): number {
    return this._r;
  }
  public set r(v: number) {
    this._r = clampUint8(v);
  }
  private _r: number;

  /**
   * Get or set value of the __green__ channel of this color.
   * The given value will be clamped between 0 and 255.
   * - If the given value is less than 0, will be set to 0.
   * - If the given value is greater than 255, will be set to 255.
   */
  public get g(): number {
    return this._g;
  }
  public set g(v: number) {
    this._g = clampUint8(v);
  }
  private _g: number;

  /**
   * Get or set value of the __blue__ channel of this color.
   * The given value will be clamped between 0 and 255.
   * - If the given value is less than 0, will be set to 0.
   * - If the given value is greater than 255, will be set to 255.
   */
  public get b(): number {
    return this._b;
  }
  public set b(v: number) {
    this._b = clampUint8(v);
  }
  private _b: number;

  public get [Symbol.toStringTag](): string {
    return 'SrgbUint8';
  }

  /**
   * Format this color to CSS RGB color value `rgba(r, g, b, a)`.
   * @see https://developer.mozilla.org/en-US/docs/Web/CSS/color_value
   */
  public toString(): string {
    return `rgba(${this.r},${this.g},${this.b},${this.alpha})`;
  }

  /**
   * Convert this uint8 rgb to float rgb `ColorSrgbFloat`.
   * The channels `r`, `g`, `b` will be divided by `255`.
   */
  public toSrgbFloat(): ColorSrgbFloat {
    let { r, g, b, alpha } = this;
    return new ColorSrgbFloat(
      r / MAX_UINT8,
      g / MAX_UINT8,
      b / MAX_UINT8,
      alpha,
    );
  }

  /**
   * Create a `ColorSrgbUint8` from a `ColorSrgbFloat`.
   *
   * __NOTE__: this will lose accuracy
   */
  public static fromSrgbFloat(srgbFloat: ColorSrgbFloat): ColorSrgbUint8 {
    const { r, g, b, alpha } = srgbFloat;
    return new ColorSrgbUint8(
      r * MAX_UINT8,
      g * MAX_UINT8,
      b * MAX_UINT8,
      alpha,
    );
  }
}
