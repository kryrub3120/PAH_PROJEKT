import React from 'react';
import { HeightPrediction } from '../../types/prediction';
import { ChildData, ParentData } from '../../types';
import { MainPrediction } from './sections/MainPrediction';
import { InputDataSummary } from './sections/InputDataSummary';
import { GrowthProgress } from './sections/GrowthProgress';
import { TimeEstimation } from './sections/TimeEstimation';
import { GrowthChart } from './sections/GrowthChart';
import { GrowthChartForWeight } from '../common/GrowthChartForWeight';
import { PercentileInterpretation } from './sections/PercentileInterpretation';
import { RelativeAgeEffect } from './sections/rae/RelativeAgeEffect';
import { MethodExplanation } from './sections/MethodExplanation';
import { GrowthFactors } from './sections/GrowthFactors';
import { ReportActions } from './sections/ReportActions';

interface PredictionResultProps {
  prediction: HeightPrediction;
  childData: ChildData;
  parentData: ParentData;
  t: any;
}

export const PredictionResult: React.FC<PredictionResultProps> = ({
  prediction,
  childData,
  parentData,
  t,
}) => {
  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <div className="bg-white rounded-xl shadow-lg p-8 space-y-12">
        <MainPrediction prediction={prediction} t={t} />
        
        <InputDataSummary 
          childData={childData} 
          parentData={parentData} 
          t={t} 
        />
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <GrowthProgress 
            childData={childData} 
            prediction={prediction} 
            t={t} 
          />
          <TimeEstimation 
            childData={childData} 
            t={t} 
          />
        </div>

        <div className="space-y-6">
          <GrowthChart 
            childData={childData}
            t={t}
          />
          <GrowthChartForWeight
            childData={childData}
            t={t}
          />
        </div>

        <PercentileInterpretation 
          childData={childData}
          t={t}
        />

        <RelativeAgeEffect 
          childData={childData}
          t={t}
        />

        <div className="space-y-6">
          <MethodExplanation t={t} />
          <GrowthFactors t={t} />
        </div>

        <ReportActions 
          prediction={prediction}
          childData={childData}
          parentData={parentData}
          t={t} 
        />
      </div>
    </div>
  );
};