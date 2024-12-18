import React from 'react';
import { Slider } from '../../common/Slider';

interface HeightInputProps {
  value: number;
  onChange: (value: number) => void;
  label: string;
  t: any;
  min?: number;
  max?: number;
}

export const HeightInput: React.FC<HeightInputProps> = ({
  value,
  onChange,
  label,
  t,
  min = 50,
  max = 200,
}) => {
  return (
    <Slider
      label={label}
      value={value}
      onChange={onChange}
      min={min}
      max={max}
      step={0.5}
      unit={t.cm}
    />
  );
};