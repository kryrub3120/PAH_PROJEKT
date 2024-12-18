import { jsPDF } from 'jspdf';

export const PDF_CONFIG = {
  format: 'a4',
  unit: 'mm',
  orientation: 'portrait',
  margins: {
    top: 20,
    bottom: 20,
    left: 20,
    right: 20
  }
} as const;

export const PDF_COLORS = {
  primary: '#2563eb', // blue-600
  text: '#1f2937',   // gray-800
  background: '#ffffff'
} as const;

export const PDF_FONTS = {
  normal: 'helvetica',
  bold: 'helvetica-bold',
} as const;

export const initializePdf = (): jsPDF => {
  const doc = new jsPDF({
    orientation: PDF_CONFIG.orientation,
    unit: PDF_CONFIG.unit,
    format: PDF_CONFIG.format,
  });

  // Set default font
  doc.setFont(PDF_FONTS.normal);
  
  return doc;
};