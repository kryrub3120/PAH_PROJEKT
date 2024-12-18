import React from 'react';
import type { SliderRangeProps } from './types';
import { formatValue } from './utils';

export const SliderRange: React.FC<SliderRangeProps> = ({
  min,
  max,
}) => (
  <div className="flex justify-between text-xs text-gray-500 mt-1">
    <span>{formatValue(min)}</span>
    <span>{formatValue(max)}</span>
  </div>
);