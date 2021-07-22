import { buildArray, firstItem, isArray, isNumber } from '@void-aurora/utils';
import { clamp01 } from '../clamp';
import { lerp } from './lerp';

function validatePoints(points: number[][], d: number): boolean {
  for (let i = 0; i < points.length; i++) {
    const current = points[i];
    if (
      !isArray(current) ||
      current.length !== d ||
      !current.every(v => isNumber(v))
    ) {
      return false;
    }
  }
  return true;
}

const _invalid_d = "Invalid argument 'd'";
const _invalid_points = "Invalid argument 'points'";

export function bezier(t: number, points: number[][], d: number): number[] {
  if (!isNumber || d === 0) {
    throw new Error(`${_invalid_d}: zero or not a number.`);
  }
  if (!isArray(points)) {
    throw new Error(`${_invalid_points}: not an array.`);
  }
  if (!points.length) {
    throw new Error(`${_invalid_points}: length 0.`);
  }
  if (!validatePoints(points, d)) {
    throw new Error(
      `${_invalid_points}: some of points are not a number array or ${d}-dimensions.`,
    );
  }
  if (points.length === 1) {
    return [...firstItem(points)!];
  }
  return bezierRecursively(clamp01(t), points, d);
}

function bezierRecursively(t: number, points: number[][], d: number): number[] {
  const { length } = points;
  const reducedLength = length - 1;
  const reducedPoints: number[][] = buildArray(reducedLength, () =>
    buildArray(d, () => 0),
  );
  for (let i = 0; i < reducedLength; i++) {
    const start = points[i];
    const end = points[i + 1];
    const current = reducedPoints[i];
    for (let j = 0; j < d; j++) {
      current[j] = lerp(t, start[j], end[j]);
    }
  }
  if (reducedLength === 1) {
    return reducedPoints[0];
  }
  return bezierRecursively(t, reducedPoints, d);
}
