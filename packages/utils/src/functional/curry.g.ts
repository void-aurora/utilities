// prettier ignore by <workspace-root>/.prettierignore

// generate by "scripts/codegen-functional-curry.ts"


/**
 * Currying function that converts a multi-argument function
 * into a series of single-argument functions.
 *
 * @param length The number of arguments for the curried function.
 * @param fn The function to be curried.
 * @returns The curried function.
 *
 * @example
 * ```ts
 * function multiply(
 *   a: number,
 *   b: number,
 *   c: number,
 * ): number {
 *   return a * b * c;
 * }
 *
 * const curriedMultiply = curry(3, multiply);
 *
 * console.log(curriedMultiply(2)(3)(4)); // output 24
 * console.log(curriedMultiply(2, 3)(4)); // output 24
 * console.log(curriedMultiply(2)(3, 4)); // output 24
 * console.log(curriedMultiply(2, 3, 4)); // output 24
 * ```
 */
export function curry<Fn extends Fn02>(length: 2, fn: Fn): CurriedFn02<Fn>;

/**
 * Currying function that converts a multi-argument function
 * into a series of single-argument functions.
 *
 * @param length The number of arguments for the curried function.
 * @param fn The function to be curried.
 * @returns The curried function.
 *
 * @example
 * ```ts
 * function multiply(
 *   a: number,
 *   b: number,
 *   c: number,
 * ): number {
 *   return a * b * c;
 * }
 *
 * const curriedMultiply = curry(3, multiply);
 *
 * console.log(curriedMultiply(2)(3)(4)); // output 24
 * console.log(curriedMultiply(2, 3)(4)); // output 24
 * console.log(curriedMultiply(2)(3, 4)); // output 24
 * console.log(curriedMultiply(2, 3, 4)); // output 24
 * ```
 */
export function curry<Fn extends Fn03>(length: 3, fn: Fn): CurriedFn03<Fn>;

/**
 * Currying function that converts a multi-argument function
 * into a series of single-argument functions.
 *
 * @param length The number of arguments for the curried function.
 * @param fn The function to be curried.
 * @returns The curried function.
 *
 * @example
 * ```ts
 * function multiply(
 *   a: number,
 *   b: number,
 *   c: number,
 * ): number {
 *   return a * b * c;
 * }
 *
 * const curriedMultiply = curry(3, multiply);
 *
 * console.log(curriedMultiply(2)(3)(4)); // output 24
 * console.log(curriedMultiply(2, 3)(4)); // output 24
 * console.log(curriedMultiply(2)(3, 4)); // output 24
 * console.log(curriedMultiply(2, 3, 4)); // output 24
 * ```
 */
export function curry<Fn extends Fn04>(length: 4, fn: Fn): CurriedFn04<Fn>;

/**
 * Currying function that converts a multi-argument function
 * into a series of single-argument functions.
 *
 * @param length The number of arguments for the curried function.
 * @param fn The function to be curried.
 * @returns The curried function.
 *
 * @example
 * ```ts
 * function multiply(
 *   a: number,
 *   b: number,
 *   c: number,
 * ): number {
 *   return a * b * c;
 * }
 *
 * const curriedMultiply = curry(3, multiply);
 *
 * console.log(curriedMultiply(2)(3)(4)); // output 24
 * console.log(curriedMultiply(2, 3)(4)); // output 24
 * console.log(curriedMultiply(2)(3, 4)); // output 24
 * console.log(curriedMultiply(2, 3, 4)); // output 24
 * ```
 */
export function curry<Fn extends Fn05>(length: 5, fn: Fn): CurriedFn05<Fn>;

/**
 * Currying function that converts a multi-argument function
 * into a series of single-argument functions.
 *
 * @param length The number of arguments for the curried function.
 * @param fn The function to be curried.
 * @returns The curried function.
 *
 * @example
 * ```ts
 * function multiply(
 *   a: number,
 *   b: number,
 *   c: number,
 * ): number {
 *   return a * b * c;
 * }
 *
 * const curriedMultiply = curry(3, multiply);
 *
 * console.log(curriedMultiply(2)(3)(4)); // output 24
 * console.log(curriedMultiply(2, 3)(4)); // output 24
 * console.log(curriedMultiply(2)(3, 4)); // output 24
 * console.log(curriedMultiply(2, 3, 4)); // output 24
 * ```
 */
export function curry<Fn extends Fn06>(length: 6, fn: Fn): CurriedFn06<Fn>;

/**
 * Currying function that converts a multi-argument function
 * into a series of single-argument functions.
 *
 * @param length The number of arguments for the curried function.
 * @param fn The function to be curried.
 * @returns The curried function.
 *
 * @example
 * ```ts
 * function multiply(
 *   a: number,
 *   b: number,
 *   c: number,
 * ): number {
 *   return a * b * c;
 * }
 *
 * const curriedMultiply = curry(3, multiply);
 *
 * console.log(curriedMultiply(2)(3)(4)); // output 24
 * console.log(curriedMultiply(2, 3)(4)); // output 24
 * console.log(curriedMultiply(2)(3, 4)); // output 24
 * console.log(curriedMultiply(2, 3, 4)); // output 24
 * ```
 */
export function curry<Fn extends Fn07>(length: 7, fn: Fn): CurriedFn07<Fn>;

/**
 * Currying function that converts a multi-argument function
 * into a series of single-argument functions.
 *
 * @param length The number of arguments for the curried function.
 * @param fn The function to be curried.
 * @returns The curried function.
 *
 * @example
 * ```ts
 * function multiply(
 *   a: number,
 *   b: number,
 *   c: number,
 * ): number {
 *   return a * b * c;
 * }
 *
 * const curriedMultiply = curry(3, multiply);
 *
 * console.log(curriedMultiply(2)(3)(4)); // output 24
 * console.log(curriedMultiply(2, 3)(4)); // output 24
 * console.log(curriedMultiply(2)(3, 4)); // output 24
 * console.log(curriedMultiply(2, 3, 4)); // output 24
 * ```
 */
export function curry<Fn extends Fn08>(length: 8, fn: Fn): CurriedFn08<Fn>;

/**
 * Currying function that converts a multi-argument function
 * into a series of single-argument functions.
 *
 * @param length The number of arguments for the curried function.
 * @param fn The function to be curried.
 * @returns The curried function.
 *
 * @example
 * ```ts
 * function multiply(
 *   a: number,
 *   b: number,
 *   c: number,
 * ): number {
 *   return a * b * c;
 * }
 *
 * const curriedMultiply = curry(3, multiply);
 *
 * console.log(curriedMultiply(2)(3)(4)); // output 24
 * console.log(curriedMultiply(2, 3)(4)); // output 24
 * console.log(curriedMultiply(2)(3, 4)); // output 24
 * console.log(curriedMultiply(2, 3, 4)); // output 24
 * ```
 */
export function curry<Fn extends Fn09>(length: 9, fn: Fn): CurriedFn09<Fn>;

/**
 * Currying function that converts a multi-argument function
 * into a series of single-argument functions.
 *
 * @param length The number of arguments for the curried function.
 * @param fn The function to be curried.
 * @returns The curried function.
 *
 * @example
 * ```ts
 * function multiply(
 *   a: number,
 *   b: number,
 *   c: number,
 * ): number {
 *   return a * b * c;
 * }
 *
 * const curriedMultiply = curry(3, multiply);
 *
 * console.log(curriedMultiply(2)(3)(4)); // output 24
 * console.log(curriedMultiply(2, 3)(4)); // output 24
 * console.log(curriedMultiply(2)(3, 4)); // output 24
 * console.log(curriedMultiply(2, 3, 4)); // output 24
 * ```
 */
export function curry<Fn extends Fn10>(length: 10, fn: Fn): CurriedFn10<Fn>;

/**
 * Currying function that converts a multi-argument function
 * into a series of single-argument functions.
 *
 * @param length The number of arguments for the curried function.
 * @param fn The function to be curried.
 * @returns The curried function.
 *
 * @example
 * ```ts
 * function multiply(
 *   a: number,
 *   b: number,
 *   c: number,
 * ): number {
 *   return a * b * c;
 * }
 *
 * const curriedMultiply = curry(3, multiply);
 *
 * console.log(curriedMultiply(2)(3)(4)); // output 24
 * console.log(curriedMultiply(2, 3)(4)); // output 24
 * console.log(curriedMultiply(2)(3, 4)); // output 24
 * console.log(curriedMultiply(2, 3, 4)); // output 24
 * ```
 */
export function curry<Fn extends Fn11>(length: 11, fn: Fn): CurriedFn11<Fn>;

/**
 * Currying function that converts a multi-argument function
 * into a series of single-argument functions.
 *
 * @param length The number of arguments for the curried function.
 * @param fn The function to be curried.
 * @returns The curried function.
 *
 * @example
 * ```ts
 * function multiply(
 *   a: number,
 *   b: number,
 *   c: number,
 * ): number {
 *   return a * b * c;
 * }
 *
 * const curriedMultiply = curry(3, multiply);
 *
 * console.log(curriedMultiply(2)(3)(4)); // output 24
 * console.log(curriedMultiply(2, 3)(4)); // output 24
 * console.log(curriedMultiply(2)(3, 4)); // output 24
 * console.log(curriedMultiply(2, 3, 4)); // output 24
 * ```
 */
export function curry<Fn extends Fn12>(length: 12, fn: Fn): CurriedFn12<Fn>;

/**
 * Currying function that converts a multi-argument function
 * into a series of single-argument functions.
 *
 * @param length The number of arguments for the curried function.
 * @param fn The function to be curried.
 * @returns The curried function.
 *
 * @example
 * ```ts
 * function multiply(
 *   a: number,
 *   b: number,
 *   c: number,
 * ): number {
 *   return a * b * c;
 * }
 *
 * const curriedMultiply = curry(3, multiply);
 *
 * console.log(curriedMultiply(2)(3)(4)); // output 24
 * console.log(curriedMultiply(2, 3)(4)); // output 24
 * console.log(curriedMultiply(2)(3, 4)); // output 24
 * console.log(curriedMultiply(2, 3, 4)); // output 24
 * ```
 */
export function curry<Fn extends Fn13>(length: 13, fn: Fn): CurriedFn13<Fn>;

/**
 * Currying function that converts a multi-argument function
 * into a series of single-argument functions.
 *
 * @param length The number of arguments for the curried function.
 * @param fn The function to be curried.
 * @returns The curried function.
 *
 * @example
 * ```ts
 * function multiply(
 *   a: number,
 *   b: number,
 *   c: number,
 * ): number {
 *   return a * b * c;
 * }
 *
 * const curriedMultiply = curry(3, multiply);
 *
 * console.log(curriedMultiply(2)(3)(4)); // output 24
 * console.log(curriedMultiply(2, 3)(4)); // output 24
 * console.log(curriedMultiply(2)(3, 4)); // output 24
 * console.log(curriedMultiply(2, 3, 4)); // output 24
 * ```
 */
export function curry<Fn extends Fn14>(length: 14, fn: Fn): CurriedFn14<Fn>;

/**
 * Currying function that converts a multi-argument function
 * into a series of single-argument functions.
 *
 * @param length The number of arguments for the curried function.
 * @param fn The function to be curried.
 * @returns The curried function.
 *
 * @example
 * ```ts
 * function multiply(
 *   a: number,
 *   b: number,
 *   c: number,
 * ): number {
 *   return a * b * c;
 * }
 *
 * const curriedMultiply = curry(3, multiply);
 *
 * console.log(curriedMultiply(2)(3)(4)); // output 24
 * console.log(curriedMultiply(2, 3)(4)); // output 24
 * console.log(curriedMultiply(2)(3, 4)); // output 24
 * console.log(curriedMultiply(2, 3, 4)); // output 24
 * ```
 */
export function curry<Fn extends Fn15>(length: 15, fn: Fn): CurriedFn15<Fn>;

/**
 * Currying function that converts a multi-argument function
 * into a series of single-argument functions.
 *
 * @param length The number of arguments for the curried function.
 * @param fn The function to be curried.
 * @returns The curried function.
 *
 * @example
 * ```ts
 * function multiply(
 *   a: number,
 *   b: number,
 *   c: number,
 * ): number {
 *   return a * b * c;
 * }
 *
 * const curriedMultiply = curry(3, multiply);
 *
 * console.log(curriedMultiply(2)(3)(4)); // output 24
 * console.log(curriedMultiply(2, 3)(4)); // output 24
 * console.log(curriedMultiply(2)(3, 4)); // output 24
 * console.log(curriedMultiply(2, 3, 4)); // output 24
 * ```
 */
export function curry<Fn extends Fn16>(length: 16, fn: Fn): CurriedFn16<Fn>;

/**
 * Currying function that converts a multi-argument function
 * into a series of single-argument functions.
 *
 * @param length The number of arguments for the curried function.
 * @param fn The function to be curried.
 * @returns The curried function.
 *
 * @example
 * ```ts
 * function multiply(
 *   a: number,
 *   b: number,
 *   c: number,
 * ): number {
 *   return a * b * c;
 * }
 *
 * const curriedMultiply = curry(3, multiply);
 *
 * console.log(curriedMultiply(2)(3)(4)); // output 24
 * console.log(curriedMultiply(2, 3)(4)); // output 24
 * console.log(curriedMultiply(2)(3, 4)); // output 24
 * console.log(curriedMultiply(2, 3, 4)); // output 24
 * ```
 */
export function curry<Fn extends Fn17>(length: 17, fn: Fn): CurriedFn17<Fn>;

/**
 * Currying function that converts a multi-argument function
 * into a series of single-argument functions.
 *
 * @param length The number of arguments for the curried function.
 * @param fn The function to be curried.
 * @returns The curried function.
 *
 * @example
 * ```ts
 * function multiply(
 *   a: number,
 *   b: number,
 *   c: number,
 * ): number {
 *   return a * b * c;
 * }
 *
 * const curriedMultiply = curry(3, multiply);
 *
 * console.log(curriedMultiply(2)(3)(4)); // output 24
 * console.log(curriedMultiply(2, 3)(4)); // output 24
 * console.log(curriedMultiply(2)(3, 4)); // output 24
 * console.log(curriedMultiply(2, 3, 4)); // output 24
 * ```
 */
export function curry<Fn extends Fn18>(length: 18, fn: Fn): CurriedFn18<Fn>;

/**
 * Currying function that converts a multi-argument function
 * into a series of single-argument functions.
 *
 * @param length The number of arguments for the curried function.
 * @param fn The function to be curried.
 * @returns The curried function.
 *
 * @example
 * ```ts
 * function multiply(
 *   a: number,
 *   b: number,
 *   c: number,
 * ): number {
 *   return a * b * c;
 * }
 *
 * const curriedMultiply = curry(3, multiply);
 *
 * console.log(curriedMultiply(2)(3)(4)); // output 24
 * console.log(curriedMultiply(2, 3)(4)); // output 24
 * console.log(curriedMultiply(2)(3, 4)); // output 24
 * console.log(curriedMultiply(2, 3, 4)); // output 24
 * ```
 */
export function curry<Fn extends Fn19>(length: 19, fn: Fn): CurriedFn19<Fn>;

/**
 * Currying function that converts a multi-argument function
 * into a series of single-argument functions.
 *
 * @param length The number of arguments for the curried function.
 * @param fn The function to be curried.
 * @returns The curried function.
 *
 * @example
 * ```ts
 * function multiply(
 *   a: number,
 *   b: number,
 *   c: number,
 * ): number {
 *   return a * b * c;
 * }
 *
 * const curriedMultiply = curry(3, multiply);
 *
 * console.log(curriedMultiply(2)(3)(4)); // output 24
 * console.log(curriedMultiply(2, 3)(4)); // output 24
 * console.log(curriedMultiply(2)(3, 4)); // output 24
 * console.log(curriedMultiply(2, 3, 4)); // output 24
 * ```
 */
export function curry<Fn extends Fn20>(length: 20, fn: Fn): CurriedFn20<Fn>;

/**
 * Currying function that converts a multi-argument function
 * into a series of single-argument functions.
 *
 * @param length The number of arguments for the curried function.
 * @param fn The function to be curried.
 * @returns The curried function.
 *
 * @example
 * ```ts
 * function multiply(
 *   a: number,
 *   b: number,
 *   c: number,
 * ): number {
 *   return a * b * c;
 * }
 *
 * const curriedMultiply = curry(3, multiply);
 *
 * console.log(curriedMultiply(2)(3)(4)); // output 24
 * console.log(curriedMultiply(2, 3)(4)); // output 24
 * console.log(curriedMultiply(2)(3, 4)); // output 24
 * console.log(curriedMultiply(2, 3, 4)); // output 24
 * ```
 */
export function curry<Fn extends Fn21>(length: 21, fn: Fn): CurriedFn21<Fn>;

/**
 * Currying function that converts a multi-argument function
 * into a series of single-argument functions.
 *
 * @param length The number of arguments for the curried function.
 * @param fn The function to be curried.
 * @returns The curried function.
 *
 * @example
 * ```ts
 * function multiply(
 *   a: number,
 *   b: number,
 *   c: number,
 * ): number {
 *   return a * b * c;
 * }
 *
 * const curriedMultiply = curry(3, multiply);
 *
 * console.log(curriedMultiply(2)(3)(4)); // output 24
 * console.log(curriedMultiply(2, 3)(4)); // output 24
 * console.log(curriedMultiply(2)(3, 4)); // output 24
 * console.log(curriedMultiply(2, 3, 4)); // output 24
 * ```
 */
export function curry<Fn extends Fn22>(length: 22, fn: Fn): CurriedFn22<Fn>;

/**
 * Currying function that converts a multi-argument function
 * into a series of single-argument functions.
 *
 * @param length The number of arguments for the curried function.
 * @param fn The function to be curried.
 * @returns The curried function.
 *
 * @example
 * ```ts
 * function multiply(
 *   a: number,
 *   b: number,
 *   c: number,
 * ): number {
 *   return a * b * c;
 * }
 *
 * const curriedMultiply = curry(3, multiply);
 *
 * console.log(curriedMultiply(2)(3)(4)); // output 24
 * console.log(curriedMultiply(2, 3)(4)); // output 24
 * console.log(curriedMultiply(2)(3, 4)); // output 24
 * console.log(curriedMultiply(2, 3, 4)); // output 24
 * ```
 */
export function curry<Fn extends Fn23>(length: 23, fn: Fn): CurriedFn23<Fn>;

/**
 * Currying function that converts a multi-argument function
 * into a series of single-argument functions.
 *
 * @param length The number of arguments for the curried function.
 * @param fn The function to be curried.
 * @returns The curried function.
 *
 * @example
 * ```ts
 * function multiply(
 *   a: number,
 *   b: number,
 *   c: number,
 * ): number {
 *   return a * b * c;
 * }
 *
 * const curriedMultiply = curry(3, multiply);
 *
 * console.log(curriedMultiply(2)(3)(4)); // output 24
 * console.log(curriedMultiply(2, 3)(4)); // output 24
 * console.log(curriedMultiply(2)(3, 4)); // output 24
 * console.log(curriedMultiply(2, 3, 4)); // output 24
 * ```
 */
export function curry<Fn extends Fn24>(length: 24, fn: Fn): CurriedFn24<Fn>;

/**
 * Currying function that converts a multi-argument function
 * into a series of single-argument functions.
 *
 * @param length The number of arguments for the curried function.
 * @param fn The function to be curried.
 * @returns The curried function.
 *
 * @example
 * ```ts
 * function multiply(
 *   a: number,
 *   b: number,
 *   c: number,
 * ): number {
 *   return a * b * c;
 * }
 *
 * const curriedMultiply = curry(3, multiply);
 *
 * console.log(curriedMultiply(2)(3)(4)); // output 24
 * console.log(curriedMultiply(2, 3)(4)); // output 24
 * console.log(curriedMultiply(2)(3, 4)); // output 24
 * console.log(curriedMultiply(2, 3, 4)); // output 24
 * ```
 */
