import { jsPDF } from 'jspdf';

export const addGrowthTips = (
  doc: jsPDF,
  primaryColor: string,
  textColor: string,
) => {
  doc.setFontSize(16);
  doc.setTextColor(primaryColor);
  doc.text('Growth Tips', 20, 210);

  doc.setFontSize(12);
  doc.setTextColor(textColor);
  doc.text([
    '• Ensure a balanced diet rich in proteins, calcium, and vitamins',
    '• Maintain regular physical activity',
    '• Get adequate sleep (8-10 hours per night)',
  ], 20, 220);
};