import { ChildData, ParentData } from '../../../types';
import { HeightPrediction } from '../../../types/prediction';
import { PdfGenerationError } from '../errors';
import { createPdf } from './createPdf';
import { validatePdfData } from './validation';

export const generatePdfReport = (
  prediction: HeightPrediction,
  childData: ChildData,
  parentData: ParentData
): string => {
  try {
    // Validate input data
    validatePdfData(prediction, childData, parentData);

    // Create PDF document
    const doc = createPdf(prediction, childData, parentData);

    // Generate output
    try {
      const output = doc.output('datauristring');
      if (!output) {
        throw new PdfGenerationError('Failed to generate PDF output');
      }
      return output;
    } catch (err) {
      throw new PdfGenerationError(
        'Failed to generate PDF data URI',
        err instanceof Error ? err : undefined
      );
    }
  } catch (err) {
    if (err instanceof PdfGenerationError) {
      throw err;
    }
    throw new PdfGenerationError(
      'Failed to generate PDF report',
      err instanceof Error ? err : undefined
    );
  }
};