import { jsPDF } from 'jspdf';
import { PDF_COLORS } from '../config';

export const drawMethodInfo = (doc: jsPDF) => {
  const yStart = 190;
  
  // Section title
  doc.setFontSize(16);
  doc.setTextColor(PDF_COLORS.primary);
  doc.text('About the Method', 20, yStart);

  // Method explanation
  doc.setFontSize(12);
  doc.setTextColor(PDF_COLORS.text);
  const methodText = 
    'The prediction uses the Khamis-Roche method, a scientifically validated ' +
    'approach that considers current height, weight, age, and parental heights ' +
    'to estimate adult stature.';
  
  doc.text(methodText, 20, yStart + 10, {
    maxWidth: 170,
    align: 'justify',
  });
};