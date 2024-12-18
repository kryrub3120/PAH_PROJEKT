import { jsPDF } from 'jspdf';
import { ChildData } from '../../../../types';
import { HeightPrediction } from '../../../../types/prediction';
import { PDF_COLORS } from '../../config';
import { calculateGrowthProgress } from '../../utils/calculations';

export const drawProgressInfo = (
  doc: jsPDF, 
  childData: ChildData,
  prediction: HeightPrediction
) => {
  const yStart = 90;
  const progress = calculateGrowthProgress(childData.currentHeight, prediction.predictedHeight);
  
  // Section title
  doc.setFontSize(16);
  doc.setTextColor(PDF_COLORS.primary);
  doc.text('Growth Progress', 20, yStart);

  // Progress bar
  const barWidth = 170;
  const barHeight = 10;
  const progressWidth = (barWidth * progress) / 100;

  // Draw background
  doc.setFillColor('#E5E7EB'); // gray-200
  doc.rect(20, yStart + 10, barWidth, barHeight, 'F');

  // Draw progress
  doc.setFillColor(PDF_COLORS.primary);
  doc.rect(20, yStart + 10, progressWidth, barHeight, 'F');

  // Progress text
  doc.setFontSize(14);
  doc.setTextColor(PDF_COLORS.text);
  doc.text(
    `${Math.round(progress)}% of predicted adult height reached`,
    20, yStart + 30
  );
};