import { floor, PI, trunc } from '../standard';

export function clampLoop(value: number, max: number): number {
  let t = value / max;
  t = t - trunc(t) + 1;
  t = t - trunc(t);
  return max * t;
}

/**
 * Create a clamp function for clamping the given value between given minimum and maximum number value
 * @param max The maximum value.
 * @returns A clamp loop function.
 */
export function createClampLoop(max: number): (value: number) => number {
  const clamperLoop = (value: number): number => clampLoop(value, max);
  return clamperLoop;
}

/**
 * Clamp loop for degree (from 0° to 360°).
 */
export const clampDegree = createClampLoop(360);

/**
 * Clamp loop for radian (from 0 to 2π).
 */
export const clampRadian = createClampLoop(2 * PI);

export function clampLoop01(value: number): number {
  value = value - trunc(value) + 1;
  value = value - trunc(value);
  return value;
}
