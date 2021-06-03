/**
 * Get the first item of the array.
 */
export const firstItem = <T>(array: ArrayLike<T>): T | undefined => array[0];

/**
 * Get the last item of the array.
 */
export const lastItem = <T>(array: ArrayLike<T>): T | undefined =>
  array[array.length - 1];

/**
 * Determine if two array are equal via determining whether each elements is equal
 * one by one through the strict equal `===`.
 * If there are non-primitive elements in the array, use `createArrayEqual` instead.
 */
export function arrayEqual<T>(arrayA: T[], arrayB: T[]): boolean {
  if (arrayA === arrayB) {
    return true;
  }
  if (arrayA.length !== arrayB.length) {
    return false;
  }
  const { length } = arrayA;
  for (let i = 0; i < length; i++) {
    if (arrayA[i] !== arrayB[i]) {
      return false;
    }
  }
  return true;
}

/**
 * Create a check function to determine if two array ore equal in all elements.
 * @param equal The callback to determine whether two elements are equal or not.
 */
export function createArrayEqual<T>(
  equal: (a: T, b: T) => boolean,
): (arrayA: T[], arrayB: T[]) => boolean {
  return function arrayEqual(arrayA: T[], arrayB: T[]): boolean {
    if (arrayA === arrayB) {
      return true;
    }
    if (arrayA.length !== arrayB.length) {
      return false;
    }
    const { length } = arrayA;
    for (let i = 0; i < length; i++) {
      if (!equal(arrayA[i], arrayB[i])) {
        return false;
      }
    }
    return true;
  };
}

/**
 * De-duplicates the elements of the array and returns a new array.
 * If there are non-primitive elements in the array, use `createDeDupe` instead.
 */
export const deDupe = <T>(array: T[]): T[] => [...new Set(array)];

/**
 * Create a de-duplication function. The function de-duplicate the elements of the array
 * via the passing in callback `equal` to determine if the elements are equal, and then
 * a new array is returned.
 * @param equal The callback to determine whether two elements are equal or not.
 */
export function createDeDupe<T>(
  equal: (a: T, b: T) => boolean,
): (array: T[]) => T[] {
  return function deDupe(array: T[]): T[] {
    const result: T[] = [];
    for (let i = 0; i < array.length; i++) {
      const element = array[i];
      if (!result.some(cur => equal(cur, element))) {
        result.push(element);
      }
    }
    return result;
  };
}