export function curry<Fn extends Fn25>(length: 25, fn: Fn): CurriedFn25<Fn>;

/**
 * Currying function that converts a multi-argument function
 * into a series of single-argument functions.
 *
 * @param length The number of arguments for the curried function.
 * @param fn The function to be curried.
 * @returns The curried function.
 *
 * @example
 * ```ts
 * function multiply(
 *   a: number,
 *   b: number,
 *   c: number,
 * ): number {
 *   return a * b * c;
 * }
 *
 * const curriedMultiply = curry(3, multiply);
 *
 * console.log(curriedMultiply(2)(3)(4)); // output 24
 * console.log(curriedMultiply(2, 3)(4)); // output 24
 * console.log(curriedMultiply(2)(3, 4)); // output 24
 * console.log(curriedMultiply(2, 3, 4)); // output 24
 * ```
 */
export function curry<Fn extends Fn26>(length: 26, fn: Fn): CurriedFn26<Fn>;

/**
 * Currying function that converts a multi-argument function
 * into a series of single-argument functions.
 *
 * @param length The number of arguments for the curried function.
 * @param fn The function to be curried.
 * @returns The curried function.
 *
 * @example
 * ```ts
 * function multiply(
 *   a: number,
 *   b: number,
 *   c: number,
 * ): number {
 *   return a * b * c;
 * }
 *
 * const curriedMultiply = curry(3, multiply);
 *
 * console.log(curriedMultiply(2)(3)(4)); // output 24
 * console.log(curriedMultiply(2, 3)(4)); // output 24
 * console.log(curriedMultiply(2)(3, 4)); // output 24
 * console.log(curriedMultiply(2, 3, 4)); // output 24
 * ```
 */
export function curry<Fn extends Fn27>(length: 27, fn: Fn): CurriedFn27<Fn>;

/**
 * Currying function that converts a multi-argument function
 * into a series of single-argument functions.
 *
 * @param length The number of arguments for the curried function.
 * @param fn The function to be curried.
 * @returns The curried function.
 *
 * @example
 * ```ts
 * function multiply(
 *   a: number,
 *   b: number,
 *   c: number,
 * ): number {
 *   return a * b * c;
 * }
 *
 * const curriedMultiply = curry(3, multiply);
 *
 * console.log(curriedMultiply(2)(3)(4)); // output 24
 * console.log(curriedMultiply(2, 3)(4)); // output 24
 * console.log(curriedMultiply(2)(3, 4)); // output 24
 * console.log(curriedMultiply(2, 3, 4)); // output 24
 * ```
 */
export function curry<Fn extends Fn28>(length: 28, fn: Fn): CurriedFn28<Fn>;

/**
 * Currying function that converts a multi-argument function
 * into a series of single-argument functions.
 *
 * @param length The number of arguments for the curried function.
 * @param fn The function to be curried.
 * @returns The curried function.
 *
 * @example
 * ```ts
 * function multiply(
 *   a: number,
 *   b: number,
 *   c: number,
 * ): number {
 *   return a * b * c;
 * }
 *
 * const curriedMultiply = curry(3, multiply);
 *
 * console.log(curriedMultiply(2)(3)(4)); // output 24
 * console.log(curriedMultiply(2, 3)(4)); // output 24
 * console.log(curriedMultiply(2)(3, 4)); // output 24
 * console.log(curriedMultiply(2, 3, 4)); // output 24
 * ```
 */
export function curry<Fn extends Fn29>(length: 29, fn: Fn): CurriedFn29<Fn>;

/**
 * Currying function that converts a multi-argument function
 * into a series of single-argument functions.
 *
 * @param length The number of arguments for the curried function.
 * @param fn The function to be curried.
 * @returns The curried function.
 *
 * @example
 * ```ts
 * function multiply(
 *   a: number,
 *   b: number,
 *   c: number,
 * ): number {
 *   return a * b * c;
 * }
 *
 * const curriedMultiply = curry(3, multiply);
 *
 * console.log(curriedMultiply(2)(3)(4)); // output 24
 * console.log(curriedMultiply(2, 3)(4)); // output 24
 * console.log(curriedMultiply(2)(3, 4)); // output 24
 * console.log(curriedMultiply(2, 3, 4)); // output 24
 * ```
 */
export function curry<Fn extends Fn30>(length: 30, fn: Fn): CurriedFn30<Fn>;

/**
 * Currying function that converts a multi-argument function
 * into a series of single-argument functions.
 *
 * @param length The number of arguments for the curried function.
 * @param fn The function to be curried.
 * @returns The curried function.
 *
 * @example
 * ```ts
 * function multiply(
 *   a: number,
 *   b: number,
 *   c: number,
 * ): number {
 *   return a * b * c;
 * }
 *
 * const curriedMultiply = curry(3, multiply);
 *
 * console.log(curriedMultiply(2)(3)(4)); // output 24
 * console.log(curriedMultiply(2, 3)(4)); // output 24
 * console.log(curriedMultiply(2)(3, 4)); // output 24
 * console.log(curriedMultiply(2, 3, 4)); // output 24
 * ```
 */
export function curry<Fn extends Fn31>(length: 31, fn: Fn): CurriedFn31<Fn>;

/**
 * Currying function that converts a multi-argument function
 * into a series of single-argument functions.
 *
 * @param length The number of arguments for the curried function.
 * @param fn The function to be curried.
 * @returns The curried function.
 *
 * @example
 * ```ts
 * function multiply(
 *   a: number,
 *   b: number,
 *   c: number,
 * ): number {
 *   return a * b * c;
 * }
 *
 * const curriedMultiply = curry(3, multiply);
 *
 * console.log(curriedMultiply(2)(3)(4)); // output 24
 * console.log(curriedMultiply(2, 3)(4)); // output 24
 * console.log(curriedMultiply(2)(3, 4)); // output 24
 * console.log(curriedMultiply(2, 3, 4)); // output 24
 * ```
 */
export function curry<Fn extends Fn32>(length: 32, fn: Fn): CurriedFn32<Fn>;


// implement
export function curry(length: number, fn: (...args: any[]) => any): any {
  const curried = (...args: any[]) =>
    args.length < length
      ? (...rest: any[]) => curried(...args, ...rest)
      : fn(...args);
  return curried;
}


type Fn00 = (...args: []) => any;

type Fn01 = (...args: [any]) => any;

type Fn02 = (...args: [any, any]) => any;

type Fn03 = (...args: [any, any, any]) => any;

type Fn04 = (...args: [any, any, any, any]) => any;

type Fn05 = (...args: [any, any, any, any, any]) => any;

type Fn06 = (...args: [any, any, any, any, any, any]) => any;

type Fn07 = (...args: [any, any, any, any, any, any, any]) => any;

type Fn08 = (...args: [any, any, any, any, any, any, any, any]) => any;

type Fn09 = (...args: [any, any, any, any, any, any, any, any, any]) => any;

type Fn10 = (...args: [any, any, any, any, any, any, any, any, any, any]) => any;

type Fn11 = (...args: [any, any, any, any, any, any, any, any, any, any, any]) => any;

type Fn12 = (...args: [any, any, any, any, any, any, any, any, any, any, any, any]) => any;

type Fn13 = (...args: [any, any, any, any, any, any, any, any, any, any, any, any, any]) => any;

type Fn14 = (...args: [any, any, any, any, any, any, any, any, any, any, any, any, any, any]) => any;

type Fn15 = (...args: [any, any, any, any, any, any, any, any, any, any, any, any, any, any, any]) => any;

type Fn16 = (...args: [any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any]) => any;

type Fn17 = (...args: [any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any]) => any;

type Fn18 = (...args: [any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any]) => any;

type Fn19 = (...args: [any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any]) => any;

type Fn20 = (...args: [any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any]) => any;

type Fn21 = (...args: [any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any]) => any;

type Fn22 = (...args: [any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any]) => any;

type Fn23 = (...args: [any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any]) => any;

type Fn24 = (...args: [any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any]) => any;

type Fn25 = (...args: [any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any]) => any;

type Fn26 = (...args: [any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any]) => any;

type Fn27 = (...args: [any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any]) => any;

type Fn28 = (...args: [any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any]) => any;

type Fn29 = (...args: [any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any]) => any;

type Fn30 = (...args: [any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any]) => any;

type Fn31 = (...args: [any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any]) => any;

type Fn32 = (...args: [any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any]) => any;


type CurriedFn00<Fn extends Fn00> =
  Fn extends (...args: []) => infer R
    ? ((...args: []) => R)
    : never;

type CurriedFn01<Fn extends Fn01> =
  Fn extends (...args: [infer P00]) => infer R
    ? ((...args: [P00]) => R)
    : never;

type CurriedFn02<Fn extends Fn02> =
  Fn extends (...args: [infer P00, infer P01]) => infer R
    ? ((...args: [P00, P01]) => R)
      & ((...args: [P00]) => CurriedFn01<(...args: [P01]) => R>)
    : never;

type CurriedFn03<Fn extends Fn03> =
  Fn extends (...args: [infer P00, infer P01, infer P02]) => infer R
    ? ((...args: [P00, P01, P02]) => R)
      & ((...args: [P00]) => CurriedFn02<(...args: [P01, P02]) => R>)
      & ((...args: [P00, P01]) => CurriedFn01<(...args: [P02]) => R>)
    : never;

type CurriedFn04<Fn extends Fn04> =
  Fn extends (...args: [infer P00, infer P01, infer P02, infer P03]) => infer R
    ? ((...args: [P00, P01, P02, P03]) => R)
      & ((...args: [P00]) => CurriedFn03<(...args: [P01, P02, P03]) => R>)
      & ((...args: [P00, P01]) => CurriedFn02<(...args: [P02, P03]) => R>)
      & ((...args: [P00, P01, P02]) => CurriedFn01<(...args: [P03]) => R>)
    : never;

type CurriedFn05<Fn extends Fn05> =
  Fn extends (...args: [infer P00, infer P01, infer P02, infer P03, infer P04]) => infer R
    ? ((...args: [P00, P01, P02, P03, P04]) => R)
      & ((...args: [P00]) => CurriedFn04<(...args: [P01, P02, P03, P04]) => R>)
      & ((...args: [P00, P01]) => CurriedFn03<(...args: [P02, P03, P04]) => R>)
      & ((...args: [P00, P01, P02]) => CurriedFn02<(...args: [P03, P04]) => R>)
      & ((...args: [P00, P01, P02, P03]) => CurriedFn01<(...args: [P04]) => R>)
    : never;

type CurriedFn06<Fn extends Fn06> =
  Fn extends (...args: [infer P00, infer P01, infer P02, infer P03, infer P04, infer P05]) => infer R
    ? ((...args: [P00, P01, P02, P03, P04, P05]) => R)
      & ((...args: [P00]) => CurriedFn05<(...args: [P01, P02, P03, P04, P05]) => R>)
      & ((...args: [P00, P01]) => CurriedFn04<(...args: [P02, P03, P04, P05]) => R>)
      & ((...args: [P00, P01, P02]) => CurriedFn03<(...args: [P03, P04, P05]) => R>)
      & ((...args: [P00, P01, P02, P03]) => CurriedFn02<(...args: [P04, P05]) => R>)
      & ((...args: [P00, P01, P02, P03, P04]) => CurriedFn01<(...args: [P05]) => R>)
    : never;

type CurriedFn07<Fn extends Fn07> =
  Fn extends (...args: [infer P00, infer P01, infer P02, infer P03, infer P04, infer P05, infer P06]) => infer R
    ? ((...args: [P00, P01, P02, P03, P04, P05, P06]) => R)
      & ((...args: [P00]) => CurriedFn06<(...args: [P01, P02, P03, P04, P05, P06]) => R>)
      & ((...args: [P00, P01]) => CurriedFn05<(...args: [P02, P03, P04, P05, P06]) => R>)
      & ((...args: [P00, P01, P02]) => CurriedFn04<(...args: [P03, P04, P05, P06]) => R>)
      & ((...args: [P00, P01, P02, P03]) => CurriedFn03<(...args: [P04, P05, P06]) => R>)
      & ((...args: [P00, P01, P02, P03, P04]) => CurriedFn02<(...args: [P05, P06]) => R>)
      & ((...args: [P00, P01, P02, P03, P04, P05]) => CurriedFn01<(...args: [P06]) => R>)
    : never;

type CurriedFn08<Fn extends Fn08> =
  Fn extends (...args: [infer P00, infer P01, infer P02, infer P03, infer P04, infer P05, infer P06, infer P07]) => infer R
    ? ((...args: [P00, P01, P02, P03, P04, P05, P06, P07]) => R)
      & ((...args: [P00]) => CurriedFn07<(...args: [P01, P02, P03, P04, P05, P06, P07]) => R>)
      & ((...args: [P00, P01]) => CurriedFn06<(...args: [P02, P03, P04, P05, P06, P07]) => R>)
      & ((...args: [P00, P01, P02]) => CurriedFn05<(...args: [P03, P04, P05, P06, P07]) => R>)
      & ((...args: [P00, P01, P02, P03]) => CurriedFn04<(...args: [P04, P05, P06, P07]) => R>)
      & ((...args: [P00, P01, P02, P03, P04]) => CurriedFn03<(...args: [P05, P06, P07]) => R>)
      & ((...args: [P00, P01, P02, P03, P04, P05]) => CurriedFn02<(...args: [P06, P07]) => R>)
      & ((...args: [P00, P01, P02, P03, P04, P05, P06]) => CurriedFn01<(...args: [P07]) => R>)
    : never;

type CurriedFn09<Fn extends Fn09> =
  Fn extends (...args: [infer P00, infer P01, infer P02, infer P03, infer P04, infer P05, infer P06, infer P07, infer P08]) => infer R
    ? ((...args: [P00, P01, P02, P03, P04, P05, P06, P07, P08]) => R)
      & ((...args: [P00]) => CurriedFn08<(...args: [P01, P02, P03, P04, P05, P06, P07, P08]) => R>)
      & ((...args: [P00, P01]) => CurriedFn07<(...args: [P02, P03, P04, P05, P06, P07, P08]) => R>)
      & ((...args: [P00, P01, P02]) => CurriedFn06<(...args: [P03, P04, P05, P06, P07, P08]) => R>)
      & ((...args: [P00, P01, P02, P03]) => CurriedFn05<(...args: [P04, P05, P06, P07, P08]) => R>)
      & ((...args: [P00, P01, P02, P03, P04]) => CurriedFn04<(...args: [P05, P06, P07, P08]) => R>)
      & ((...args: [P00, P01, P02, P03, P04, P05]) => CurriedFn03<(...args: [P06, P07, P08]) => R>)
      & ((...args: [P00, P01, P02, P03, P04, P05, P06]) => CurriedFn02<(...args: [P07, P08]) => R>)
      & ((...args: [P00, P01, P02, P03, P04, P05, P06, P07]) => CurriedFn01<(...args: [P08]) => R>)
    : never;

type CurriedFn10<Fn extends Fn10> =
  Fn extends (...args: [infer P00, infer P01, infer P02, infer P03, infer P04, infer P05, infer P06, infer P07, infer P08, infer P09]) => infer R
    ? ((...args: [P00, P01, P02, P03, P04, P05, P06, P07, P08, P09]) => R)
      & ((...args: [P00]) => CurriedFn09<(...args: [P01, P02, P03, P04, P05, P06, P07, P08, P09]) => R>)
      & ((...args: [P00, P01]) => CurriedFn08<(...args: [P02, P03, P04, P05, P06, P07, P08, P09]) => R>)
      & ((...args: [P00, P01, P02]) => CurriedFn07<(...args: [P03, P04, P05, P06, P07, P08, P09]) => R>)
      & ((...args: [P00, P01, P02, P03]) => CurriedFn06<(...args: [P04, P05, P06, P07, P08, P09]) => R>)
      & ((...args: [P00, P01, P02, P03, P04]) => CurriedFn05<(...args: [P05, P06, P07, P08, P09]) => R>)
      & ((...args: [P00, P01, P02, P03, P04, P05]) => CurriedFn04<(...args: [P06, P07, P08, P09]) => R>)
      & ((...args: [P00, P01, P02, P03, P04, P05, P06]) => CurriedFn03<(...args: [P07, P08, P09]) => R>)
      & ((...args: [P00, P01, P02, P03, P04, P05, P06, P07]) => CurriedFn02<(...args: [P08, P09]) => R>)
      & ((...args: [P00, P01, P02, P03, P04, P05, P06, P07, P08]) => CurriedFn01<(...args: [P09]) => R>)
    : never;

type CurriedFn11<Fn extends Fn11> =
  Fn extends (...args: [infer P00, infer P01, infer P02, infer P03, infer P04, infer P05, infer P06, infer P07, infer P08, infer P09, infer P10]) => infer R
    ? ((...args: [P00, P01, P02, P03, P04, P05, P06, P07, P08, P09, P10]) => R)
      & ((...args: [P00]) => CurriedFn10<(...args: [P01, P02, P03, P04, P05, P06, P07, P08, P09, P10]) => R>)
      & ((...args: [P00, P01]) => CurriedFn09<(...args: [P02, P03, P04, P05, P06, P07, P08, P09, P10]) => R>)
      & ((...args: [P00, P01, P02]) => CurriedFn08<(...args: [P03, P04, P05, P06, P07, P08, P09, P10]) => R>)
      & ((...args: [P00, P01, P02, P03]) => CurriedFn07<(...args: [P04, P05, P06, P07, P08, P09, P10]) => R>)
      & ((...args: [P00, P01, P02, P03, P04]) => CurriedFn06<(...args: [P05, P06, P07, P08, P09, P10]) => R>)
      & ((...args: [P00, P01, P02, P03, P04, P05]) => CurriedFn05<(...args: [P06, P07, P08, P09, P10]) => R>)
      & ((...args: [P00, P01, P02, P03, P04, P05, P06]) => CurriedFn04<(...args: [P07, P08, P09, P10]) => R>)
      & ((...args: [P00, P01, P02, P03, P04, P05, P06, P07]) => CurriedFn03<(...args: [P08, P09, P10]) => R>)
      & ((...args: [P00, P01, P02, P03, P04, P05, P06, P07, P08]) => CurriedFn02<(...args: [P09, P10]) => R>)
      & ((...args: [P00, P01, P02, P03, P04, P05, P06, P07, P08, P09]) => CurriedFn01<(...args: [P10]) => R>)
    : never;

type CurriedFn12<Fn extends Fn12> =
  Fn extends (...args: [infer P00, infer P01, infer P02, infer P03, infer P04, infer P05, infer P06, infer P07, infer P08, infer P09, infer P10, infer P11]) => infer R
    ? ((...args: [P00, P01, P02, P03, P04, P05, P06, P07, P08, P09, P10, P11]) => R)
      & ((...args: [P00]) => CurriedFn11<(...args: [P01, P02, P03, P04, P05, P06, P07, P08, P09, P10, P11]) => R>)
      & ((...args: [P00, P01]) => CurriedFn10<(...args: [P02, P03, P04, P05, P06, P07, P08, P09, P10, P11]) => R>)
      & ((...args: [P00, P01, P02]) => CurriedFn09<(...args: [P03, P04, P05, P06, P07, P08, P09, P10, P11]) => R>)
      & ((...args: [P00, P01, P02, P03]) => CurriedFn08<(...args: [P04, P05, P06, P07, P08, P09, P10, P11]) => R>)
      & ((...args: [P00, P01, P02, P03, P04]) => CurriedFn07<(...args: [P05, P06, P07, P08, P09, P10, P11]) => R>)
      & ((...args: [P00, P01, P02, P03, P04, P05]) => CurriedFn06<(...args: [P06, P07, P08, P09, P10, P11]) => R>)
      & ((...args: [P00, P01, P02, P03, P04, P05, P06]) => CurriedFn05<(...args: [P07, P08, P09, P10, P11]) => R>)
      & ((...args: [P00, P01, P02, P03, P04, P05, P06, P07]) => CurriedFn04<(...args: [P08, P09, P10, P11]) => R>)
      & ((...args: [P00, P01, P02, P03, P04, P05, P06, P07, P08]) => CurriedFn03<(...args: [P09, P10, P11]) => R>)
      & ((...args: [P00, P01, P02, P03, P04, P05, P06, P07, P08, P09]) => CurriedFn02<(...args: [P10, P11]) => R>)
      & ((...args: [P00, P01, P02, P03, P04, P05, P06, P07, P08, P09, P10]) => CurriedFn01<(...args: [P11]) => R>)
    : never;

