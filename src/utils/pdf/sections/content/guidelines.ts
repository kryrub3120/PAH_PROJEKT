import { jsPDF } from 'jspdf';
import { PDF_COLORS } from '../../config';

export const drawParentGuidelines = (doc: jsPDF) => {
  const yStart = 190;
  
  // Section title
  doc.setFontSize(16);
  doc.setTextColor(PDF_COLORS.primary);
  doc.text('Guidelines for Parents', 20, yStart);

  // Guidelines content
  doc.setFontSize(12);
  doc.setTextColor(PDF_COLORS.text);
  const guidelines = [
    '1. Monitor Growth Regularly:',
    '   • Measure height every 3-6 months',
    '   • Track weight alongside height',
    '   • Note any significant growth spurts',
    '',
    '2. Support Healthy Development:',
    '   • Ensure balanced nutrition with adequate protein, calcium, and vitamins',
    '   • Encourage regular physical activity',
    '   • Maintain consistent sleep schedule (8-10 hours/night)',
    '',
    '3. When to Consult a Doctor:',
    '   • Growth rate significantly different from peers',
    '   • Early or late onset of puberty signs',
    '   • Consistent deviation from growth curve',
  ];
  
  guidelines.forEach((line, index) => {
    doc.text(line, 20, yStart + 10 + (index * 5));
  });
};