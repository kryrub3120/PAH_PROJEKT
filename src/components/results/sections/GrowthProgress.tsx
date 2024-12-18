import React from 'react';
import { Ruler } from 'lucide-react';
import { ChildData } from '../../../types';
import { HeightPrediction } from '../../../types/prediction';

interface GrowthProgressProps {
  childData: ChildData;
  prediction: HeightPrediction;
  t: any;
}

export const GrowthProgress: React.FC<GrowthProgressProps> = ({
  childData,
  prediction,
  t,
}) => {
  // Calculate progress percentage
  const progressPercentage = Math.min(
    100,
    (childData.currentHeight / prediction.predictedHeight) * 100
  );

  return (
    <div className="bg-gray-50 rounded-xl p-6">
      <div className="flex items-center gap-2 mb-4">
        <Ruler className="w-5 h-5 text-blue-600" />
        <h3 className="font-semibold text-gray-900">
          {t.growthProgress}
        </h3>
      </div>
      
      <div className="mb-4">
        <div className="flex justify-between text-sm text-gray-600 mb-1">
          <span>
            {t.currentHeight}: {childData.currentHeight} cm
          </span>
          <span>{Math.round(progressPercentage)}%</span>
        </div>
        <div className="h-3 bg-gray-200 rounded-full overflow-hidden">
          <div 
            className="h-full bg-blue-600 rounded-full transition-all duration-500"
            style={{ width: `${progressPercentage}%` }}
          />
        </div>
        <div className="flex justify-between text-sm text-gray-600 mt-1">
          <span>0 cm</span>
          <span>{prediction.predictedHeight} cm</span>
        </div>
      </div>

      <p className="text-sm text-gray-600">
        {t.progressDescription?.replace('{percentage}', Math.round(progressPercentage).toString()) ||
         `You have reached ${Math.round(progressPercentage)}% of your predicted adult height`}
      </p>
    </div>
  );
};