import React from 'react';
import { Calendar } from 'lucide-react';
import { format } from 'date-fns';
import { ChildData } from '../../../../types';
import { analyzeRAE } from '../../../../utils/rae/analysis';
import { RAEQuarterScale } from './RAEQuarterScale';
import { RAEAlert } from './RAEAlert';

interface RelativeAgeEffectProps {
  childData: ChildData;
  t: any;
}

export const RelativeAgeEffect: React.FC<RelativeAgeEffectProps> = ({ childData, t }) => {
  const birthDate = new Date(childData.birthDate);
  const raeAnalysis = analyzeRAE(birthDate);

  return (
    <div className="bg-gray-50 rounded-xl p-6">
      <div className="flex items-center gap-3 mb-4">
        <Calendar className="w-5 h-5 text-blue-600" />
        <h3 className="text-lg font-semibold text-gray-900">
          {t.relativeAgeEffect || 'Relative Age Effect'}
        </h3>
      </div>

      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <span className="text-gray-600">
            {t.birthDate || 'Birth Date'}:
          </span>
          <span className="text-lg font-medium text-gray-900">
            {format(birthDate, 'MMMM d, yyyy')}
          </span>
        </div>

        <RAEQuarterScale dayOfYear={raeAnalysis.dayOfYear} />

        <div className="space-y-2">
          <p className="text-gray-600">
            {t.dayOfYear || 'Day of Year'}: <span className="font-medium">{raeAnalysis.dayOfYear}</span>
          </p>
          <p className="text-gray-600">
            {t.quarterBorn || 'Quarter Born'}: <span className="font-medium">{raeAnalysis.quarter.label}</span>
          </p>
          {raeAnalysis.isRelativelyYoung && (
            <RAEAlert 
              message={t.q4Alert || 'Born in Q4 - relatively younger in the age group'}
            />
          )}
        </div>
      </div>
    </div>
  );
};