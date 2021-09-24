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
