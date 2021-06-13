import { clamp01 } from '../clamp';

/**
 * Linearly interpolate between `start` and `end` with no limit to `t`.
 *
 * __NOTE__: The parameter `t` is NOT clamped to the range [0, 1].
 * Means that if the `t` is less than `0` or greater than `1`,
 * then the `lerp` will result in a return outside of the range `start` to `end`.
 *
 * @param t The interpolation value between the two values.
 * @param start The start value.
 * @param end The end value.
 * @returns The float value as a result from the linear interpolation.
 */
export function lerp(t: number, start: number, end: number): number {
  return start + (end - start) * t;
}

/**
 * Create a lerp function for linearly interpolating between `start` and `end` with no limit to `t`.
 *
 * __NOTE__: The parameter `t` of lerp function is NOT clamped to the range [0, 1].
 * Means that if the `t` is less than `0` or greater than `1`,
 * then the lerp function will result in a return outside of the range `start` to `end`.
 *
 * @param start The start value.
 * @param end The end value.
 * @returns The lerp function
 */
export function createLerp(start: number, end: number): (t: number) => number {
  const delta = end - start;
  const lerpFunc = (t: number): number => start + delta * t;
  return lerpFunc;
}

/**
 * Linearly interpolate between `start` and `end` by `t`.
 *
 * __NOTE__: The parameter `t` is clamped to the range [0, 1].
 * Means that `lerpClamped` will always result inside the range `start` to `end`.
 *
 * @param t The interpolation value between the two values.
 * @param start The start value.
 * @param end The end value.
 * @returns The interpolated result between the two values.
 */
export function lerpClamped(t: number, start: number, end: number): number {
  return lerp(clamp01(t), start, end);
}

/**
 *
 * Create a lerp function for Linearly interpolating between `start` and `end` by `t`.
 *
 * __NOTE__: The parameter `t` of lerp function is clamped to the range [0, 1].
 * Means that the lerp function will always result inside the range `start` to `end`.
 *
 * @param start The start value.
 * @param end The end value.
 * @returns The lerp function.
 */
export function createLerpClamped(
  start: number,
  end: number,
): (t: number) => number {
  const delta = end - start;
  const lerpClampedFunc = (t: number): number => start + delta * clamp01(t);
  return lerpClampedFunc;
}
