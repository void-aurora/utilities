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
