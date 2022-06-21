import {
  BOM,
  removeBOM,
  prependBOM,
  textEncode,
  textEncodeInto,
  textDecode,
} from './utf-8';

const text = `
Never give up,
Never lose hope.
Always have faith,
It allows you to cope.
Trying times will pass,
As they always do.
Just have patience,
Your dreams will come true.
So put on a smile,
You'll live through your pain.
Know it will pass,
And strength you will gain.
`;

// prettier-ignore
const utf8 = new Uint8Array([
  10, 78, 101, 118, 101, 114, 32, 103,
  105, 118, 101, 32, 117, 112, 44, 10,
  78, 101, 118, 101, 114, 32, 108, 111,
  115, 101, 32, 104, 111, 112, 101, 46,
  10, 65, 108, 119, 97, 121, 115, 32,
  104, 97, 118, 101, 32, 102, 97, 105,
  116, 104, 44, 10, 73, 116, 32, 97,
  108, 108, 111, 119, 115, 32, 121, 111,
  117, 32, 116, 111, 32, 99, 111, 112,
  101, 46, 10, 84, 114, 121, 105, 110,
  103, 32, 116, 105, 109, 101, 115, 32,
  119, 105, 108, 108, 32, 112, 97, 115,
  115, 44, 10, 65, 115, 32, 116, 104,
  101, 121, 32, 97, 108, 119, 97, 121,
  115, 32, 100, 111, 46, 10, 74, 117,
  115, 116, 32, 104, 97, 118, 101, 32,
  112, 97, 116, 105, 101, 110, 99, 101,
  44, 10, 89, 111, 117, 114, 32, 100,
  114, 101, 97, 109, 115, 32, 119, 105,
  108, 108, 32, 99, 111, 109, 101, 32,
  116, 114, 117, 101, 46, 10, 83, 111,
  32, 112, 117, 116, 32, 111, 110, 32,
  97, 32, 115, 109, 105, 108, 101, 44,
  10, 89, 111, 117, 39, 108, 108, 32,
  108, 105, 118, 101, 32, 116, 104, 114,
  111, 117, 103, 104, 32, 121, 111, 117,
  114, 32, 112, 97, 105, 110, 46, 10,
  75, 110, 111, 119, 32, 105, 116, 32,
  119, 105, 108, 108, 32, 112, 97, 115,
  115, 44, 10, 65, 110, 100, 32, 115,
  116, 114, 101, 110, 103, 116, 104, 32,
  121, 111, 117, 32, 119, 105, 108, 108,
  32, 103, 97, 105, 110, 46, 10,
]);

describe('string utf-8', () => {
  test('removeBOM()', () => {
    expect(BOM).toBe('\uFEFF');

    expect(removeBOM('abc')).toBe('abc');
    expect(removeBOM('\uFEFFabc')).toBe('abc');
    expect(removeBOM('abc\uFEFF')).toBe('abc\uFEFF');

    expect(prependBOM('abc')).toBe('\uFEFFabc');
    expect(prependBOM('\uFEFFabc')).toBe('\uFEFFabc');
    expect(prependBOM('abc\uFEFF')).toBe('\uFEFFabc\uFEFF');
  });

  test('encoding', () => {
    expect(textEncode(text)).toEqual(utf8);

    const resultA = new Uint8Array(300);
    const resultB = new Uint8Array(300);
    const encodeIntoResult = textEncodeInto(text, resultA);
    resultB.set(utf8);
    expect(resultA).toEqual(resultB);
    expect(encodeIntoResult).toEqual({ read: 263, written: 263 });
  });

  test('decoding', () => {
    expect(textDecode(utf8)).toBe(text);
    expect(textDecode(textEncode(prependBOM(text)))).toBe(text);
  });
});
