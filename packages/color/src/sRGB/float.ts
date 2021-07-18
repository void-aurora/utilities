import { isNumber } from '@void-aurora/utils';
import { clamp01 } from '@void-aurora/math';

import { Color } from '../base';

/**
 * The __Standard RGB Color__ that each channel is
 * a __single precision float__ number between 0 and 1.
 */
export class ColorSrgbFloat extends Color {
  /**
   * The __Standard RGB Color__ that each channel is
   * a __single precision float__ number between 0 and 1.
   * Create a new instance from another.
   * @param other The another instance.
   */
  public constructor(other?: ColorSrgbFloat);

  /**
   * The __Standard RGB Color__ that each channel is
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
    arg1?: number | ColorSrgbFloat,
    arg2?: number,
    arg3?: number,
    arg4?: number,
  ) {
    let r: number, g: number, b: number, alpha: number | undefined;
    if (arg1 instanceof ColorSrgbFloat) {
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
    return 'SrgbFloat';
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
   * Clone a new instance.
   */
  public toSrgbFloat(): ColorSrgbFloat {
    return new ColorSrgbFloat(this);
  }

  /**
   * Converts to other color spaces via the static method `fromSrgbFloat` of the target color class.
   * @param ctor The class (constructor) with static method `fromSrgbFloat` of the target color.
   */
  public toColor<T extends Color>(ctor: {
    new (): T;
    fromSrgbFloat(srgbFloat: ColorSrgbFloat): T;
  }) {
    return ctor.fromSrgbFloat(this);
  }
}
