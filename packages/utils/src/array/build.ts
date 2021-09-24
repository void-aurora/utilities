/**
 * Generate an array of the specified length.
 * @param length The length of the array.
 * @param item The callback for generating each item via index.
 * @returns
 */
export function buildArray<T>(length: number, item: (index: number) => T): T[] {
  const array = Array(length);
  for (let index = 0; index < length; index++) {
    array[index] = item(index);
  }
  return array;
}

/**
 * Create a new empty array.
 */
export function emptyArray<T>(): T[] {
  return [];
}
