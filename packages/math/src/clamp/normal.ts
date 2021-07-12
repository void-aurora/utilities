import { ceil, floor, round, trunc } from '../standard';

/**
 * Clamps the given value between the given minimum and maximum number values.
 * @param value The number value to restrict inside the range defined by the min and max values.
 * @param min The minimum number value to compare against.
 * @param max The maximum number value to compare against.
 * @returns
 * - The given value if it is within the min and max range.
 * - The min value if the given value is less than the min.
 * - The max value if the given value is greater than the max value.
 */
export function clamp(value: number, min: number, max: number): number {
  if (value < min) {
    return min;
  }
  if (value > max) {
    return max;
  }
  return value;
}

/**
 * Create a clamp function for clamping the given value between given minimum and maximum number value.
 * @param min The minimum number value to compare against.
 * @param max The maximum number value to compare against.
 * @returns A clamp function.
 */
export function createClamp(
  min: number,
  max: number,
): (value: number) => number {
  const clamper = (value: number): number => clamp(value, min, max);
  return clamper;
}

/**
 * Clamps the given value between the given minimum and maximum number values.
 * Uses `round(value)`, `ceil(min)` and `floor(max)`.
 * @param value The number value to restrict inside the range defined by the min and max values.
 * @param min The minimum number value to compare against.
 * @param max The maximum number value to compare against.
 * @returns
 * - The given value if it is within the min and max range.
 * - The min value if the given value is less than the min.
 * - The max value if the given value is greater than the max value.
 */
export function clampRound(value: number, min: number, max: number): number {
  return clamp(round(value), ceil(min), floor(max));
}

/**
 * Create a clamp function for clamping the given value between given minimum and maximum number value.
 * Uses `round(value)`, `ceil(min)` and `floor(max)`.
 * @param min The minimum number value to compare against.
 * @param max The maximum number value to compare against.
 * @returns A clamp function.
 */
export function createClampRound(
  min: number,
  max: number,
): (value: number) => number {
  const finalMin = ceil(min);
  const finalMax = floor(max);
  const clamper = (value: number): number =>
    clamp(round(value), finalMin, finalMax);
  return clamper;
}

/**
 * Clamps the given value between the given minimum and maximum number values.
 * Uses `floor(value)`, `ceil(min)` and `floor(max)`.
 * @param value The number value to restrict inside the range defined by the min and max values.
 * @param min The minimum number value to compare against.
 * @param max The maximum number value to compare against.
 * @returns
 * - The given value if it is within the min and max range.
 * - The min value if the given value is less than the min.
 * - The max value if the given value is greater than the max value.
 */
export function clampFloor(value: number, min: number, max: number): number {
  return clamp(floor(value), ceil(min), floor(max));
}

/**
 * Create a clamp function for clamping the given value between given minimum and maximum number value.
 * Uses `floor(value)`, `ceil(min)` and `floor(max)`.
 * @param min The minimum number value to compare against.
 * @param max The maximum number value to compare against.
 * @returns A clamp function.
 */
export function createClampFloor(
  min: number,
  max: number,
): (value: number) => number {
  const finalMin = ceil(min);
  const finalMax = floor(max);
  const clamper = (value: number): number =>
    clamp(floor(value), finalMin, finalMax);
  return clamper;
}

/**
 * Clamps the given value between the given minimum and maximum number values.
 * Uses `ceil(value)`, `ceil(min)` and `floor(max)`.
 * @param value The number value to restrict inside the range defined by the min and max values.
 * @param min The minimum number value to compare against.
 * @param max The maximum number value to compare against.
 * @returns
 * - The given value if it is within the min and max range.
 * - The min value if the given value is less than the min.
 * - The max value if the given value is greater than the max value.
 */
export function clampCeil(value: number, min: number, max: number): number {
  return clamp(ceil(value), ceil(min), floor(max));
}

/**
 * Create a clamp function for clamping the given value between given minimum and maximum number value.
 * Uses `ceil(value)`, `ceil(min)` and `floor(max)`.
 * @param min The minimum number value to compare against.
 * @param max The maximum number value to compare against.
 * @returns A clamp function.
 */
export function createClampCeil(
  min: number,
  max: number,
): (value: number) => number {
  const finalMin = ceil(min);
  const finalMax = floor(max);
  const clamper = (value: number): number =>
    clamp(ceil(value), finalMin, finalMax);
  return clamper;
}

/**
 * Clamps the given value between the given minimum and maximum number values.
 * Uses `trunc(value)`, `ceil(min)` and `floor(max)`.
 * @param value The number value to restrict inside the range defined by the min and max values.
 * @param min The minimum number value to compare against.
 * @param max The maximum number value to compare against.
 * @returns
 * - The given value if it is within the min and max range.
 * - The min value if the given value is less than the min.
 * - The max value if the given value is greater than the max value.
 */
export function clampTrunc(value: number, min: number, max: number): number {
  return clamp(trunc(value), ceil(min), floor(max));
}

/**
 * Create a clamp function for clamping the given value between given minimum and maximum number value.
 * Uses `trunc(value)`, `ceil(min)` and `floor(max)`.
 * @param min The minimum number value to compare against.
 * @param max The maximum number value to compare against.
 * @returns A clamp function.
 */
export function createClampTrunc(
  min: number,
  max: number,
): (value: number) => number {
  const finalMin = ceil(min);
  const finalMax = floor(max);
  const clamper = (value: number): number =>
    clamp(trunc(value), finalMin, finalMax);
  return clamper;
}
