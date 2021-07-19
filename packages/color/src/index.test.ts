import * as index from '.';

const exportMembers = [
  'Color',
  'ColorSrgbFloat',
  'ColorSrgbUint8',
  'KEYWORD_HEX_MAP',
  'KEYWORD_RGB_MAP',
];

test('Validate exports', () => {
  exportMembers.forEach(name => {
    expect((index as any)[name]).toBeDefined();
  });
});
