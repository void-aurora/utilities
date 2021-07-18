import * as index from '.';

const exportMembers = ['Color', 'ColorSrgbFloat', 'ColorSrgbUint8'];

test('Validate exports', () => {
  exportMembers.forEach(name => {
    expect((index as any)[name]).toBeDefined();
  });
});