type CurriedFn13<Fn extends Fn13> =
  Fn extends (...args: [infer P00, infer P01, infer P02, infer P03, infer P04, infer P05, infer P06, infer P07, infer P08, infer P09, infer P10, infer P11, infer P12]) => infer R
    ? ((...args: [P00, P01, P02, P03, P04, P05, P06, P07, P08, P09, P10, P11, P12]) => R)
      & ((...args: [P00]) => CurriedFn12<(...args: [P01, P02, P03, P04, P05, P06, P07, P08, P09, P10, P11, P12]) => R>)
      & ((...args: [P00, P01]) => CurriedFn11<(...args: [P02, P03, P04, P05, P06, P07, P08, P09, P10, P11, P12]) => R>)
      & ((...args: [P00, P01, P02]) => CurriedFn10<(...args: [P03, P04, P05, P06, P07, P08, P09, P10, P11, P12]) => R>)
      & ((...args: [P00, P01, P02, P03]) => CurriedFn09<(...args: [P04, P05, P06, P07, P08, P09, P10, P11, P12]) => R>)
      & ((...args: [P00, P01, P02, P03, P04]) => CurriedFn08<(...args: [P05, P06, P07, P08, P09, P10, P11, P12]) => R>)
      & ((...args: [P00, P01, P02, P03, P04, P05]) => CurriedFn07<(...args: [P06, P07, P08, P09, P10, P11, P12]) => R>)
      & ((...args: [P00, P01, P02, P03, P04, P05, P06]) => CurriedFn06<(...args: [P07, P08, P09, P10, P11, P12]) => R>)
      & ((...args: [P00, P01, P02, P03, P04, P05, P06, P07]) => CurriedFn05<(...args: [P08, P09, P10, P11, P12]) => R>)
      & ((...args: [P00, P01, P02, P03, P04, P05, P06, P07, P08]) => CurriedFn04<(...args: [P09, P10, P11, P12]) => R>)
      & ((...args: [P00, P01, P02, P03, P04, P05, P06, P07, P08, P09]) => CurriedFn03<(...args: [P10, P11, P12]) => R>)
      & ((...args: [P00, P01, P02, P03, P04, P05, P06, P07, P08, P09, P10]) => CurriedFn02<(...args: [P11, P12]) => R>)
      & ((...args: [P00, P01, P02, P03, P04, P05, P06, P07, P08, P09, P10, P11]) => CurriedFn01<(...args: [P12]) => R>)
    : never;

type CurriedFn14<Fn extends Fn14> =
  Fn extends (...args: [infer P00, infer P01, infer P02, infer P03, infer P04, infer P05, infer P06, infer P07, infer P08, infer P09, infer P10, infer P11, infer P12, infer P13]) => infer R
    ? ((...args: [P00, P01, P02, P03, P04, P05, P06, P07, P08, P09, P10, P11, P12, P13]) => R)
      & ((...args: [P00]) => CurriedFn13<(...args: [P01, P02, P03, P04, P05, P06, P07, P08, P09, P10, P11, P12, P13]) => R>)
      & ((...args: [P00, P01]) => CurriedFn12<(...args: [P02, P03, P04, P05, P06, P07, P08, P09, P10, P11, P12, P13]) => R>)
      & ((...args: [P00, P01, P02]) => CurriedFn11<(...args: [P03, P04, P05, P06, P07, P08, P09, P10, P11, P12, P13]) => R>)
      & ((...args: [P00, P01, P02, P03]) => CurriedFn10<(...args: [P04, P05, P06, P07, P08, P09, P10, P11, P12, P13]) => R>)
      & ((...args: [P00, P01, P02, P03, P04]) => CurriedFn09<(...args: [P05, P06, P07, P08, P09, P10, P11, P12, P13]) => R>)
      & ((...args: [P00, P01, P02, P03, P04, P05]) => CurriedFn08<(...args: [P06, P07, P08, P09, P10, P11, P12, P13]) => R>)
      & ((...args: [P00, P01, P02, P03, P04, P05, P06]) => CurriedFn07<(...args: [P07, P08, P09, P10, P11, P12, P13]) => R>)
      & ((...args: [P00, P01, P02, P03, P04, P05, P06, P07]) => CurriedFn06<(...args: [P08, P09, P10, P11, P12, P13]) => R>)
      & ((...args: [P00, P01, P02, P03, P04, P05, P06, P07, P08]) => CurriedFn05<(...args: [P09, P10, P11, P12, P13]) => R>)
      & ((...args: [P00, P01, P02, P03, P04, P05, P06, P07, P08, P09]) => CurriedFn04<(...args: [P10, P11, P12, P13]) => R>)
      & ((...args: [P00, P01, P02, P03, P04, P05, P06, P07, P08, P09, P10]) => CurriedFn03<(...args: [P11, P12, P13]) => R>)
      & ((...args: [P00, P01, P02, P03, P04, P05, P06, P07, P08, P09, P10, P11]) => CurriedFn02<(...args: [P12, P13]) => R>)
      & ((...args: [P00, P01, P02, P03, P04, P05, P06, P07, P08, P09, P10, P11, P12]) => CurriedFn01<(...args: [P13]) => R>)
    : never;

type CurriedFn15<Fn extends Fn15> =
  Fn extends (...args: [infer P00, infer P01, infer P02, infer P03, infer P04, infer P05, infer P06, infer P07, infer P08, infer P09, infer P10, infer P11, infer P12, infer P13, infer P14]) => infer R
    ? ((...args: [P00, P01, P02, P03, P04, P05, P06, P07, P08, P09, P10, P11, P12, P13, P14]) => R)
      & ((...args: [P00]) => CurriedFn14<(...args: [P01, P02, P03, P04, P05, P06, P07, P08, P09, P10, P11, P12, P13, P14]) => R>)
      & ((...args: [P00, P01]) => CurriedFn13<(...args: [P02, P03, P04, P05, P06, P07, P08, P09, P10, P11, P12, P13, P14]) => R>)
      & ((...args: [P00, P01, P02]) => CurriedFn12<(...args: [P03, P04, P05, P06, P07, P08, P09, P10, P11, P12, P13, P14]) => R>)
      & ((...args: [P00, P01, P02, P03]) => CurriedFn11<(...args: [P04, P05, P06, P07, P08, P09, P10, P11, P12, P13, P14]) => R>)
      & ((...args: [P00, P01, P02, P03, P04]) => CurriedFn10<(...args: [P05, P06, P07, P08, P09, P10, P11, P12, P13, P14]) => R>)
      & ((...args: [P00, P01, P02, P03, P04, P05]) => CurriedFn09<(...args: [P06, P07, P08, P09, P10, P11, P12, P13, P14]) => R>)
      & ((...args: [P00, P01, P02, P03, P04, P05, P06]) => CurriedFn08<(...args: [P07, P08, P09, P10, P11, P12, P13, P14]) => R>)
      & ((...args: [P00, P01, P02, P03, P04, P05, P06, P07]) => CurriedFn07<(...args: [P08, P09, P10, P11, P12, P13, P14]) => R>)
      & ((...args: [P00, P01, P02, P03, P04, P05, P06, P07, P08]) => CurriedFn06<(...args: [P09, P10, P11, P12, P13, P14]) => R>)
      & ((...args: [P00, P01, P02, P03, P04, P05, P06, P07, P08, P09]) => CurriedFn05<(...args: [P10, P11, P12, P13, P14]) => R>)
      & ((...args: [P00, P01, P02, P03, P04, P05, P06, P07, P08, P09, P10]) => CurriedFn04<(...args: [P11, P12, P13, P14]) => R>)
      & ((...args: [P00, P01, P02, P03, P04, P05, P06, P07, P08, P09, P10, P11]) => CurriedFn03<(...args: [P12, P13, P14]) => R>)
      & ((...args: [P00, P01, P02, P03, P04, P05, P06, P07, P08, P09, P10, P11, P12]) => CurriedFn02<(...args: [P13, P14]) => R>)
      & ((...args: [P00, P01, P02, P03, P04, P05, P06, P07, P08, P09, P10, P11, P12, P13]) => CurriedFn01<(...args: [P14]) => R>)
    : never;

type CurriedFn16<Fn extends Fn16> =
  Fn extends (...args: [infer P00, infer P01, infer P02, infer P03, infer P04, infer P05, infer P06, infer P07, infer P08, infer P09, infer P10, infer P11, infer P12, infer P13, infer P14, infer P15]) => infer R
    ? ((...args: [P00, P01, P02, P03, P04, P05, P06, P07, P08, P09, P10, P11, P12, P13, P14, P15]) => R)
      & ((...args: [P00]) => CurriedFn15<(...args: [P01, P02, P03, P04, P05, P06, P07, P08, P09, P10, P11, P12, P13, P14, P15]) => R>)
      & ((...args: [P00, P01]) => CurriedFn14<(...args: [P02, P03, P04, P05, P06, P07, P08, P09, P10, P11, P12, P13, P14, P15]) => R>)
      & ((...args: [P00, P01, P02]) => CurriedFn13<(...args: [P03, P04, P05, P06, P07, P08, P09, P10, P11, P12, P13, P14, P15]) => R>)
      & ((...args: [P00, P01, P02, P03]) => CurriedFn12<(...args: [P04, P05, P06, P07, P08, P09, P10, P11, P12, P13, P14, P15]) => R>)
      & ((...args: [P00, P01, P02, P03, P04]) => CurriedFn11<(...args: [P05, P06, P07, P08, P09, P10, P11, P12, P13, P14, P15]) => R>)
      & ((...args: [P00, P01, P02, P03, P04, P05]) => CurriedFn10<(...args: [P06, P07, P08, P09, P10, P11, P12, P13, P14, P15]) => R>)
      & ((...args: [P00, P01, P02, P03, P04, P05, P06]) => CurriedFn09<(...args: [P07, P08, P09, P10, P11, P12, P13, P14, P15]) => R>)
      & ((...args: [P00, P01, P02, P03, P04, P05, P06, P07]) => CurriedFn08<(...args: [P08, P09, P10, P11, P12, P13, P14, P15]) => R>)
      & ((...args: [P00, P01, P02, P03, P04, P05, P06, P07, P08]) => CurriedFn07<(...args: [P09, P10, P11, P12, P13, P14, P15]) => R>)
      & ((...args: [P00, P01, P02, P03, P04, P05, P06, P07, P08, P09]) => CurriedFn06<(...args: [P10, P11, P12, P13, P14, P15]) => R>)
      & ((...args: [P00, P01, P02, P03, P04, P05, P06, P07, P08, P09, P10]) => CurriedFn05<(...args: [P11, P12, P13, P14, P15]) => R>)
      & ((...args: [P00, P01, P02, P03, P04, P05, P06, P07, P08, P09, P10, P11]) => CurriedFn04<(...args: [P12, P13, P14, P15]) => R>)
      & ((...args: [P00, P01, P02, P03, P04, P05, P06, P07, P08, P09, P10, P11, P12]) => CurriedFn03<(...args: [P13, P14, P15]) => R>)
      & ((...args: [P00, P01, P02, P03, P04, P05, P06, P07, P08, P09, P10, P11, P12, P13]) => CurriedFn02<(...args: [P14, P15]) => R>)
      & ((...args: [P00, P01, P02, P03, P04, P05, P06, P07, P08, P09, P10, P11, P12, P13, P14]) => CurriedFn01<(...args: [P15]) => R>)
    : never;

type CurriedFn17<Fn extends Fn17> =
  Fn extends (...args: [infer P00, infer P01, infer P02, infer P03, infer P04, infer P05, infer P06, infer P07, infer P08, infer P09, infer P10, infer P11, infer P12, infer P13, infer P14, infer P15, infer P16]) => infer R
    ? ((...args: [P00, P01, P02, P03, P04, P05, P06, P07, P08, P09, P10, P11, P12, P13, P14, P15, P16]) => R)
      & ((...args: [P00]) => CurriedFn16<(...args: [P01, P02, P03, P04, P05, P06, P07, P08, P09, P10, P11, P12, P13, P14, P15, P16]) => R>)
      & ((...args: [P00, P01]) => CurriedFn15<(...args: [P02, P03, P04, P05, P06, P07, P08, P09, P10, P11, P12, P13, P14, P15, P16]) => R>)
      & ((...args: [P00, P01, P02]) => CurriedFn14<(...args: [P03, P04, P05, P06, P07, P08, P09, P10, P11, P12, P13, P14, P15, P16]) => R>)
      & ((...args: [P00, P01, P02, P03]) => CurriedFn13<(...args: [P04, P05, P06, P07, P08, P09, P10, P11, P12, P13, P14, P15, P16]) => R>)
      & ((...args: [P00, P01, P02, P03, P04]) => CurriedFn12<(...args: [P05, P06, P07, P08, P09, P10, P11, P12, P13, P14, P15, P16]) => R>)
      & ((...args: [P00, P01, P02, P03, P04, P05]) => CurriedFn11<(...args: [P06, P07, P08, P09, P10, P11, P12, P13, P14, P15, P16]) => R>)
      & ((...args: [P00, P01, P02, P03, P04, P05, P06]) => CurriedFn10<(...args: [P07, P08, P09, P10, P11, P12, P13, P14, P15, P16]) => R>)
      & ((...args: [P00, P01, P02, P03, P04, P05, P06, P07]) => CurriedFn09<(...args: [P08, P09, P10, P11, P12, P13, P14, P15, P16]) => R>)
      & ((...args: [P00, P01, P02, P03, P04, P05, P06, P07, P08]) => CurriedFn08<(...args: [P09, P10, P11, P12, P13, P14, P15, P16]) => R>)
      & ((...args: [P00, P01, P02, P03, P04, P05, P06, P07, P08, P09]) => CurriedFn07<(...args: [P10, P11, P12, P13, P14, P15, P16]) => R>)
      & ((...args: [P00, P01, P02, P03, P04, P05, P06, P07, P08, P09, P10]) => CurriedFn06<(...args: [P11, P12, P13, P14, P15, P16]) => R>)
      & ((...args: [P00, P01, P02, P03, P04, P05, P06, P07, P08, P09, P10, P11]) => CurriedFn05<(...args: [P12, P13, P14, P15, P16]) => R>)
      & ((...args: [P00, P01, P02, P03, P04, P05, P06, P07, P08, P09, P10, P11, P12]) => CurriedFn04<(...args: [P13, P14, P15, P16]) => R>)
      & ((...args: [P00, P01, P02, P03, P04, P05, P06, P07, P08, P09, P10, P11, P12, P13]) => CurriedFn03<(...args: [P14, P15, P16]) => R>)
      & ((...args: [P00, P01, P02, P03, P04, P05, P06, P07, P08, P09, P10, P11, P12, P13, P14]) => CurriedFn02<(...args: [P15, P16]) => R>)
      & ((...args: [P00, P01, P02, P03, P04, P05, P06, P07, P08, P09, P10, P11, P12, P13, P14, P15]) => CurriedFn01<(...args: [P16]) => R>)
    : never;

type CurriedFn18<Fn extends Fn18> =
  Fn extends (...args: [infer P00, infer P01, infer P02, infer P03, infer P04, infer P05, infer P06, infer P07, infer P08, infer P09, infer P10, infer P11, infer P12, infer P13, infer P14, infer P15, infer P16, infer P17]) => infer R
    ? ((...args: [P00, P01, P02, P03, P04, P05, P06, P07, P08, P09, P10, P11, P12, P13, P14, P15, P16, P17]) => R)
      & ((...args: [P00]) => CurriedFn17<(...args: [P01, P02, P03, P04, P05, P06, P07, P08, P09, P10, P11, P12, P13, P14, P15, P16, P17]) => R>)
      & ((...args: [P00, P01]) => CurriedFn16<(...args: [P02, P03, P04, P05, P06, P07, P08, P09, P10, P11, P12, P13, P14, P15, P16, P17]) => R>)
      & ((...args: [P00, P01, P02]) => CurriedFn15<(...args: [P03, P04, P05, P06, P07, P08, P09, P10, P11, P12, P13, P14, P15, P16, P17]) => R>)
      & ((...args: [P00, P01, P02, P03]) => CurriedFn14<(...args: [P04, P05, P06, P07, P08, P09, P10, P11, P12, P13, P14, P15, P16, P17]) => R>)
      & ((...args: [P00, P01, P02, P03, P04]) => CurriedFn13<(...args: [P05, P06, P07, P08, P09, P10, P11, P12, P13, P14, P15, P16, P17]) => R>)
      & ((...args: [P00, P01, P02, P03, P04, P05]) => CurriedFn12<(...args: [P06, P07, P08, P09, P10, P11, P12, P13, P14, P15, P16, P17]) => R>)
      & ((...args: [P00, P01, P02, P03, P04, P05, P06]) => CurriedFn11<(...args: [P07, P08, P09, P10, P11, P12, P13, P14, P15, P16, P17]) => R>)
      & ((...args: [P00, P01, P02, P03, P04, P05, P06, P07]) => CurriedFn10<(...args: [P08, P09, P10, P11, P12, P13, P14, P15, P16, P17]) => R>)
      & ((...args: [P00, P01, P02, P03, P04, P05, P06, P07, P08]) => CurriedFn09<(...args: [P09, P10, P11, P12, P13, P14, P15, P16, P17]) => R>)
      & ((...args: [P00, P01, P02, P03, P04, P05, P06, P07, P08, P09]) => CurriedFn08<(...args: [P10, P11, P12, P13, P14, P15, P16, P17]) => R>)
      & ((...args: [P00, P01, P02, P03, P04, P05, P06, P07, P08, P09, P10]) => CurriedFn07<(...args: [P11, P12, P13, P14, P15, P16, P17]) => R>)
      & ((...args: [P00, P01, P02, P03, P04, P05, P06, P07, P08, P09, P10, P11]) => CurriedFn06<(...args: [P12, P13, P14, P15, P16, P17]) => R>)
      & ((...args: [P00, P01, P02, P03, P04, P05, P06, P07, P08, P09, P10, P11, P12]) => CurriedFn05<(...args: [P13, P14, P15, P16, P17]) => R>)
      & ((...args: [P00, P01, P02, P03, P04, P05, P06, P07, P08, P09, P10, P11, P12, P13]) => CurriedFn04<(...args: [P14, P15, P16, P17]) => R>)
      & ((...args: [P00, P01, P02, P03, P04, P05, P06, P07, P08, P09, P10, P11, P12, P13, P14]) => CurriedFn03<(...args: [P15, P16, P17]) => R>)
      & ((...args: [P00, P01, P02, P03, P04, P05, P06, P07, P08, P09, P10, P11, P12, P13, P14, P15]) => CurriedFn02<(...args: [P16, P17]) => R>)
      & ((...args: [P00, P01, P02, P03, P04, P05, P06, P07, P08, P09, P10, P11, P12, P13, P14, P15, P16]) => CurriedFn01<(...args: [P17]) => R>)
    : never;

