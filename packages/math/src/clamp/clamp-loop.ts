import { abs, floor, PI, sign, trunc } from '../standard';

/**
 * Clamps the given value into a loop range between the minimum and maximum number values.
 * @param value The number value to restrict inside the range defined by the minimum and maximum number values.
 * @param min The minimum number value to define the loop range.
 * @param max The maximum number value to define the loop range.
 */
export function clampLoop(value: number, min: number, max: number): number {
  if (min === max) {
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
 * Create a clamp function for clamping the given value  into a loop range between the minimum and maximum number values.
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

export function clampLoop01(value: number): number {
  value = value - trunc(value) + 1;
  value = value - trunc(value);
  return value;
}
