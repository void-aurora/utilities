import { removeBOM, prependBOM } from './utf-8';

describe('string utf-8', () => {
  test('removeBOM()', () => {
    expect(removeBOM('abc')).toBe('abc');
    expect(removeBOM('\uFEFFabc')).toBe('abc');
    expect(removeBOM('abc\uFEFF')).toBe('abc\uFEFF');
  });

  test('prependBOM()', () => {
    expect(prependBOM('abc')).toBe('\uFEFFabc');
    expect(prependBOM('\uFEFFabc')).toBe('\uFEFFabc');
    expect(prependBOM('abc\uFEFF')).toBe('\uFEFFabc\uFEFF');
  });
});