type CurriedFn19<Fn extends Fn19> =
  Fn extends (...args: [infer P00, infer P01, infer P02, infer P03, infer P04, infer P05, infer P06, infer P07, infer P08, infer P09, infer P10, infer P11, infer P12, infer P13, infer P14, infer P15, infer P16, infer P17, infer P18]) => infer R
    ? ((...args: [P00, P01, P02, P03, P04, P05, P06, P07, P08, P09, P10, P11, P12, P13, P14, P15, P16, P17, P18]) => R)
      & ((...args: [P00]) => CurriedFn18<(...args: [P01, P02, P03, P04, P05, P06, P07, P08, P09, P10, P11, P12, P13, P14, P15, P16, P17, P18]) => R>)
      & ((...args: [P00, P01]) => CurriedFn17<(...args: [P02, P03, P04, P05, P06, P07, P08, P09, P10, P11, P12, P13, P14, P15, P16, P17, P18]) => R>)
      & ((...args: [P00, P01, P02]) => CurriedFn16<(...args: [P03, P04, P05, P06, P07, P08, P09, P10, P11, P12, P13, P14, P15, P16, P17, P18]) => R>)
      & ((...args: [P00, P01, P02, P03]) => CurriedFn15<(...args: [P04, P05, P06, P07, P08, P09, P10, P11, P12, P13, P14, P15, P16, P17, P18]) => R>)
      & ((...args: [P00, P01, P02, P03, P04]) => CurriedFn14<(...args: [P05, P06, P07, P08, P09, P10, P11, P12, P13, P14, P15, P16, P17, P18]) => R>)
      & ((...args: [P00, P01, P02, P03, P04, P05]) => CurriedFn13<(...args: [P06, P07, P08, P09, P10, P11, P12, P13, P14, P15, P16, P17, P18]) => R>)
      & ((...args: [P00, P01, P02, P03, P04, P05, P06]) => CurriedFn12<(...args: [P07, P08, P09, P10, P11, P12, P13, P14, P15, P16, P17, P18]) => R>)
      & ((...args: [P00, P01, P02, P03, P04, P05, P06, P07]) => CurriedFn11<(...args: [P08, P09, P10, P11, P12, P13, P14, P15, P16, P17, P18]) => R>)
      & ((...args: [P00, P01, P02, P03, P04, P05, P06, P07, P08]) => CurriedFn10<(...args: [P09, P10, P11, P12, P13, P14, P15, P16, P17, P18]) => R>)
      & ((...args: [P00, P01, P02, P03, P04, P05, P06, P07, P08, P09]) => CurriedFn09<(...args: [P10, P11, P12, P13, P14, P15, P16, P17, P18]) => R>)
      & ((...args: [P00, P01, P02, P03, P04, P05, P06, P07, P08, P09, P10]) => CurriedFn08<(...args: [P11, P12, P13, P14, P15, P16, P17, P18]) => R>)
      & ((...args: [P00, P01, P02, P03, P04, P05, P06, P07, P08, P09, P10, P11]) => CurriedFn07<(...args: [P12, P13, P14, P15, P16, P17, P18]) => R>)
      & ((...args: [P00, P01, P02, P03, P04, P05, P06, P07, P08, P09, P10, P11, P12]) => CurriedFn06<(...args: [P13, P14, P15, P16, P17, P18]) => R>)
      & ((...args: [P00, P01, P02, P03, P04, P05, P06, P07, P08, P09, P10, P11, P12, P13]) => CurriedFn05<(...args: [P14, P15, P16, P17, P18]) => R>)
      & ((...args: [P00, P01, P02, P03, P04, P05, P06, P07, P08, P09, P10, P11, P12, P13, P14]) => CurriedFn04<(...args: [P15, P16, P17, P18]) => R>)
      & ((...args: [P00, P01, P02, P03, P04, P05, P06, P07, P08, P09, P10, P11, P12, P13, P14, P15]) => CurriedFn03<(...args: [P16, P17, P18]) => R>)
      & ((...args: [P00, P01, P02, P03, P04, P05, P06, P07, P08, P09, P10, P11, P12, P13, P14, P15, P16]) => CurriedFn02<(...args: [P17, P18]) => R>)
      & ((...args: [P00, P01, P02, P03, P04, P05, P06, P07, P08, P09, P10, P11, P12, P13, P14, P15, P16, P17]) => CurriedFn01<(...args: [P18]) => R>)
    : never;

type CurriedFn20<Fn extends Fn20> =
  Fn extends (...args: [infer P00, infer P01, infer P02, infer P03, infer P04, infer P05, infer P06, infer P07, infer P08, infer P09, infer P10, infer P11, infer P12, infer P13, infer P14, infer P15, infer P16, infer P17, infer P18, infer P19]) => infer R
    ? ((...args: [P00, P01, P02, P03, P04, P05, P06, P07, P08, P09, P10, P11, P12, P13, P14, P15, P16, P17, P18, P19]) => R)
      & ((...args: [P00]) => CurriedFn19<(...args: [P01, P02, P03, P04, P05, P06, P07, P08, P09, P10, P11, P12, P13, P14, P15, P16, P17, P18, P19]) => R>)
      & ((...args: [P00, P01]) => CurriedFn18<(...args: [P02, P03, P04, P05, P06, P07, P08, P09, P10, P11, P12, P13, P14, P15, P16, P17, P18, P19]) => R>)
      & ((...args: [P00, P01, P02]) => CurriedFn17<(...args: [P03, P04, P05, P06, P07, P08, P09, P10, P11, P12, P13, P14, P15, P16, P17, P18, P19]) => R>)
      & ((...args: [P00, P01, P02, P03]) => CurriedFn16<(...args: [P04, P05, P06, P07, P08, P09, P10, P11, P12, P13, P14, P15, P16, P17, P18, P19]) => R>)
      & ((...args: [P00, P01, P02, P03, P04]) => CurriedFn15<(...args: [P05, P06, P07, P08, P09, P10, P11, P12, P13, P14, P15, P16, P17, P18, P19]) => R>)
      & ((...args: [P00, P01, P02, P03, P04, P05]) => CurriedFn14<(...args: [P06, P07, P08, P09, P10, P11, P12, P13, P14, P15, P16, P17, P18, P19]) => R>)
      & ((...args: [P00, P01, P02, P03, P04, P05, P06]) => CurriedFn13<(...args: [P07, P08, P09, P10, P11, P12, P13, P14, P15, P16, P17, P18, P19]) => R>)
      & ((...args: [P00, P01, P02, P03, P04, P05, P06, P07]) => CurriedFn12<(...args: [P08, P09, P10, P11, P12, P13, P14, P15, P16, P17, P18, P19]) => R>)
      & ((...args: [P00, P01, P02, P03, P04, P05, P06, P07, P08]) => CurriedFn11<(...args: [P09, P10, P11, P12, P13, P14, P15, P16, P17, P18, P19]) => R>)
      & ((...args: [P00, P01, P02, P03, P04, P05, P06, P07, P08, P09]) => CurriedFn10<(...args: [P10, P11, P12, P13, P14, P15, P16, P17, P18, P19]) => R>)
      & ((...args: [P00, P01, P02, P03, P04, P05, P06, P07, P08, P09, P10]) => CurriedFn09<(...args: [P11, P12, P13, P14, P15, P16, P17, P18, P19]) => R>)
      & ((...args: [P00, P01, P02, P03, P04, P05, P06, P07, P08, P09, P10, P11]) => CurriedFn08<(...args: [P12, P13, P14, P15, P16, P17, P18, P19]) => R>)
      & ((...args: [P00, P01, P02, P03, P04, P05, P06, P07, P08, P09, P10, P11, P12]) => CurriedFn07<(...args: [P13, P14, P15, P16, P17, P18, P19]) => R>)
      & ((...args: [P00, P01, P02, P03, P04, P05, P06, P07, P08, P09, P10, P11, P12, P13]) => CurriedFn06<(...args: [P14, P15, P16, P17, P18, P19]) => R>)
      & ((...args: [P00, P01, P02, P03, P04, P05, P06, P07, P08, P09, P10, P11, P12, P13, P14]) => CurriedFn05<(...args: [P15, P16, P17, P18, P19]) => R>)
      & ((...args: [P00, P01, P02, P03, P04, P05, P06, P07, P08, P09, P10, P11, P12, P13, P14, P15]) => CurriedFn04<(...args: [P16, P17, P18, P19]) => R>)
      & ((...args: [P00, P01, P02, P03, P04, P05, P06, P07, P08, P09, P10, P11, P12, P13, P14, P15, P16]) => CurriedFn03<(...args: [P17, P18, P19]) => R>)
      & ((...args: [P00, P01, P02, P03, P04, P05, P06, P07, P08, P09, P10, P11, P12, P13, P14, P15, P16, P17]) => CurriedFn02<(...args: [P18, P19]) => R>)
      & ((...args: [P00, P01, P02, P03, P04, P05, P06, P07, P08, P09, P10, P11, P12, P13, P14, P15, P16, P17, P18]) => CurriedFn01<(...args: [P19]) => R>)
    : never;

type CurriedFn21<Fn extends Fn21> =
  Fn extends (...args: [infer P00, infer P01, infer P02, infer P03, infer P04, infer P05, infer P06, infer P07, infer P08, infer P09, infer P10, infer P11, infer P12, infer P13, infer P14, infer P15, infer P16, infer P17, infer P18, infer P19, infer P20]) => infer R
    ? ((...args: [P00, P01, P02, P03, P04, P05, P06, P07, P08, P09, P10, P11, P12, P13, P14, P15, P16, P17, P18, P19, P20]) => R)
      & ((...args: [P00]) => CurriedFn20<(...args: [P01, P02, P03, P04, P05, P06, P07, P08, P09, P10, P11, P12, P13, P14, P15, P16, P17, P18, P19, P20]) => R>)
      & ((...args: [P00, P01]) => CurriedFn19<(...args: [P02, P03, P04, P05, P06, P07, P08, P09, P10, P11, P12, P13, P14, P15, P16, P17, P18, P19, P20]) => R>)
      & ((...args: [P00, P01, P02]) => CurriedFn18<(...args: [P03, P04, P05, P06, P07, P08, P09, P10, P11, P12, P13, P14, P15, P16, P17, P18, P19, P20]) => R>)
      & ((...args: [P00, P01, P02, P03]) => CurriedFn17<(...args: [P04, P05, P06, P07, P08, P09, P10, P11, P12, P13, P14, P15, P16, P17, P18, P19, P20]) => R>)
      & ((...args: [P00, P01, P02, P03, P04]) => CurriedFn16<(...args: [P05, P06, P07, P08, P09, P10, P11, P12, P13, P14, P15, P16, P17, P18, P19, P20]) => R>)
      & ((...args: [P00, P01, P02, P03, P04, P05]) => CurriedFn15<(...args: [P06, P07, P08, P09, P10, P11, P12, P13, P14, P15, P16, P17, P18, P19, P20]) => R>)
      & ((...args: [P00, P01, P02, P03, P04, P05, P06]) => CurriedFn14<(...args: [P07, P08, P09, P10, P11, P12, P13, P14, P15, P16, P17, P18, P19, P20]) => R>)
      & ((...args: [P00, P01, P02, P03, P04, P05, P06, P07]) => CurriedFn13<(...args: [P08, P09, P10, P11, P12, P13, P14, P15, P16, P17, P18, P19, P20]) => R>)
      & ((...args: [P00, P01, P02, P03, P04, P05, P06, P07, P08]) => CurriedFn12<(...args: [P09, P10, P11, P12, P13, P14, P15, P16, P17, P18, P19, P20]) => R>)
      & ((...args: [P00, P01, P02, P03, P04, P05, P06, P07, P08, P09]) => CurriedFn11<(...args: [P10, P11, P12, P13, P14, P15, P16, P17, P18, P19, P20]) => R>)
      & ((...args: [P00, P01, P02, P03, P04, P05, P06, P07, P08, P09, P10]) => CurriedFn10<(...args: [P11, P12, P13, P14, P15, P16, P17, P18, P19, P20]) => R>)
      & ((...args: [P00, P01, P02, P03, P04, P05, P06, P07, P08, P09, P10, P11]) => CurriedFn09<(...args: [P12, P13, P14, P15, P16, P17, P18, P19, P20]) => R>)
      & ((...args: [P00, P01, P02, P03, P04, P05, P06, P07, P08, P09, P10, P11, P12]) => CurriedFn08<(...args: [P13, P14, P15, P16, P17, P18, P19, P20]) => R>)
      & ((...args: [P00, P01, P02, P03, P04, P05, P06, P07, P08, P09, P10, P11, P12, P13]) => CurriedFn07<(...args: [P14, P15, P16, P17, P18, P19, P20]) => R>)
      & ((...args: [P00, P01, P02, P03, P04, P05, P06, P07, P08, P09, P10, P11, P12, P13, P14]) => CurriedFn06<(...args: [P15, P16, P17, P18, P19, P20]) => R>)
      & ((...args: [P00, P01, P02, P03, P04, P05, P06, P07, P08, P09, P10, P11, P12, P13, P14, P15]) => CurriedFn05<(...args: [P16, P17, P18, P19, P20]) => R>)
      & ((...args: [P00, P01, P02, P03, P04, P05, P06, P07, P08, P09, P10, P11, P12, P13, P14, P15, P16]) => CurriedFn04<(...args: [P17, P18, P19, P20]) => R>)
      & ((...args: [P00, P01, P02, P03, P04, P05, P06, P07, P08, P09, P10, P11, P12, P13, P14, P15, P16, P17]) => CurriedFn03<(...args: [P18, P19, P20]) => R>)
      & ((...args: [P00, P01, P02, P03, P04, P05, P06, P07, P08, P09, P10, P11, P12, P13, P14, P15, P16, P17, P18]) => CurriedFn02<(...args: [P19, P20]) => R>)
      & ((...args: [P00, P01, P02, P03, P04, P05, P06, P07, P08, P09, P10, P11, P12, P13, P14, P15, P16, P17, P18, P19]) => CurriedFn01<(...args: [P20]) => R>)
    : never;

type CurriedFn22<Fn extends Fn22> =
  Fn extends (...args: [infer P00, infer P01, infer P02, infer P03, infer P04, infer P05, infer P06, infer P07, infer P08, infer P09, infer P10, infer P11, infer P12, infer P13, infer P14, infer P15, infer P16, infer P17, infer P18, infer P19, infer P20, infer P21]) => infer R
    ? ((...args: [P00, P01, P02, P03, P04, P05, P06, P07, P08, P09, P10, P11, P12, P13, P14, P15, P16, P17, P18, P19, P20, P21]) => R)
      & ((...args: [P00]) => CurriedFn21<(...args: [P01, P02, P03, P04, P05, P06, P07, P08, P09, P10, P11, P12, P13, P14, P15, P16, P17, P18, P19, P20, P21]) => R>)
      & ((...args: [P00, P01]) => CurriedFn20<(...args: [P02, P03, P04, P05, P06, P07, P08, P09, P10, P11, P12, P13, P14, P15, P16, P17, P18, P19, P20, P21]) => R>)
      & ((...args: [P00, P01, P02]) => CurriedFn19<(...args: [P03, P04, P05, P06, P07, P08, P09, P10, P11, P12, P13, P14, P15, P16, P17, P18, P19, P20, P21]) => R>)
      & ((...args: [P00, P01, P02, P03]) => CurriedFn18<(...args: [P04, P05, P06, P07, P08, P09, P10, P11, P12, P13, P14, P15, P16, P17, P18, P19, P20, P21]) => R>)
      & ((...args: [P00, P01, P02, P03, P04]) => CurriedFn17<(...args: [P05, P06, P07, P08, P09, P10, P11, P12, P13, P14, P15, P16, P17, P18, P19, P20, P21]) => R>)
      & ((...args: [P00, P01, P02, P03, P04, P05]) => CurriedFn16<(...args: [P06, P07, P08, P09, P10, P11, P12, P13, P14, P15, P16, P17, P18, P19, P20, P21]) => R>)
      & ((...args: [P00, P01, P02, P03, P04, P05, P06]) => CurriedFn15<(...args: [P07, P08, P09, P10, P11, P12, P13, P14, P15, P16, P17, P18, P19, P20, P21]) => R>)
      & ((...args: [P00, P01, P02, P03, P04, P05, P06, P07]) => CurriedFn14<(...args: [P08, P09, P10, P11, P12, P13, P14, P15, P16, P17, P18, P19, P20, P21]) => R>)
      & ((...args: [P00, P01, P02, P03, P04, P05, P06, P07, P08]) => CurriedFn13<(...args: [P09, P10, P11, P12, P13, P14, P15, P16, P17, P18, P19, P20, P21]) => R>)
      & ((...args: [P00, P01, P02, P03, P04, P05, P06, P07, P08, P09]) => CurriedFn12<(...args: [P10, P11, P12, P13, P14, P15, P16, P17, P18, P19, P20, P21]) => R>)
      & ((...args: [P00, P01, P02, P03, P04, P05, P06, P07, P08, P09, P10]) => CurriedFn11<(...args: [P11, P12, P13, P14, P15, P16, P17, P18, P19, P20, P21]) => R>)
      & ((...args: [P00, P01, P02, P03, P04, P05, P06, P07, P08, P09, P10, P11]) => CurriedFn10<(...args: [P12, P13, P14, P15, P16, P17, P18, P19, P20, P21]) => R>)
      & ((...args: [P00, P01, P02, P03, P04, P05, P06, P07, P08, P09, P10, P11, P12]) => CurriedFn09<(...args: [P13, P14, P15, P16, P17, P18, P19, P20, P21]) => R>)
      & ((...args: [P00, P01, P02, P03, P04, P05, P06, P07, P08, P09, P10, P11, P12, P13]) => CurriedFn08<(...args: [P14, P15, P16, P17, P18, P19, P20, P21]) => R>)
      & ((...args: [P00, P01, P02, P03, P04, P05, P06, P07, P08, P09, P10, P11, P12, P13, P14]) => CurriedFn07<(...args: [P15, P16, P17, P18, P19, P20, P21]) => R>)
      & ((...args: [P00, P01, P02, P03, P04, P05, P06, P07, P08, P09, P10, P11, P12, P13, P14, P15]) => CurriedFn06<(...args: [P16, P17, P18, P19, P20, P21]) => R>)
      & ((...args: [P00, P01, P02, P03, P04, P05, P06, P07, P08, P09, P10, P11, P12, P13, P14, P15, P16]) => CurriedFn05<(...args: [P17, P18, P19, P20, P21]) => R>)
      & ((...args: [P00, P01, P02, P03, P04, P05, P06, P07, P08, P09, P10, P11, P12, P13, P14, P15, P16, P17]) => CurriedFn04<(...args: [P18, P19, P20, P21]) => R>)
      & ((...args: [P00, P01, P02, P03, P04, P05, P06, P07, P08, P09, P10, P11, P12, P13, P14, P15, P16, P17, P18]) => CurriedFn03<(...args: [P19, P20, P21]) => R>)
      & ((...args: [P00, P01, P02, P03, P04, P05, P06, P07, P08, P09, P10, P11, P12, P13, P14, P15, P16, P17, P18, P19]) => CurriedFn02<(...args: [P20, P21]) => R>)
      & ((...args: [P00, P01, P02, P03, P04, P05, P06, P07, P08, P09, P10, P11, P12, P13, P14, P15, P16, P17, P18, P19, P20]) => CurriedFn01<(...args: [P21]) => R>)
    : never;

