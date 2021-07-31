/**
 * Get relative luminance from linear sRGB.
 *
 * @see https://en.wikipedia.org/wiki/Relative_luminance
 * @see https://www.w3.org/TR/WCAG21/#dfn-relative-luminance
 *
 * @param r The linear R.
 * @param g The linear G.
 * @param b The linear B.
 *
 * @internal
 */
export function relativeLuminance(r: number, g: number, b: number): number {
  return 0.2126 * r + 0.7152 * g + 0.0722 * b;
}
