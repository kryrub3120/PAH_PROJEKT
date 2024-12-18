import React from 'react';
import { Slider } from '../../common/Slider';

interface WeightInputProps {
  value: number;
  onChange: (value: number) => void;
  t: any;
}

export const WeightInput: React.FC<WeightInputProps> = ({
  value,
  onChange,
  t,
}) => {
  return (
    <Slider
      label={t.weight}
      value={value}
      onChange={onChange}
      min={20}
      max={90}
      step={0.5}
      unit={t.kg}
    />
  );
};