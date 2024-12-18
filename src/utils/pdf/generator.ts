import { jsPDF } from 'jspdf';
import { ChildData, ParentData } from '../types';
import { HeightPrediction } from '../types/prediction';
import { PdfGenerationError } from './errors';
import { validatePdfData } from './validation';
import { initializePdf } from './config';
import { generateReportId } from '../reportGenerator';
import {
  drawHeader,
  drawMainPrediction,
  drawProgressSection,
  drawTimeEstimation,
  drawInputData,
  drawMethodInfo,
  drawGrowthTips,
  drawFooter,
} from './sections/content';

export const generatePdfReport = (
  prediction: HeightPrediction,
  childData: ChildData,
  parentData: ParentData
): string => {
  try {
    // Validate input data
    validatePdfData(prediction, childData, parentData);

    // Initialize PDF document
    const doc = initializePdf();
    const reportId = generateReportId();

    // Draw each section with proper spacing
    let yOffset = 20;

    // Header with logo and date
    drawHeader(doc);
    yOffset += 40;

    // Main prediction with large numbers
    drawMainPrediction(doc, prediction);
    yOffset += 60;

    // Progress visualization
    drawProgressSection(doc, childData, prediction);
    yOffset += 50;

    // Time estimation
    drawTimeEstimation(doc, childData);
    yOffset += 50;

    // Input data summary
    drawInputData(doc, childData, parentData);
    yOffset += 60;

    // Method explanation
    drawMethodInfo(doc);
    yOffset += 40;

    // Growth tips
    drawGrowthTips(doc);
    yOffset += 40;

    // Footer with report ID and disclaimer
    drawFooter(doc, reportId);

    // Generate output
    return doc.output('datauristring');
  } catch (err) {
    console.error('PDF Generation Error:', err);
    throw new PdfGenerationError(
      err instanceof Error ? err.message : 'Failed to generate PDF report'
    );
  }
};