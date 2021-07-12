import { ceil, floor } from '../standard';
import {
  clamp,
  clampCeil,
  clampFloor,
  clampRound,
  clampTrunc,
  createClamp,
  createClampCeil,
  createClampFloor,
  createClampRound,
  createClampTrunc,
} from './normal';
import { clamp01 } from './special';

describe('clamp', () => {
  test('test normal clamp and integer clamp with round, floor, ceil, trunc', () => {
    const min = -5.123;
    const intMin = ceil(min);
    const max = 874.13;
    const intMax = floor(max);
    const clamper = createClamp(min, max);
    const clamperRound = createClampRound(min, max);
    const clamperFloor = createClampFloor(min, max);
    const clamperCeil = createClampCeil(min, max);
    const clamperTrunc = createClampTrunc(min, max);

    // value, normal, round, floor, ceil, trunc
    const data: number[][] = [
      [Number.NEGATIVE_INFINITY, min, intMin, intMin, intMin, intMin],
      [-6, min, intMin, intMin, intMin, intMin],
      [-5.2, min, intMin, intMin, intMin, intMin],
      [min, min, intMin, intMin, intMin, intMin],

      [654, 654, 654, 654, 654, 654],

      [10.23, 10.23, 10, 10, 11, 10],
      [10.5, 10.5, 11, 10, 11, 10],
      [10.87, 10.87, 11, 10, 11, 10],

      [-1.2, -1.2, -1, -2, -1, -1],
      [-1.5, -1.5, -1, -2, -1, -1],
      [-1.8, -1.8, -2, -2, -1, -1],

      [-5.1, -5.1, intMin, intMin, intMin, intMin],
      [874.1, 874.1, intMax, intMax, intMax, intMax],

      [max, max, intMax, intMax, intMax, intMax],
      [893.89, max, intMax, intMax, intMax, intMax],
      [900, max, intMax, intMax, intMax, intMax],
      [Number.POSITIVE_INFINITY, max, intMax, intMax, intMax, intMax],

      [Number.NaN, Number.NaN, Number.NaN, Number.NaN, Number.NaN, Number.NaN],
    ];

    data.forEach(
      ([
        value,
        resultNormal,
        resultRound,
        resultFloor,
        resultCeil,
        resultTrunc,
      ]) => {
        expect(clamp(value, min, max)).toBe(resultNormal);
        expect(clamper(value)).toBe(resultNormal);

        expect(clampRound(value, min, max)).toBe(resultRound);
        expect(clamperRound(value)).toBe(resultRound);

        expect(clampFloor(value, min, max)).toBe(resultFloor);
        expect(clamperFloor(value)).toBe(resultFloor);

        expect(clampCeil(value, min, max)).toBe(resultCeil);
        expect(clamperCeil(value)).toBe(resultCeil);

        expect(clampTrunc(value, min, max)).toBe(resultTrunc);
        expect(clamperTrunc(value)).toBe(resultTrunc);
      },
    );
  });

  test('test special clamp from 0 to 1', () => {
    expect(clamp01(-654.2)).toBe(0);
    expect(clamp01(-1)).toBe(0);
    expect(clamp01(0)).toBe(0);

    expect(clamp01(0.3)).toBe(0.3);
    expect(clamp01(0.5)).toBe(0.5);

    expect(clamp01(1)).toBe(1);
    expect(clamp01(1.1)).toBe(1);
    expect(clamp01(2)).toBe(1);
    expect(clamp01(3254.322)).toBe(1);
  });
});
