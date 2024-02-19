import React, { FC, useState } from 'react';
import { parseFloat, parseInt } from '@void-aurora/utils';
import {} from '@void-aurora/math';
import { createColorSrgbUint8 } from '@void-aurora/color';

export const DemoSrgbUint8: FC = () => {
  const [r, setR] = useState(0);
  const [g, setG] = useState(0);
  const [b, setB] = useState(0);
  const [alpha, setAlpha] = useState(1);

  const rgb = createColorSrgbUint8(r, g, b, alpha);

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
      <div
        style={{
          display: 'flex',
          flexFlow: 'column',
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
          <span>hex:</span>
          {/* <span>{rgb.toHexString(true)}</span> */}
        </div>

        <div>
          <span>rgb:</span>
          <span>{rgb.toString()}</span>
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
          min={0x00}
          max={0xff}
          step={1}
          value={r}
          onChange={e => {
            setR(parseInt(e.target.value));
          }}
        />
        <span>{r}</span>

        <span>G:</span>
        <input
          type="range"
          min={0x00}
          max={0xff}
          step={1}
          value={g}
          onChange={e => {
            setG(parseInt(e.target.value));
          }}
        />
        <span>{g}</span>

        <span>B:</span>
        <input
          type="range"
          min={0x00}
          max={0xff}
          step={1}
          value={b}
          onChange={e => {
            setB(parseInt(e.target.value));
          }}
        />
        <span>{b}</span>

        <span>alpha:</span>
        <input
          type="range"
          min={0}
          max={1}
          step={0.001}
          value={alpha}
          onChange={e => {
            setAlpha(parseFloat(e.target.value));
          }}
        />
        <span>{alpha.toFixed(3)}</span>
      </div>
    </div>
  );
};

DemoSrgbUint8.displayName = 'sRGB uint8';
