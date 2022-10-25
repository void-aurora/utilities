import { clampLoopFloor, createClampLoopFloor } from './loop';
import { clampFloor, createClampFloor } from './normal';

// ================================================================
// Array Index

/**
 * Clamps the given value to correct index of an array.
 * @param index The index to be clamped.
 * @param length The length of the array.
 */
export function clampIndex(index: number, length: number): number {
  return clampFloor(index, 0, length);
}

/**
 * Create a clamp function for clamping the given value to correct index of an array.
 * @param length The length of the array.
 */
export function createClampIndex(length: number): (index: number) => number {
  return createClampFloor(0, length);
}

/**
 * Circularly clamps the given value to correct index of an array.
 * @param index The index to be clamped.
 * @param length The length of the array.
 */
export function clampLoopIndex(index: number, length: number): number {
  return clampLoopFloor(index, 0, length);
}

/**
 * Create a clamp function for circularly clamping the given value to correct index of an array.
 * @param length The length of the array.
 */
export function createClampLoopIndex(
  length: number,
): (index: number) => number {
  return createClampLoopFloor(0, length);
}

// ================================================================
// Page Number

/**
 * Clamps the given value to correct page number.
 * @param page The page number to be clamped.
 * @param maxPage The max page number.
 */
export function clampPage(page: number, maxPage: number): number {
  return clampFloor(page, 1, maxPage + 1);
}

/**
 * Create a clamp function for clamping the given value to correct page number.
 * @param maxPage The max page number.
 */
export function createClampPage(maxPage: number): (page: number) => number {
  return createClampFloor(1, maxPage + 1);
}

/**
 * Circularly clamps the given value to correct page number.
 * @param page The page number to be clamped.
 * @param maxPage The max page number.
 */
export function clampLoopPage(page: number, maxPage: number): number {
  return clampLoopFloor(page, 1, maxPage + 1);
}

/**
 * Create a clamp function for circularly clamping the given value to correct page number.
 * @param maxPage The max page number.
 * @returns
 */
export function createClampLoopPage(maxPage: number): (page: number) => number {
  return createClampLoopFloor(1, maxPage + 1);
}
