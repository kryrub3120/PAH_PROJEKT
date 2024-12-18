import { jsPDF } from 'jspdf';
import { PdfGenerationError } from '../errors';

export const addSection = (
  doc: jsPDF,
  addContent: (doc: jsPDF) => void,
  sectionName: string
): void => {
  if (!doc) {
    throw new PdfGenerationError(`Invalid PDF document when adding ${sectionName}`);
  }

  try {
    // Save current state
    const currentPage = doc.getCurrentPageInfo().pageNumber;
    const currentY = doc.internal.getCurrentPageInfo().pageNumber === currentPage 
      ? doc.internal.getCurrentPageInfo().y 
      : 0;

    addContent(doc);

    // Verify content was added
    if (doc.getCurrentPageInfo().pageNumber === currentPage && 
        doc.internal.getCurrentPageInfo().y === currentY) {
      throw new PdfGenerationError(`No content added for ${sectionName} section`);
    }
  } catch (err) {
    if (err instanceof PdfGenerationError) {
      throw err;
    }
    throw new PdfGenerationError(
      `Failed to add ${sectionName} section: ${err instanceof Error ? err.message : 'Unknown error'}`,
      err instanceof Error ? err : undefined
    );
  }
};