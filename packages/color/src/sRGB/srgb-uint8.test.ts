import { MAX_UINT8, parseInt } from '@void-aurora/math';
import { buildArray } from '@void-aurora/utils';
import { createColorSrgb } from './srgb-float';
import {
  convertStandardRgbFromFloatToUint8,
  convertStandardRgbFromUint8ToFloat,
  createStandardRgbUint8,
  createStandardRgbUint8FromHex,
  isStandardRgbUint8,
} from './srgb-uint8';

describe('sRGB uint8', () => {
  test('createStandardRgbUint8', () => {
    {
      const color = createStandardRgbUint8(32.3, 63.5, 127.999999);
      expect(Object.isFrozen(color)).toBe(true);
      expect(color[Symbol.toStringTag]).toBe('sRGB-uint8');
      expect(color.r).toBe(32);
      expect(color.g).toBe(64);
      expect(color.b).toBe(128);
      expect(color.alpha).toBe(1);
    }
    {
      const color = createStandardRgbUint8(255, 256, 512, 4.5);
      expect(color.r).toBe(MAX_UINT8);
      expect(color.g).toBe(MAX_UINT8);
      expect(color.b).toBe(MAX_UINT8);
      expect(color.alpha).toBe(1);
    }
    {
      const color = createStandardRgbUint8(-33, -44, -55, -4.5);
      expect(color.r).toBe(0);
      expect(color.g).toBe(0);
      expect(color.b).toBe(0);
      expect(color.alpha).toBe(0);
    }
    {
      expect(createStandardRgbUint8(66, 77, 88, undefined).alpha).toBe(1);
    }
  });

  test('isStandardRgbUint8', () => {
    expect(isStandardRgbUint8(createStandardRgbUint8(32.3, 63.5, 127.8))).toBe(
      true,
    );
    expect(
      isStandardRgbUint8({
        r: 32,
        g: 64,
        b: 128,
        alpha: 1,
      }),
    ).toBe(false);
    expect(
      isStandardRgbUint8({
        r: 32,
        g: 64,
        b: 128,
        alpha: 1,
        [Symbol.toStringTag]: 'xRGB',
      }),
    ).toBe(false);
    expect(
      isStandardRgbUint8({
        alpha: 0.5,
        [Symbol.toStringTag]: 'foobar',
      }),
    ).toBe(false);
    expect(isStandardRgbUint8(null)).toBe(false);
  });

  test('hex', () => {
    ['##ffa500', '# ffc0cb', '#9400d'].forEach(badHex => {
      expect(() => createStandardRgbUint8FromHex(badHex)).toThrowError(
        new TypeError(`Invalid RGB hexadecimal notation "${badHex}".`),
      );
    });

    // 6 or 8 digits
    Object.entries(namedColorsUint8).forEach(([name, { hex, r, g, b }]) => {
      {
        const colorA = createStandardRgbUint8FromHex(hex);
        const colorB = createStandardRgbUint8FromHex(`#${hex}`);
        const colorC = createStandardRgbUint8FromHex(` #${hex} `);
        expect(colorA.r).toBe(r);
        expect(colorA.g).toBe(g);
        expect(colorA.b).toBe(b);
        expect(colorA.alpha).toBe(1);
        expect(colorA).toEqual(colorB);
        expect(colorA).toEqual(colorC);
      }
      alphaHexEntries.forEach(([hexAlpha, alpha]) => {
        const colorA = createStandardRgbUint8FromHex(`${hex}${hexAlpha}`);
        const colorB = createStandardRgbUint8FromHex(`#${hex}${hexAlpha}`);
        const colorC = createStandardRgbUint8FromHex(` #${hex}${hexAlpha} `);
        expect(colorA.r).toBe(r);
        expect(colorA.g).toBe(g);
        expect(colorA.b).toBe(b);
        expect(colorA.alpha).toBeCloseTo(alpha);
        expect(colorA).toEqual(colorB);
        expect(colorA).toEqual(colorC);
      });
    });

    // 3 or 4 digits
    for (let n = 0; n <= 0xfff; n++) {
      const hex = n.toString(16).padStart(3, '0');
      const r = parseInt(hex.substring(0, 1).repeat(2), 16);
      const g = parseInt(hex.substring(1, 2).repeat(2), 16);
      const b = parseInt(hex.substring(2, 3).repeat(2), 16);
      {
        const colorA = createStandardRgbUint8FromHex(hex);
        const colorB = createStandardRgbUint8FromHex(`#${hex}`);
        const colorC = createStandardRgbUint8FromHex(` #${hex} `);
        expect(colorA.r).toBe(r);
        expect(colorA.g).toBe(g);
        expect(colorA.b).toBe(b);
        expect(colorA.alpha).toBe(1);
        expect(colorA).toEqual(colorB);
        expect(colorA).toEqual(colorC);
      }
      alphaHexEntriesShort.forEach(([hexAlpha, alpha]) => {
        const colorA = createStandardRgbUint8FromHex(`${hex}${hexAlpha}`);
        const colorB = createStandardRgbUint8FromHex(`#${hex}${hexAlpha}`);
        const colorC = createStandardRgbUint8FromHex(` #${hex}${hexAlpha} `);
        expect(colorA.r).toBe(r);
        expect(colorA.g).toBe(g);
        expect(colorA.b).toBe(b);
        expect(colorA.alpha).toBeCloseTo(alpha);
        expect(colorA).toEqual(colorB);
        expect(colorA).toEqual(colorC);
      });
    }
  });

  test('convert between uint8 and float', () => {
    {
      const whiteFloat = createColorSrgb(1, 1, 1);
      const whiteUint8 = createStandardRgbUint8(255, 255, 255);
      expect(convertStandardRgbFromFloatToUint8(whiteFloat)).toEqual(
        whiteUint8,
      );
      expect(convertStandardRgbFromUint8ToFloat(whiteUint8)).toEqual(
        whiteFloat,
      );
    }
    {
      const blackFloat = createColorSrgb(0, 0, 0);
      const blackUint8 = createStandardRgbUint8(0, 0, 0);
      expect(convertStandardRgbFromFloatToUint8(blackFloat)).toEqual(
        blackUint8,
      );
      expect(convertStandardRgbFromUint8ToFloat(blackUint8)).toEqual(
        blackFloat,
      );
    }
    [
      0, 0.32451623, 0.1236, 0.903452, 0.2834346, 0.1233462, 0.825665026,
      0.986554, 0.34573586, 1,
    ].forEach(alpha => {
      const colorFloat = createColorSrgb(0.3, 0.6, 0.9, alpha);
      const colorUint8 = createStandardRgbUint8(64, 128, 192, alpha);
      expect(convertStandardRgbFromFloatToUint8(colorFloat).alpha).toBe(alpha);
      expect(convertStandardRgbFromUint8ToFloat(colorUint8).alpha).toBe(alpha);
    });
    Object.entries(namedColorsFloat).forEach(([name, channelsFloat]) => {
      const channelsUint8 = namedColorsUint8[name];
      if (channelsUint8) {
        expect(
          convertStandardRgbFromFloatToUint8(
            createColorSrgb(channelsFloat.r, channelsFloat.g, channelsFloat.b),
          ),
        ).toEqual(
          createStandardRgbUint8(
            channelsUint8.r,
            channelsUint8.g,
            channelsUint8.b,
          ),
        );
        const colorFloat = convertStandardRgbFromUint8ToFloat(
          createStandardRgbUint8(
            channelsUint8.r,
            channelsUint8.g,
            channelsUint8.b,
          ),
        );
        expect(colorFloat.r).toBeCloseTo(channelsFloat.r, 12);
        expect(colorFloat.g).toBeCloseTo(channelsFloat.g, 12);
        expect(colorFloat.b).toBeCloseTo(channelsFloat.b, 12);
      }
    });
  });
});

