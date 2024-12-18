import { ChildData, ParentData } from '../../types';
import { HeightPrediction } from '../../types/prediction';
import { PdfGenerationError } from './errors';

export const validatePdfData = (
  prediction: HeightPrediction | null | undefined,
  childData: ChildData | null | undefined,
  parentData: ParentData | null | undefined
): void => {
  // Check for null/undefined data
  if (!prediction || !childData || !parentData) {
    throw new PdfGenerationError('Missing required data for PDF generation');
  }

  // Validate prediction data
  if (
    typeof prediction.predictedHeight !== 'number' ||
    !prediction.predictionRange?.min ||
    !prediction.predictionRange?.max
  ) {
    throw new PdfGenerationError('Invalid prediction data');
  }

  // Validate child data
  if (
    typeof childData.currentHeight !== 'number' ||
    typeof childData.weight !== 'number' ||
    typeof childData.age !== 'number' ||
    !childData.sex
  ) {
    throw new PdfGenerationError('Invalid child data');
  }

  // Validate parent data
  if (
    typeof parentData.fatherHeight !== 'number' ||
    typeof parentData.motherHeight !== 'number'
  ) {
    throw new PdfGenerationError('Invalid parent data');
  }
};