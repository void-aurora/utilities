import { curry } from '../functional/curry.g';

export const buildArray: {
  /**
   * Builds an array of a specific length by invoking a callback function for each index.
   *
   * @param item The callback function that returns an item for each index.
   * @param length The length of the array to be built.
   * @returns An array of type T with the specified length.
   * @template T The type of items in the array.
   */
  <T>(item: (index: number) => T, length: number): T[];

  /**
   * Curried version of `buildArray`.
   *
   * @param item The callback function that returns an item for each index.
   * @returns A function that accepts the length of the array to be built.
   * @template T The type of items in the array.
   */
  <T>(item: (index: number) => T): (length: number) => T[];

  // overloading, implement, currying
} = curry(<T>(item: (index: number) => T, length: number): T[] => {
  const array = Array(length);
  for (let index = 0; index < length; index++) {
    array[index] = item(index);
  }
  return array;
}, 2);

/**
 * Create a new empty array.
 */
export function emptyArray<T>(): T[] {
  return [];
}
