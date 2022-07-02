import { PI, trunc } from '../standard';
import { createClamp, createClampRound } from './normal';
import { createClampLoop, createClampLoopRound } from './loop';

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
 * The value of the largest 8-bit unsigned integer.
 *
 */
export const MIN_UINT8 = 0;
/**
 * The value of the smallest 8-bit unsigned integer.
 */
export const MAX_UINT8 = 255;

/**
 * Returns the integer part between 0 and 255 of a number.
 * The fractional digits part will be removed.
 * If the value is negative then zero is returned.
 * If value is greater than 255 then 255 is returned.
 */
export const clampUint8 = createClampRound(MIN_UINT8, MAX_UINT8);

/**
 * Returns the integer part in loop range between 0 and 255.
 * The fractional digits part will be removed.
 * If the value is out of the range, will be clamp loop to the correct value.
 */
export const clampLoopUint8 = createClampLoopRound(MIN_UINT8, MAX_UINT8);

// ================================
// angle, 360 degrees and radian

export const MIN_DEGREE = 0;
export const MAX_DEGREE = 360;

/**
 * Clamps value between 0 and 360 for angle degree.
 */
export const clampDegree = createClamp(MIN_DEGREE, MAX_DEGREE);

/**
 * Clamps value in loop range between 0 and 360 for angle degree.
 */
export const clampLoopDegree = createClampLoopRound(MIN_DEGREE, MAX_DEGREE);

export const MIN_RADIAN = 0;
export const MAX_RADIAN = 2 * PI;

/**
 * Clamps value between 0 and 2PI for angle radian.
 */
export const clampRadian = createClamp(MIN_RADIAN, MAX_RADIAN);

/**
 * Clamps value in loop range between 0 and 2PI for angle radian.
 */
export const clampLoopRadian = createClampLoop(MIN_RADIAN, MAX_RADIAN);
