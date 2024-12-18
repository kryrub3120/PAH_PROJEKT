import { jsPDF } from 'jspdf';

export const addMethodExplanation = (
  doc: jsPDF,
  primaryColor: string,
  textColor: string,
) => {
  doc.setFontSize(16);
  doc.setTextColor(primaryColor);
  doc.text('About the Method', 20, 170);

  doc.setFontSize(12);
  doc.setTextColor(textColor);
  const methodText = 'The prediction is based on the Khamis-Roche method, ' +
    'a scientifically validated approach that considers current height, ' +
    'weight, age, and parental heights to estimate adult stature.';
  
  doc.text(methodText, 20, 180, {
    maxWidth: 170,
    align: 'justify',
  });
};