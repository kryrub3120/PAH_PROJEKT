import React from 'react';
import { calculatePercentile } from '../../../utils/growth/percentiles';
import { ChildData } from '../../../types';
import { BarChart } from 'lucide-react';

interface PercentileInfoProps {
  childData: ChildData;
  t: any;
}

export const PercentileInfo: React.FC<PercentileInfoProps> = ({ childData, t }) => {
  const percentile = calculatePercentile(
    childData.currentHeight,
    childData.age,
    childData.sex
  );

  const getInterpretation = (percentile: number): string => {
    if (percentile < 10) return t.belowAverage || 'below average';
    if (percentile > 90) return t.aboveAverage || 'above average';
    return t.average || 'average';
  };

  const interpretation = getInterpretation(percentile);

  return (
    <div className="bg-gray-50 rounded-xl p-6">
      <div className="flex items-center gap-3 mb-4">
        <BarChart className="w-5 h-5 text-blue-600" />
        <h3 className="text-lg font-semibold text-gray-900">
          {t.heightPercentile || 'Height Percentile'}
        </h3>
      </div>
      
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <span className="text-gray-600">
            {t.currentPercentile || 'Current Percentile'}:
          </span>
          <span className="text-2xl font-bold text-blue-600">
            {Math.round(percentile)}
            <span className="text-lg ml-0.5">
              {t.percentileSymbol || 'th'}
            </span>
          </span>
        </div>
        
        <div className="relative pt-1">
          <div className="flex mb-2 items-center justify-between">
            <div className="text-xs text-gray-500">0</div>
            <div className="text-xs text-gray-500">50</div>
            <div className="text-xs text-gray-500">100</div>
          </div>
          <div className="overflow-hidden h-2 mb-4 text-xs flex rounded bg-gray-200">
            <div
              style={{ width: `${percentile}%` }}
              className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-blue-600 transition-all duration-500"
            />
          </div>
        </div>
        
        <p className="text-gray-600 text-sm">
          {t.percentileExplanation?.replace('{interpretation}', interpretation) ||
           `Your child's height is ${interpretation} compared to children of the same age and gender.`}
        </p>
      </div>
    </div>
  );
};