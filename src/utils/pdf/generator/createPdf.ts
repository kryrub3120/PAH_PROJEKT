import { jsPDF } from 'jspdf';
import { ChildData, ParentData } from '../../../types';
import { HeightPrediction } from '../../../types/prediction';
import { generateReportId } from '../../reportGenerator';
import { PdfGenerationError } from '../errors';
import { initializePdf } from '../config';
import {
  drawHeader,
  drawMainPrediction,
  drawProgressSection,
  drawTimeEstimation,
  drawInputData,
  drawMethodInfo,
  drawGrowthTips,
  drawGrowthChart,
  drawFooter,
} from '../sections/content';

export const createPdf = (
  prediction: HeightPrediction,
  childData: ChildData,
  parentData: ParentData
): jsPDF => {
  try {
    const doc = initializePdf();
    const reportId = generateReportId();

    // Draw each section with proper spacing
    drawHeader(doc);
    drawMainPrediction(doc, prediction);
    drawProgressSection(doc, childData, prediction);
    drawGrowthChart(doc, childData); // Add growth chart
    drawTimeEstimation(doc, childData);
    drawInputData(doc, childData, parentData);
    drawMethodInfo(doc);
    drawGrowthTips(doc);
    drawFooter(doc, reportId);

    return doc;
  } catch (err) {
    throw new PdfGenerationError(
      'Failed to create PDF document',
      err instanceof Error ? err : undefined
    );
  }
};