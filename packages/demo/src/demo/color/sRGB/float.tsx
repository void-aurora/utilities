import React, { FC, useState } from 'react';
import {} from '@void-aurora/utils';
import { clamp01 } from '@void-aurora/math';
import { createColorSrgb } from '@void-aurora/color';

export const DemoSrgbFloat: FC = () => {
  const [r, setR] = useState(0);
  const [g, setG] = useState(0);
  const [b, setB] = useState(0);
  const [alpha, setAlpha] = useState(1);

  const rgb = createColorSrgb(r, g, b, alpha);

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

DemoSrgbFloat.displayName = 'sRGB float';