const alphaHexEntries = buildArray<[string, number]>(256, i => [
  i.toString(16).padStart(2, '0'),
  i / MAX_UINT8,
]);

const alphaHexEntriesShort = buildArray<[string, number]>(16, i => [
  i.toString(16),
  (i | (i << 4)) / MAX_UINT8,
]);

const namedColorsUint8: Record<
  string,
  { hex: string; r: number; g: number; b: number }
> = {
  aliceblue: { hex: 'f0f8ff', r: 240, g: 248, b: 255 },
  antiquewhite: { hex: 'faebd7', r: 250, g: 235, b: 215 },
  aqua: { hex: '00ffff', r: 0, g: 255, b: 255 },
  aquamarine: { hex: '7fffd4', r: 127, g: 255, b: 212 },
  azure: { hex: 'f0ffff', r: 240, g: 255, b: 255 },
  beige: { hex: 'f5f5dc', r: 245, g: 245, b: 220 },
  bisque: { hex: 'ffe4c4', r: 255, g: 228, b: 196 },
  black: { hex: '000000', r: 0, g: 0, b: 0 },
  blanchedalmond: { hex: 'ffebcd', r: 255, g: 235, b: 205 },
  blue: { hex: '0000ff', r: 0, g: 0, b: 255 },
  blueviolet: { hex: '8a2be2', r: 138, g: 43, b: 226 },
  brown: { hex: 'a52a2a', r: 165, g: 42, b: 42 },
  burlywood: { hex: 'deb887', r: 222, g: 184, b: 135 },
  cadetblue: { hex: '5f9ea0', r: 95, g: 158, b: 160 },
  chartreuse: { hex: '7fff00', r: 127, g: 255, b: 0 },
  chocolate: { hex: 'd2691e', r: 210, g: 105, b: 30 },
  coral: { hex: 'ff7f50', r: 255, g: 127, b: 80 },
  cornflowerblue: { hex: '6495ed', r: 100, g: 149, b: 237 },
  cornsilk: { hex: 'fff8dc', r: 255, g: 248, b: 220 },
  crimson: { hex: 'dc143c', r: 220, g: 20, b: 60 },
  cyan: { hex: '00ffff', r: 0, g: 255, b: 255 },
  darkblue: { hex: '00008b', r: 0, g: 0, b: 139 },
  darkcyan: { hex: '008b8b', r: 0, g: 139, b: 139 },
  darkgoldenrod: { hex: 'b8860b', r: 184, g: 134, b: 11 },
  darkgray: { hex: 'a9a9a9', r: 169, g: 169, b: 169 },
  darkgreen: { hex: '006400', r: 0, g: 100, b: 0 },
  darkgrey: { hex: 'a9a9a9', r: 169, g: 169, b: 169 },
  darkkhaki: { hex: 'bdb76b', r: 189, g: 183, b: 107 },
  darkmagenta: { hex: '8b008b', r: 139, g: 0, b: 139 },
  darkolivegreen: { hex: '556b2f', r: 85, g: 107, b: 47 },
  darkorange: { hex: 'ff8c00', r: 255, g: 140, b: 0 },
  darkorchid: { hex: '9932cc', r: 153, g: 50, b: 204 },
  darkred: { hex: '8b0000', r: 139, g: 0, b: 0 },
  darksalmon: { hex: 'e9967a', r: 233, g: 150, b: 122 },
  darkseagreen: { hex: '8fbc8f', r: 143, g: 188, b: 143 },
  darkslateblue: { hex: '483d8b', r: 72, g: 61, b: 139 },
  darkslategray: { hex: '2f4f4f', r: 47, g: 79, b: 79 },
  darkslategrey: { hex: '2f4f4f', r: 47, g: 79, b: 79 },
  darkturquoise: { hex: '00ced1', r: 0, g: 206, b: 209 },
  darkviolet: { hex: '9400d3', r: 148, g: 0, b: 211 },
  deeppink: { hex: 'ff1493', r: 255, g: 20, b: 147 },
  deepskyblue: { hex: '00bfff', r: 0, g: 191, b: 255 },
  dimgray: { hex: '696969', r: 105, g: 105, b: 105 },
  dimgrey: { hex: '696969', r: 105, g: 105, b: 105 },
  dodgerblue: { hex: '1e90ff', r: 30, g: 144, b: 255 },
  firebrick: { hex: 'b22222', r: 178, g: 34, b: 34 },
  floralwhite: { hex: 'fffaf0', r: 255, g: 250, b: 240 },
  forestgreen: { hex: '228b22', r: 34, g: 139, b: 34 },
  fuchsia: { hex: 'ff00ff', r: 255, g: 0, b: 255 },
  gainsboro: { hex: 'dcdcdc', r: 220, g: 220, b: 220 },
  ghostwhite: { hex: 'f8f8ff', r: 248, g: 248, b: 255 },
  gold: { hex: 'ffd700', r: 255, g: 215, b: 0 },
  goldenrod: { hex: 'daa520', r: 218, g: 165, b: 32 },
  gray: { hex: '808080', r: 128, g: 128, b: 128 },
  green: { hex: '008000', r: 0, g: 128, b: 0 },
  greenyellow: { hex: 'adff2f', r: 173, g: 255, b: 47 },
  grey: { hex: '808080', r: 128, g: 128, b: 128 },
  honeydew: { hex: 'f0fff0', r: 240, g: 255, b: 240 },
  hotpink: { hex: 'ff69b4', r: 255, g: 105, b: 180 },
  indianred: { hex: 'cd5c5c', r: 205, g: 92, b: 92 },
  indigo: { hex: '4b0082', r: 75, g: 0, b: 130 },
  ivory: { hex: 'fffff0', r: 255, g: 255, b: 240 },
  khaki: { hex: 'f0e68c', r: 240, g: 230, b: 140 },
  lavender: { hex: 'e6e6fa', r: 230, g: 230, b: 250 },
  lavenderblush: { hex: 'fff0f5', r: 255, g: 240, b: 245 },
  lawngreen: { hex: '7cfc00', r: 124, g: 252, b: 0 },
  lemonchiffon: { hex: 'fffacd', r: 255, g: 250, b: 205 },
  lightblue: { hex: 'add8e6', r: 173, g: 216, b: 230 },
  lightcoral: { hex: 'f08080', r: 240, g: 128, b: 128 },
  lightcyan: { hex: 'e0ffff', r: 224, g: 255, b: 255 },
  lightgoldenrodyellow: { hex: 'fafad2', r: 250, g: 250, b: 210 },
  lightgray: { hex: 'd3d3d3', r: 211, g: 211, b: 211 },
  lightgreen: { hex: '90ee90', r: 144, g: 238, b: 144 },
  lightgrey: { hex: 'd3d3d3', r: 211, g: 211, b: 211 },
  lightpink: { hex: 'ffb6c1', r: 255, g: 182, b: 193 },
  lightsalmon: { hex: 'ffa07a', r: 255, g: 160, b: 122 },
  lightseagreen: { hex: '20b2aa', r: 32, g: 178, b: 170 },
  lightskyblue: { hex: '87cefa', r: 135, g: 206, b: 250 },
  lightslategray: { hex: '778899', r: 119, g: 136, b: 153 },
  lightslategrey: { hex: '778899', r: 119, g: 136, b: 153 },
  lightsteelblue: { hex: 'b0c4de', r: 176, g: 196, b: 222 },
  lightyellow: { hex: 'ffffe0', r: 255, g: 255, b: 224 },
  lime: { hex: '00ff00', r: 0, g: 255, b: 0 },
  limegreen: { hex: '32cd32', r: 50, g: 205, b: 50 },
  linen: { hex: 'faf0e6', r: 250, g: 240, b: 230 },
  magenta: { hex: 'ff00ff', r: 255, g: 0, b: 255 },
  maroon: { hex: '800000', r: 128, g: 0, b: 0 },
  mediumaquamarine: { hex: '66cdaa', r: 102, g: 205, b: 170 },
  mediumblue: { hex: '0000cd', r: 0, g: 0, b: 205 },
  mediumorchid: { hex: 'ba55d3', r: 186, g: 85, b: 211 },
  mediumpurple: { hex: '9370db', r: 147, g: 112, b: 219 },
  mediumseagreen: { hex: '3cb371', r: 60, g: 179, b: 113 },
  mediumslateblue: { hex: '7b68ee', r: 123, g: 104, b: 238 },
  mediumspringgreen: { hex: '00fa9a', r: 0, g: 250, b: 154 },
  mediumturquoise: { hex: '48d1cc', r: 72, g: 209, b: 204 },
  mediumvioletred: { hex: 'c71585', r: 199, g: 21, b: 133 },
  midnightblue: { hex: '191970', r: 25, g: 25, b: 112 },
  mintcream: { hex: 'f5fffa', r: 245, g: 255, b: 250 },
  mistyrose: { hex: 'ffe4e1', r: 255, g: 228, b: 225 },
  moccasin: { hex: 'ffe4b5', r: 255, g: 228, b: 181 },
  navajowhite: { hex: 'ffdead', r: 255, g: 222, b: 173 },
  navy: { hex: '000080', r: 0, g: 0, b: 128 },
  oldlace: { hex: 'fdf5e6', r: 253, g: 245, b: 230 },
  olive: { hex: '808000', r: 128, g: 128, b: 0 },
  olivedrab: { hex: '6b8e23', r: 107, g: 142, b: 35 },
  orange: { hex: 'ffa500', r: 255, g: 165, b: 0 },
  orangered: { hex: 'ff4500', r: 255, g: 69, b: 0 },
  orchid: { hex: 'da70d6', r: 218, g: 112, b: 214 },
  palegoldenrod: { hex: 'eee8aa', r: 238, g: 232, b: 170 },
  palegreen: { hex: '98fb98', r: 152, g: 251, b: 152 },
  paleturquoise: { hex: 'afeeee', r: 175, g: 238, b: 238 },
  palevioletred: { hex: 'db7093', r: 219, g: 112, b: 147 },
  papayawhip: { hex: 'ffefd5', r: 255, g: 239, b: 213 },
  peachpuff: { hex: 'ffdab9', r: 255, g: 218, b: 185 },
  peru: { hex: 'cd853f', r: 205, g: 133, b: 63 },
  pink: { hex: 'ffc0cb', r: 255, g: 192, b: 203 },
  plum: { hex: 'dda0dd', r: 221, g: 160, b: 221 },
  powderblue: { hex: 'b0e0e6', r: 176, g: 224, b: 230 },
  purple: { hex: '800080', r: 128, g: 0, b: 128 },
  rebeccapurple: { hex: '663399', r: 102, g: 51, b: 153 },
  red: { hex: 'ff0000', r: 255, g: 0, b: 0 },
  rosybrown: { hex: 'bc8f8f', r: 188, g: 143, b: 143 },
  royalblue: { hex: '4169e1', r: 65, g: 105, b: 225 },
  saddlebrown: { hex: '8b4513', r: 139, g: 69, b: 19 },
  salmon: { hex: 'fa8072', r: 250, g: 128, b: 114 },
  sandybrown: { hex: 'f4a460', r: 244, g: 164, b: 96 },
  seagreen: { hex: '2e8b57', r: 46, g: 139, b: 87 },
  seashell: { hex: 'fff5ee', r: 255, g: 245, b: 238 },
  sienna: { hex: 'a0522d', r: 160, g: 82, b: 45 },
  silver: { hex: 'c0c0c0', r: 192, g: 192, b: 192 },
  skyblue: { hex: '87ceeb', r: 135, g: 206, b: 235 },
  slateblue: { hex: '6a5acd', r: 106, g: 90, b: 205 },
  slategray: { hex: '708090', r: 112, g: 128, b: 144 },
  slategrey: { hex: '708090', r: 112, g: 128, b: 144 },
  snow: { hex: 'fffafa', r: 255, g: 250, b: 250 },
  springgreen: { hex: '00ff7f', r: 0, g: 255, b: 127 },
  steelblue: { hex: '4682b4', r: 70, g: 130, b: 180 },
  tan: { hex: 'd2b48c', r: 210, g: 180, b: 140 },
  teal: { hex: '008080', r: 0, g: 128, b: 128 },
  thistle: { hex: 'd8bfd8', r: 216, g: 191, b: 216 },
  tomato: { hex: 'ff6347', r: 255, g: 99, b: 71 },
  turquoise: { hex: '40e0d0', r: 64, g: 224, b: 208 },
  violet: { hex: 'ee82ee', r: 238, g: 130, b: 238 },
  wheat: { hex: 'f5deb3', r: 245, g: 222, b: 179 },
  white: { hex: 'ffffff', r: 255, g: 255, b: 255 },
  whitesmoke: { hex: 'f5f5f5', r: 245, g: 245, b: 245 },
  yellow: { hex: 'ffff00', r: 255, g: 255, b: 0 },
  yellowgreen: { hex: '9acd32', r: 154, g: 205, b: 50 },
};

