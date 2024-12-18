import React from 'react';
import { Slider } from '../../common/Slider';

interface AgeInputProps {
  value: number;
  onChange: (value: number) => void;
  t: any;
}

export const AgeInput: React.FC<AgeInputProps> = ({
  value,
  onChange,
  t,
}) => {
  return (
    <Slider
      label={t.age}
      value={value}
      onChange={onChange}
      min={4}
      max={17}
      step={0.5}
      unit={t.years}
    />
  );
};