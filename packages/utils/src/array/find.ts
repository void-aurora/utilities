// ================================================================
// First & Last

import { curry } from '../functional/curry.g';
import { isArray, isIterable } from '../type';

/**
 *  Returns the first item of an iterable or array-like object.
 *
 *  @param iterable The iterable or array-like object.
 *  @returns The first item of the input object or undefined if the input is empty.
 *
 * @example
 * ```ts
 * const arr = [1, 2, 3, 4];
 * console.log(firstItem(arr));  // Output: 1
 *
 * const empty = [];
 * console.log(firstItem(empty));  // Output: undefined
 *
 * const str = 'hello'
 * console.log(firstItem(str)); // Output: 'h'
 *
 * const set = new Set(['apple', 'banana', 'cat', 'dog']);
 * console.log(firstItem(set)); // Output: 'apple'
 *
 * const map = new Map<string | number, string | number>([
 *   ['a', 1],
 *   ['b', 2],
 *   ['c', 3],
 *   ['d', 4],
 * ]);
 * console.log(firstItem(map)); // Output: ['a', 1]
 * ```
 */
export function firstItem<T>(
  iterable: Iterable<T> | ArrayLike<T>,
): T | undefined {
  if (isIterable(iterable)) {
    const [first] = iterable;
    return first;
  }
  return iterable[0];
}

/**
 * Returns the last item of an iterable or array-like object.
 *
 * @param iterable The iterable or array-like object.
 * @returns The last item of the input object or undefined if the input is empty.
 *
 * @example
 * ```
 * const arr = [1, 2, 3, 4];
 * console.log(lastItem(arr));  // Output: 4
 *
 * const empty = [];
 * console.log(lastItem(empty));  // Output: undefined
 *
 * const str = 'hello'
 * console.log(lastItem(str)); // Output: 'o'
 *
 * const set = new Set(['apple', 'banana', 'cat', 'dog']);
 * console.log(lastItem(set)); // Output: 'dog'
 *
 * const map = new Map<string | number, string | number>([
 *   ['a', 1],
 *   ['b', 2],
 *   ['c', 3],
 *   ['d', 4],
 * ]);
 * console.log(lastItem(map)); // Output: ['d', 4]
 * ```
 */
export function lastItem<T>(
  iterable: Iterable<T> | ArrayLike<T>,
): T | undefined {
  const array = (isArray(iterable) && iterable) || Array.from(iterable);
  return array[array.length - 1];
}

// ================================================================
// Find First

export const findFirst: {
  /**
   * Returns the value of the first item in the iterable or array-like object
   * where `predicate` is true, and undefined otherwise.
   *
   * @param predicate `findFirst` calls `predicate` once for each item of the array,
   * in ascending order, until it finds one where `predicate` returns true.
   * If such an item is found, find immediately returns that item value.
   * Otherwise, find returns undefined.
   * @param iterable The iterable or array-like object to find an item in.
   * @template T The type of items in the iterable or array-like object.
   * @template S The type of the first item where `predicate` is true.
   */
  <T, S extends T>(
    predicate: (
      iterator: T,
      index: number,
      iterable: Iterable<T> | ArrayLike<T>,
    ) => iterator is S,
    iterable: Iterable<T> | ArrayLike<T>,
  ): S | undefined;

  /**
   * Returns the value of the first item in the iterable or array-like object
   * where `predicate` is true, and undefined otherwise.
   *
   * @param predicate `findFirst` calls `predicate` once for each item of the array,
   * in ascending order, until it finds one where `predicate` returns true.
   * If such an item is found, find immediately returns that item value.
   * Otherwise, find returns undefined.
   * @param iterable The iterable or array-like object to find an item in.
   * @template T The type of items in the iterable or array-like object.
   */
  <T>(
    predicate: (
      iterator: T,
      index: number,
      iterable: Iterable<T> | ArrayLike<T>,
    ) => boolean,
    iterable: Iterable<T> | ArrayLike<T>,
  ): T | undefined;

  /**
   * Returns a curried function to find the value of the first item
   * in the iterable or array-like object where `predicate` is true, and undefined otherwise.
   *
   * @param predicate `findFirst` calls `predicate` once for each item of the array,
   * in ascending order, until it finds one where `predicate` returns true.
   * If such an item is found, find immediately returns that item value.
   * Otherwise, find returns undefined.
   * @template T The type of items in the iterable or array-like object.
   * @template S The type of the first item where `predicate` is true.
   */
  <T, S extends T>(
    predicate: (
      iterator: T,
      index: number,
      iterable: Iterable<T> | ArrayLike<T>,
    ) => iterator is S,
  ): (iterable: Iterable<T> | ArrayLike<T>) => S | undefined;

  /**
   * Returns a curried function to find the value of the first item
   * in the iterable or array-like object where `predicate` is true, and undefined otherwise.
   *
   * @param predicate `findFirst` calls `predicate` once for each item of the array,
   * in ascending order, until it finds one where `predicate` returns true.
   * If such an item is found, find immediately returns that item value.
   * Otherwise, find returns undefined.
   * @template T The type of items in the iterable or array-like object.
   */
  <T>(
    predicate: (
      iterator: T,
      index: number,
      iterable: Iterable<T> | ArrayLike<T>,
    ) => boolean,
  ): (iterable: Iterable<T> | ArrayLike<T>) => T | undefined;

  // overloading, implement, currying
} = curry((predicate, iterable) => {
  let index = 0;
  for (const iterator of iterable) {
    if (predicate(iterator, index, iterable)) {
      return iterator;
    }
    index += 1;
  }
  return undefined;
}, 2);

