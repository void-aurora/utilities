import { abs, ceil, floor, PI, round, sign, trunc } from '../standard';

/**
 * Clamps the given value in a loop range
 * between the minimum and maximum number values.
 * @param value The number value to restrict inside the range defined by the minimum and maximum number values.
 * @param min The minimum number value to define the loop range.
 * @param max The maximum number value to define the loop range.
 */
export function clampLoop(value: number, min: number, max: number): number {
  if (min === max || value === max) {
    return min;
  }
  if (value >= min && value < max) {
    return value;
  }
  const range = max - min;
  const progress = value - min;
  return (((progress % range) + range) % range) + min;
}

/**
 * Create a clamp function for clamping the given value in a loop range
 * between the minimum and maximum number values.
 * @param min The minimum number value to define the loop range.
 * @param max The maximum number value to define the loop range.
 * @returns A clamp loop function.
 */
export function createClampLoop(
  min: number,
  max: number,
): (value: number) => number {
  const clamperLoop = (value: number): number => clampLoop(value, min, max);
  return clamperLoop;
}

/**
 * Clamps the given value in a loop range
 * between the given minimum and maximum number values.
 * Uses `round(value)`, `ceil(min)` and `floor(max)`.
 * @param value The number value to restrict inside the range defined by the min and max values.
 * @param min The minimum number value to compare against.
 * @param max The maximum number value to compare against.
 * @returns
 * - The given value if it is within the min and max range.
 * - The min value if the given value is less than the min.
 * - The max value if the given value is greater than the max value.
 */
export function clampLoopRound(
  value: number,
  min: number,
  max: number,
): number {
  return clampLoop(round(value), ceil(min), floor(max));
}

/**
 * Create a clamp function for clamping the given value in a loop range
 * between given minimum and maximum number value.
 * Uses `round(value)`, `ceil(min)` and `floor(max)`.
 * @param min The minimum number value to compare against.
 * @param max The maximum number value to compare against.
 * @returns A clamp function.
 */
export function createClampLoopRound(
  min: number,
  max: number,
): (value: number) => number {
  const finalMin = ceil(min);
  const finalMax = floor(max);
  const clamper = (value: number): number =>
    clampLoop(round(value), finalMin, finalMax);
  return clamper;
}

/**
 * Clamps the given value in a loop range
 * between the given minimum and maximum number values.
 * Uses `floor(value)`, `ceil(min)` and `floor(max)`.
 * @param value The number value to restrict inside the range defined by the min and max values.
 * @param min The minimum number value to compare against.
 * @param max The maximum number value to compare against.
 * @returns
 * - The given value if it is within the min and max range.
 * - The min value if the given value is less than the min.
 * - The max value if the given value is greater than the max value.
 */
export function clampLoopFloor(
  value: number,
  min: number,
  max: number,
): number {
  return clampLoop(floor(value), ceil(min), floor(max));
}

/**
 * Create a clamp function for clamping the given value in a loop range
 * between given minimum and maximum number value.
 * Uses `floor(value)`, `ceil(min)` and `floor(max)`.
 * @param min The minimum number value to compare against.
 * @param max The maximum number value to compare against.
 * @returns A clamp function.
 */
export function createClampLoopFloor(
  min: number,
  max: number,
): (value: number) => number {
  const finalMin = ceil(min);
  const finalMax = floor(max);
  const clamper = (value: number): number =>
    clampLoop(floor(value), finalMin, finalMax);
  return clamper;
}

/**
 * Clamps the given value in a loop range
 * between the given minimum and maximum number values.
 * Uses `ceil(value)`, `ceil(min)` and `floor(max)`.
 * @param value The number value to restrict inside the range defined by the min and max values.
 * @param min The minimum number value to compare against.
 * @param max The maximum number value to compare against.
 * @returns
 * - The given value if it is within the min and max range.
 * - The min value if the given value is less than the min.
 * - The max value if the given value is greater than the max value.
 */
export function clampLoopCeil(value: number, min: number, max: number): number {
  return clampLoop(ceil(value), ceil(min), floor(max));
}

/**
 * Create a clamp function for clamping the given value in a loop range
 * between given minimum and maximum number value.
 * Uses `ceil(value)`, `ceil(min)` and `floor(max)`.
 * @param min The minimum number value to compare against.
 * @param max The maximum number value to compare against.
 * @returns A clamp function.
 */
export function createClampLoopCeil(
  min: number,
  max: number,
): (value: number) => number {
  const finalMin = ceil(min);
  const finalMax = floor(max);
  const clamper = (value: number): number =>
    clampLoop(ceil(value), finalMin, finalMax);
  return clamper;
}

/**
 * Clamps the given value in a loop range
 * between the given minimum and maximum number values.
 * Uses `trunc(value)`, `ceil(min)` and `floor(max)`.
 * @param value The number value to restrict inside the range defined by the min and max values.
 * @param min The minimum number value to compare against.
 * @param max The maximum number value to compare against.
 * @returns
 * - The given value if it is within the min and max range.
 * - The min value if the given value is less than the min.
 * - The max value if the given value is greater than the max value.
 */
export function clampLoopTrunc(
  value: number,
  min: number,
  max: number,
): number {
  return clampLoop(trunc(value), ceil(min), floor(max));
}

/**
 * Create a clamp function for clamping the given value in a loop range
 * between given minimum and maximum number value.
 * Uses `trunc(value)`, `ceil(min)` and `floor(max)`.
 * @param min The minimum number value to compare against.
 * @param max The maximum number value to compare against.
 * @returns A clamp function.
 */
export function createClampLoopTrunc(
  min: number,
  max: number,
): (value: number) => number {
  const finalMin = ceil(min);
  const finalMax = floor(max);
  const clamper = (value: number): number =>
    clampLoop(trunc(value), finalMin, finalMax);
  return clamper;
}
