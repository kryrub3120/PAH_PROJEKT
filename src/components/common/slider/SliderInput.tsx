import React from 'react';
import type { SliderInputProps } from './types';

export const SliderInput: React.FC<SliderInputProps> = ({
  id,
  value,
  onChange,
  min,
  max,
  step,
  disabled,
}) => (
  <input
    id={id}
    type="range"
    min={min}
    max={max}
    step={step}
    value={value}
    onChange={(e) => onChange(parseFloat(e.target.value))}
    disabled={disabled}
    className={`
      w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer
      accent-blue-600
      disabled:opacity-50 disabled:cursor-not-allowed
      focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2
    `}
  />
);