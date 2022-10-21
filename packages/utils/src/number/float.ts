import { EPSILON } from './standard';

export const isFloatEqual = (a: number, b: number) => Math.abs(a - b) < EPSILON;
