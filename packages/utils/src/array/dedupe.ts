import { curry } from '../functional/curry.g';
import { isNullOrUndefined } from '../type';

/**
 * Remove duplicates from an array and returns a new array, only for primitive type.
 * If there are non-primitive elements in the array, use `createDeDupe` instead.
 */
export const simpleDedupe = <T>(array: T[]): T[] => [...new Set(array)];

export const dedupe: {
  <T>(equal: (a: T, b: T) => boolean, array: T[]): T[];

  <T>(equal: (a: T, b: T) => boolean): (array: T[]) => T[];

  // overloading, implement, currying
} = curry(<T>(equal: (a: T, b: T) => boolean, array: T[]): T[] => {
  const result: T[] = [];
  if (isNullOrUndefined(array)) {
    return result;
  }
  const { length } = array;
  for (let i = 0; i < length; i++) {
    const element = array[i];
    if (!result.some(cur => equal(cur, element))) {
      result.push(element);
    }
  }
  return result;
}, 2);
