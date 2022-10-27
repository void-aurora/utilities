// https://www.typescriptlang.org/docs/handbook/2/narrowing.html#using-type-predicates

import { Primitive } from './utility';

const { isFinite } = Number;

// ================================================================
// Primitive
// https://developer.mozilla.org/en-US/docs/Glossary/Primitive

/**
 * Determines whether a value is `null`.
 */
export const isNull = (value: unknown): value is null => value === null;

/**
 * Determines whether a value is `undefined`.
 */
export const isUndefined = (value: unknown): value is undefined =>
  typeof value === 'undefined';

/**
 * Determines whether a value is `null` or `undefined`.
 */
export const isNullOrUndefined = (value: unknown): value is null | undefined =>
  isNull(value) || isUndefined(value);

// alias
export { isNullOrUndefined as isNullish };

/**
 * Determines whether a value is assigned -- the value is neither `null` nor `undefined`.
 */
export const isAssigned = <T>(value: T | null | undefined): value is T =>
  !isNullOrUndefined(value);

// alias
export { isAssigned as isDefined };

/**
 * Determines whether a value is string.
 */
export const isString = (value: unknown): value is string =>
  typeof value === 'string';

/**
 * Check if the value is a valid number -- finite and none-NaN.
 *
 * The below values return `false`, although their type are 'number'.
 * - `Number.NaN`
 * - `Number.NEGATIVE_INFINITY`
 * - `Number.POSITIVE_INFINITY`
 */
export const isNumber = (value: unknown): value is number =>
  typeof value === 'number' && isFinite(value);

/**
 * Determines whether a value is a `boolean`.
 */
export const isBoolean = (value: unknown): value is boolean =>
  typeof value === 'boolean';

/**
 * Determines whether a value is a `Symbol`.
 */
export const isSymbol = (value: unknown): value is symbol =>
  typeof value === 'symbol';

/**
 * Determines whether a value is a `BigInt`.
 */
export const isBigInt = (value: unknown): value is bigint =>
  typeof value === 'bigint';

/**
 * Determines whether a value is primitive type.
 * - `null`
 * - `undefined`
 * - `string`
 * - `number`
 * - `boolean`
 * - `symbol`
 * - `bigint`
 *
 * Special, the `NaN`, `-infinite` and `+infinite` return `false`.
 */
export const isPrimitives = (value: unknown): value is Primitive => {
  const t = typeof value;
  return (
    value === null ||
    t === 'undefined' ||
    t === 'string' ||
    (t === 'number' && isFinite(value)) ||
    t === 'boolean' ||
    t === 'symbol' ||
    t === 'bigint'
  );
};

// ================================================================
// Function

/**
 * Determines whether a value is a callable function.
 */
export const isFunction = (value: unknown): value is Function =>
  typeof value === 'function';

// ================================================================
// Object

/**
 * Determines whether a value is an object that is not `null`.
 * Note that an array is also an object.
 */
export const isObject = (value: unknown): value is Record<PropertyKey, any> =>
  value !== null && typeof value === 'object';

/**
 * `Object.prototype.toString`
 */
export const objectToString = Object.prototype.toString;

/**
 * Get the type string via `Object.prototype.toString.call(value)`.
 * The type string is defined by `Symbol.toStringTag`.
 */
export const toTypeString = (value: unknown): string =>
  objectToString.call(value);

const hasOwnProperty = Object.prototype.hasOwnProperty;

/**
 * Determines whether an object has a property with the specified name.
 * Uses `Object.prototype.hasOwnProperty` to get correct results.
 * JavaScript does not protect the property name `hasOwnProperty`;
 * thus, if the possibility exists that an object might have a property with this name,
 * it is necessary to use an external `hasOwnProperty` to get correct results.
 * @param value The object to determine.
 * @param key The specified property name.
 */
export const hasOwn = (
  value: object,
  key: string | symbol,
): key is keyof typeof value => hasOwnProperty.call(value, key);

/**
 * Extracts `'RawType'` from string like `'[object RawType]'`.
 */
export const toRawType = (value: unknown): string => {
  return toTypeString(value).slice(8, -1);
};

/**
 * Determines whether a value is plain object
 * which `Object.prototype.toString.call(value)` returns `'[object Object]'`
 */
export const isPlainObject = (value: unknown): value is object =>
  toTypeString(value) === '[object Object]';

// ================================================================
// Built-in Iterables

/**
 * Determines whether a object is iterable.
 */
export const isIterable = <T>(value: unknown): value is Iterable<T> =>
  isObject(value) && isFunction(value[Symbol.iterator]);

/**
 * Determines whether a value is an instance of `Array` via `Array.isArray(value)`.
 */
export const isArray: <V = any>(value: unknown) => value is V[] = Array.isArray;

/**
 * Determines whether a value is an instance of `Map`.
 */
export const isMap = <K = any, V = any>(value: unknown): value is Map<K, V> =>
  toTypeString(value) === '[object Map]';

/**
 * Determines whether a value is an instance of `Set`.
 */
export const isSet = <V = any>(value: unknown): value is Set<V> =>
  toTypeString(value) === '[object Set]';

// ================================================================
// Built-in Objects

/**
 * Determines whether a value is an instance of `Promise`.
 * which with callbacks `then` and `catch`.
 */
export const isPromise = <T = any>(value: unknown): value is Promise<T> =>
  isObject(value) && isFunction(value.then) && isFunction(value.catch);

/**
 * Determines whether a value is an instance of `Date`.
 */
export const isDate = (value: unknown): value is Date => value instanceof Date;
