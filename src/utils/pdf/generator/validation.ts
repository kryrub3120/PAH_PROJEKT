import { ChildData, ParentData } from '../../../types';
import { HeightPrediction } from '../../../types/prediction';
import { PdfGenerationError } from '../errors';

export const validatePdfData = (
  prediction: HeightPrediction,
  childData: ChildData,
  parentData: ParentData
): void => {
  if (!prediction) {
    throw new PdfGenerationError('Missing prediction data');
  }

  if (!childData) {
    throw new PdfGenerationError('Missing child data');
  }

  if (!parentData) {
    throw new PdfGenerationError('Missing parent data');
  }

  // Validate prediction data
  if (!prediction.predictedHeight || !prediction.predictionRange) {
    throw new PdfGenerationError('Invalid prediction data structure');
  }

  // Validate child data
  if (!childData.currentHeight || !childData.weight || !childData.age || !childData.sex) {
    throw new PdfGenerationError('Invalid child data structure');
  }

  // Validate parent data
  if (!parentData.fatherHeight || !parentData.motherHeight) {
    throw new PdfGenerationError('Invalid parent data structure');
  }
};