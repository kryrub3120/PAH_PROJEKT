import { jsPDF } from 'jspdf';
import { PDF_COLORS } from '../../config';

export const drawGrowthTips = (doc: jsPDF) => {
  const yStart = 230;
  
  // Section title
  doc.setFontSize(16);
  doc.setTextColor(PDF_COLORS.primary);
  doc.text('Growth Tips', 20, yStart);

  // Tips list
  doc.setFontSize(12);
  doc.setTextColor(PDF_COLORS.text);
  const tips = [
    '• Ensure a balanced diet rich in proteins, calcium, and vitamins',
    '• Maintain regular physical activity',
    '• Get adequate sleep (8-10 hours per night)',
  ];
  
  tips.forEach((tip, index) => {
    doc.text(tip, 20, yStart + 10 + (index * 7));
  });
};