import { buildArray, toRawType } from '@void-aurora/utils';
import { random } from '@void-aurora/math';

import { ColorSrgbFloat } from '../sRGB';
import { Color } from './color';

class ColorFake extends Color {
  public toString() {
    return 'ColorFake';
  }
  public toSrgbFloat(): ColorSrgbFloat {
    return new ColorSrgbFloat(undefined, undefined, undefined, this.alpha);
  }
}

describe('Color Base', () => {
  test('constructor default', () => {
    const color = new ColorFake();
    expect(color).toBeInstanceOf(Color);
    expect(color).toBeInstanceOf(ColorFake);
    expect(toRawType(color)).toBe('Color');
    expect(color.alpha).toBe(1);
  });

  test('constructor parameter alpha', () => {
    let color: ColorFake;

    color = new ColorFake(1);
    expect(color.alpha).toBe(1);
    color = new ColorFake(0);
    expect(color.alpha).toBe(0);

    buildArray(5, () => random()).forEach(v => {
      color = new ColorFake(v);
      expect(color.alpha).toBe(v);
    });

    // out of range
    buildArray(5, () => (random() + 1) * 10).forEach(v => {
      color = new ColorFake(v);
      expect(color.alpha).toBe(1);
    });
    buildArray(5, () => (random() + 1) * -10).forEach(v => {
      color = new ColorFake(v);
      expect(color.alpha).toBe(0);
    });
  });

  test('channel alpha', () => {
    const color = new ColorFake(Math.random());

    color.alpha = 1;
    expect(color.alpha).toBe(1);
    color.alpha = 0;
    expect(color.alpha).toBe(0);

    buildArray(5, () => random()).forEach(v => {
      color.alpha = v;
      expect(color.alpha).toBe(v);
    });

    // should be clamped, when the given value is out of range between 0 and 1.
    buildArray(5, () => (random() + 1) * 10).forEach(v => {
      color.alpha = v;
      expect(color.alpha).toBe(1);
    });
    buildArray(5, () => (random() + 1) * -10).forEach(v => {
      color.alpha = v;
      expect(color.alpha).toBe(0);
    });
  });
});
