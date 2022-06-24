import {
  hasOwn,
  isArray,
  isAssigned,
  isBigInt,
  isBoolean,
  isDate,
  isDefined,
  isFunction,
  isMap,
  isNull,
  isNullish,
  isNullOrUndefined,
  isNumber,
  isObject,
  isPlainObject,
  isPrimitives,
  isPromise,
  isSet,
  isString,
  isSymbol,
  isUndefined,
  toRawType,
  toTypeString,
} from './check';

const checkers = [
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
  isPlainObject,
  isArray,
  isMap,
  isSet,
  isPromise,
  isDate,
  toTypeString,
  toRawType,
];

function normalFunction(a: string, b: string): string {
  return a + b;
}

const arrowFunction = (a: number, b: number) => a + b;

const promiseFunction = () =>
  new Promise((resolve, reject) => {
    setTimeout(() => resolve(1), 100);
  });

const asyncFunction = async () => {
  return 1;
};

class Foobar {
  get [Symbol.toStringTag]() {
    return 'Foobar';
  }

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

  toString() {
    return this.foo + this.bar;
  }

  hasOwnProperty(key: string) {
    return true;
  }
}

const values = {
  null: null,
  undefined: undefined,
  string: '11',
  stringEmpty: '',
  number: 11,
  NaN: NaN,
  NEGATIVE_INFINITY: Number.NEGATIVE_INFINITY,
  POSITIVE_INFINITY: Number.POSITIVE_INFINITY,
  booleanTrue: true,
  booleanFalse: false,
  symbol: Symbol('foobar'),
  bigint: 11n,
  normalFunction,
  arrowFunction,
  object: { foobar: 'foobar' },
  instanceFoobar: new Foobar('a', 'b'),
  instanceArray: [0, 1, 2, 3, 4],
  instanceMap: new Map(),
  instanceSet: new Set(),
  instancePromise: promiseFunction(),
  instanceAsync: asyncFunction(),
  instanceDate: new Date(),
  classFoobar: Foobar,
  apiString: String,
  apiNumber: Number,
  apiObject: Object,
  apiArray: Array,
  apiMath: Math,
  apiDate: Date,
};

describe('type check', () => {
  test('simple type predicates', () => {
    const record = Object.fromEntries(
      Object.entries(values).map(([name, value]) => {
        const result = {} as any;
        checkers.forEach(check => (result[check.name] = check(value)));
        return [name, result];
      }),
    );
    expect(record).toMatchSnapshot();
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
