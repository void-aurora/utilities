import { clamp, clamp01, createClamp } from './clamp';

describe('clamp', () => {
  test('clamp(), createClamp()', () => {
    const min = 5.123;
    const max = 874.13;
    const clamper = createClamp(min, max);

    const data: [number, number][] = [
      [Number.NEGATIVE_INFINITY, min],
      [1, min],
      [3.23, min],
      [min, min],

      [654, 654],
      [10.65, 10.65],
      [Number.NaN, Number.NaN],

      [max, max],
      [893.54, max],
      [900, max],
      [Number.POSITIVE_INFINITY, max],
    ];

    data.forEach(([value, result]) => {
      expect(clamp(value, min, max)).toBe(result);
      expect(clamper(value)).toBe(result);
    });
  });

  test('clampRound(), createClampRound()', () => {});

  test('clamp01()', () => {
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
