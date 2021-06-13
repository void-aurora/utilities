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
 * Create a clamp function for clamping the given value between given minimum and maximum number value
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
 * Clamps value between 0 and 1 and returns value.
 * If the value is negative then zero is returned.
 * If value is greater than one then one is returned.
 */
export const clamp01 = createClamp(0, 1);
