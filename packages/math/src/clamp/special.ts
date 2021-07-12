import { PI, trunc } from '../standard';
import { createClamp, createClampTrunc } from './normal';
import { createClampLoop, createClampLoopTrunc } from './loop';

// ================================
// zero to one

/**
 * Clamps value between 0 and 1 and returns value.
 * If the value is negative then zero is returned.
 * If value is greater than one then one is returned.
 */
export const clamp01 = createClamp(0, 1);

/**
 * Clamps value into loop range between 0 and 1 and returns value.
 * If the value is out of the range, will be clamp loop to the correct value.
 */
export function clampLoop01(value: number): number {
  value = value - trunc(value) + 1;
  value = value - trunc(value);
  return value;
}

// ================================
// 8-bit(1-byte) unsigned integer

/**
 * Returns the integer part between 0 and 255 of a number.
 * The fractional digits part will be removed.
 * If the value is negative then zero is returned.
 * If value is greater than 255 then 255 is returned.
 */
export const clampUint8 = createClampTrunc(0, 255);

/**
 * Returns the integer part in loop range between 0 and 255.
 * The fractional digits part will be removed.
 * If the value is out of the range, will be clamp loop to the correct value.
 */
export const clampLoopUint8 = createClampLoopTrunc(0, 255);

// ================================
// angle, 360 degrees and radian

/**
 * Clamps value between 0 and 360 for angle degree.
 */
export const clampDegree = createClamp(0, 360);

/**
 * Clamps value in loop range between 0 and 360 for angle degree.
 */
export const clampLoopDegree = createClampLoopTrunc(0, 360);

/**
 * Clamps value between 0 and 2PI for angle radian.
 */
export const clampRadian = createClamp(0, 2 * PI);

/**
 * Clamps value in loop range between 0 and 2PI for angle radian.
 */
export const clampLoopRadian = createClampLoop(0, 2 * PI);
