import { buildArray } from '@void-aurora/utils';
import { Color, ColorSrgbUint8 } from '../src';

interface BenchRgbOptions {
  name: string;
  times: number;
  max: number;
  item: (index: number) => string;
  parse: (string) => Color;
}
function benchRgb(options: BenchRgbOptions): void {
  const { name, times, max, item, parse } = options;

  console.log(`Bench ${name}: starting.`);

  const costs: number[] = [];

  const listData = buildArray(max, item);
  const listColor = Array<Color>(max);

  console.log('Data prepared.');

  for (let round = 0; round <= times; round++) {
    const start = performance.now();

    for (let index = 0; index < max; index++) {
      listColor[index] = parse(listData[index]);
    }

    const end = performance.now() - start;

    if (round === 0) {
      console.log(`Pre-boot ${end} ms.`);
    } else {
      console.log(`Bench ${name}: round ${round}, costs ${end} ms.`);
      costs.push(end);
    }
  }

  const average = costs.reduce((agg, cur) => agg + cur, 0) / costs.length;
  const each = average / max;
  console.log(
    `Bench ${name}: ${times} times, average costs ${average} ms, each color costs ${each} ms.`,
  );
}

benchRgb({
  name: '#rrggbb',
  times: 10,
  max: 0xffffff,
  item: i => `#${i.toString(16).padStart(6, '0')}`,
  parse: ColorSrgbUint8.fromHex,
});
benchRgb({
  name: '#rgb',
  times: 10,
  max: 0xfff,
  item: i => `#${i.toString(16).padStart(3, '0')}`,
  parse: ColorSrgbUint8.fromHex,
});
benchRgb({
  name: '#rrggbbaa',
  times: 10,
  max: 0xffffff,
  item: i => `#${i.toString(16).padStart(6, '0')}93`,
  parse: ColorSrgbUint8.fromHex,
});
benchRgb({
  name: '#rgba',
  times: 10,
  max: 0xffff,
  item: i => `#${i.toString(16).padStart(4, '0')}`,
  parse: ColorSrgbUint8.fromHex,
});

/*
duduluu@zxd-mbp color % pnpm ts-node -- scripts/bench-rgb.ts

> @void-aurora/color@0.0.0 ts-node /Users/duduluu/Workspaces/void-aurora/utilities/packages/color
> ts-node --project ../../tsconfig.dev.json "scripts/bench-rgb.ts"

Bench #rrggbb: starting.
Data prepared.
Pre-boot 5145.558356046677 ms.
Bench #rrggbb: round 1, costs 6305.853312015533 ms.
Bench #rrggbb: round 2, costs 4990.432567834854 ms.
Bench #rrggbb: round 3, costs 6362.164549827576 ms.
Bench #rrggbb: round 4, costs 6434.555098056793 ms.
Bench #rrggbb: round 5, costs 5031.473064899445 ms.
Bench #rrggbb: round 6, costs 6367.152277946472 ms.
Bench #rrggbb: round 7, costs 6373.175081014633 ms.
Bench #rrggbb: round 8, costs 5079.770677089691 ms.
Bench #rrggbb: round 9, costs 6310.562965869904 ms.
Bench #rrggbb: round 10, costs 6354.271722078323 ms.
Bench #rrggbb: 10 times, average costs 5960.941131663322 ms, each color costs 0.00035529979985732566 ms.
Bench #rgb: starting.
Data prepared.
Pre-boot 2.716931104660034 ms.
Bench #rgb: round 1, costs 10.84152102470398 ms.
Bench #rgb: round 2, costs 0.9357259273529053 ms.
Bench #rgb: round 3, costs 0.9315710067749023 ms.
Bench #rgb: round 4, costs 0.9311220645904541 ms.
Bench #rgb: round 5, costs 0.9289720058441162 ms.
Bench #rgb: round 6, costs 0.9290571212768555 ms.
Bench #rgb: round 7, costs 0.931520938873291 ms.
Bench #rgb: round 8, costs 0.9302921295166016 ms.
Bench #rgb: round 9, costs 0.7168760299682617 ms.
Bench #rgb: round 10, costs 0.7008950710296631 ms.
Bench #rgb: 10 times, average costs 1.877755331993103 ms, each color costs 0.0004585483106210264 ms.
Bench #rrggbbaa: starting.
Data prepared.
Pre-boot 7223.713706970215 ms.
Bench #rrggbbaa: round 1, costs 8777.765739917755 ms.
Bench #rrggbbaa: round 2, costs 9008.754721164703 ms.
Bench #rrggbbaa: round 3, costs 9117.55635714531 ms.
Bench #rrggbbaa: round 4, costs 9536.35424399376 ms.
Bench #rrggbbaa: round 5, costs 9495.754437923431 ms.
Bench #rrggbbaa: round 6, costs 9702.935205936432 ms.
Bench #rrggbbaa: round 7, costs 8963.352691173553 ms.
Bench #rrggbbaa: round 8, costs 10713.968079090118 ms.
Bench #rrggbbaa: round 9, costs 8796.361764907837 ms.
Bench #rrggbbaa: round 10, costs 8962.881652116776 ms.
Bench #rrggbbaa: 10 times, average costs 9307.568489336967 ms, each color costs 0.0005547743465966769 ms.
Bench #rgba: starting.
Data prepared.
Pre-boot 26.468324899673462 ms.
Bench #rgba: round 1, costs 20.561332941055298 ms.
Bench #rgba: round 2, costs 19.978370189666748 ms.
Bench #rgba: round 3, costs 20.32348895072937 ms.
Bench #rgba: round 4, costs 19.82093906402588 ms.
Bench #rgba: round 5, costs 20.808862924575806 ms.
Bench #rgba: round 6, costs 20.296451091766357 ms.
Bench #rgba: round 7, costs 20.173871994018555 ms.
Bench #rgba: round 8, costs 20.404474020004272 ms.
Bench #rgba: round 9, costs 20.981271982192993 ms.
Bench #rgba: round 10, costs 20.085444927215576 ms.
Bench #rgba: 10 times, average costs 20.343450808525084 ms, each color costs 0.0003104211613416508 ms.
*/