type CurriedFn23<Fn extends Fn23> =
  Fn extends (...args: [infer P00, infer P01, infer P02, infer P03, infer P04, infer P05, infer P06, infer P07, infer P08, infer P09, infer P10, infer P11, infer P12, infer P13, infer P14, infer P15, infer P16, infer P17, infer P18, infer P19, infer P20, infer P21, infer P22]) => infer R
    ? ((...args: [P00, P01, P02, P03, P04, P05, P06, P07, P08, P09, P10, P11, P12, P13, P14, P15, P16, P17, P18, P19, P20, P21, P22]) => R)
      & ((...args: [P00]) => CurriedFn22<(...args: [P01, P02, P03, P04, P05, P06, P07, P08, P09, P10, P11, P12, P13, P14, P15, P16, P17, P18, P19, P20, P21, P22]) => R>)
      & ((...args: [P00, P01]) => CurriedFn21<(...args: [P02, P03, P04, P05, P06, P07, P08, P09, P10, P11, P12, P13, P14, P15, P16, P17, P18, P19, P20, P21, P22]) => R>)
      & ((...args: [P00, P01, P02]) => CurriedFn20<(...args: [P03, P04, P05, P06, P07, P08, P09, P10, P11, P12, P13, P14, P15, P16, P17, P18, P19, P20, P21, P22]) => R>)
      & ((...args: [P00, P01, P02, P03]) => CurriedFn19<(...args: [P04, P05, P06, P07, P08, P09, P10, P11, P12, P13, P14, P15, P16, P17, P18, P19, P20, P21, P22]) => R>)
      & ((...args: [P00, P01, P02, P03, P04]) => CurriedFn18<(...args: [P05, P06, P07, P08, P09, P10, P11, P12, P13, P14, P15, P16, P17, P18, P19, P20, P21, P22]) => R>)
      & ((...args: [P00, P01, P02, P03, P04, P05]) => CurriedFn17<(...args: [P06, P07, P08, P09, P10, P11, P12, P13, P14, P15, P16, P17, P18, P19, P20, P21, P22]) => R>)
      & ((...args: [P00, P01, P02, P03, P04, P05, P06]) => CurriedFn16<(...args: [P07, P08, P09, P10, P11, P12, P13, P14, P15, P16, P17, P18, P19, P20, P21, P22]) => R>)
      & ((...args: [P00, P01, P02, P03, P04, P05, P06, P07]) => CurriedFn15<(...args: [P08, P09, P10, P11, P12, P13, P14, P15, P16, P17, P18, P19, P20, P21, P22]) => R>)
      & ((...args: [P00, P01, P02, P03, P04, P05, P06, P07, P08]) => CurriedFn14<(...args: [P09, P10, P11, P12, P13, P14, P15, P16, P17, P18, P19, P20, P21, P22]) => R>)
      & ((...args: [P00, P01, P02, P03, P04, P05, P06, P07, P08, P09]) => CurriedFn13<(...args: [P10, P11, P12, P13, P14, P15, P16, P17, P18, P19, P20, P21, P22]) => R>)
      & ((...args: [P00, P01, P02, P03, P04, P05, P06, P07, P08, P09, P10]) => CurriedFn12<(...args: [P11, P12, P13, P14, P15, P16, P17, P18, P19, P20, P21, P22]) => R>)
      & ((...args: [P00, P01, P02, P03, P04, P05, P06, P07, P08, P09, P10, P11]) => CurriedFn11<(...args: [P12, P13, P14, P15, P16, P17, P18, P19, P20, P21, P22]) => R>)
      & ((...args: [P00, P01, P02, P03, P04, P05, P06, P07, P08, P09, P10, P11, P12]) => CurriedFn10<(...args: [P13, P14, P15, P16, P17, P18, P19, P20, P21, P22]) => R>)
      & ((...args: [P00, P01, P02, P03, P04, P05, P06, P07, P08, P09, P10, P11, P12, P13]) => CurriedFn09<(...args: [P14, P15, P16, P17, P18, P19, P20, P21, P22]) => R>)
      & ((...args: [P00, P01, P02, P03, P04, P05, P06, P07, P08, P09, P10, P11, P12, P13, P14]) => CurriedFn08<(...args: [P15, P16, P17, P18, P19, P20, P21, P22]) => R>)
      & ((...args: [P00, P01, P02, P03, P04, P05, P06, P07, P08, P09, P10, P11, P12, P13, P14, P15]) => CurriedFn07<(...args: [P16, P17, P18, P19, P20, P21, P22]) => R>)
      & ((...args: [P00, P01, P02, P03, P04, P05, P06, P07, P08, P09, P10, P11, P12, P13, P14, P15, P16]) => CurriedFn06<(...args: [P17, P18, P19, P20, P21, P22]) => R>)
      & ((...args: [P00, P01, P02, P03, P04, P05, P06, P07, P08, P09, P10, P11, P12, P13, P14, P15, P16, P17]) => CurriedFn05<(...args: [P18, P19, P20, P21, P22]) => R>)
      & ((...args: [P00, P01, P02, P03, P04, P05, P06, P07, P08, P09, P10, P11, P12, P13, P14, P15, P16, P17, P18]) => CurriedFn04<(...args: [P19, P20, P21, P22]) => R>)
      & ((...args: [P00, P01, P02, P03, P04, P05, P06, P07, P08, P09, P10, P11, P12, P13, P14, P15, P16, P17, P18, P19]) => CurriedFn03<(...args: [P20, P21, P22]) => R>)
      & ((...args: [P00, P01, P02, P03, P04, P05, P06, P07, P08, P09, P10, P11, P12, P13, P14, P15, P16, P17, P18, P19, P20]) => CurriedFn02<(...args: [P21, P22]) => R>)
      & ((...args: [P00, P01, P02, P03, P04, P05, P06, P07, P08, P09, P10, P11, P12, P13, P14, P15, P16, P17, P18, P19, P20, P21]) => CurriedFn01<(...args: [P22]) => R>)
    : never;

type CurriedFn24<Fn extends Fn24> =
  Fn extends (...args: [infer P00, infer P01, infer P02, infer P03, infer P04, infer P05, infer P06, infer P07, infer P08, infer P09, infer P10, infer P11, infer P12, infer P13, infer P14, infer P15, infer P16, infer P17, infer P18, infer P19, infer P20, infer P21, infer P22, infer P23]) => infer R
    ? ((...args: [P00, P01, P02, P03, P04, P05, P06, P07, P08, P09, P10, P11, P12, P13, P14, P15, P16, P17, P18, P19, P20, P21, P22, P23]) => R)
      & ((...args: [P00]) => CurriedFn23<(...args: [P01, P02, P03, P04, P05, P06, P07, P08, P09, P10, P11, P12, P13, P14, P15, P16, P17, P18, P19, P20, P21, P22, P23]) => R>)
      & ((...args: [P00, P01]) => CurriedFn22<(...args: [P02, P03, P04, P05, P06, P07, P08, P09, P10, P11, P12, P13, P14, P15, P16, P17, P18, P19, P20, P21, P22, P23]) => R>)
      & ((...args: [P00, P01, P02]) => CurriedFn21<(...args: [P03, P04, P05, P06, P07, P08, P09, P10, P11, P12, P13, P14, P15, P16, P17, P18, P19, P20, P21, P22, P23]) => R>)
      & ((...args: [P00, P01, P02, P03]) => CurriedFn20<(...args: [P04, P05, P06, P07, P08, P09, P10, P11, P12, P13, P14, P15, P16, P17, P18, P19, P20, P21, P22, P23]) => R>)
      & ((...args: [P00, P01, P02, P03, P04]) => CurriedFn19<(...args: [P05, P06, P07, P08, P09, P10, P11, P12, P13, P14, P15, P16, P17, P18, P19, P20, P21, P22, P23]) => R>)
      & ((...args: [P00, P01, P02, P03, P04, P05]) => CurriedFn18<(...args: [P06, P07, P08, P09, P10, P11, P12, P13, P14, P15, P16, P17, P18, P19, P20, P21, P22, P23]) => R>)
      & ((...args: [P00, P01, P02, P03, P04, P05, P06]) => CurriedFn17<(...args: [P07, P08, P09, P10, P11, P12, P13, P14, P15, P16, P17, P18, P19, P20, P21, P22, P23]) => R>)
      & ((...args: [P00, P01, P02, P03, P04, P05, P06, P07]) => CurriedFn16<(...args: [P08, P09, P10, P11, P12, P13, P14, P15, P16, P17, P18, P19, P20, P21, P22, P23]) => R>)
      & ((...args: [P00, P01, P02, P03, P04, P05, P06, P07, P08]) => CurriedFn15<(...args: [P09, P10, P11, P12, P13, P14, P15, P16, P17, P18, P19, P20, P21, P22, P23]) => R>)
      & ((...args: [P00, P01, P02, P03, P04, P05, P06, P07, P08, P09]) => CurriedFn14<(...args: [P10, P11, P12, P13, P14, P15, P16, P17, P18, P19, P20, P21, P22, P23]) => R>)
      & ((...args: [P00, P01, P02, P03, P04, P05, P06, P07, P08, P09, P10]) => CurriedFn13<(...args: [P11, P12, P13, P14, P15, P16, P17, P18, P19, P20, P21, P22, P23]) => R>)
      & ((...args: [P00, P01, P02, P03, P04, P05, P06, P07, P08, P09, P10, P11]) => CurriedFn12<(...args: [P12, P13, P14, P15, P16, P17, P18, P19, P20, P21, P22, P23]) => R>)
      & ((...args: [P00, P01, P02, P03, P04, P05, P06, P07, P08, P09, P10, P11, P12]) => CurriedFn11<(...args: [P13, P14, P15, P16, P17, P18, P19, P20, P21, P22, P23]) => R>)
      & ((...args: [P00, P01, P02, P03, P04, P05, P06, P07, P08, P09, P10, P11, P12, P13]) => CurriedFn10<(...args: [P14, P15, P16, P17, P18, P19, P20, P21, P22, P23]) => R>)
      & ((...args: [P00, P01, P02, P03, P04, P05, P06, P07, P08, P09, P10, P11, P12, P13, P14]) => CurriedFn09<(...args: [P15, P16, P17, P18, P19, P20, P21, P22, P23]) => R>)
      & ((...args: [P00, P01, P02, P03, P04, P05, P06, P07, P08, P09, P10, P11, P12, P13, P14, P15]) => CurriedFn08<(...args: [P16, P17, P18, P19, P20, P21, P22, P23]) => R>)
      & ((...args: [P00, P01, P02, P03, P04, P05, P06, P07, P08, P09, P10, P11, P12, P13, P14, P15, P16]) => CurriedFn07<(...args: [P17, P18, P19, P20, P21, P22, P23]) => R>)
      & ((...args: [P00, P01, P02, P03, P04, P05, P06, P07, P08, P09, P10, P11, P12, P13, P14, P15, P16, P17]) => CurriedFn06<(...args: [P18, P19, P20, P21, P22, P23]) => R>)
      & ((...args: [P00, P01, P02, P03, P04, P05, P06, P07, P08, P09, P10, P11, P12, P13, P14, P15, P16, P17, P18]) => CurriedFn05<(...args: [P19, P20, P21, P22, P23]) => R>)
      & ((...args: [P00, P01, P02, P03, P04, P05, P06, P07, P08, P09, P10, P11, P12, P13, P14, P15, P16, P17, P18, P19]) => CurriedFn04<(...args: [P20, P21, P22, P23]) => R>)
      & ((...args: [P00, P01, P02, P03, P04, P05, P06, P07, P08, P09, P10, P11, P12, P13, P14, P15, P16, P17, P18, P19, P20]) => CurriedFn03<(...args: [P21, P22, P23]) => R>)
      & ((...args: [P00, P01, P02, P03, P04, P05, P06, P07, P08, P09, P10, P11, P12, P13, P14, P15, P16, P17, P18, P19, P20, P21]) => CurriedFn02<(...args: [P22, P23]) => R>)
      & ((...args: [P00, P01, P02, P03, P04, P05, P06, P07, P08, P09, P10, P11, P12, P13, P14, P15, P16, P17, P18, P19, P20, P21, P22]) => CurriedFn01<(...args: [P23]) => R>)
    : never;

type CurriedFn25<Fn extends Fn25> =
  Fn extends (...args: [infer P00, infer P01, infer P02, infer P03, infer P04, infer P05, infer P06, infer P07, infer P08, infer P09, infer P10, infer P11, infer P12, infer P13, infer P14, infer P15, infer P16, infer P17, infer P18, infer P19, infer P20, infer P21, infer P22, infer P23, infer P24]) => infer R
    ? ((...args: [P00, P01, P02, P03, P04, P05, P06, P07, P08, P09, P10, P11, P12, P13, P14, P15, P16, P17, P18, P19, P20, P21, P22, P23, P24]) => R)
      & ((...args: [P00]) => CurriedFn24<(...args: [P01, P02, P03, P04, P05, P06, P07, P08, P09, P10, P11, P12, P13, P14, P15, P16, P17, P18, P19, P20, P21, P22, P23, P24]) => R>)
      & ((...args: [P00, P01]) => CurriedFn23<(...args: [P02, P03, P04, P05, P06, P07, P08, P09, P10, P11, P12, P13, P14, P15, P16, P17, P18, P19, P20, P21, P22, P23, P24]) => R>)
      & ((...args: [P00, P01, P02]) => CurriedFn22<(...args: [P03, P04, P05, P06, P07, P08, P09, P10, P11, P12, P13, P14, P15, P16, P17, P18, P19, P20, P21, P22, P23, P24]) => R>)
      & ((...args: [P00, P01, P02, P03]) => CurriedFn21<(...args: [P04, P05, P06, P07, P08, P09, P10, P11, P12, P13, P14, P15, P16, P17, P18, P19, P20, P21, P22, P23, P24]) => R>)
      & ((...args: [P00, P01, P02, P03, P04]) => CurriedFn20<(...args: [P05, P06, P07, P08, P09, P10, P11, P12, P13, P14, P15, P16, P17, P18, P19, P20, P21, P22, P23, P24]) => R>)
      & ((...args: [P00, P01, P02, P03, P04, P05]) => CurriedFn19<(...args: [P06, P07, P08, P09, P10, P11, P12, P13, P14, P15, P16, P17, P18, P19, P20, P21, P22, P23, P24]) => R>)
      & ((...args: [P00, P01, P02, P03, P04, P05, P06]) => CurriedFn18<(...args: [P07, P08, P09, P10, P11, P12, P13, P14, P15, P16, P17, P18, P19, P20, P21, P22, P23, P24]) => R>)
      & ((...args: [P00, P01, P02, P03, P04, P05, P06, P07]) => CurriedFn17<(...args: [P08, P09, P10, P11, P12, P13, P14, P15, P16, P17, P18, P19, P20, P21, P22, P23, P24]) => R>)
      & ((...args: [P00, P01, P02, P03, P04, P05, P06, P07, P08]) => CurriedFn16<(...args: [P09, P10, P11, P12, P13, P14, P15, P16, P17, P18, P19, P20, P21, P22, P23, P24]) => R>)
      & ((...args: [P00, P01, P02, P03, P04, P05, P06, P07, P08, P09]) => CurriedFn15<(...args: [P10, P11, P12, P13, P14, P15, P16, P17, P18, P19, P20, P21, P22, P23, P24]) => R>)
      & ((...args: [P00, P01, P02, P03, P04, P05, P06, P07, P08, P09, P10]) => CurriedFn14<(...args: [P11, P12, P13, P14, P15, P16, P17, P18, P19, P20, P21, P22, P23, P24]) => R>)
      & ((...args: [P00, P01, P02, P03, P04, P05, P06, P07, P08, P09, P10, P11]) => CurriedFn13<(...args: [P12, P13, P14, P15, P16, P17, P18, P19, P20, P21, P22, P23, P24]) => R>)
      & ((...args: [P00, P01, P02, P03, P04, P05, P06, P07, P08, P09, P10, P11, P12]) => CurriedFn12<(...args: [P13, P14, P15, P16, P17, P18, P19, P20, P21, P22, P23, P24]) => R>)
      & ((...args: [P00, P01, P02, P03, P04, P05, P06, P07, P08, P09, P10, P11, P12, P13]) => CurriedFn11<(...args: [P14, P15, P16, P17, P18, P19, P20, P21, P22, P23, P24]) => R>)
      & ((...args: [P00, P01, P02, P03, P04, P05, P06, P07, P08, P09, P10, P11, P12, P13, P14]) => CurriedFn10<(...args: [P15, P16, P17, P18, P19, P20, P21, P22, P23, P24]) => R>)
      & ((...args: [P00, P01, P02, P03, P04, P05, P06, P07, P08, P09, P10, P11, P12, P13, P14, P15]) => CurriedFn09<(...args: [P16, P17, P18, P19, P20, P21, P22, P23, P24]) => R>)
      & ((...args: [P00, P01, P02, P03, P04, P05, P06, P07, P08, P09, P10, P11, P12, P13, P14, P15, P16]) => CurriedFn08<(...args: [P17, P18, P19, P20, P21, P22, P23, P24]) => R>)
      & ((...args: [P00, P01, P02, P03, P04, P05, P06, P07, P08, P09, P10, P11, P12, P13, P14, P15, P16, P17]) => CurriedFn07<(...args: [P18, P19, P20, P21, P22, P23, P24]) => R>)
      & ((...args: [P00, P01, P02, P03, P04, P05, P06, P07, P08, P09, P10, P11, P12, P13, P14, P15, P16, P17, P18]) => CurriedFn06<(...args: [P19, P20, P21, P22, P23, P24]) => R>)
      & ((...args: [P00, P01, P02, P03, P04, P05, P06, P07, P08, P09, P10, P11, P12, P13, P14, P15, P16, P17, P18, P19]) => CurriedFn05<(...args: [P20, P21, P22, P23, P24]) => R>)
      & ((...args: [P00, P01, P02, P03, P04, P05, P06, P07, P08, P09, P10, P11, P12, P13, P14, P15, P16, P17, P18, P19, P20]) => CurriedFn04<(...args: [P21, P22, P23, P24]) => R>)
      & ((...args: [P00, P01, P02, P03, P04, P05, P06, P07, P08, P09, P10, P11, P12, P13, P14, P15, P16, P17, P18, P19, P20, P21]) => CurriedFn03<(...args: [P22, P23, P24]) => R>)
      & ((...args: [P00, P01, P02, P03, P04, P05, P06, P07, P08, P09, P10, P11, P12, P13, P14, P15, P16, P17, P18, P19, P20, P21, P22]) => CurriedFn02<(...args: [P23, P24]) => R>)
      & ((...args: [P00, P01, P02, P03, P04, P05, P06, P07, P08, P09, P10, P11, P12, P13, P14, P15, P16, P17, P18, P19, P20, P21, P22, P23]) => CurriedFn01<(...args: [P24]) => R>)
    : never;

