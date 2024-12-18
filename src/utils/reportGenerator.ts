import { ChildData, ParentData } from '../types';
import { HeightPrediction } from '../types/prediction';
import { nanoid } from 'nanoid';

export const generateReportId = () => {
  return nanoid(10);
};

export const generatePdfReport = async (
  prediction: HeightPrediction,
  childData: ChildData,
  parentData: ParentData
) => {
  const reportId = generateReportId();
  
  // Here you would implement the actual PDF generation
  // For now, we'll just return the data needed for the report component
  return {
    reportId,
    prediction,
    childData,
    parentData,
    generatedAt: new Date().toISOString(),
  };
};