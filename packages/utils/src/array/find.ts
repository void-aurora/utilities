/**
 * Get the first item of the array.
 */
export const firstItem = <T>(array: ArrayLike<T>): T | undefined => array[0];

/**
 * Get the last item of the array.
 */
export const lastItem = <T>(array: ArrayLike<T>): T | undefined =>
  array[array.length - 1];
