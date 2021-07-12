import { clampLoopTrunc, createClampLoopTrunc } from './loop';
import { clampTrunc, createClampTrunc } from './normal';

/**
 * Clamps the given value to correct index of an array.
 * @param index The index to be clamped.
 * @param length The length of the array.
 */
export function clampIndex(index: number, length: number): number {
  return clampTrunc(index, 0, length);
}

/**
 * Create a clamp function for clamping the given value to correct index of an array.
 * @param length The length of the array.
 */
export function createClampIndex(length: number): (index: number) => number {
  return createClampTrunc(0, length);
}

/**
 * Circularly clamps the given value to correct index of an array.
 * @param index The index to be clamped.
 * @param length The length of the array.
 */
export function clampLoopIndex(index: number, length: number): number {
  return clampLoopTrunc(index, 0, length);
}

/**
 * Create a clamp function for circularly clamping the given value to correct index of an array.
 * @param length The length of the array.
 */
export function createClampLoopIndex(
  length: number,
): (index: number) => number {
  return createClampLoopTrunc(0, length);
}
