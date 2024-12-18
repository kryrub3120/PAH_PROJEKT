import { ChildData, ParentData } from '../types';

export interface ValidationError {
  field: string;
  message: string;
}

export const validateChildData = (data: ChildData): ValidationError[] => {
  const errors: ValidationError[] = [];

  // Age validation (4-17 years)
  if (data.age < 4 || data.age > 17) {
    errors.push({
      field: 'age',
      message: 'Age must be between 4 and 17 years',
    });
  }

  // Height validation (50-200 cm)
  if (data.currentHeight < 50 || data.currentHeight > 200) {
    errors.push({
      field: 'height',
      message: 'Height must be between 50 and 200 cm',
    });
  }

  // Weight validation (20-90 kg)
  if (data.weight < 20 || data.weight > 90) {
    errors.push({
      field: 'weight',
      message: 'Weight must be between 20 and 90 kg',
    });
  }

  return errors;
};

export const validateParentData = (data: ParentData): ValidationError[] => {
  const errors: ValidationError[] = [];

  // Father's height validation (130-200 cm)
  if (data.fatherHeight < 130 || data.fatherHeight > 200) {
    errors.push({
      field: 'fatherHeight',
      message: 'Father\'s height must be between 130 and 200 cm',
    });
  }

  // Mother's height validation (130-200 cm)
  if (data.motherHeight < 130 || data.motherHeight > 200) {
    errors.push({
      field: 'motherHeight',
      message: 'Mother\'s height must be between 130 and 200 cm',
    });
  }

  return errors;
};