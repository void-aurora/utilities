/* *****************************************************************************
All comments in this file come from typescript `lib.es5.d.ts` and `lib.es2015.core.d.ts`.
Licensed under the Apache License, Version 2.0 (the "License").
***************************************************************************** */

// ================================================================
// Math ES5

/** The mathematical constant e. This is Euler's number, the base of natural logarithms. */
export const E = Math.E;

/** The natural logarithm of 10. */
export const LN10 = Math.LN10;

/** The natural logarithm of 2. */
export const LN2 = Math.LN2;

/** The base-2 logarithm of e. */
export const LOG2E = Math.LOG2E;

/** The base-10 logarithm of e. */
export const LOG10E = Math.LOG10E;

/** Pi. This is the ratio of the circumference of a circle to its diameter. */
export const PI = Math.PI;

/** The square root of 0.5, or, equivalently, one divided by the square root of 2. */
export const SQRT1_2 = Math.SQRT1_2;

/** The square root of 2. */
export const SQRT2 = Math.SQRT2;

/**
 * Returns the absolute value of a number (the value without regard to whether it is positive or negative).
 * For example, the absolute value of -5 is the same as the absolute value of 5.
 * @param x A numeric expression for which the absolute value is needed.
 */
export const abs = Math.abs;

/**
 * Returns the arc cosine (or inverse cosine) of a number.
 * @param x A numeric expression.
 */
export const acos = Math.acos;

/**
 * Returns the arcsine of a number.
 * @param x A numeric expression.
 */
export const asin = Math.asin;

/**
 * Returns the arctangent of a number.
 * @param x A numeric expression for which the arctangent is needed.
 */
export const atan = Math.atan;

/**
 * Returns the angle (in radians) from the X axis to a point.
 * @param y A numeric expression representing the cartesian y-coordinate.
 * @param x A numeric expression representing the cartesian x-coordinate.
 */
export const atan2 = Math.atan2;

/**
 * Returns the smallest integer greater than or equal to its numeric argument.
 * @param x A numeric expression.
 */
export const ceil = Math.ceil;

/**
 * Returns the cosine of a number.
 * @param x A numeric expression that contains an angle measured in radians.
 */
export const cos = Math.cos;

/**
 * Returns e (the base of natural logarithms) raised to a power.
 * @param x A numeric expression representing the power of e.
 */
export const exp = Math.exp;

/**
 * Returns the greatest integer less than or equal to its numeric argument.
 * @param x A numeric expression.
 */
export const floor = Math.floor;

/**
 * Returns the natural logarithm (base e) of a number.
 * @param x A numeric expression.
 */
export const log = Math.log;

/**
 * Returns the larger of a set of supplied numeric expressions.
 * @param values Numeric expressions to be evaluated.
 */
export const max = Math.max;

/**
 * Returns the smaller of a set of supplied numeric expressions.
 * @param values Numeric expressions to be evaluated.
 */
export const min = Math.min;

/**
 * Returns the value of a base expression taken to a specified power.
 * @param x The base value of the expression.
 * @param y The exponent value of the expression.
 */
export const pow = Math.pow;

/** Returns a pseudorandom number between 0 and 1. */
export const random = Math.random;

/**
 * Returns a supplied numeric expression rounded to the nearest integer.
 * @param x The value to be rounded to the nearest integer.
 */
export const round = Math.round;

/**
 * Returns the sine of a number.
 * @param x A numeric expression that contains an angle measured in radians.
 */
export const sin = Math.sin;

/**
 * Returns the square root of a number.
 * @param x A numeric expression.
 */
export const sqrt = Math.sqrt;

/**
 * Returns the tangent of a number.
 * @param x A numeric expression that contains an angle measured in radians.
 */
export const tan = Math.tan;

// ================================================================
// Math ES2015

/**
 * Returns the number of leading zero bits in the 32-bit binary representation of a number.
 * @param x A numeric expression.
 */
export const clz32 = Math.clz32;

/**
 * Returns the result of 32-bit multiplication of two numbers.
 * @param x First number
 * @param y Second number
 */
export const imul = Math.imul;

/**
 * Returns the sign of the x, indicating whether x is positive, negative or zero.
 * @param x The numeric expression to test
 */
export const sign = Math.sign;

/**
 * Returns the base 10 logarithm of a number.
 * @param x A numeric expression.
 */
export const log10 = Math.log10;

/**
 * Returns the base 2 logarithm of a number.
 * @param x A numeric expression.
 */
export const log2 = Math.log2;

/**
 * Returns the natural logarithm of 1 + x.
 * @param x A numeric expression.
 */
export const log1p = Math.log1p;

/**
 * Returns the result of (e^x - 1), which is an implementation-dependent approximation to
 * subtracting 1 from the exponential function of x (e raised to the power of x, where e
 * is the base of the natural logarithms).
 * @param x A numeric expression.
 */
export const expm1 = Math.expm1;

/**
 * Returns the hyperbolic cosine of a number.
 * @param x A numeric expression that contains an angle measured in radians.
 */
