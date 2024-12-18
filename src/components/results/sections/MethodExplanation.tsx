import React from 'react';
import { BookOpen } from 'lucide-react';

interface MethodExplanationProps {
  t: any;
}

export const MethodExplanation: React.FC<MethodExplanationProps> = ({ t }) => {
  return (
    <div className="bg-gray-50 rounded-xl p-6 mb-8">
      <div className="flex items-center gap-3 mb-4">
        <BookOpen className="w-6 h-6 text-blue-600" />
        <h3 className="text-lg font-semibold text-gray-900">
          {t.aboutMethod}
        </h3>
      </div>
      
      <div className="prose prose-blue max-w-none">
        <p className="text-gray-600 leading-relaxed">
          {t.methodExplanation || 
            'The Khamis-Roche method is a scientifically validated approach for predicting adult height. ' +
            'This method considers current measurements (height, weight, age) along with genetic factors ' +
            '(parental heights) to provide accurate predictions of final adult stature. The method has ' +
            'been extensively validated through research and clinical studies.'}
        </p>

        <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="bg-white rounded-lg p-4">
            <h4 className="font-medium mb-2 text-gray-900">
              {t.scientificMethod}
            </h4>
            <p className="text-sm text-gray-600">
              {t.scientificMethodDesc}
            </p>
          </div>
          <div className="bg-white rounded-lg p-4">
            <h4 className="font-medium mb-2 text-gray-900">
              {t.accuratePredictions}
            </h4>
            <p className="text-sm text-gray-600">
              {t.accuratePredictionsDesc}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};