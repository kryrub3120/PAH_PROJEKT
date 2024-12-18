import { jsPDF } from 'jspdf';
import { ChildData, ParentData } from '../../../../types';
import { PDF_COLORS } from '../../config';

export const drawInputData = (
  doc: jsPDF,
  childData: ChildData,
  parentData: ParentData
) => {
  const yStart = 200;

  // Create two columns for child and parent data
  const leftColumn = 30;
  const rightColumn = 120;

  // Child Data
  doc.setFontSize(14);
  doc.setTextColor(PDF_COLORS.primary);
  doc.text('Child Information', leftColumn, yStart);

  doc.setFontSize(12);
  doc.setTextColor(PDF_COLORS.text);
  doc.text([
    `Height: ${childData.currentHeight} cm`,
    `Weight: ${childData.weight} kg`,
    `Age: ${childData.age} years`,
    `Sex: ${childData.sex}`,
  ], leftColumn, yStart + 20);

  // Parent Data
  doc.setFontSize(14);
  doc.setTextColor(PDF_COLORS.primary);
  doc.text('Parent Information', rightColumn, yStart);

  doc.setFontSize(12);
  doc.setTextColor(PDF_COLORS.text);
  doc.text([
    `Father's Height: ${parentData.fatherHeight} cm`,
    `Mother's Height: ${parentData.motherHeight} cm`,
  ], rightColumn, yStart + 20);
};