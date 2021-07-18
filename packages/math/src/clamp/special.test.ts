import { PI } from '../standard';
import {
  MAX_DEGREE,
  MAX_RADIAN,
  MAX_UINT8,
  MIN_DEGREE,
  MIN_RADIAN,
  MIN_UINT8,
} from './special';

describe('clamp special', () => {
  test('constants', () => {
    expect(MIN_UINT8).toBe(0);
    expect(MAX_UINT8).toBe(0xff);

    expect(MIN_DEGREE).toBe(0);
    expect(MAX_DEGREE).toBe(360);

    expect(MIN_RADIAN).toBe(0);
    expect(MAX_RADIAN).toBe(2 * PI);
  });
});
