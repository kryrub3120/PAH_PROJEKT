import React from 'react';
import { HeightPrediction } from '../../../types/prediction';
import { ChildData, ParentData } from '../../../types';
import { GrowthProgress } from './GrowthProgress';
import { GrowthChart } from './GrowthChart';
import { GrowthChartForWeight } from '../../common/GrowthChartForWeight';
import { PercentileInterpretation } from './PercentileInterpretation';
import { InputDataSummary } from './InputDataSummary';
import { MethodExplanation } from './MethodExplanation';
import { GrowthFactors } from './GrowthFactors';

interface DetailedResultsProps {
  prediction: HeightPrediction;
  childData: ChildData;
  parentData: ParentData;
  t: any;
}

export const DetailedResults: React.FC<DetailedResultsProps> = ({
  prediction,
  childData,
  parentData,
  t,
}) => {
  return (
    <div className="space-y-8">
      <GrowthProgress 
        childData={childData} 
        prediction={prediction} 
        t={t} 
      />
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <GrowthChart childData={childData} t={t} />
        <GrowthChartForWeight childData={childData} t={t} />
      </div>

      <PercentileInterpretation 
        childData={childData}
        t={t}
      />
      
      <InputDataSummary 
        childData={childData} 
        parentData={parentData} 
        t={t} 
      />
      <MethodExplanation t={t} />
      <GrowthFactors t={t} />
    </div>
  );
};