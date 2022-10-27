// ================================================================
// First & Last

import { isArray, isIterable, isNullOrUndefined, isString } from '../type';

/**
 * Returns the value of the first element in the array, and undefined if not exists.
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
 * Returns the value of the last element in the array, and undefined if not exists.
 */
export function lastItem<T>(
  iterable: Iterable<T> | ArrayLike<T>,
): T | undefined {
  const array =
    (isIterable(iterable) && [...iterable]) || (iterable as ArrayLike<T>);
  return array[array.length - 1];
}

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
  predicate: (
    value: T,
    index: number,
    iterable: Iterable<T> | ArrayLike<T>,
  ) => value is T,
): (iterable: Iterable<T> | ArrayLike<T>) => S | undefined;

/**
 * Create a function `findFirst` that returns the value of the first element in the array where predicate is true,
 * and undefined otherwise.
 * @param predicate The function calls `predicate` once for each element of the array,
 * in ascending order, until it finds one where predicate returns true. If such an element is found,
 * `findFirst` immediately returns that element value. Otherwise, `findFirst` returns undefined.
 */
export function findFirst<T>(
  predicate: (
    value: T,
    index: number,
    iterable: Iterable<T> | ArrayLike<T>,
  ) => unknown,
): (iterable: Iterable<T> | ArrayLike<T>) => T | undefined;

/**
 * Returns the value of the first element in the array where predicate is true,
 * and undefined otherwise.
 * @param array The array to find the element.
 * @param predicate The function `findFirst` calls `predicate` once for each element of the array,
 * in ascending order, until it finds one where predicate returns true. If such an element is found,
 * `findFirst` immediately returns that element value. Otherwise, `findFirst` returns undefined.
 */
export function findFirst<T, S extends T>(
  predicate: (
    value: T,
    index: number,
    iterable: Iterable<T> | ArrayLike<T>,
  ) => value is S,
  iterable: Iterable<T> | ArrayLike<T>,
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
  predicate: (
    value: T,
    index: number,
    iterable: Iterable<T> | ArrayLike<T>,
  ) => unknown,
  iterable: Iterable<T> | ArrayLike<T>,
): T | undefined;

// implement
export function findFirst(
  ...args:
    | [
        (
          value: any,
          index: number,
          iterable: Iterable<any> | ArrayLike<any>,
        ) => unknown,
      ]
    | [
        (
          value: any,
          index: number,
          iterable: Iterable<any> | ArrayLike<any>,
        ) => unknown,
        ArrayLike<any> | Iterable<any>,
      ]
):
  | ((iterable: Iterable<any> | ArrayLike<any>) => any | undefined)
  | any
  | undefined {
  const [predicate, iterable] = args;
  if (isNullOrUndefined(iterable)) {
    return function findFirstFunc(iterable: Iterable<any> | ArrayLike<any>) {
      return findFirst(predicate, iterable);
    };
  }

  if (!isString(iterable) && !isArray(iterable) && isIterable(iterable)) {
    let index = 0;
    for (const iterator of iterable) {
      const flag = predicate(iterator, index, iterable);
      if (flag) {
        return iterator;
      }
      index++;
    }
    return undefined;
  }

  const { length } = iterable;

  for (let index = 0; index < length; index++) {
    const element = iterable[index];
    const flag = predicate(element, index, iterable);
    if (flag) {
      return element;
    }
  }
  return undefined;
}

// alias
export { findFirst as find };

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
  predicate: (
    value: T,
    index: number,
    iterable: Iterable<any> | ArrayLike<any>,
  ) => value is T,
): (iterable: Iterable<any> | ArrayLike<any>) => S | undefined;

/**
 * Create a function `findLast` that returns the value of the last element in the array where predicate is true,
 * and undefined otherwise.
 * @param predicate The function calls `predicate` once for each element of the array,
 * in descending order, until it finds one where predicate returns true. If such an element is found,
 * `findLast` immediately returns that element value. Otherwise, `findLast` returns undefined.
 */
export function findLast<T>(
  predicate: (
    value: T,
    index: number,
    iterable: Iterable<any> | ArrayLike<any>,
  ) => unknown,
): (iterable: Iterable<any> | ArrayLike<any>) => T | undefined;

/**
 * Returns the value of the last element in the array where predicate is true,
 * and undefined otherwise.
 * @param array The array to find the element.
 * @param predicate The function `findLast` calls `predicate` once for each element of the array,
 * in descending order, until it finds one where predicate returns true. If such an element is found,
 * `findLast` immediately returns that element value. Otherwise, `findLast` returns undefined.
 */
export function findLast<T, S extends T>(
  predicate: (
    value: T,
    index: number,
    iterable: Iterable<any> | ArrayLike<any>,
  ) => value is S,
  iterable: Iterable<any> | ArrayLike<any>,
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
  predicate: (
    value: T,
    index: number,
    iterable: Iterable<any> | ArrayLike<any>,
  ) => unknown,
  iterable: Iterable<any> | ArrayLike<any>,
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
        (
          value: any,
          index: number,
          iterable: Iterable<any> | ArrayLike<any>,
        ) => unknown,
        Iterable<any> | ArrayLike<any>,
      ]
    | [
        (
          value: any,
          index: number,
          iterable: Iterable<any> | ArrayLike<any>,
        ) => unknown,
      ]
):
  | ((iterable: Iterable<any> | ArrayLike<any>) => any | undefined)
  | any
  | undefined {
  const [predicate, iterable] = args;
  if (isNullOrUndefined(iterable)) {
    return function arrayFindLast(iterable: Iterable<any> | ArrayLike<any>) {
      return findLast(predicate, iterable);
    };
  }

  const array =
    (!isArray(iterable) &&
      !isString(iterable) &&
      isIterable(iterable) && [...iterable]) ||
    (iterable as ArrayLike<any>);

  const { length } = array;
  for (let index = length; index > -1; index--) {
    const element = array[index];
    if (predicate(element, index, iterable!)) {
      return element;
    }
  }
  return undefined;
}
