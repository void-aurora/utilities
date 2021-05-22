// ================================================================
// Primitives

export const isString = (value: unknown): value is string =>
  typeof value === 'string';

export const isNumber = (value: unknown): value is number =>
  typeof value === 'number';

export const isBoolean = (value: unknown): value is boolean =>
  typeof value === 'boolean';

export const isBigInt = (value: unknown): value is bigint =>
  typeof value === 'bigint';

export const isSymbol = (value: unknown): value is symbol =>
  typeof value === 'symbol';

export const isPrimitives = (
  value: unknown,
): value is string | number | boolean | bigint | symbol => {
  const t = typeof value;
  return (
    t === 'string' ||
    t === 'number' ||
    t === 'boolean' ||
    t === 'bigint' ||
    t === 'symbol'
  );
};

// ================================================================
// Function

export const isFunction = (value: unknown): value is Function =>
  typeof value === 'function';

// ================================================================
// Object

export const isObject = (value: unknown): value is Record<any, any> =>
  value !== null && typeof value === 'object';

export const objectToString = Object.prototype.toString;
export const toTypeString = (value: unknown): string =>
  objectToString.call(value);

const hasOwnProperty = Object.prototype.hasOwnProperty;
export const hasOwn = (
  value: object,
  key: string | symbol,
): key is keyof typeof value => hasOwnProperty.call(value, key);

export const toRawType = (value: unknown): string => {
  // extract "RawType" from strings like "[object RawType]"
  return toTypeString(value).slice(8, -1);
};

export const isPlainObject = (value: unknown): value is object =>
  toTypeString(value) === '[object Object]';

export const isArray: <V = any>(value: unknown) => value is V[] = Array.isArray;

export const isMap = <K = any, V = any>(value: unknown): value is Map<K, V> =>
  toTypeString(value) === '[object Map]';

export const isSet = <V = any>(value: unknown): value is Set<V> =>
  toTypeString(value) === '[object Set]';

export const isPromise = <T = any>(value: unknown): value is Promise<T> =>
  isObject(value) && isFunction(value.then) && isFunction(value.catch);
