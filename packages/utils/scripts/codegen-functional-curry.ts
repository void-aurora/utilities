import fs from 'fs-extra';
import { pathSrcResolve } from './codegen';

const padStartZero = (n: number) => n.toString().padStart(2, '0');

const max = 32;
const serials = Array.from({ length: max + 1 }, (_, i) => i);

const codegen = () => {
  /**
   * ```ts
   * type Fn3 = (...args: [any, any, any]) => any;
   * ```
   */
  const typeFns = serials.map(n => {
    const N = padStartZero(n);
    const Fn = `Fn${N}`;
    const args = Array.from({ length: n }, () => 'any').join(', ');
    return `
type ${Fn} = (...args: [${args}]) => any;`;
  });

  const typeCurriedFns = serials.map(n => {
    const N = padStartZero(n);
    const CurriedFn = `CurriedFn${N}`;
    const Fn = `Fn${N}`;
    const ps = Array.from({ length: n }, (_, p) => `P${padStartZero(p)}`);
    const inferP = ps.map(p => `infer ${p}`).join(', ');
    const FnOs = [] as string[];
    for (let l = 1; l < n; l++) {
      const used = ps.slice(0, l).join(', ');
      const rest = ps.slice(l, ps.length).join(', ');
      const L = padStartZero(ps.length - l);
      FnOs.push(
        `
      & ((...args: [${used}]) => CurriedFn${L}<(...args: [${rest}]) => R>)`,
      );
    }
    return `
type ${CurriedFn}<Fn extends ${Fn}> =
  Fn extends (...args: [${inferP}]) => infer R
    ? ((...args: [${ps.join(', ')}]) => R)${FnOs.join('')}
    : never;`;
  });

  const tsDoc = `
/**
 * Currying function that converts a multi-argument function
 * into a series of single-argument functions.
 *
 * @param length The number of arguments for the curried function.
 * @param fn The function to be curried.
 * @returns The curried function.
 *
 * @example
 * \`\`\`ts
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
 * \`\`\`
 */`;

  const defines = serials.slice(2).map(n => {
    const N = padStartZero(n);
    const Fn = `Fn${N}`;
    const CurriedFn = `CurriedFn${N}`;
    return `${tsDoc}
export function curry<Fn extends ${Fn}>(length: ${n}, fn: Fn): ${CurriedFn}<Fn>;`;
  });

  const implement = `
// implement
export function curry(length: number, fn: (...args: any[]) => any): any {
  const curried = (...args: any[]) =>
    args.length < length
      ? (...rest: any[]) => curried(...args, ...rest)
      : fn(...args);
  return curried;
}`;

  const content = [
    '// prettier ignore by <workspace-root>/.prettierignore',
    '// generate by "scripts/codegen-functional-curry.ts"',
    defines,
    implement,
    typeFns,
    typeCurriedFns,
  ]
    .map(p => (Array.isArray(p) && p.join('\n')) || p)
    .join('\n\n');

  fs.writeFileSync(pathSrcResolve('functional/curry.g.ts'), content);
};

codegen();