type CurriedFn26<Fn extends Fn26> =
  Fn extends (...args: [infer P00, infer P01, infer P02, infer P03, infer P04, infer P05, infer P06, infer P07, infer P08, infer P09, infer P10, infer P11, infer P12, infer P13, infer P14, infer P15, infer P16, infer P17, infer P18, infer P19, infer P20, infer P21, infer P22, infer P23, infer P24, infer P25]) => infer R
    ? ((...args: [P00, P01, P02, P03, P04, P05, P06, P07, P08, P09, P10, P11, P12, P13, P14, P15, P16, P17, P18, P19, P20, P21, P22, P23, P24, P25]) => R)
      & ((...args: [P00]) => CurriedFn25<(...args: [P01, P02, P03, P04, P05, P06, P07, P08, P09, P10, P11, P12, P13, P14, P15, P16, P17, P18, P19, P20, P21, P22, P23, P24, P25]) => R>)
      & ((...args: [P00, P01]) => CurriedFn24<(...args: [P02, P03, P04, P05, P06, P07, P08, P09, P10, P11, P12, P13, P14, P15, P16, P17, P18, P19, P20, P21, P22, P23, P24, P25]) => R>)
      & ((...args: [P00, P01, P02]) => CurriedFn23<(...args: [P03, P04, P05, P06, P07, P08, P09, P10, P11, P12, P13, P14, P15, P16, P17, P18, P19, P20, P21, P22, P23, P24, P25]) => R>)
      & ((...args: [P00, P01, P02, P03]) => CurriedFn22<(...args: [P04, P05, P06, P07, P08, P09, P10, P11, P12, P13, P14, P15, P16, P17, P18, P19, P20, P21, P22, P23, P24, P25]) => R>)
      & ((...args: [P00, P01, P02, P03, P04]) => CurriedFn21<(...args: [P05, P06, P07, P08, P09, P10, P11, P12, P13, P14, P15, P16, P17, P18, P19, P20, P21, P22, P23, P24, P25]) => R>)
      & ((...args: [P00, P01, P02, P03, P04, P05]) => CurriedFn20<(...args: [P06, P07, P08, P09, P10, P11, P12, P13, P14, P15, P16, P17, P18, P19, P20, P21, P22, P23, P24, P25]) => R>)
      & ((...args: [P00, P01, P02, P03, P04, P05, P06]) => CurriedFn19<(...args: [P07, P08, P09, P10, P11, P12, P13, P14, P15, P16, P17, P18, P19, P20, P21, P22, P23, P24, P25]) => R>)
      & ((...args: [P00, P01, P02, P03, P04, P05, P06, P07]) => CurriedFn18<(...args: [P08, P09, P10, P11, P12, P13, P14, P15, P16, P17, P18, P19, P20, P21, P22, P23, P24, P25]) => R>)
      & ((...args: [P00, P01, P02, P03, P04, P05, P06, P07, P08]) => CurriedFn17<(...args: [P09, P10, P11, P12, P13, P14, P15, P16, P17, P18, P19, P20, P21, P22, P23, P24, P25]) => R>)
      & ((...args: [P00, P01, P02, P03, P04, P05, P06, P07, P08, P09]) => CurriedFn16<(...args: [P10, P11, P12, P13, P14, P15, P16, P17, P18, P19, P20, P21, P22, P23, P24, P25]) => R>)
      & ((...args: [P00, P01, P02, P03, P04, P05, P06, P07, P08, P09, P10]) => CurriedFn15<(...args: [P11, P12, P13, P14, P15, P16, P17, P18, P19, P20, P21, P22, P23, P24, P25]) => R>)
      & ((...args: [P00, P01, P02, P03, P04, P05, P06, P07, P08, P09, P10, P11]) => CurriedFn14<(...args: [P12, P13, P14, P15, P16, P17, P18, P19, P20, P21, P22, P23, P24, P25]) => R>)
      & ((...args: [P00, P01, P02, P03, P04, P05, P06, P07, P08, P09, P10, P11, P12]) => CurriedFn13<(...args: [P13, P14, P15, P16, P17, P18, P19, P20, P21, P22, P23, P24, P25]) => R>)
      & ((...args: [P00, P01, P02, P03, P04, P05, P06, P07, P08, P09, P10, P11, P12, P13]) => CurriedFn12<(...args: [P14, P15, P16, P17, P18, P19, P20, P21, P22, P23, P24, P25]) => R>)
      & ((...args: [P00, P01, P02, P03, P04, P05, P06, P07, P08, P09, P10, P11, P12, P13, P14]) => CurriedFn11<(...args: [P15, P16, P17, P18, P19, P20, P21, P22, P23, P24, P25]) => R>)
      & ((...args: [P00, P01, P02, P03, P04, P05, P06, P07, P08, P09, P10, P11, P12, P13, P14, P15]) => CurriedFn10<(...args: [P16, P17, P18, P19, P20, P21, P22, P23, P24, P25]) => R>)
      & ((...args: [P00, P01, P02, P03, P04, P05, P06, P07, P08, P09, P10, P11, P12, P13, P14, P15, P16]) => CurriedFn09<(...args: [P17, P18, P19, P20, P21, P22, P23, P24, P25]) => R>)
      & ((...args: [P00, P01, P02, P03, P04, P05, P06, P07, P08, P09, P10, P11, P12, P13, P14, P15, P16, P17]) => CurriedFn08<(...args: [P18, P19, P20, P21, P22, P23, P24, P25]) => R>)
      & ((...args: [P00, P01, P02, P03, P04, P05, P06, P07, P08, P09, P10, P11, P12, P13, P14, P15, P16, P17, P18]) => CurriedFn07<(...args: [P19, P20, P21, P22, P23, P24, P25]) => R>)
      & ((...args: [P00, P01, P02, P03, P04, P05, P06, P07, P08, P09, P10, P11, P12, P13, P14, P15, P16, P17, P18, P19]) => CurriedFn06<(...args: [P20, P21, P22, P23, P24, P25]) => R>)
      & ((...args: [P00, P01, P02, P03, P04, P05, P06, P07, P08, P09, P10, P11, P12, P13, P14, P15, P16, P17, P18, P19, P20]) => CurriedFn05<(...args: [P21, P22, P23, P24, P25]) => R>)
      & ((...args: [P00, P01, P02, P03, P04, P05, P06, P07, P08, P09, P10, P11, P12, P13, P14, P15, P16, P17, P18, P19, P20, P21]) => CurriedFn04<(...args: [P22, P23, P24, P25]) => R>)
      & ((...args: [P00, P01, P02, P03, P04, P05, P06, P07, P08, P09, P10, P11, P12, P13, P14, P15, P16, P17, P18, P19, P20, P21, P22]) => CurriedFn03<(...args: [P23, P24, P25]) => R>)
      & ((...args: [P00, P01, P02, P03, P04, P05, P06, P07, P08, P09, P10, P11, P12, P13, P14, P15, P16, P17, P18, P19, P20, P21, P22, P23]) => CurriedFn02<(...args: [P24, P25]) => R>)
      & ((...args: [P00, P01, P02, P03, P04, P05, P06, P07, P08, P09, P10, P11, P12, P13, P14, P15, P16, P17, P18, P19, P20, P21, P22, P23, P24]) => CurriedFn01<(...args: [P25]) => R>)
    : never;

type CurriedFn27<Fn extends Fn27> =
  Fn extends (...args: [infer P00, infer P01, infer P02, infer P03, infer P04, infer P05, infer P06, infer P07, infer P08, infer P09, infer P10, infer P11, infer P12, infer P13, infer P14, infer P15, infer P16, infer P17, infer P18, infer P19, infer P20, infer P21, infer P22, infer P23, infer P24, infer P25, infer P26]) => infer R
    ? ((...args: [P00, P01, P02, P03, P04, P05, P06, P07, P08, P09, P10, P11, P12, P13, P14, P15, P16, P17, P18, P19, P20, P21, P22, P23, P24, P25, P26]) => R)
      & ((...args: [P00]) => CurriedFn26<(...args: [P01, P02, P03, P04, P05, P06, P07, P08, P09, P10, P11, P12, P13, P14, P15, P16, P17, P18, P19, P20, P21, P22, P23, P24, P25, P26]) => R>)
      & ((...args: [P00, P01]) => CurriedFn25<(...args: [P02, P03, P04, P05, P06, P07, P08, P09, P10, P11, P12, P13, P14, P15, P16, P17, P18, P19, P20, P21, P22, P23, P24, P25, P26]) => R>)
      & ((...args: [P00, P01, P02]) => CurriedFn24<(...args: [P03, P04, P05, P06, P07, P08, P09, P10, P11, P12, P13, P14, P15, P16, P17, P18, P19, P20, P21, P22, P23, P24, P25, P26]) => R>)
      & ((...args: [P00, P01, P02, P03]) => CurriedFn23<(...args: [P04, P05, P06, P07, P08, P09, P10, P11, P12, P13, P14, P15, P16, P17, P18, P19, P20, P21, P22, P23, P24, P25, P26]) => R>)
      & ((...args: [P00, P01, P02, P03, P04]) => CurriedFn22<(...args: [P05, P06, P07, P08, P09, P10, P11, P12, P13, P14, P15, P16, P17, P18, P19, P20, P21, P22, P23, P24, P25, P26]) => R>)
      & ((...args: [P00, P01, P02, P03, P04, P05]) => CurriedFn21<(...args: [P06, P07, P08, P09, P10, P11, P12, P13, P14, P15, P16, P17, P18, P19, P20, P21, P22, P23, P24, P25, P26]) => R>)
      & ((...args: [P00, P01, P02, P03, P04, P05, P06]) => CurriedFn20<(...args: [P07, P08, P09, P10, P11, P12, P13, P14, P15, P16, P17, P18, P19, P20, P21, P22, P23, P24, P25, P26]) => R>)
      & ((...args: [P00, P01, P02, P03, P04, P05, P06, P07]) => CurriedFn19<(...args: [P08, P09, P10, P11, P12, P13, P14, P15, P16, P17, P18, P19, P20, P21, P22, P23, P24, P25, P26]) => R>)
      & ((...args: [P00, P01, P02, P03, P04, P05, P06, P07, P08]) => CurriedFn18<(...args: [P09, P10, P11, P12, P13, P14, P15, P16, P17, P18, P19, P20, P21, P22, P23, P24, P25, P26]) => R>)
      & ((...args: [P00, P01, P02, P03, P04, P05, P06, P07, P08, P09]) => CurriedFn17<(...args: [P10, P11, P12, P13, P14, P15, P16, P17, P18, P19, P20, P21, P22, P23, P24, P25, P26]) => R>)
      & ((...args: [P00, P01, P02, P03, P04, P05, P06, P07, P08, P09, P10]) => CurriedFn16<(...args: [P11, P12, P13, P14, P15, P16, P17, P18, P19, P20, P21, P22, P23, P24, P25, P26]) => R>)
      & ((...args: [P00, P01, P02, P03, P04, P05, P06, P07, P08, P09, P10, P11]) => CurriedFn15<(...args: [P12, P13, P14, P15, P16, P17, P18, P19, P20, P21, P22, P23, P24, P25, P26]) => R>)
      & ((...args: [P00, P01, P02, P03, P04, P05, P06, P07, P08, P09, P10, P11, P12]) => CurriedFn14<(...args: [P13, P14, P15, P16, P17, P18, P19, P20, P21, P22, P23, P24, P25, P26]) => R>)
      & ((...args: [P00, P01, P02, P03, P04, P05, P06, P07, P08, P09, P10, P11, P12, P13]) => CurriedFn13<(...args: [P14, P15, P16, P17, P18, P19, P20, P21, P22, P23, P24, P25, P26]) => R>)
      & ((...args: [P00, P01, P02, P03, P04, P05, P06, P07, P08, P09, P10, P11, P12, P13, P14]) => CurriedFn12<(...args: [P15, P16, P17, P18, P19, P20, P21, P22, P23, P24, P25, P26]) => R>)
      & ((...args: [P00, P01, P02, P03, P04, P05, P06, P07, P08, P09, P10, P11, P12, P13, P14, P15]) => CurriedFn11<(...args: [P16, P17, P18, P19, P20, P21, P22, P23, P24, P25, P26]) => R>)
      & ((...args: [P00, P01, P02, P03, P04, P05, P06, P07, P08, P09, P10, P11, P12, P13, P14, P15, P16]) => CurriedFn10<(...args: [P17, P18, P19, P20, P21, P22, P23, P24, P25, P26]) => R>)
      & ((...args: [P00, P01, P02, P03, P04, P05, P06, P07, P08, P09, P10, P11, P12, P13, P14, P15, P16, P17]) => CurriedFn09<(...args: [P18, P19, P20, P21, P22, P23, P24, P25, P26]) => R>)
      & ((...args: [P00, P01, P02, P03, P04, P05, P06, P07, P08, P09, P10, P11, P12, P13, P14, P15, P16, P17, P18]) => CurriedFn08<(...args: [P19, P20, P21, P22, P23, P24, P25, P26]) => R>)
      & ((...args: [P00, P01, P02, P03, P04, P05, P06, P07, P08, P09, P10, P11, P12, P13, P14, P15, P16, P17, P18, P19]) => CurriedFn07<(...args: [P20, P21, P22, P23, P24, P25, P26]) => R>)
      & ((...args: [P00, P01, P02, P03, P04, P05, P06, P07, P08, P09, P10, P11, P12, P13, P14, P15, P16, P17, P18, P19, P20]) => CurriedFn06<(...args: [P21, P22, P23, P24, P25, P26]) => R>)
      & ((...args: [P00, P01, P02, P03, P04, P05, P06, P07, P08, P09, P10, P11, P12, P13, P14, P15, P16, P17, P18, P19, P20, P21]) => CurriedFn05<(...args: [P22, P23, P24, P25, P26]) => R>)
      & ((...args: [P00, P01, P02, P03, P04, P05, P06, P07, P08, P09, P10, P11, P12, P13, P14, P15, P16, P17, P18, P19, P20, P21, P22]) => CurriedFn04<(...args: [P23, P24, P25, P26]) => R>)
      & ((...args: [P00, P01, P02, P03, P04, P05, P06, P07, P08, P09, P10, P11, P12, P13, P14, P15, P16, P17, P18, P19, P20, P21, P22, P23]) => CurriedFn03<(...args: [P24, P25, P26]) => R>)
      & ((...args: [P00, P01, P02, P03, P04, P05, P06, P07, P08, P09, P10, P11, P12, P13, P14, P15, P16, P17, P18, P19, P20, P21, P22, P23, P24]) => CurriedFn02<(...args: [P25, P26]) => R>)
      & ((...args: [P00, P01, P02, P03, P04, P05, P06, P07, P08, P09, P10, P11, P12, P13, P14, P15, P16, P17, P18, P19, P20, P21, P22, P23, P24, P25]) => CurriedFn01<(...args: [P26]) => R>)
    : never;

type CurriedFn28<Fn extends Fn28> =
  Fn extends (...args: [infer P00, infer P01, infer P02, infer P03, infer P04, infer P05, infer P06, infer P07, infer P08, infer P09, infer P10, infer P11, infer P12, infer P13, infer P14, infer P15, infer P16, infer P17, infer P18, infer P19, infer P20, infer P21, infer P22, infer P23, infer P24, infer P25, infer P26, infer P27]) => infer R
    ? ((...args: [P00, P01, P02, P03, P04, P05, P06, P07, P08, P09, P10, P11, P12, P13, P14, P15, P16, P17, P18, P19, P20, P21, P22, P23, P24, P25, P26, P27]) => R)
      & ((...args: [P00]) => CurriedFn27<(...args: [P01, P02, P03, P04, P05, P06, P07, P08, P09, P10, P11, P12, P13, P14, P15, P16, P17, P18, P19, P20, P21, P22, P23, P24, P25, P26, P27]) => R>)
      & ((...args: [P00, P01]) => CurriedFn26<(...args: [P02, P03, P04, P05, P06, P07, P08, P09, P10, P11, P12, P13, P14, P15, P16, P17, P18, P19, P20, P21, P22, P23, P24, P25, P26, P27]) => R>)
      & ((...args: [P00, P01, P02]) => CurriedFn25<(...args: [P03, P04, P05, P06, P07, P08, P09, P10, P11, P12, P13, P14, P15, P16, P17, P18, P19, P20, P21, P22, P23, P24, P25, P26, P27]) => R>)
      & ((...args: [P00, P01, P02, P03]) => CurriedFn24<(...args: [P04, P05, P06, P07, P08, P09, P10, P11, P12, P13, P14, P15, P16, P17, P18, P19, P20, P21, P22, P23, P24, P25, P26, P27]) => R>)
      & ((...args: [P00, P01, P02, P03, P04]) => CurriedFn23<(...args: [P05, P06, P07, P08, P09, P10, P11, P12, P13, P14, P15, P16, P17, P18, P19, P20, P21, P22, P23, P24, P25, P26, P27]) => R>)
      & ((...args: [P00, P01, P02, P03, P04, P05]) => CurriedFn22<(...args: [P06, P07, P08, P09, P10, P11, P12, P13, P14, P15, P16, P17, P18, P19, P20, P21, P22, P23, P24, P25, P26, P27]) => R>)
      & ((...args: [P00, P01, P02, P03, P04, P05, P06]) => CurriedFn21<(...args: [P07, P08, P09, P10, P11, P12, P13, P14, P15, P16, P17, P18, P19, P20, P21, P22, P23, P24, P25, P26, P27]) => R>)
      & ((...args: [P00, P01, P02, P03, P04, P05, P06, P07]) => CurriedFn20<(...args: [P08, P09, P10, P11, P12, P13, P14, P15, P16, P17, P18, P19, P20, P21, P22, P23, P24, P25, P26, P27]) => R>)
      & ((...args: [P00, P01, P02, P03, P04, P05, P06, P07, P08]) => CurriedFn19<(...args: [P09, P10, P11, P12, P13, P14, P15, P16, P17, P18, P19, P20, P21, P22, P23, P24, P25, P26, P27]) => R>)
      & ((...args: [P00, P01, P02, P03, P04, P05, P06, P07, P08, P09]) => CurriedFn18<(...args: [P10, P11, P12, P13, P14, P15, P16, P17, P18, P19, P20, P21, P22, P23, P24, P25, P26, P27]) => R>)
      & ((...args: [P00, P01, P02, P03, P04, P05, P06, P07, P08, P09, P10]) => CurriedFn17<(...args: [P11, P12, P13, P14, P15, P16, P17, P18, P19, P20, P21, P22, P23, P24, P25, P26, P27]) => R>)
      & ((...args: [P00, P01, P02, P03, P04, P05, P06, P07, P08, P09, P10, P11]) => CurriedFn16<(...args: [P12, P13, P14, P15, P16, P17, P18, P19, P20, P21, P22, P23, P24, P25, P26, P27]) => R>)
      & ((...args: [P00, P01, P02, P03, P04, P05, P06, P07, P08, P09, P10, P11, P12]) => CurriedFn15<(...args: [P13, P14, P15, P16, P17, P18, P19, P20, P21, P22, P23, P24, P25, P26, P27]) => R>)
      & ((...args: [P00, P01, P02, P03, P04, P05, P06, P07, P08, P09, P10, P11, P12, P13]) => CurriedFn14<(...args: [P14, P15, P16, P17, P18, P19, P20, P21, P22, P23, P24, P25, P26, P27]) => R>)
      & ((...args: [P00, P01, P02, P03, P04, P05, P06, P07, P08, P09, P10, P11, P12, P13, P14]) => CurriedFn13<(...args: [P15, P16, P17, P18, P19, P20, P21, P22, P23, P24, P25, P26, P27]) => R>)
      & ((...args: [P00, P01, P02, P03, P04, P05, P06, P07, P08, P09, P10, P11, P12, P13, P14, P15]) => CurriedFn12<(...args: [P16, P17, P18, P19, P20, P21, P22, P23, P24, P25, P26, P27]) => R>)
      & ((...args: [P00, P01, P02, P03, P04, P05, P06, P07, P08, P09, P10, P11, P12, P13, P14, P15, P16]) => CurriedFn11<(...args: [P17, P18, P19, P20, P21, P22, P23, P24, P25, P26, P27]) => R>)
      & ((...args: [P00, P01, P02, P03, P04, P05, P06, P07, P08, P09, P10, P11, P12, P13, P14, P15, P16, P17]) => CurriedFn10<(...args: [P18, P19, P20, P21, P22, P23, P24, P25, P26, P27]) => R>)
      & ((...args: [P00, P01, P02, P03, P04, P05, P06, P07, P08, P09, P10, P11, P12, P13, P14, P15, P16, P17, P18]) => CurriedFn09<(...args: [P19, P20, P21, P22, P23, P24, P25, P26, P27]) => R>)
      & ((...args: [P00, P01, P02, P03, P04, P05, P06, P07, P08, P09, P10, P11, P12, P13, P14, P15, P16, P17, P18, P19]) => CurriedFn08<(...args: [P20, P21, P22, P23, P24, P25, P26, P27]) => R>)
      & ((...args: [P00, P01, P02, P03, P04, P05, P06, P07, P08, P09, P10, P11, P12, P13, P14, P15, P16, P17, P18, P19, P20]) => CurriedFn07<(...args: [P21, P22, P23, P24, P25, P26, P27]) => R>)
      & ((...args: [P00, P01, P02, P03, P04, P05, P06, P07, P08, P09, P10, P11, P12, P13, P14, P15, P16, P17, P18, P19, P20, P21]) => CurriedFn06<(...args: [P22, P23, P24, P25, P26, P27]) => R>)
      & ((...args: [P00, P01, P02, P03, P04, P05, P06, P07, P08, P09, P10, P11, P12, P13, P14, P15, P16, P17, P18, P19, P20, P21, P22]) => CurriedFn05<(...args: [P23, P24, P25, P26, P27]) => R>)
      & ((...args: [P00, P01, P02, P03, P04, P05, P06, P07, P08, P09, P10, P11, P12, P13, P14, P15, P16, P17, P18, P19, P20, P21, P22, P23]) => CurriedFn04<(...args: [P24, P25, P26, P27]) => R>)
      & ((...args: [P00, P01, P02, P03, P04, P05, P06, P07, P08, P09, P10, P11, P12, P13, P14, P15, P16, P17, P18, P19, P20, P21, P22, P23, P24]) => CurriedFn03<(...args: [P25, P26, P27]) => R>)
      & ((...args: [P00, P01, P02, P03, P04, P05, P06, P07, P08, P09, P10, P11, P12, P13, P14, P15, P16, P17, P18, P19, P20, P21, P22, P23, P24, P25]) => CurriedFn02<(...args: [P26, P27]) => R>)
      & ((...args: [P00, P01, P02, P03, P04, P05, P06, P07, P08, P09, P10, P11, P12, P13, P14, P15, P16, P17, P18, P19, P20, P21, P22, P23, P24, P25, P26]) => CurriedFn01<(...args: [P27]) => R>)
    : never;

