/**
 * Remove the UTF-8 BOM at the start of the text.
 * @param text The origin text.
 */
export function removeBOM(text: string): string {
  if (text.startsWith('\uFEFF')) {
    return text.replace(/^\uFEFF/, '');
  }
  return text;
}

/**
 * Prepend the UTF-8 BOM to the start of the text.
 * @param text The origin text.
 * @returns
 */
export function prependBOM(text: string): string {
  if (text.startsWith('\uFEFF')) {
    return text;
  }
  return '\uFEFF' + text;
}
