import { useState } from 'react';
import { ChildData, ParentData } from '../../../types';
import { calculateAdultHeight } from '../../../utils/heightPrediction';
import { HeightPrediction } from '../../../types/prediction';
import { validateChildData, validateParentData, ValidationError } from '../../../utils/validation';

export const useCalculator = () => {
  const [prediction, setPrediction] = useState<HeightPrediction | null>(null);
  const [isCalculating, setIsCalculating] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const calculate = async (childData: ChildData, parentData: ParentData) => {
    try {
      setIsCalculating(true);
      setError(null);

      // Validate input data
      const childErrors = validateChildData(childData);
      const parentErrors = validateParentData(parentData);
      const allErrors = [...childErrors, ...parentErrors];

      if (allErrors.length > 0) {
        const errorMessages = allErrors.map(err => err.message).join('\n');
        throw new Error(errorMessages);
      }

      const result = calculateAdultHeight(
        childData.currentHeight,
        childData.weight,
        childData.age,
        childData.sex,
        parentData.fatherHeight,
        parentData.motherHeight
      );

      setPrediction(result);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to calculate prediction');
    } finally {
      setIsCalculating(false);
    }
  };

  return {
    prediction,
    isCalculating,
    error,
    calculate,
  };
};