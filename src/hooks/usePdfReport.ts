import { useState } from 'react';
import { generatePdfReport } from '../utils/pdf';
import { PdfGenerationError } from '../utils/pdf/errors';
import { ChildData, ParentData } from '../types';
import { HeightPrediction } from '../types/prediction';

export const usePdfReport = () => {
  const [isGenerating, setIsGenerating] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const generateReport = async (
    prediction: HeightPrediction,
    childData: ChildData,
    parentData: ParentData
  ) => {
    try {
      setIsGenerating(true);
      setError(null);

      const pdfDataUri = generatePdfReport(prediction, childData, parentData);
      
      // Create and trigger download
      const link = document.createElement('a');
      link.href = pdfDataUri;
      link.download = `height-prediction-${new Date().toISOString().split('T')[0]}.pdf`;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    } catch (err) {
      const errorMessage = err instanceof PdfGenerationError 
        ? err.message
        : 'Failed to generate PDF report';
      
      setError(errorMessage);
      throw err;
    } finally {
      setIsGenerating(false);
    }
  };

  return {
    generateReport,
    isGenerating,
    error,
  };
};