const namedColorsFloat: Record<string, { r: number; g: number; b: number }> = {
  indigo: { r: 0.294117647059, g: 0.0, b: 0.509803921569 },
  gold: { r: 1.0, g: 0.843137254902, b: 0.0 },
  firebrick: { r: 0.698039215686, g: 0.133333333333, b: 0.133333333333 },
  indianred: { r: 0.803921568627, g: 0.360784313725, b: 0.360784313725 },
  yellow: { r: 1.0, g: 1.0, b: 0.0 },
  darkolivegreen: { r: 0.333333333333, g: 0.419607843137, b: 0.18431372549 },
  darkseagreen: { r: 0.560784313725, g: 0.737254901961, b: 0.560784313725 },
  slategrey: { r: 0.439215686275, g: 0.501960784314, b: 0.564705882353 },
  darkslategrey: { r: 0.18431372549, g: 0.309803921569, b: 0.309803921569 },
  mediumvioletred: { r: 0.780392156863, g: 0.0823529411765, b: 0.521568627451 },
  mediumorchid: { r: 0.729411764706, g: 0.333333333333, b: 0.827450980392 },
  chartreuse: { r: 0.498039215686, g: 1.0, b: 0.0 },
  mediumslateblue: { r: 0.482352941176, g: 0.407843137255, b: 0.933333333333 },
  black: { r: 0.0, g: 0.0, b: 0.0 },
  springgreen: { r: 0.0, g: 1.0, b: 0.498039215686 },
  crimson: { r: 0.862745098039, g: 0.078431372549, b: 0.235294117647 },
  lightsalmon: { r: 1.0, g: 0.627450980392, b: 0.478431372549 },
  brown: { r: 0.647058823529, g: 0.164705882353, b: 0.164705882353 },
  turquoise: { r: 0.250980392157, g: 0.878431372549, b: 0.81568627451 },
  olivedrab: { r: 0.419607843137, g: 0.556862745098, b: 0.137254901961 },
  cyan: { r: 0.0, g: 1.0, b: 1.0 },
  silver: { r: 0.752941176471, g: 0.752941176471, b: 0.752941176471 },
  skyblue: { r: 0.529411764706, g: 0.807843137255, b: 0.921568627451 },
  gray: { r: 0.501960784314, g: 0.501960784314, b: 0.501960784314 },
  darkturquoise: { r: 0.0, g: 0.807843137255, b: 0.819607843137 },
  goldenrod: { r: 0.854901960784, g: 0.647058823529, b: 0.125490196078 },
  darkgreen: { r: 0.0, g: 0.392156862745, b: 0.0 },
  darkviolet: { r: 0.580392156863, g: 0.0, b: 0.827450980392 },
  darkgray: { r: 0.662745098039, g: 0.662745098039, b: 0.662745098039 },
  lightpink: { r: 1.0, g: 0.713725490196, b: 0.756862745098 },
  teal: { r: 0.0, g: 0.501960784314, b: 0.501960784314 },
  darkmagenta: { r: 0.545098039216, g: 0.0, b: 0.545098039216 },
  lightgoldenrodyellow: {
    r: 0.980392156863,
    g: 0.980392156863,
    b: 0.823529411765,
  },
  lavender: { r: 0.901960784314, g: 0.901960784314, b: 0.980392156863 },
  yellowgreen: { r: 0.603921568627, g: 0.803921568627, b: 0.196078431373 },
  thistle: { r: 0.847058823529, g: 0.749019607843, b: 0.847058823529 },
  violet: { r: 0.933333333333, g: 0.509803921569, b: 0.933333333333 },
  navy: { r: 0.0, g: 0.0, b: 0.501960784314 },
  dimgrey: { r: 0.411764705882, g: 0.411764705882, b: 0.411764705882 },
  orchid: { r: 0.854901960784, g: 0.439215686275, b: 0.839215686275 },
  blue: { r: 0.0, g: 0.0, b: 1.0 },
  ghostwhite: { r: 0.972549019608, g: 0.972549019608, b: 1.0 },
  honeydew: { r: 0.941176470588, g: 1.0, b: 0.941176470588 },
  cornflowerblue: { r: 0.392156862745, g: 0.58431372549, b: 0.929411764706 },
  darkblue: { r: 0.0, g: 0.0, b: 0.545098039216 },
  darkkhaki: { r: 0.741176470588, g: 0.717647058824, b: 0.419607843137 },
  mediumpurple: { r: 0.576470588235, g: 0.439215686275, b: 0.858823529412 },
  cornsilk: { r: 1.0, g: 0.972549019608, b: 0.862745098039 },
  red: { r: 1.0, g: 0.0, b: 0.0 },
  bisque: { r: 1.0, g: 0.894117647059, b: 0.76862745098 },
  slategray: { r: 0.439215686275, g: 0.501960784314, b: 0.564705882353 },
  darkcyan: { r: 0.0, g: 0.545098039216, b: 0.545098039216 },
  khaki: { r: 0.941176470588, g: 0.901960784314, b: 0.549019607843 },
  wheat: { r: 0.960784313725, g: 0.870588235294, b: 0.701960784314 },
  deepskyblue: { r: 0.0, g: 0.749019607843, b: 1.0 },
  rebeccapurple: { r: 0.4, g: 0.2, b: 0.6 },
  darkred: { r: 0.545098039216, g: 0.0, b: 0.0 },
  steelblue: { r: 0.274509803922, g: 0.509803921569, b: 0.705882352941 },
  aliceblue: { r: 0.941176470588, g: 0.972549019608, b: 1.0 },
  lightslategrey: { r: 0.466666666667, g: 0.533333333333, b: 0.6 },
  gainsboro: { r: 0.862745098039, g: 0.862745098039, b: 0.862745098039 },
  mediumturquoise: { r: 0.282352941176, g: 0.819607843137, b: 0.8 },
  floralwhite: { r: 1.0, g: 0.980392156863, b: 0.941176470588 },
  coral: { r: 1.0, g: 0.498039215686, b: 0.313725490196 },
  purple: { r: 0.501960784314, g: 0.0, b: 0.501960784314 },
  lightgrey: { r: 0.827450980392, g: 0.827450980392, b: 0.827450980392 },
  lightcyan: { r: 0.878431372549, g: 1.0, b: 1.0 },
  darksalmon: { r: 0.913725490196, g: 0.588235294118, b: 0.478431372549 },
  beige: { r: 0.960784313725, g: 0.960784313725, b: 0.862745098039 },
  azure: { r: 0.941176470588, g: 1.0, b: 1.0 },
  lightsteelblue: { r: 0.690196078431, g: 0.76862745098, b: 0.870588235294 },
  oldlace: { r: 0.992156862745, g: 0.960784313725, b: 0.901960784314 },
  greenyellow: { r: 0.678431372549, g: 1.0, b: 0.18431372549 },
  royalblue: { r: 0.254901960784, g: 0.411764705882, b: 0.882352941176 },
  lightseagreen: { r: 0.125490196078, g: 0.698039215686, b: 0.666666666667 },
  mistyrose: { r: 1.0, g: 0.894117647059, b: 0.882352941176 },
  sienna: { r: 0.627450980392, g: 0.321568627451, b: 0.176470588235 },
  lightcoral: { r: 0.941176470588, g: 0.501960784314, b: 0.501960784314 },
  orangered: { r: 1.0, g: 0.270588235294, b: 0.0 },
  navajowhite: { r: 1.0, g: 0.870588235294, b: 0.678431372549 },
  lime: { r: 0.0, g: 1.0, b: 0.0 },
  palegreen: { r: 0.596078431373, g: 0.98431372549, b: 0.596078431373 },
  burlywood: { r: 0.870588235294, g: 0.721568627451, b: 0.529411764706 },
  seashell: { r: 1.0, g: 0.960784313725, b: 0.933333333333 },
  mediumspringgreen: { r: 0.0, g: 0.980392156863, b: 0.603921568627 },
  fuchsia: { r: 1.0, g: 0.0, b: 1.0 },
  papayawhip: { r: 1.0, g: 0.937254901961, b: 0.835294117647 },
  blanchedalmond: { r: 1.0, g: 0.921568627451, b: 0.803921568627 },
  peru: { r: 0.803921568627, g: 0.521568627451, b: 0.247058823529 },
  aquamarine: { r: 0.498039215686, g: 1.0, b: 0.83137254902 },
  white: { r: 1.0, g: 1.0, b: 1.0 },
  darkslategray: { r: 0.18431372549, g: 0.309803921569, b: 0.309803921569 },
  tomato: { r: 1.0, g: 0.388235294118, b: 0.278431372549 },
  ivory: { r: 1.0, g: 1.0, b: 0.941176470588 },
  dodgerblue: { r: 0.117647058824, g: 0.564705882353, b: 1.0 },
  lemonchiffon: { r: 1.0, g: 0.980392156863, b: 0.803921568627 },
  chocolate: { r: 0.823529411765, g: 0.411764705882, b: 0.117647058824 },
  orange: { r: 1.0, g: 0.647058823529, b: 0.0 },
  forestgreen: { r: 0.133333333333, g: 0.545098039216, b: 0.133333333333 },
  darkgrey: { r: 0.662745098039, g: 0.662745098039, b: 0.662745098039 },
  olive: { r: 0.501960784314, g: 0.501960784314, b: 0.0 },
  mintcream: { r: 0.960784313725, g: 1.0, b: 0.980392156863 },
  antiquewhite: { r: 0.980392156863, g: 0.921568627451, b: 0.843137254902 },
  darkorange: { r: 1.0, g: 0.549019607843, b: 0.0 },
  cadetblue: { r: 0.372549019608, g: 0.619607843137, b: 0.627450980392 },
  moccasin: { r: 1.0, g: 0.894117647059, b: 0.709803921569 },
  limegreen: { r: 0.196078431373, g: 0.803921568627, b: 0.196078431373 },
  saddlebrown: { r: 0.545098039216, g: 0.270588235294, b: 0.0745098039216 },
  grey: { r: 0.501960784314, g: 0.501960784314, b: 0.501960784314 },
  darkslateblue: { r: 0.282352941176, g: 0.239215686275, b: 0.545098039216 },
  lightskyblue: { r: 0.529411764706, g: 0.807843137255, b: 0.980392156863 },
  deeppink: { r: 1.0, g: 0.078431372549, b: 0.576470588235 },
  plum: { r: 0.866666666667, g: 0.627450980392, b: 0.866666666667 },
  aqua: { r: 0.0, g: 1.0, b: 1.0 },
  darkgoldenrod: { r: 0.721568627451, g: 0.525490196078, b: 0.043137254902 },
  maroon: { r: 0.501960784314, g: 0.0, b: 0.0 },
  sandybrown: { r: 0.956862745098, g: 0.643137254902, b: 0.376470588235 },
  magenta: { r: 1.0, g: 0.0, b: 1.0 },
  tan: { r: 0.823529411765, g: 0.705882352941, b: 0.549019607843 },
  rosybrown: { r: 0.737254901961, g: 0.560784313725, b: 0.560784313725 },
  pink: { r: 1.0, g: 0.752941176471, b: 0.796078431373 },
  lightblue: { r: 0.678431372549, g: 0.847058823529, b: 0.901960784314 },
  palevioletred: { r: 0.858823529412, g: 0.439215686275, b: 0.576470588235 },
  mediumseagreen: { r: 0.235294117647, g: 0.701960784314, b: 0.443137254902 },
  slateblue: { r: 0.41568627451, g: 0.352941176471, b: 0.803921568627 },
  dimgray: { r: 0.411764705882, g: 0.411764705882, b: 0.411764705882 },
  powderblue: { r: 0.690196078431, g: 0.878431372549, b: 0.901960784314 },
  seagreen: { r: 0.180392156863, g: 0.545098039216, b: 0.341176470588 },
  snow: { r: 1.0, g: 0.980392156863, b: 0.980392156863 },
  mediumblue: { r: 0.0, g: 0.0, b: 0.803921568627 },
  midnightblue: { r: 0.0980392156863, g: 0.0980392156863, b: 0.439215686275 },
  paleturquoise: { r: 0.686274509804, g: 0.933333333333, b: 0.933333333333 },
  palegoldenrod: { r: 0.933333333333, g: 0.909803921569, b: 0.666666666667 },
  whitesmoke: { r: 0.960784313725, g: 0.960784313725, b: 0.960784313725 },
  darkorchid: { r: 0.6, g: 0.196078431373, b: 0.8 },
  salmon: { r: 0.980392156863, g: 0.501960784314, b: 0.447058823529 },
  lightslategray: { r: 0.466666666667, g: 0.533333333333, b: 0.6 },
  lawngreen: { r: 0.486274509804, g: 0.988235294118, b: 0.0 },
  lightgreen: { r: 0.564705882353, g: 0.933333333333, b: 0.564705882353 },
  lightgray: { r: 0.827450980392, g: 0.827450980392, b: 0.827450980392 },
  hotpink: { r: 1.0, g: 0.411764705882, b: 0.705882352941 },
  lightyellow: { r: 1.0, g: 1.0, b: 0.878431372549 },
  lavenderblush: { r: 1.0, g: 0.941176470588, b: 0.960784313725 },
  linen: { r: 0.980392156863, g: 0.941176470588, b: 0.901960784314 },
  mediumaquamarine: { r: 0.4, g: 0.803921568627, b: 0.666666666667 },
  green: { r: 0.0, g: 0.501960784314, b: 0.0 },
  blueviolet: { r: 0.541176470588, g: 0.16862745098, b: 0.886274509804 },
  peachpuff: { r: 1.0, g: 0.854901960784, b: 0.725490196078 },
};
