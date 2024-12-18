import { jsPDF } from 'jspdf';
import { HeightPrediction } from '../../../types/prediction';
import { PDF_COLORS } from '../config';

export const drawPrediction = (doc: jsPDF, prediction: HeightPrediction) => {
  doc.setFontSize(36);
  doc.setTextColor(PDF_COLORS.primary);
  doc.text(`${prediction.predictedHeight} cm`, 105, 60, { align: 'center' });

  doc.setFontSize(14);
  doc.text(
    `Range: ${prediction.predictionRange.min}–${prediction.predictionRange.max} cm`,
    105, 75, { align: 'center' }
  );
};