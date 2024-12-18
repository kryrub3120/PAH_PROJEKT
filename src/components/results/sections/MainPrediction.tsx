import React from 'react';
import { HeightPrediction } from '../../../types/prediction';

interface MainPredictionProps {
  prediction: HeightPrediction;
  t: any;
}

export const MainPrediction: React.FC<MainPredictionProps> = ({ prediction, t }) => {
  return (
    <div className="text-center">
      <h2 className="text-2xl font-semibold text-gray-900 mb-4">
        {t.predictedAdultHeight || 'Predicted Adult Height'}
      </h2>
      <div className="text-7xl font-bold text-blue-600 mb-4">
        {prediction.predictedHeight}
        <span className="text-3xl ml-2 text-blue-400">{t.cm}</span>
      </div>
      <p className="text-xl text-gray-600">
        {t.predictionRange}: {prediction.predictionRange.min}–{prediction.predictionRange.max} {t.cm}
      </p>
    </div>
  );
};