type CurriedFn29<Fn extends Fn29> =
  Fn extends (...args: [infer P00, infer P01, infer P02, infer P03, infer P04, infer P05, infer P06, infer P07, infer P08, infer P09, infer P10, infer P11, infer P12, infer P13, infer P14, infer P15, infer P16, infer P17, infer P18, infer P19, infer P20, infer P21, infer P22, infer P23, infer P24, infer P25, infer P26, infer P27, infer P28]) => infer R
    ? ((...args: [P00, P01, P02, P03, P04, P05, P06, P07, P08, P09, P10, P11, P12, P13, P14, P15, P16, P17, P18, P19, P20, P21, P22, P23, P24, P25, P26, P27, P28]) => R)
      & ((...args: [P00]) => CurriedFn28<(...args: [P01, P02, P03, P04, P05, P06, P07, P08, P09, P10, P11, P12, P13, P14, P15, P16, P17, P18, P19, P20, P21, P22, P23, P24, P25, P26, P27, P28]) => R>)
      & ((...args: [P00, P01]) => CurriedFn27<(...args: [P02, P03, P04, P05, P06, P07, P08, P09, P10, P11, P12, P13, P14, P15, P16, P17, P18, P19, P20, P21, P22, P23, P24, P25, P26, P27, P28]) => R>)
      & ((...args: [P00, P01, P02]) => CurriedFn26<(...args: [P03, P04, P05, P06, P07, P08, P09, P10, P11, P12, P13, P14, P15, P16, P17, P18, P19, P20, P21, P22, P23, P24, P25, P26, P27, P28]) => R>)
      & ((...args: [P00, P01, P02, P03]) => CurriedFn25<(...args: [P04, P05, P06, P07, P08, P09, P10, P11, P12, P13, P14, P15, P16, P17, P18, P19, P20, P21, P22, P23, P24, P25, P26, P27, P28]) => R>)
      & ((...args: [P00, P01, P02, P03, P04]) => CurriedFn24<(...args: [P05, P06, P07, P08, P09, P10, P11, P12, P13, P14, P15, P16, P17, P18, P19, P20, P21, P22, P23, P24, P25, P26, P27, P28]) => R>)
      & ((...args: [P00, P01, P02, P03, P04, P05]) => CurriedFn23<(...args: [P06, P07, P08, P09, P10, P11, P12, P13, P14, P15, P16, P17, P18, P19, P20, P21, P22, P23, P24, P25, P26, P27, P28]) => R>)
      & ((...args: [P00, P01, P02, P03, P04, P05, P06]) => CurriedFn22<(...args: [P07, P08, P09, P10, P11, P12, P13, P14, P15, P16, P17, P18, P19, P20, P21, P22, P23, P24, P25, P26, P27, P28]) => R>)
      & ((...args: [P00, P01, P02, P03, P04, P05, P06, P07]) => CurriedFn21<(...args: [P08, P09, P10, P11, P12, P13, P14, P15, P16, P17, P18, P19, P20, P21, P22, P23, P24, P25, P26, P27, P28]) => R>)
      & ((...args: [P00, P01, P02, P03, P04, P05, P06, P07, P08]) => CurriedFn20<(...args: [P09, P10, P11, P12, P13, P14, P15, P16, P17, P18, P19, P20, P21, P22, P23, P24, P25, P26, P27, P28]) => R>)
      & ((...args: [P00, P01, P02, P03, P04, P05, P06, P07, P08, P09]) => CurriedFn19<(...args: [P10, P11, P12, P13, P14, P15, P16, P17, P18, P19, P20, P21, P22, P23, P24, P25, P26, P27, P28]) => R>)
      & ((...args: [P00, P01, P02, P03, P04, P05, P06, P07, P08, P09, P10]) => CurriedFn18<(...args: [P11, P12, P13, P14, P15, P16, P17, P18, P19, P20, P21, P22, P23, P24, P25, P26, P27, P28]) => R>)
      & ((...args: [P00, P01, P02, P03, P04, P05, P06, P07, P08, P09, P10, P11]) => CurriedFn17<(...args: [P12, P13, P14, P15, P16, P17, P18, P19, P20, P21, P22, P23, P24, P25, P26, P27, P28]) => R>)
      & ((...args: [P00, P01, P02, P03, P04, P05, P06, P07, P08, P09, P10, P11, P12]) => CurriedFn16<(...args: [P13, P14, P15, P16, P17, P18, P19, P20, P21, P22, P23, P24, P25, P26, P27, P28]) => R>)
      & ((...args: [P00, P01, P02, P03, P04, P05, P06, P07, P08, P09, P10, P11, P12, P13]) => CurriedFn15<(...args: [P14, P15, P16, P17, P18, P19, P20, P21, P22, P23, P24, P25, P26, P27, P28]) => R>)
      & ((...args: [P00, P01, P02, P03, P04, P05, P06, P07, P08, P09, P10, P11, P12, P13, P14]) => CurriedFn14<(...args: [P15, P16, P17, P18, P19, P20, P21, P22, P23, P24, P25, P26, P27, P28]) => R>)
      & ((...args: [P00, P01, P02, P03, P04, P05, P06, P07, P08, P09, P10, P11, P12, P13, P14, P15]) => CurriedFn13<(...args: [P16, P17, P18, P19, P20, P21, P22, P23, P24, P25, P26, P27, P28]) => R>)
      & ((...args: [P00, P01, P02, P03, P04, P05, P06, P07, P08, P09, P10, P11, P12, P13, P14, P15, P16]) => CurriedFn12<(...args: [P17, P18, P19, P20, P21, P22, P23, P24, P25, P26, P27, P28]) => R>)
      & ((...args: [P00, P01, P02, P03, P04, P05, P06, P07, P08, P09, P10, P11, P12, P13, P14, P15, P16, P17]) => CurriedFn11<(...args: [P18, P19, P20, P21, P22, P23, P24, P25, P26, P27, P28]) => R>)
      & ((...args: [P00, P01, P02, P03, P04, P05, P06, P07, P08, P09, P10, P11, P12, P13, P14, P15, P16, P17, P18]) => CurriedFn10<(...args: [P19, P20, P21, P22, P23, P24, P25, P26, P27, P28]) => R>)
      & ((...args: [P00, P01, P02, P03, P04, P05, P06, P07, P08, P09, P10, P11, P12, P13, P14, P15, P16, P17, P18, P19]) => CurriedFn09<(...args: [P20, P21, P22, P23, P24, P25, P26, P27, P28]) => R>)
      & ((...args: [P00, P01, P02, P03, P04, P05, P06, P07, P08, P09, P10, P11, P12, P13, P14, P15, P16, P17, P18, P19, P20]) => CurriedFn08<(...args: [P21, P22, P23, P24, P25, P26, P27, P28]) => R>)
      & ((...args: [P00, P01, P02, P03, P04, P05, P06, P07, P08, P09, P10, P11, P12, P13, P14, P15, P16, P17, P18, P19, P20, P21]) => CurriedFn07<(...args: [P22, P23, P24, P25, P26, P27, P28]) => R>)
      & ((...args: [P00, P01, P02, P03, P04, P05, P06, P07, P08, P09, P10, P11, P12, P13, P14, P15, P16, P17, P18, P19, P20, P21, P22]) => CurriedFn06<(...args: [P23, P24, P25, P26, P27, P28]) => R>)
      & ((...args: [P00, P01, P02, P03, P04, P05, P06, P07, P08, P09, P10, P11, P12, P13, P14, P15, P16, P17, P18, P19, P20, P21, P22, P23]) => CurriedFn05<(...args: [P24, P25, P26, P27, P28]) => R>)
      & ((...args: [P00, P01, P02, P03, P04, P05, P06, P07, P08, P09, P10, P11, P12, P13, P14, P15, P16, P17, P18, P19, P20, P21, P22, P23, P24]) => CurriedFn04<(...args: [P25, P26, P27, P28]) => R>)
      & ((...args: [P00, P01, P02, P03, P04, P05, P06, P07, P08, P09, P10, P11, P12, P13, P14, P15, P16, P17, P18, P19, P20, P21, P22, P23, P24, P25]) => CurriedFn03<(...args: [P26, P27, P28]) => R>)
      & ((...args: [P00, P01, P02, P03, P04, P05, P06, P07, P08, P09, P10, P11, P12, P13, P14, P15, P16, P17, P18, P19, P20, P21, P22, P23, P24, P25, P26]) => CurriedFn02<(...args: [P27, P28]) => R>)
      & ((...args: [P00, P01, P02, P03, P04, P05, P06, P07, P08, P09, P10, P11, P12, P13, P14, P15, P16, P17, P18, P19, P20, P21, P22, P23, P24, P25, P26, P27]) => CurriedFn01<(...args: [P28]) => R>)
    : never;

type CurriedFn30<Fn extends Fn30> =
  Fn extends (...args: [infer P00, infer P01, infer P02, infer P03, infer P04, infer P05, infer P06, infer P07, infer P08, infer P09, infer P10, infer P11, infer P12, infer P13, infer P14, infer P15, infer P16, infer P17, infer P18, infer P19, infer P20, infer P21, infer P22, infer P23, infer P24, infer P25, infer P26, infer P27, infer P28, infer P29]) => infer R
    ? ((...args: [P00, P01, P02, P03, P04, P05, P06, P07, P08, P09, P10, P11, P12, P13, P14, P15, P16, P17, P18, P19, P20, P21, P22, P23, P24, P25, P26, P27, P28, P29]) => R)
      & ((...args: [P00]) => CurriedFn29<(...args: [P01, P02, P03, P04, P05, P06, P07, P08, P09, P10, P11, P12, P13, P14, P15, P16, P17, P18, P19, P20, P21, P22, P23, P24, P25, P26, P27, P28, P29]) => R>)
      & ((...args: [P00, P01]) => CurriedFn28<(...args: [P02, P03, P04, P05, P06, P07, P08, P09, P10, P11, P12, P13, P14, P15, P16, P17, P18, P19, P20, P21, P22, P23, P24, P25, P26, P27, P28, P29]) => R>)
      & ((...args: [P00, P01, P02]) => CurriedFn27<(...args: [P03, P04, P05, P06, P07, P08, P09, P10, P11, P12, P13, P14, P15, P16, P17, P18, P19, P20, P21, P22, P23, P24, P25, P26, P27, P28, P29]) => R>)
      & ((...args: [P00, P01, P02, P03]) => CurriedFn26<(...args: [P04, P05, P06, P07, P08, P09, P10, P11, P12, P13, P14, P15, P16, P17, P18, P19, P20, P21, P22, P23, P24, P25, P26, P27, P28, P29]) => R>)
      & ((...args: [P00, P01, P02, P03, P04]) => CurriedFn25<(...args: [P05, P06, P07, P08, P09, P10, P11, P12, P13, P14, P15, P16, P17, P18, P19, P20, P21, P22, P23, P24, P25, P26, P27, P28, P29]) => R>)
      & ((...args: [P00, P01, P02, P03, P04, P05]) => CurriedFn24<(...args: [P06, P07, P08, P09, P10, P11, P12, P13, P14, P15, P16, P17, P18, P19, P20, P21, P22, P23, P24, P25, P26, P27, P28, P29]) => R>)
      & ((...args: [P00, P01, P02, P03, P04, P05, P06]) => CurriedFn23<(...args: [P07, P08, P09, P10, P11, P12, P13, P14, P15, P16, P17, P18, P19, P20, P21, P22, P23, P24, P25, P26, P27, P28, P29]) => R>)
      & ((...args: [P00, P01, P02, P03, P04, P05, P06, P07]) => CurriedFn22<(...args: [P08, P09, P10, P11, P12, P13, P14, P15, P16, P17, P18, P19, P20, P21, P22, P23, P24, P25, P26, P27, P28, P29]) => R>)
      & ((...args: [P00, P01, P02, P03, P04, P05, P06, P07, P08]) => CurriedFn21<(...args: [P09, P10, P11, P12, P13, P14, P15, P16, P17, P18, P19, P20, P21, P22, P23, P24, P25, P26, P27, P28, P29]) => R>)
      & ((...args: [P00, P01, P02, P03, P04, P05, P06, P07, P08, P09]) => CurriedFn20<(...args: [P10, P11, P12, P13, P14, P15, P16, P17, P18, P19, P20, P21, P22, P23, P24, P25, P26, P27, P28, P29]) => R>)
      & ((...args: [P00, P01, P02, P03, P04, P05, P06, P07, P08, P09, P10]) => CurriedFn19<(...args: [P11, P12, P13, P14, P15, P16, P17, P18, P19, P20, P21, P22, P23, P24, P25, P26, P27, P28, P29]) => R>)
      & ((...args: [P00, P01, P02, P03, P04, P05, P06, P07, P08, P09, P10, P11]) => CurriedFn18<(...args: [P12, P13, P14, P15, P16, P17, P18, P19, P20, P21, P22, P23, P24, P25, P26, P27, P28, P29]) => R>)
      & ((...args: [P00, P01, P02, P03, P04, P05, P06, P07, P08, P09, P10, P11, P12]) => CurriedFn17<(...args: [P13, P14, P15, P16, P17, P18, P19, P20, P21, P22, P23, P24, P25, P26, P27, P28, P29]) => R>)
      & ((...args: [P00, P01, P02, P03, P04, P05, P06, P07, P08, P09, P10, P11, P12, P13]) => CurriedFn16<(...args: [P14, P15, P16, P17, P18, P19, P20, P21, P22, P23, P24, P25, P26, P27, P28, P29]) => R>)
      & ((...args: [P00, P01, P02, P03, P04, P05, P06, P07, P08, P09, P10, P11, P12, P13, P14]) => CurriedFn15<(...args: [P15, P16, P17, P18, P19, P20, P21, P22, P23, P24, P25, P26, P27, P28, P29]) => R>)
      & ((...args: [P00, P01, P02, P03, P04, P05, P06, P07, P08, P09, P10, P11, P12, P13, P14, P15]) => CurriedFn14<(...args: [P16, P17, P18, P19, P20, P21, P22, P23, P24, P25, P26, P27, P28, P29]) => R>)
      & ((...args: [P00, P01, P02, P03, P04, P05, P06, P07, P08, P09, P10, P11, P12, P13, P14, P15, P16]) => CurriedFn13<(...args: [P17, P18, P19, P20, P21, P22, P23, P24, P25, P26, P27, P28, P29]) => R>)
      & ((...args: [P00, P01, P02, P03, P04, P05, P06, P07, P08, P09, P10, P11, P12, P13, P14, P15, P16, P17]) => CurriedFn12<(...args: [P18, P19, P20, P21, P22, P23, P24, P25, P26, P27, P28, P29]) => R>)
      & ((...args: [P00, P01, P02, P03, P04, P05, P06, P07, P08, P09, P10, P11, P12, P13, P14, P15, P16, P17, P18]) => CurriedFn11<(...args: [P19, P20, P21, P22, P23, P24, P25, P26, P27, P28, P29]) => R>)
      & ((...args: [P00, P01, P02, P03, P04, P05, P06, P07, P08, P09, P10, P11, P12, P13, P14, P15, P16, P17, P18, P19]) => CurriedFn10<(...args: [P20, P21, P22, P23, P24, P25, P26, P27, P28, P29]) => R>)
      & ((...args: [P00, P01, P02, P03, P04, P05, P06, P07, P08, P09, P10, P11, P12, P13, P14, P15, P16, P17, P18, P19, P20]) => CurriedFn09<(...args: [P21, P22, P23, P24, P25, P26, P27, P28, P29]) => R>)
      & ((...args: [P00, P01, P02, P03, P04, P05, P06, P07, P08, P09, P10, P11, P12, P13, P14, P15, P16, P17, P18, P19, P20, P21]) => CurriedFn08<(...args: [P22, P23, P24, P25, P26, P27, P28, P29]) => R>)
      & ((...args: [P00, P01, P02, P03, P04, P05, P06, P07, P08, P09, P10, P11, P12, P13, P14, P15, P16, P17, P18, P19, P20, P21, P22]) => CurriedFn07<(...args: [P23, P24, P25, P26, P27, P28, P29]) => R>)
      & ((...args: [P00, P01, P02, P03, P04, P05, P06, P07, P08, P09, P10, P11, P12, P13, P14, P15, P16, P17, P18, P19, P20, P21, P22, P23]) => CurriedFn06<(...args: [P24, P25, P26, P27, P28, P29]) => R>)
      & ((...args: [P00, P01, P02, P03, P04, P05, P06, P07, P08, P09, P10, P11, P12, P13, P14, P15, P16, P17, P18, P19, P20, P21, P22, P23, P24]) => CurriedFn05<(...args: [P25, P26, P27, P28, P29]) => R>)
      & ((...args: [P00, P01, P02, P03, P04, P05, P06, P07, P08, P09, P10, P11, P12, P13, P14, P15, P16, P17, P18, P19, P20, P21, P22, P23, P24, P25]) => CurriedFn04<(...args: [P26, P27, P28, P29]) => R>)
      & ((...args: [P00, P01, P02, P03, P04, P05, P06, P07, P08, P09, P10, P11, P12, P13, P14, P15, P16, P17, P18, P19, P20, P21, P22, P23, P24, P25, P26]) => CurriedFn03<(...args: [P27, P28, P29]) => R>)
      & ((...args: [P00, P01, P02, P03, P04, P05, P06, P07, P08, P09, P10, P11, P12, P13, P14, P15, P16, P17, P18, P19, P20, P21, P22, P23, P24, P25, P26, P27]) => CurriedFn02<(...args: [P28, P29]) => R>)
      & ((...args: [P00, P01, P02, P03, P04, P05, P06, P07, P08, P09, P10, P11, P12, P13, P14, P15, P16, P17, P18, P19, P20, P21, P22, P23, P24, P25, P26, P27, P28]) => CurriedFn01<(...args: [P29]) => R>)
    : never;

