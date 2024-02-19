import { curry } from '../functional/curry.g';

export const arrayEqual: {
  /**
   * Checks if two arrays are equal
   * based on a custom equality function.
   * @param equal The equality function that compares two elements.
   * @param arrayA The first input array.
   * @param arrayB The second input array.
   * @returns A boolean value indicating whether the two arrays are equal.
   * @template T The type of elements in the arrays.
   */
  <T>(equal: (a: T, b: T) => boolean, arrayA: T[], arrayB: T[]): boolean;

  /**
   * Returns a curried function that accepts the first and second arrays
   * and checks if they are equal
   * based on the provided equality function.
   * @param equal The equality function that compares two elements.
   * @param arrayA The first input array.
   * @param arrayB The second input array.
   * @returns The curried function.
   * @template T The type of elements in the arrays.
   */
  <T>(
    equal: (a: T, b: T) => boolean,
  ): ((arrayA: T[], arrayB: T[]) => boolean) &
    ((arrayA: T[]) => (arrayB: T[]) => boolean);

  /**
   * Returns a curried function that accepts the second array
   * and checks if it is equal to the first array
   * based on the provided equality function.
   * @param equal The equality function that compares two elements.
   * @param arrayA The first input array.
   * @returns The curried function.
   * @template T The type of elements in the arrays.
   */
  <T>(equal: (a: T, b: T) => boolean, arrayA: T[]): (arrayB: T[]) => boolean;

  // overloading, implement, currying
} = curry(
  <T>(equal: (a: T, b: T) => boolean, arrayA: T[], arrayB: T[]): boolean => {
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
  },
  3,
);

export const simpleArrayEqual: {
  /**
   * Checks if two arrays are equal
   * by comparing the elements using strict equality (`===`).
   * @param arrayA The first input array.
   * @param arrayB The second input array.
   * @returns A boolean value indicating whether the two arrays are equal.
   * @template T The type of elements in the arrays.
   */
  <T>(arrayA: T[], arrayB: T[]): boolean;

  /**
   * Returns a curried function that accepts the second array
   * and checks if it is equal to the first array
   * by comparing the elements using strict equality (`===`).
   * @param arrayA The first input array.
   * @returns The curried function.
   * @template T The type of elements in the arrays.
   */
  <T>(arrayA: T[]): (arrayB: T[]) => boolean;

  //
} = arrayEqual((a, b) => a === b);
