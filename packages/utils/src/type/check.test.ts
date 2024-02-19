import { describe, test, expect } from 'vitest';
import {
  hasOwn,
  isArray,
  isAssigned,
  isBigInt,
  isBoolean,
  isDate,
  isDefined,
  isFunction,
  isIterable,
  isMap,
  isNull,
  isNullish,
  isNullOrUndefined,
  isNumber,
  isObject,
  isLiteralObject,
  isPrimitives,
  isPromise,
  isSet,
  isString,
  isSymbol,
  isUndefined,
  toRawType,
  toTypeString,
  isPlainObject,
} from './check';

class Foobar {
  foo: string;
  bar: string;
  constructor(foo: string, bar: string) {
    this.foo = foo;
    this.bar = bar;
  }
  getFoo() {
    return this.foo;
  }
  getBar() {
    return this.bar;
  }
  get [Symbol.toStringTag]() {
    return 'Foobar';
  }
  *[Symbol.iterator](): Iterator<string> {
    yield 'foo';
    yield 'bar';
  }
  toString() {
    return this.foo + this.bar;
  }
  hasOwnProperty(key: string) {
    return true;
  }
}

describe('type/check', () => {
  test(`basic`, () => {
    expect(isNull(null)).toBe(true);
    expect(isUndefined(undefined)).toBe(true);
    expect(isNullOrUndefined(void 0)).toBe(true);
    expect(isAssigned({})).toBe(true);
    expect(isString('foobar')).toBe(true);
    expect(isNumber(123)).toBe(true);
    expect(isBoolean(false)).toBe(true);
    expect(isSymbol(Symbol('foobar'))).toBe(true);
    expect(isBigInt(BigInt('321'))).toBe(true);
    expect(isPrimitives(456)).toBe(true);
    expect(isFunction(() => false)).toBe(true);
    expect(isObject({})).toBe(true);
    expect(isLiteralObject({})).toBe(true);
    expect(isIterable([])).toBe(true);
    expect(isArray([])).toBe(true);
    expect(isMap(new Map())).toBe(true);
    expect(isSet(new Set())).toBe(true);
    expect(
      isPromise(
        new Promise((resolve, reject) => setTimeout(() => resolve(1), 100)),
      ),
    ).toBe(true);
    expect(isDate(new Date())).toBe(true);
    expect(toTypeString(123)).toBe('[object Number]');
    expect(toRawType(123)).toBe('Number');
  });

  test(`snapshot`, () => {
    const checkers = Object.entries({
      isNull,
      isUndefined,
      isNullOrUndefined,
      isAssigned,
      isString,
      isNumber,
      isBoolean,
      isSymbol,
      isBigInt,
      isPrimitives,
      isFunction,
      isObject,
      isLiteralObject,
      isPlainObject,
      isIterable,
      isArray,
      isMap,
      isSet,
      isPromise,
      isDate,
      toTypeString,
      toRawType,
    } as Record<string, (v: unknown) => any>);

    function functionNormal(a: string, b: string): string {
      return a + b;
    }
    const functionArrow = (a: number, b: number) => a + b;

    const promiseFunction = () =>
      new Promise((resolve, reject) => {
        setTimeout(() => resolve(1), 100);
      });
    const asyncFunction = async () => {
      return 1;
    };

    const values = Object.entries({
      'primitives.undefined': undefined,
      'primitives.string': '11',
      'primitives.string.empty': '',
      'primitives.number': 11,
      'primitives.number.NaN': NaN,
      'primitives.number.NEGATIVE_INFINITY': Number.NEGATIVE_INFINITY,
      'primitives.number.POSITIVE_INFINITY': Number.POSITIVE_INFINITY,
      'primitives.boolean.true': true,
      'primitives.boolean.false': false,
      'primitives.symbol': Symbol('foobar'),
      'primitives.bigint': 11n,
      functionNormal,
      functionArrow,
      'object.literal': { foobar: 'foobar' },
      'object.plain': Object.create(null),
      'object.null': null,
      classFoobar: Foobar,
      instanceFoobar: new Foobar('a', 'b'),
      instanceArray: [0, 1, 2, 3, 4],
      instanceMap: new Map(),
      instanceSet: new Set(),
      instancePromise: promiseFunction(),
      instanceAsync: asyncFunction(),
      instanceDate: new Date(),
      apiString: String,
      apiNumber: Number,
      apiObject: Object,
      apiArray: Array,
      apiMath: Math,
      apiDate: Date,
    } as Record<string, any>);

    const result = Object.fromEntries(
      checkers.map(([checkerName, checker]) => [
        checkerName,
        Object.fromEntries(
          values.map(([valueName, value]) => [valueName, checker(value)]),
        ),
      ]),
    );

    expect(result).toMatchFileSnapshot(`${__filename}.snap`);
  });

  test('alias', () => {
    expect(isDefined).toBe(isAssigned);
    expect(isNullish).toBe(isNullOrUndefined);
  });

  test('hasOwn()', () => {
    const foobar = new Foobar('apple', 'banana');
    expect(hasOwn(foobar, 'foo')).toBe(true);
    expect(hasOwn(foobar, 'bar')).toBe(true);
    expect(hasOwn(foobar, 'toString')).toBe(false);
    expect(hasOwn(foobar, 'hasOwnProperty')).toBe(false);
    expect(hasOwn(foobar, 'valueOf')).toBe(false);
  });

  test('test type define isObject()', () => {
    const obj: unknown = {};
    const s = Symbol('foobar');
    if (isObject(obj)) {
      obj[1] = 'a';
      obj['a'] = 1;
      obj[s] = { foo: 'bar' };
    }
    expect(obj).toEqual({ [1]: 'a', a: 1, [s]: { foo: 'bar' } });
  });
});
