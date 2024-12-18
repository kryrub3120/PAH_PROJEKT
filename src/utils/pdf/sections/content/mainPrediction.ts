import { jsPDF } from 'jspdf';
import { HeightPrediction } from '../../../../types/prediction';
import { PDF_COLORS } from '../../config';

export const drawMainPrediction = (doc: jsPDF, prediction: HeightPrediction) => {
  // Large, bold headline with predicted height
  doc.setFontSize(48);
  doc.setTextColor(PDF_COLORS.primary);
  doc.text(
    `${prediction.predictedHeight}`,
    105,
    80,
    { align: 'center' }
  );
  
  // Unit in smaller size
  doc.setFontSize(24);
  doc.text('cm', 140, 80);

  // Range in subtle subheading
  doc.setFontSize(16);
  doc.setTextColor(PDF_COLORS.text);
  doc.text(
    `Estimated range: ${prediction.predictionRange.min}–${prediction.predictionRange.max} cm`,
    105,
    95,
    { align: 'center' }
  );
};