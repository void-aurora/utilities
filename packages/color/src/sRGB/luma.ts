/**
 * Get luma from gamma-compressed sRGB.
 *
 * Luma is the weighted sum of gamma-compressed R′G′B′ components of a color video—the prime symbols ′ denote gamma compression.
 *
 * @see https://en.wikipedia.org/wiki/Luma_(video)
 *
 * @param r The gamma-compressed R.
 * @param g The gamma-compressed G.
 * @param b The gamma-compressed B.
 *
 * @internal
 */
export function luma709(r: number, g: number, b: number): number {
  return 0.2126 * r + 0.7152 * g + 0.0722 * b;
}
