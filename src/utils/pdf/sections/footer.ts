import { jsPDF } from 'jspdf';
import { PDF_COLORS } from '../config';

export const drawFooter = (doc: jsPDF, reportId: string) => {
  const yStart = 280;
  
  doc.setFontSize(10);
  doc.setTextColor(PDF_COLORS.text);
  
  const footerText = [
    `Report ID: ${reportId}`,
    `Height Predictor © ${new Date().getFullYear()}`,
    'This prediction is based on current data and may vary.',
  ];
  
  footerText.forEach((line, index) => {
    doc.text(line, 105, yStart + (index * 5), { align: 'center' });
  });
};