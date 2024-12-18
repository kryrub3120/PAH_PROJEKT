import { jsPDF } from 'jspdf';
import { ChildData } from '../../../../types';
import { HeightPrediction } from '../../../../types/prediction';
import { PDF_COLORS } from '../../config';

export const drawProgressSection = (
  doc: jsPDF,
  childData: ChildData,
  prediction: HeightPrediction
) => {
  const progress = (childData.currentHeight / prediction.predictedHeight) * 100;
  const yStart = 120;

  // Section title
  doc.setFontSize(16);
  doc.setTextColor(PDF_COLORS.primary);
  doc.text('Growth Progress', 30, yStart);

  // Progress bar
  const barWidth = 150;
  const barHeight = 10;
  
  // Background
  doc.setFillColor('#E5E7EB');
  doc.roundedRect(30, yStart + 10, barWidth, barHeight, 3, 3, 'F');

  // Progress fill
  doc.setFillColor(PDF_COLORS.primary);
  doc.roundedRect(30, yStart + 10, (barWidth * progress) / 100, barHeight, 3, 3, 'F');

  // Progress text
  doc.setFontSize(14);
  doc.setTextColor(PDF_COLORS.text);
  doc.text(
    `${Math.round(progress)}% of predicted adult height reached`,
    105,
    yStart + 35,
    { align: 'center' }
  );
};