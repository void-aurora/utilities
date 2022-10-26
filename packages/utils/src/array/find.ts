// ================================================================
// First & Last

/**
 * Returns the value of the first element in the array, and undefined if not exists.
 */
export const firstItem = <T>(array: ArrayLike<T>): T | undefined => array[0];

/**
 * Returns the value of the last element in the array, and undefined if not exists.
 */
export const lastItem = <T>(array: ArrayLike<T>): T | undefined =>
  array[array.length - 1];

// ================================================================
// Find First

/**
 * Create a function `findFirst` that returns the value of the first element in the array where predicate is true,
 * and undefined otherwise.
 * @param predicate The function calls `predicate` once for each element of the array,
 * in ascending order, until it finds one where predicate returns true. If such an element is found,
 * `findFirst` immediately returns that element value. Otherwise, `findFirst` returns undefined.
 */
export function findFirst<T, S extends T>(
  predicate: (value: T, index: number, array: ArrayLike<T>) => value is T,
): (array: ArrayLike<T>) => S | undefined;

/**
 * Create a function `findFirst` that returns the value of the first element in the array where predicate is true,
 * and undefined otherwise.
 * @param predicate The function calls `predicate` once for each element of the array,
 * in ascending order, until it finds one where predicate returns true. If such an element is found,
 * `findFirst` immediately returns that element value. Otherwise, `findFirst` returns undefined.
 */
export function findFirst<T>(
  predicate: (value: T, index: number, array: ArrayLike<T>) => unknown,
): (array: ArrayLike<T>) => T | undefined;

/**
 * Returns the value of the first element in the array where predicate is true,
 * and undefined otherwise.
 * @param array The array to find the element.
 * @param predicate The function `findFirst` calls `predicate` once for each element of the array,
 * in ascending order, until it finds one where predicate returns true. If such an element is found,
 * `findFirst` immediately returns that element value. Otherwise, `findFirst` returns undefined.
 */
export function findFirst<T, S extends T>(
  predicate: (value: T, index: number, array: ArrayLike<T>) => value is S,
  array: ArrayLike<T>,
): S | undefined;

/**
 * Returns the value of the first element in the array where predicate is true,
 * and undefined otherwise.
 * @param array The array to find the element.
 * @param predicate The function `findFirst` calls `predicate` once for each element of the array,
 * in ascending order, until it finds one where predicate returns true. If such an element is found,
 * `findFirst` immediately returns that element value. Otherwise, `findFirst` returns undefined.
 */
export function findFirst<T>(
  predicate: (value: T, index: number, array: ArrayLike<T>) => unknown,
  array: ArrayLike<T>,
): T | undefined;

// implement
export function findFirst(
  ...args:
    | [(value: any, index: number, array: ArrayLike<any>) => unknown]
    | [
        (value: any, index: number, array: ArrayLike<any>) => unknown,
        ArrayLike<any>,
      ]
): ((array: ArrayLike<any>) => any | undefined) | any | undefined {
  const [predicate, array] = args;
  if (args.length === 1) {
    return function arrayFindFirst(array: ArrayLike<any>) {
      return findFirst(predicate, array);
    };
  }
  return Array.prototype.find.call(array, predicate);
}

// ================================================================
// Find Last

/**
 * Create a function `findLast` that returns the value of the last element in the array where predicate is true,
 * and undefined otherwise.
 * @param predicate The function calls `predicate` once for each element of the array,
 * in descending order, until it finds one where predicate returns true. If such an element is found,
 * `findLast` immediately returns that element value. Otherwise, `findLast` returns undefined.
 */
export function findLast<T, S extends T>(
  predicate: (value: T, index: number, array: ArrayLike<T>) => value is T,
): (array: ArrayLike<T>) => S | undefined;

/**
 * Create a function `findLast` that returns the value of the last element in the array where predicate is true,
 * and undefined otherwise.
 * @param predicate The function calls `predicate` once for each element of the array,
 * in descending order, until it finds one where predicate returns true. If such an element is found,
 * `findLast` immediately returns that element value. Otherwise, `findLast` returns undefined.
 */
export function findLast<T>(
  predicate: (value: T, index: number, array: ArrayLike<T>) => unknown,
): (array: ArrayLike<T>) => T | undefined;

/**
 * Returns the value of the last element in the array where predicate is true,
 * and undefined otherwise.
 * @param array The array to find the element.
 * @param predicate The function `findLast` calls `predicate` once for each element of the array,
 * in descending order, until it finds one where predicate returns true. If such an element is found,
 * `findLast` immediately returns that element value. Otherwise, `findLast` returns undefined.
 */
export function findLast<T, S extends T>(
  predicate: (value: T, index: number, array: ArrayLike<T>) => value is S,
  array: ArrayLike<T>,
): S | undefined;

/**
 * Returns the value of the last element in the array where predicate is true,
 * and undefined otherwise.
 * @param array The array to find the element.
 * @param predicate The function `findLast` calls `predicate` once for each element of the array,
 * in descending order, until it finds one where predicate returns true. If such an element is found,
 * `findLast` immediately returns that element value. Otherwise, `findLast` returns undefined.
 */
export function findLast<T>(
  predicate: (value: T, index: number, array: ArrayLike<T>) => unknown,
  array: ArrayLike<T>,
): T | undefined;

// implement
// export function createFindLast(
//   predicate: (value: any, index: number, array: ArrayLike<any>) => unknown,
// ): (array: ArrayLike<any>) => any | undefined {
//   return function arrayFindLast(array) {
//     return findLast(array, predicate);
//   };
// }

// implement
export function findLast(
  ...args:
    | [
        (value: any, index: number, array: ArrayLike<any>) => unknown,
        ArrayLike<any>,
      ]
    | [(value: any, index: number, array: ArrayLike<any>) => unknown]
): ((array: ArrayLike<any>) => any | undefined) | any | undefined {
  const [predicate, array] = args;
  if (args.length === 1) {
    return function arrayFindLast(array: ArrayLike<any>) {
      return findLast(predicate, array);
    };
  }
  const { length } = array!;
  for (let index = length; index > -1; index--) {
    const element = array![index];
    if (predicate(element, index, array!)) {
      return element;
    }
  }
  return undefined;
}
