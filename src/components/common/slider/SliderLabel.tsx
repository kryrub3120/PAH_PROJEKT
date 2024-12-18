import React from 'react';
import type { SliderLabelProps } from './types';
import { formatValue } from './utils';

export const SliderLabel: React.FC<SliderLabelProps> = ({
  label,
  value,
  unit,
}) => (
  <div className="flex justify-between items-center mb-2">
    {label && (
      <label className="text-sm font-medium text-gray-700">
        {label}
      </label>
    )}
    <span className="text-sm text-gray-500">
      {formatValue(value)} {unit}
    </span>
  </div>
);