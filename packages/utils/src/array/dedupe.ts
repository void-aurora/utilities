import { isNullOrUndefined } from '../type';

/**
 * Remove duplicates from an array and returns a new array, only for primitive type.
 * If there are non-primitive elements in the array, use `createDeDupe` instead.
 */
export const simpleDedupe = <T>(array: T[]): T[] => [...new Set(array)];

/**
 * Create a function to remove duplicates from an array via the passing in callback `equal`
 * to determine if the elements are equal, and then a new array is returned.
 * Note that you need to handle the `NaN` yourself.
 * @param equal The callback to determine whether two elements are equal or not.
 */
export function dedupe<T>(equal: (a: T, b: T) => boolean): (array: T[]) => T[];

/**
 * Remove duplicates from an array via the passing in callback `equal`
 * to determine if the elements are equal, and then a new array is returned.
 * Note that you need to handle the `NaN` yourself.
 * @param equal The callback to determine whether two elements are equal or not.
 */
export function dedupe<T>(equal: (a: T, b: T) => boolean, array: T[]): T[];

// implement
export function dedupe<T>(
  ...args: [(a: T, b: T) => boolean] | [(a: T, b: T) => boolean, T[]]
): ((array: T[]) => T[]) | T[] {
  const [equal, array] = args;
  if (isNullOrUndefined(array)) {
    return function dedupeFunc(array: T[]): T[] {
      return dedupe(equal, array);
    };
  }

  const result: T[] = [];
  const { length } = array;
  for (let i = 0; i < length; i++) {
    const element = array[i];
    if (!result.some(cur => equal(cur, element))) {
      result.push(element);
    }
  }
  return result;
}
