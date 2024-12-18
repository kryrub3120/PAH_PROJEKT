import { jsPDF } from 'jspdf';
import { ParentData } from '../../../../types';
import { PDF_COLORS } from '../../config';

export const drawParentData = (doc: jsPDF, data: ParentData) => {
  const yStart = 150;
  
  // Section title
  doc.setFontSize(16);
  doc.setTextColor(PDF_COLORS.primary);
  doc.text('Parent Information', 20, yStart);

  // Data points
  doc.setFontSize(12);
  doc.setTextColor(PDF_COLORS.text);
  const parentInfo = [
    `Father's Height: ${data.fatherHeight} cm`,
    `Mother's Height: ${data.motherHeight} cm`,
  ];
  
  parentInfo.forEach((line, index) => {
    doc.text(line, 20, yStart + 10 + (index * 7));
  });
};