// alias
export { findFirst as find };

// ================================================================
// Find Last

export const findLast: {
  /**
   * Returns the value of the last item in the iterable or array-like object
   * where `predicate` is true, and undefined otherwise.
   *
   * @param predicate `findLast` calls `predicate` once for each item of the array,
   * in descending order, until it finds one where `predicate` returns true.
   * If such an item is found, find immediately returns that item value.
   * Otherwise, find returns undefined.
   * @param iterable The iterable or array-like object to find an item in.
   * @template T The type of items in the iterable or array-like object.
   * @template S The type of the last item where `predicate` is true.
   */
  <T, S extends T>(
    predicate: (
      iterator: T,
      index: number,
      iterable: Iterable<T> | ArrayLike<T>,
    ) => iterator is S,
    iterable: Iterable<T> | ArrayLike<T>,
  ): S | undefined;

  /**
   * Returns the value of the last item in the iterable or array-like object
   * where `predicate` is true, and undefined otherwise.
   *
   * @param predicate `findLast` calls `predicate` once for each item of the array,
   * in descending order, until it finds one where `predicate` returns true.
   * If such an item is found, find immediately returns that item value.
   * Otherwise, find returns undefined.
   * @param iterable The iterable or array-like object to find an item in.
   * @template T The type of items in the iterable or array-like object.
   */
  <T>(
    predicate: (
      iterator: T,
      index: number,
      iterable: Iterable<T> | ArrayLike<T>,
    ) => boolean,
    iterable: Iterable<T> | ArrayLike<T>,
  ): T | undefined;

  /**
   * Returns a curried function to find the value of the last item
   * in the iterable or array-like object where `predicate` is true, and undefined otherwise.
   *
   * @param predicate `findLast` calls `predicate` once for each item of the array,
   * in descending order, until it finds one where `predicate` returns true.
   * If such an item is found, find immediately returns that item value.
   * Otherwise, find returns undefined.
   * @template T The type of items in the iterable or array-like object.
   * @template S The type of the last item where `predicate` is true.
   */
  <T, S extends T>(
    predicate: (
      iterator: T,
      index: number,
      iterable: Iterable<T> | ArrayLike<T>,
    ) => iterator is S,
  ): (iterable: Iterable<T> | ArrayLike<T>) => S | undefined;

  /**
   * Returns a curried function to find the value of the last item
   * in the iterable or array-like object where `predicate` is true, and undefined otherwise.
   *
   * @param predicate `findLast` calls `predicate` once for each item of the array,
   * in descending order, until it finds one where `predicate` returns true.
   * If such an item is found, find immediately returns that item value.
   * Otherwise, find returns undefined.
   * @template T The type of items in the iterable or array-like object.
   */
  <T>(
    predicate: (
      iterator: T,
      index: number,
      iterable: Iterable<T> | ArrayLike<T>,
    ) => boolean,
  ): (iterable: Iterable<T> | ArrayLike<T>) => T | undefined;

  // overloading, implement, currying
} = curry((predicate, iterable) => {
  const array = (isArray(iterable) && iterable) || Array.from(iterable);
  for (let index = array.length - 1; index >= 0; index--) {
    const item = array[index];
    if (predicate(item, index, iterable)) {
      return item;
    }
  }
  return undefined;
}, 2);
