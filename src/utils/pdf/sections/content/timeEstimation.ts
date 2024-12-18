import { jsPDF } from 'jspdf';
import { format, addMonths } from 'date-fns';
import { ChildData } from '../../../../types';
import { PDF_COLORS } from '../../config';

export const drawTimeEstimation = (doc: jsPDF, childData: ChildData) => {
  const yearsRemaining = Math.max(0, 18 - childData.age);
  const monthsRemaining = yearsRemaining * 12;
  const completionDate = addMonths(new Date(), monthsRemaining);

  const yStart = 170;
  
  // Section title
  doc.setFontSize(16);
  doc.setTextColor(PDF_COLORS.primary);
  doc.text('Time to Final Height', 30, yStart);

  // Time information
  doc.setFontSize(14);
  doc.setTextColor(PDF_COLORS.text);
  doc.text([
    `Estimated time remaining: ${yearsRemaining} years`,
    `Expected completion: ${format(completionDate, 'MMMM yyyy')}`,
  ], 30, yStart + 20);
};