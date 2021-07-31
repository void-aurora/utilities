/**
 * Get contrast ratio of two colors via relative luminances.
 * @param l1 The one of relative luminances.
 * @param l2 The other of relative luminances
 */
export function contrastRatio(l1: number, l2: number): number {
  l1 += 0.05;
  l2 += 0.05;
  return (l1 > l2 && l1 / l2) || l2 / l1;
}
