import React from 'react';
import { Clock } from 'lucide-react';
import { addMonths, format } from 'date-fns';
import { ChildData } from '../../../types';

interface TimeEstimationProps {
  childData: ChildData;
  t: any;
}

export const TimeEstimation: React.FC<TimeEstimationProps> = ({ childData, t }) => {
  const yearsRemaining = Math.max(0, 18 - childData.age);
  const monthsRemaining = yearsRemaining * 12;
  const completionDate = addMonths(new Date(), monthsRemaining);

  return (
    <div className="bg-gray-50 rounded-xl p-6">
      <div className="flex items-center gap-3 mb-4">
        <Clock className="w-5 h-5 text-blue-600" />
        <h3 className="text-lg font-semibold text-gray-900">
          {t.timeToFinalHeight}
        </h3>
      </div>

      <div className="space-y-4">
        <div>
          <p className="text-2xl font-bold text-gray-900 mb-1">
            {yearsRemaining} {t.years}
          </p>
          <p className="text-sm text-gray-600">
            {t.estimatedTimeRemaining}
          </p>
        </div>

        <div>
          <p className="text-sm font-medium text-gray-900 mb-1">
            {t.estimatedCompletion}:
          </p>
          <p className="text-lg text-blue-600">
            {format(completionDate, 'MMMM yyyy')}
          </p>
        </div>
      </div>
    </div>
  );
};