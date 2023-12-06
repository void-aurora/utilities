import { describe, test, expect } from 'vitest';
import { createLerp, createLerpClamped, lerp, lerpClamped } from './lerp';

describe('interpolate lerp', () => {
  test('lerp(), createLerp', () => {
    const start = 0.33;
    const end = 1.5;
    const lerpFunc = createLerp(start, end);

    expect(lerp(-1, start, end)).toBeCloseTo(-0.84);
    expect(lerpFunc(-1)).toBeCloseTo(-0.84);
    expect(lerp(-0.25, start, end)).toBeCloseTo(0.0375);
    expect(lerpFunc(-0.25)).toBeCloseTo(0.0375);

    expect(lerp(0, start, end)).toBe(start);
    expect(lerpFunc(0)).toBe(start);

    expect(lerp(0.5, start, end)).toBe((start + end) / 2);
    expect(lerpFunc(0.5)).toBe((start + end) / 2);

    expect(lerp(1, start, end)).toBe(end);
    expect(lerpFunc(1)).toBe(end);

    expect(lerp(1.25, start, end)).toBeCloseTo(1.7925);
    expect(lerpFunc(1.25)).toBeCloseTo(1.7925);
    expect(lerp(2, start, end)).toBeCloseTo(2.67);
    expect(lerpFunc(2)).toBeCloseTo(2.67);
  });

  test('lerpClamped(), createLerpClamped', () => {
    const start = 0.33;
    const end = 1.5;
    const lerpClampedFunc = createLerpClamped(start, end);

    expect(lerpClamped(-1, start, end)).toBe(start);
    expect(lerpClampedFunc(-1)).toBe(start);
    expect(lerpClamped(-0.25, start, end)).toBe(start);
    expect(lerpClampedFunc(-0.25)).toBe(start);

    expect(lerpClamped(0, start, end)).toBe(start);
    expect(lerpClampedFunc(0)).toBe(start);

    expect(lerpClamped(0.5, start, end)).toBe((start + end) / 2);
    expect(lerpClampedFunc(0.5)).toBe((start + end) / 2);

    expect(lerpClamped(1, start, end)).toBe(end);
    expect(lerpClampedFunc(1)).toBe(end);

    expect(lerpClamped(1.25, start, end)).toBe(end);
    expect(lerpClampedFunc(1.25)).toBe(end);
    expect(lerpClamped(2, start, end)).toBe(end);
    expect(lerpClampedFunc(2)).toBe(end);
  });
});
