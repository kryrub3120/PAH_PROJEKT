import { jsPDF } from 'jspdf';
import { format } from 'date-fns';
import { PDF_COLORS } from '../../config';

export const drawHeader = (doc: jsPDF) => {
  // Title
  doc.setFontSize(24);
  doc.setTextColor(PDF_COLORS.primary);
  doc.text('Height Prediction Report', 105, 20, { align: 'center' });
  
  // Date
  doc.setFontSize(12);
  doc.setTextColor(PDF_COLORS.text);
  doc.text(format(new Date(), 'MMMM d, yyyy'), 105, 30, { align: 'center' });
};