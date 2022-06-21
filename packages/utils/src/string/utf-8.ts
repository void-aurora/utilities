// ================================================================
// BOM

/**
 * The zero width no-break space (ZWNBSP) is a deprecated use of the Unicode character at code point U+FEFF.
 * Character U+FEFF is intended for use as a Byte Order Mark (BOM) at the start of a file. However,
 * if encountered elsewhere, it should, according to Unicode, be treated as a "zero width no-break space".
 * The deliberate use of U+FEFF for this purpose is deprecated as of Unicode 3.2, with the word joiner strongly preferred.
 */
export const BOM = '\uFEFF';

/**
 * Remove the UTF-8 BOM at the start of the text.
 * @param text The origin text.
 */
export function removeBOM(text: string): string {
  if (text.startsWith(BOM)) {
    return text.substring(1);
  }
  return text;
}

/**
 * Prepend the UTF-8 BOM to the start of the text.
 * @param text The origin text.
 */
export function prependBOM(text: string): string {
  if (text.startsWith(BOM)) {
    return text;
  }
  return BOM + text;
}

// ================================================================
// Encoding

let textEncoder: TextEncoder | undefined;

const getTextEncoder = () => textEncoder || (textEncoder = new TextEncoder());

/**
 * Returns the result of running UTF-8's encoder.
 */
export function textEncode(input: string): Uint8Array {
  return getTextEncoder().encode(input);
}

/**
 * Runs the UTF-8 encoder on source, stores the result of that operation into destination,
 * and returns the progress made as an object wherein read is the number of converted code units of source
 * and written is the number of bytes modified in destination.
 */
export function textEncodeInto(
  input: string,
  destination: Uint8Array,
): TextEncoderEncodeIntoResult {
  return getTextEncoder().encodeInto(input, destination);
}

// ================================================================
// Decoding

let textDecoder: TextDecoder | undefined;

const getTextDecoder = () =>
  textDecoder ||
  (textDecoder = new TextDecoder('utf-8', { ignoreBOM: false, fatal: true }));

/**
 * Returns the result of running UTF-8's decoder.
 *
 * If UTF-8's decoder returns error, throws a TypeError.
 */
export function textDecode(input: BufferSource): string {
  return getTextDecoder().decode(input);
}
