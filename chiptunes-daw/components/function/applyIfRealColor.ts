import React from 'react';

export const applyIfColorValue = (
  style: React.CSSProperties,
  name: string,
  colorValue: string,
) => {
  if (colorValue.startsWith('#')) {
    (style as any)[name] = colorValue;
  }
  return style;
};
