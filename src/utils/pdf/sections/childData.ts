import { jsPDF } from 'jspdf';
import { ChildData } from '../../../types';
import { PDF_COLORS } from '../config';

export const drawChildData = (doc: jsPDF, data: ChildData) => {
  const yStart = 100;
  
  // Section title
  doc.setFontSize(16);
  doc.setTextColor(PDF_COLORS.primary);
  doc.text('Child Information', 20, yStart);

  // Data points
  doc.setFontSize(12);
  doc.setTextColor(PDF_COLORS.text);
  const childInfo = [
    `Current Height: ${data.currentHeight} cm`,
    `Weight: ${data.weight} kg`,
    `Age: ${data.age} years`,
    `Sex: ${data.sex}`,
  ];
  
  childInfo.forEach((line, index) => {
    doc.text(line, 20, yStart + 10 + (index * 7));
  });
};