type CurriedFn31<Fn extends Fn31> =
  Fn extends (...args: [infer P00, infer P01, infer P02, infer P03, infer P04, infer P05, infer P06, infer P07, infer P08, infer P09, infer P10, infer P11, infer P12, infer P13, infer P14, infer P15, infer P16, infer P17, infer P18, infer P19, infer P20, infer P21, infer P22, infer P23, infer P24, infer P25, infer P26, infer P27, infer P28, infer P29, infer P30]) => infer R
    ? ((...args: [P00, P01, P02, P03, P04, P05, P06, P07, P08, P09, P10, P11, P12, P13, P14, P15, P16, P17, P18, P19, P20, P21, P22, P23, P24, P25, P26, P27, P28, P29, P30]) => R)
      & ((...args: [P00]) => CurriedFn30<(...args: [P01, P02, P03, P04, P05, P06, P07, P08, P09, P10, P11, P12, P13, P14, P15, P16, P17, P18, P19, P20, P21, P22, P23, P24, P25, P26, P27, P28, P29, P30]) => R>)
      & ((...args: [P00, P01]) => CurriedFn29<(...args: [P02, P03, P04, P05, P06, P07, P08, P09, P10, P11, P12, P13, P14, P15, P16, P17, P18, P19, P20, P21, P22, P23, P24, P25, P26, P27, P28, P29, P30]) => R>)
      & ((...args: [P00, P01, P02]) => CurriedFn28<(...args: [P03, P04, P05, P06, P07, P08, P09, P10, P11, P12, P13, P14, P15, P16, P17, P18, P19, P20, P21, P22, P23, P24, P25, P26, P27, P28, P29, P30]) => R>)
      & ((...args: [P00, P01, P02, P03]) => CurriedFn27<(...args: [P04, P05, P06, P07, P08, P09, P10, P11, P12, P13, P14, P15, P16, P17, P18, P19, P20, P21, P22, P23, P24, P25, P26, P27, P28, P29, P30]) => R>)
      & ((...args: [P00, P01, P02, P03, P04]) => CurriedFn26<(...args: [P05, P06, P07, P08, P09, P10, P11, P12, P13, P14, P15, P16, P17, P18, P19, P20, P21, P22, P23, P24, P25, P26, P27, P28, P29, P30]) => R>)
      & ((...args: [P00, P01, P02, P03, P04, P05]) => CurriedFn25<(...args: [P06, P07, P08, P09, P10, P11, P12, P13, P14, P15, P16, P17, P18, P19, P20, P21, P22, P23, P24, P25, P26, P27, P28, P29, P30]) => R>)
      & ((...args: [P00, P01, P02, P03, P04, P05, P06]) => CurriedFn24<(...args: [P07, P08, P09, P10, P11, P12, P13, P14, P15, P16, P17, P18, P19, P20, P21, P22, P23, P24, P25, P26, P27, P28, P29, P30]) => R>)
      & ((...args: [P00, P01, P02, P03, P04, P05, P06, P07]) => CurriedFn23<(...args: [P08, P09, P10, P11, P12, P13, P14, P15, P16, P17, P18, P19, P20, P21, P22, P23, P24, P25, P26, P27, P28, P29, P30]) => R>)
      & ((...args: [P00, P01, P02, P03, P04, P05, P06, P07, P08]) => CurriedFn22<(...args: [P09, P10, P11, P12, P13, P14, P15, P16, P17, P18, P19, P20, P21, P22, P23, P24, P25, P26, P27, P28, P29, P30]) => R>)
      & ((...args: [P00, P01, P02, P03, P04, P05, P06, P07, P08, P09]) => CurriedFn21<(...args: [P10, P11, P12, P13, P14, P15, P16, P17, P18, P19, P20, P21, P22, P23, P24, P25, P26, P27, P28, P29, P30]) => R>)
      & ((...args: [P00, P01, P02, P03, P04, P05, P06, P07, P08, P09, P10]) => CurriedFn20<(...args: [P11, P12, P13, P14, P15, P16, P17, P18, P19, P20, P21, P22, P23, P24, P25, P26, P27, P28, P29, P30]) => R>)
      & ((...args: [P00, P01, P02, P03, P04, P05, P06, P07, P08, P09, P10, P11]) => CurriedFn19<(...args: [P12, P13, P14, P15, P16, P17, P18, P19, P20, P21, P22, P23, P24, P25, P26, P27, P28, P29, P30]) => R>)
      & ((...args: [P00, P01, P02, P03, P04, P05, P06, P07, P08, P09, P10, P11, P12]) => CurriedFn18<(...args: [P13, P14, P15, P16, P17, P18, P19, P20, P21, P22, P23, P24, P25, P26, P27, P28, P29, P30]) => R>)
      & ((...args: [P00, P01, P02, P03, P04, P05, P06, P07, P08, P09, P10, P11, P12, P13]) => CurriedFn17<(...args: [P14, P15, P16, P17, P18, P19, P20, P21, P22, P23, P24, P25, P26, P27, P28, P29, P30]) => R>)
      & ((...args: [P00, P01, P02, P03, P04, P05, P06, P07, P08, P09, P10, P11, P12, P13, P14]) => CurriedFn16<(...args: [P15, P16, P17, P18, P19, P20, P21, P22, P23, P24, P25, P26, P27, P28, P29, P30]) => R>)
      & ((...args: [P00, P01, P02, P03, P04, P05, P06, P07, P08, P09, P10, P11, P12, P13, P14, P15]) => CurriedFn15<(...args: [P16, P17, P18, P19, P20, P21, P22, P23, P24, P25, P26, P27, P28, P29, P30]) => R>)
      & ((...args: [P00, P01, P02, P03, P04, P05, P06, P07, P08, P09, P10, P11, P12, P13, P14, P15, P16]) => CurriedFn14<(...args: [P17, P18, P19, P20, P21, P22, P23, P24, P25, P26, P27, P28, P29, P30]) => R>)
      & ((...args: [P00, P01, P02, P03, P04, P05, P06, P07, P08, P09, P10, P11, P12, P13, P14, P15, P16, P17]) => CurriedFn13<(...args: [P18, P19, P20, P21, P22, P23, P24, P25, P26, P27, P28, P29, P30]) => R>)
      & ((...args: [P00, P01, P02, P03, P04, P05, P06, P07, P08, P09, P10, P11, P12, P13, P14, P15, P16, P17, P18]) => CurriedFn12<(...args: [P19, P20, P21, P22, P23, P24, P25, P26, P27, P28, P29, P30]) => R>)
      & ((...args: [P00, P01, P02, P03, P04, P05, P06, P07, P08, P09, P10, P11, P12, P13, P14, P15, P16, P17, P18, P19]) => CurriedFn11<(...args: [P20, P21, P22, P23, P24, P25, P26, P27, P28, P29, P30]) => R>)
      & ((...args: [P00, P01, P02, P03, P04, P05, P06, P07, P08, P09, P10, P11, P12, P13, P14, P15, P16, P17, P18, P19, P20]) => CurriedFn10<(...args: [P21, P22, P23, P24, P25, P26, P27, P28, P29, P30]) => R>)
      & ((...args: [P00, P01, P02, P03, P04, P05, P06, P07, P08, P09, P10, P11, P12, P13, P14, P15, P16, P17, P18, P19, P20, P21]) => CurriedFn09<(...args: [P22, P23, P24, P25, P26, P27, P28, P29, P30]) => R>)
      & ((...args: [P00, P01, P02, P03, P04, P05, P06, P07, P08, P09, P10, P11, P12, P13, P14, P15, P16, P17, P18, P19, P20, P21, P22]) => CurriedFn08<(...args: [P23, P24, P25, P26, P27, P28, P29, P30]) => R>)
      & ((...args: [P00, P01, P02, P03, P04, P05, P06, P07, P08, P09, P10, P11, P12, P13, P14, P15, P16, P17, P18, P19, P20, P21, P22, P23]) => CurriedFn07<(...args: [P24, P25, P26, P27, P28, P29, P30]) => R>)
      & ((...args: [P00, P01, P02, P03, P04, P05, P06, P07, P08, P09, P10, P11, P12, P13, P14, P15, P16, P17, P18, P19, P20, P21, P22, P23, P24]) => CurriedFn06<(...args: [P25, P26, P27, P28, P29, P30]) => R>)
      & ((...args: [P00, P01, P02, P03, P04, P05, P06, P07, P08, P09, P10, P11, P12, P13, P14, P15, P16, P17, P18, P19, P20, P21, P22, P23, P24, P25]) => CurriedFn05<(...args: [P26, P27, P28, P29, P30]) => R>)
      & ((...args: [P00, P01, P02, P03, P04, P05, P06, P07, P08, P09, P10, P11, P12, P13, P14, P15, P16, P17, P18, P19, P20, P21, P22, P23, P24, P25, P26]) => CurriedFn04<(...args: [P27, P28, P29, P30]) => R>)
      & ((...args: [P00, P01, P02, P03, P04, P05, P06, P07, P08, P09, P10, P11, P12, P13, P14, P15, P16, P17, P18, P19, P20, P21, P22, P23, P24, P25, P26, P27]) => CurriedFn03<(...args: [P28, P29, P30]) => R>)
      & ((...args: [P00, P01, P02, P03, P04, P05, P06, P07, P08, P09, P10, P11, P12, P13, P14, P15, P16, P17, P18, P19, P20, P21, P22, P23, P24, P25, P26, P27, P28]) => CurriedFn02<(...args: [P29, P30]) => R>)
      & ((...args: [P00, P01, P02, P03, P04, P05, P06, P07, P08, P09, P10, P11, P12, P13, P14, P15, P16, P17, P18, P19, P20, P21, P22, P23, P24, P25, P26, P27, P28, P29]) => CurriedFn01<(...args: [P30]) => R>)
    : never;

type CurriedFn32<Fn extends Fn32> =
  Fn extends (...args: [infer P00, infer P01, infer P02, infer P03, infer P04, infer P05, infer P06, infer P07, infer P08, infer P09, infer P10, infer P11, infer P12, infer P13, infer P14, infer P15, infer P16, infer P17, infer P18, infer P19, infer P20, infer P21, infer P22, infer P23, infer P24, infer P25, infer P26, infer P27, infer P28, infer P29, infer P30, infer P31]) => infer R
    ? ((...args: [P00, P01, P02, P03, P04, P05, P06, P07, P08, P09, P10, P11, P12, P13, P14, P15, P16, P17, P18, P19, P20, P21, P22, P23, P24, P25, P26, P27, P28, P29, P30, P31]) => R)
      & ((...args: [P00]) => CurriedFn31<(...args: [P01, P02, P03, P04, P05, P06, P07, P08, P09, P10, P11, P12, P13, P14, P15, P16, P17, P18, P19, P20, P21, P22, P23, P24, P25, P26, P27, P28, P29, P30, P31]) => R>)
      & ((...args: [P00, P01]) => CurriedFn30<(...args: [P02, P03, P04, P05, P06, P07, P08, P09, P10, P11, P12, P13, P14, P15, P16, P17, P18, P19, P20, P21, P22, P23, P24, P25, P26, P27, P28, P29, P30, P31]) => R>)
      & ((...args: [P00, P01, P02]) => CurriedFn29<(...args: [P03, P04, P05, P06, P07, P08, P09, P10, P11, P12, P13, P14, P15, P16, P17, P18, P19, P20, P21, P22, P23, P24, P25, P26, P27, P28, P29, P30, P31]) => R>)
      & ((...args: [P00, P01, P02, P03]) => CurriedFn28<(...args: [P04, P05, P06, P07, P08, P09, P10, P11, P12, P13, P14, P15, P16, P17, P18, P19, P20, P21, P22, P23, P24, P25, P26, P27, P28, P29, P30, P31]) => R>)
      & ((...args: [P00, P01, P02, P03, P04]) => CurriedFn27<(...args: [P05, P06, P07, P08, P09, P10, P11, P12, P13, P14, P15, P16, P17, P18, P19, P20, P21, P22, P23, P24, P25, P26, P27, P28, P29, P30, P31]) => R>)
      & ((...args: [P00, P01, P02, P03, P04, P05]) => CurriedFn26<(...args: [P06, P07, P08, P09, P10, P11, P12, P13, P14, P15, P16, P17, P18, P19, P20, P21, P22, P23, P24, P25, P26, P27, P28, P29, P30, P31]) => R>)
      & ((...args: [P00, P01, P02, P03, P04, P05, P06]) => CurriedFn25<(...args: [P07, P08, P09, P10, P11, P12, P13, P14, P15, P16, P17, P18, P19, P20, P21, P22, P23, P24, P25, P26, P27, P28, P29, P30, P31]) => R>)
      & ((...args: [P00, P01, P02, P03, P04, P05, P06, P07]) => CurriedFn24<(...args: [P08, P09, P10, P11, P12, P13, P14, P15, P16, P17, P18, P19, P20, P21, P22, P23, P24, P25, P26, P27, P28, P29, P30, P31]) => R>)
      & ((...args: [P00, P01, P02, P03, P04, P05, P06, P07, P08]) => CurriedFn23<(...args: [P09, P10, P11, P12, P13, P14, P15, P16, P17, P18, P19, P20, P21, P22, P23, P24, P25, P26, P27, P28, P29, P30, P31]) => R>)
      & ((...args: [P00, P01, P02, P03, P04, P05, P06, P07, P08, P09]) => CurriedFn22<(...args: [P10, P11, P12, P13, P14, P15, P16, P17, P18, P19, P20, P21, P22, P23, P24, P25, P26, P27, P28, P29, P30, P31]) => R>)
      & ((...args: [P00, P01, P02, P03, P04, P05, P06, P07, P08, P09, P10]) => CurriedFn21<(...args: [P11, P12, P13, P14, P15, P16, P17, P18, P19, P20, P21, P22, P23, P24, P25, P26, P27, P28, P29, P30, P31]) => R>)
      & ((...args: [P00, P01, P02, P03, P04, P05, P06, P07, P08, P09, P10, P11]) => CurriedFn20<(...args: [P12, P13, P14, P15, P16, P17, P18, P19, P20, P21, P22, P23, P24, P25, P26, P27, P28, P29, P30, P31]) => R>)
      & ((...args: [P00, P01, P02, P03, P04, P05, P06, P07, P08, P09, P10, P11, P12]) => CurriedFn19<(...args: [P13, P14, P15, P16, P17, P18, P19, P20, P21, P22, P23, P24, P25, P26, P27, P28, P29, P30, P31]) => R>)
      & ((...args: [P00, P01, P02, P03, P04, P05, P06, P07, P08, P09, P10, P11, P12, P13]) => CurriedFn18<(...args: [P14, P15, P16, P17, P18, P19, P20, P21, P22, P23, P24, P25, P26, P27, P28, P29, P30, P31]) => R>)
      & ((...args: [P00, P01, P02, P03, P04, P05, P06, P07, P08, P09, P10, P11, P12, P13, P14]) => CurriedFn17<(...args: [P15, P16, P17, P18, P19, P20, P21, P22, P23, P24, P25, P26, P27, P28, P29, P30, P31]) => R>)
      & ((...args: [P00, P01, P02, P03, P04, P05, P06, P07, P08, P09, P10, P11, P12, P13, P14, P15]) => CurriedFn16<(...args: [P16, P17, P18, P19, P20, P21, P22, P23, P24, P25, P26, P27, P28, P29, P30, P31]) => R>)
      & ((...args: [P00, P01, P02, P03, P04, P05, P06, P07, P08, P09, P10, P11, P12, P13, P14, P15, P16]) => CurriedFn15<(...args: [P17, P18, P19, P20, P21, P22, P23, P24, P25, P26, P27, P28, P29, P30, P31]) => R>)
      & ((...args: [P00, P01, P02, P03, P04, P05, P06, P07, P08, P09, P10, P11, P12, P13, P14, P15, P16, P17]) => CurriedFn14<(...args: [P18, P19, P20, P21, P22, P23, P24, P25, P26, P27, P28, P29, P30, P31]) => R>)
      & ((...args: [P00, P01, P02, P03, P04, P05, P06, P07, P08, P09, P10, P11, P12, P13, P14, P15, P16, P17, P18]) => CurriedFn13<(...args: [P19, P20, P21, P22, P23, P24, P25, P26, P27, P28, P29, P30, P31]) => R>)
      & ((...args: [P00, P01, P02, P03, P04, P05, P06, P07, P08, P09, P10, P11, P12, P13, P14, P15, P16, P17, P18, P19]) => CurriedFn12<(...args: [P20, P21, P22, P23, P24, P25, P26, P27, P28, P29, P30, P31]) => R>)
      & ((...args: [P00, P01, P02, P03, P04, P05, P06, P07, P08, P09, P10, P11, P12, P13, P14, P15, P16, P17, P18, P19, P20]) => CurriedFn11<(...args: [P21, P22, P23, P24, P25, P26, P27, P28, P29, P30, P31]) => R>)
      & ((...args: [P00, P01, P02, P03, P04, P05, P06, P07, P08, P09, P10, P11, P12, P13, P14, P15, P16, P17, P18, P19, P20, P21]) => CurriedFn10<(...args: [P22, P23, P24, P25, P26, P27, P28, P29, P30, P31]) => R>)
      & ((...args: [P00, P01, P02, P03, P04, P05, P06, P07, P08, P09, P10, P11, P12, P13, P14, P15, P16, P17, P18, P19, P20, P21, P22]) => CurriedFn09<(...args: [P23, P24, P25, P26, P27, P28, P29, P30, P31]) => R>)
      & ((...args: [P00, P01, P02, P03, P04, P05, P06, P07, P08, P09, P10, P11, P12, P13, P14, P15, P16, P17, P18, P19, P20, P21, P22, P23]) => CurriedFn08<(...args: [P24, P25, P26, P27, P28, P29, P30, P31]) => R>)
      & ((...args: [P00, P01, P02, P03, P04, P05, P06, P07, P08, P09, P10, P11, P12, P13, P14, P15, P16, P17, P18, P19, P20, P21, P22, P23, P24]) => CurriedFn07<(...args: [P25, P26, P27, P28, P29, P30, P31]) => R>)
      & ((...args: [P00, P01, P02, P03, P04, P05, P06, P07, P08, P09, P10, P11, P12, P13, P14, P15, P16, P17, P18, P19, P20, P21, P22, P23, P24, P25]) => CurriedFn06<(...args: [P26, P27, P28, P29, P30, P31]) => R>)
      & ((...args: [P00, P01, P02, P03, P04, P05, P06, P07, P08, P09, P10, P11, P12, P13, P14, P15, P16, P17, P18, P19, P20, P21, P22, P23, P24, P25, P26]) => CurriedFn05<(...args: [P27, P28, P29, P30, P31]) => R>)
      & ((...args: [P00, P01, P02, P03, P04, P05, P06, P07, P08, P09, P10, P11, P12, P13, P14, P15, P16, P17, P18, P19, P20, P21, P22, P23, P24, P25, P26, P27]) => CurriedFn04<(...args: [P28, P29, P30, P31]) => R>)
      & ((...args: [P00, P01, P02, P03, P04, P05, P06, P07, P08, P09, P10, P11, P12, P13, P14, P15, P16, P17, P18, P19, P20, P21, P22, P23, P24, P25, P26, P27, P28]) => CurriedFn03<(...args: [P29, P30, P31]) => R>)
      & ((...args: [P00, P01, P02, P03, P04, P05, P06, P07, P08, P09, P10, P11, P12, P13, P14, P15, P16, P17, P18, P19, P20, P21, P22, P23, P24, P25, P26, P27, P28, P29]) => CurriedFn02<(...args: [P30, P31]) => R>)
      & ((...args: [P00, P01, P02, P03, P04, P05, P06, P07, P08, P09, P10, P11, P12, P13, P14, P15, P16, P17, P18, P19, P20, P21, P22, P23, P24, P25, P26, P27, P28, P29, P30]) => CurriedFn01<(...args: [P31]) => R>)
    : never;