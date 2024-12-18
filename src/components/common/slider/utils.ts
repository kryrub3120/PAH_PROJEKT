import { nanoid } from 'nanoid';

export const generateSliderId = (): string => {
  return `slider-${nanoid(6)}`;
};

export const formatValue = (value: number): string => {
  return Number.isInteger(value) ? value.toString() : value.toFixed(1);
};