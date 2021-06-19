import { exp } from '../standard';
import { clampLoop, clampLoop01, createClampLoop } from './clamp-loop';

describe('clamp loop', () => {
  test('clampLoop() createClampLoop()', () => {});

  test('clampLoop01()', () => {
    const clampLoop01Created = createClampLoop(1);
    [
      [-1325, 0],
      [-1, 0],
      [0, 0],
      [1, 0],
      [2, 0],
      [3, 0],
      [1356, 0],
      [1, 0],

      [0.5, 0.5],
      [1.5, 0.5],
      [2.5, 0.5],
      [125631.5, 0.5],
      [-0.5, 0.5],
      [-124.5, 0.5],

      [0.34758675, 0.34758675],
      [1.34758675, 0.34758675],
      [2.34758675, 0.34758675],
      [135136.34758675, 0.34758675],
      [-0.34758675, 0.65241325],
      [-1.34758675, 0.65241325],
      [-2.34758675, 0.65241325],
      [-13563767.34758675, 0.65241325],
    ].forEach(([a, b]) => {
      expect(clampLoop01(a)).toBeCloseTo(b);
      expect(clampLoop(a, 1)).toBeCloseTo(b);
      expect(clampLoop01Created(a)).toBeCloseTo(b);
    });
  });
});
