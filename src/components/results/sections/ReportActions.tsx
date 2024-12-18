import React from 'react';
import { FileText, Loader } from 'lucide-react';
import { usePdfReport } from '../../../hooks/usePdfReport';
import { HeightPrediction } from '../../../types/prediction';
import { ChildData, ParentData } from '../../../types';

interface ReportActionsProps {
  prediction: HeightPrediction;
  childData: ChildData;
  parentData: ParentData;
  t: any;
}

export const ReportActions: React.FC<ReportActionsProps> = ({
  prediction,
  childData,
  parentData,
  t,
}) => {
  const { generateReport, isGenerating, error } = usePdfReport();

  const handleGenerateReport = async () => {
    await generateReport(prediction, childData, parentData);
  };

  return (
    <div className="text-center space-y-4">
      <button
        onClick={handleGenerateReport}
        disabled={isGenerating}
        className="inline-flex items-center px-8 py-3 rounded-lg text-white bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 transition-colors duration-200 shadow-md hover:shadow-lg disabled:opacity-50 disabled:cursor-not-allowed"
      >
        {isGenerating ? (
          <>
            <Loader className="w-5 h-5 mr-2 animate-spin" />
            {t.generatingReport || 'Generating Report...'}
          </>
        ) : (
          <>
            <FileText className="w-5 h-5 mr-2" />
            {t.getPdfReport || 'Get PDF Report'}
          </>
        )}
      </button>
      
      {error && (
        <div className="text-sm text-red-600 bg-red-50 p-4 rounded-lg">
          {error}
        </div>
      )}
      
      <p className="text-sm text-gray-500">
        {t.pdfReportDescription || 'Download a detailed PDF report with comprehensive analysis and recommendations.'}
      </p>
    </div>
  );
};