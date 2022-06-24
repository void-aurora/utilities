import { clampAlpha } from './color-base';

describe('base color-base', () => {
  test('clampAlpha()', () => {
    expect(clampAlpha(0.2345623)).toBe(0.2345623);
    expect(clampAlpha(1)).toBe(1);
    expect(clampAlpha(0)).toBe(0);
    expect(clampAlpha(389045)).toBe(1);
    expect(clampAlpha(-133)).toBe(0);
    expect(clampAlpha(Number.NaN)).toBe(1);
    expect(clampAlpha(undefined)).toBe(1);
    expect(clampAlpha('1')).toBe(1);
    expect(clampAlpha({})).toBe(1);
  });
});
