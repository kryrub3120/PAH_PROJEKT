export interface SliderProps {
  label?: string;
  value: number;
  onChange: (value: number) => void;
  min: number;
  max: number;
  step: number;
  unit: string;
  disabled?: boolean;
}

export interface SliderLabelProps {
  label?: string;
  value: number;
  unit: string;
}

export interface SliderRangeProps {
  min: number;
  max: number;
}

export interface SliderInputProps {
  id: string;
  value: number;
  onChange: (value: number) => void;
  min: number;
  max: number;
  step: number;
  disabled?: boolean;
}