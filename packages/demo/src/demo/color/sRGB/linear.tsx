import React, { CSSProperties, FC, useMemo, useState } from 'react';
import { buildArray, parseFloat, parseInt } from '@void-aurora/utils';
import {} from '@void-aurora/math';
import {
  createColorSrgbLinear,
  createColorSrgb,
  gammaDecode,
  gammaEncode,
} from '@void-aurora/color';

export const DemoLinearRGB: FC = () => {
  const [r, setR] = useState(0);
  const [g, setG] = useState(0);
  const [b, setB] = useState(0);
  const rgb = createColorSrgb(r, g, b);
  const linearRgb = createColorSrgbLinear(r, g, b);

  const compare = useMemo(() => {
    const values = buildArray(i => i / 10, 11);

    const labelStyle: CSSProperties = {
      display: 'flex',
      alignItems: 'center',
      padding: '8px',
    };
    const blockStyle: CSSProperties = {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
    };

    return (
      <div
        style={{
          display: 'grid',
          grid: 'auto-flow 32px / max-content 8px repeat(11, 32px)',
          rowGap: '8px',
          padding: '16px',
          color: '#ccd7e2',
          background: '#2c3e50',
        }}
      >
        <div style={labelStyle}>values</div>
        <i />
        {values.map(v => (
          <div key={`value-${v}`} style={blockStyle}>
            {v.toFixed(1)}
          </div>
        ))}

        <div style={labelStyle}>gamma compressed</div>
        <i />
        {values.map(v => (
          <div
            key={`gamma-compressed-${v}`}
            style={{
              ...blockStyle,
              // backgroundColor: new ColorSrgbFloat(v, v, v).toString(),
            }}
          ></div>
        ))}

        <div style={labelStyle}>linear light</div>
        <i />
        {values.map(v => (
          <div
            key={`linear-light-${v}`}
            style={{
              ...blockStyle,
              // backgroundColor: new ColorLinearRgb(v, v, v)
              //   .toSrgbFloat()
              //   .toString(),
            }}
          ></div>
        ))}
      </div>
    );
  }, []);

  return (
    <div
      style={{
        display: 'flex',
        flexFlow: 'column',
        alignItems: 'center',
        gap: '16px',
        padding: '16px',
      }}
    >
      {compare}

      <div
        style={{
          display: 'flex',
          flexFlow: 'column',
          justifyContent: 'flex-start',
          alignContent: 'center',
          alignItems: 'center',
          gap: '8px',
        }}
      >
        <div
          style={{
            width: '32px',
            height: '32px',
            backgroundColor: rgb.toString(),
            border: '2px solid #788ca0',
          }}
        ></div>

        <div>
          rgb:
          <span>{rgb.toString()}</span>
        </div>

        <div>
          linear:
          <span>{linearRgb.toString()}</span>
        </div>
      </div>

      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'max-content max-content max-content',
          justifyContent: 'center',
          gap: '8px',
        }}
      >
        <span>R:</span>
        <input
          type="range"
          min={0}
          max={1}
          step={0.001}
          value={r}
          onChange={e => {
            setR(parseFloat(e.target.value));
          }}
        />
        <span>{r.toFixed(3)}</span>

        <span>G:</span>
        <input
          type="range"
          min={0}
          max={1}
          step={0.001}
          value={g}
          onChange={e => {
            setG(parseFloat(e.target.value));
          }}
        />
        <span>{g.toFixed(3)}</span>

        <span>B:</span>
        <input
          type="range"
          min={0}
          max={1}
          step={0.001}
          value={b}
          onChange={e => {
            setB(parseFloat(e.target.value));
          }}
        />
        <span>{b.toFixed(3)}</span>
      </div>
    </div>
  );
};

DemoLinearRGB.displayName = 'sRGB linear';