export const cosh = Math.cosh;

/**
 * Returns the hyperbolic sine of a number.
 * @param x A numeric expression that contains an angle measured in radians.
 */
export const sinh = Math.sinh;

/**
 * Returns the hyperbolic tangent of a number.
 * @param x A numeric expression that contains an angle measured in radians.
 */
export const tanh = Math.tanh;

/**
 * Returns the inverse hyperbolic cosine of a number.
 * @param x A numeric expression that contains an angle measured in radians.
 */
export const acosh = Math.acosh;

/**
 * Returns the inverse hyperbolic sine of a number.
 * @param x A numeric expression that contains an angle measured in radians.
 */
export const asinh = Math.asinh;

/**
 * Returns the inverse hyperbolic tangent of a number.
 * @param x A numeric expression that contains an angle measured in radians.
 */
export const atanh = Math.atanh;

/**
 * Returns the square root of the sum of squares of its arguments.
 * @param values Values to compute the square root for.
 *     If no arguments are passed, the result is +0.
 *     If there is only one argument, the result is the absolute value.
 *     If any argument is +Infinity or -Infinity, the result is +Infinity.
 *     If any argument is NaN, the result is NaN.
 *     If all arguments are either +0 or −0, the result is +0.
 */
export const hypot = Math.hypot;

/**
 * Returns the integral part of the a numeric expression, x, removing any fractional digits.
 * If x is already an integer, the result is x.
 * @param x A numeric expression.
 */
export const trunc = Math.trunc;

/**
 * Returns the nearest single precision float representation of a number.
 * @param x A numeric expression.
 */
export const fround = Math.fround;

/**
 * Returns an implementation-dependent approximation to the cube root of number.
 * @param x A numeric expression.
 */
export const cbrt = Math.cbrt;

// ================================================================
// Number ES5

/** The largest number that can be represented in JavaScript. Equal to approximately 1.79E+308. */
export const MAX_VALUE = Number.MAX_VALUE;

/** The closest number to zero that can be represented in JavaScript. Equal to approximately 5.00E-324. */
export const MIN_VALUE = Number.MIN_VALUE;

/**
 * A value that is not a number.
 * In equality comparisons, NaN does not equal any value, including itself. To test whether a value is equivalent to NaN, use the isNaN function.
 */
export const NaN = Number.NaN;

/**
 * A value that is less than the largest negative number that can be represented in JavaScript.
 * JavaScript displays NEGATIVE_INFINITY values as -infinity.
 */
export const NEGATIVE_INFINITY = Number.NEGATIVE_INFINITY;

/**
 * A value greater than the largest number that can be represented in JavaScript.
 * JavaScript displays POSITIVE_INFINITY values as infinity.
 */
export const POSITIVE_INFINITY = Number.POSITIVE_INFINITY;

// ================================================================
// Math ES2015

/**
 * The value of Number.EPSILON is the difference between 1 and the smallest value greater than 1
 * that is representable as a Number value, which is approximately:
 * 2.2204460492503130808472633361816 x 10‍−‍16.
 */
export const EPSILON = Number.EPSILON;

/**
 * Returns true if passed value is finite.
 * Unlike the global isFinite, Number.isFinite doesn't forcibly convert the parameter to a
 * number. Only finite values of the type number, result in true.
 * @param number A numeric value.
 */
export const isFinite = Number.isFinite;

/**
 * Returns true if the value passed is an integer, false otherwise.
 * @param number A numeric value.
 */
export const isInteger = Number.isInteger;

/**
 * Returns a Boolean value that indicates whether a value is the reserved value NaN (not a
 * number). Unlike the global export const isNaN = Number.isNaN;
 * to a number. Only values of the type number, that are also NaN, result in true.
 * @param number A numeric value.
 */
export const isNaN = Number.isNaN;

/**
 * Returns true if the value passed is a safe integer.
 * @param number A numeric value.
 */
export const isSafeInteger = Number.isSafeInteger;

/**
 * The value of the largest integer n such that n and n + 1 are both exactly representable as
 * a Number value.
 * The value of Number.MAX_SAFE_INTEGER is 9007199254740991 2^53 − 1.
 */
export const MAX_SAFE_INTEGER = Number.MAX_SAFE_INTEGER;

/**
 * The value of the smallest integer n such that n and n − 1 are both exactly representable as
 * a Number value.
 * The value of Number.MIN_SAFE_INTEGER is −9007199254740991 (−(2^53 − 1)).
 */
export const MIN_SAFE_INTEGER = Number.MIN_SAFE_INTEGER;

/**
 * Converts a string to a floating-point number.
 * @param string A string that contains a floating-point number.
 */
export const parseFloat = Number.parseFloat;

/**
 * Converts A string to an integer.
 * @param string A string to convert into a number.
 * @param radix A value between 2 and 36 that specifies the base of the number in `string`.
 * If this argument is not supplied, strings with a prefix of '0x' are considered hexadecimal.
 * All other strings are considered decimal.
 */
export const parseInt = Number.parseInt;
