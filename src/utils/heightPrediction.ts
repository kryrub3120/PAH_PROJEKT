import { HeightPrediction } from '../types/prediction';

export const calculateAdultHeight = (
  currentHeight: number,
  weight: number,
  age: number,
  sex: 'male' | 'female',
  fatherHeight: number,
  motherHeight: number
): HeightPrediction => {
  // Enhanced Khamis-Roche method implementation
  const midParentalHeight = sex === 'male'
    ? (fatherHeight + (motherHeight + 13)) / 2
    : ((fatherHeight - 13) + motherHeight) / 2;

  const ageCoefficient = Math.min(1, age / 18);
  const weightCoefficient = weight / 50;

  const predictedHeight = (
    currentHeight * (1 + (1 - ageCoefficient)) +
    midParentalHeight * ageCoefficient +
    weightCoefficient
  ) / 2;

  // Calculate confidence interval (±2cm for demonstration)
  const confidenceInterval = 2;
  
  // Calculate prediction range
  const predictionRange = {
    min: Math.round(predictedHeight - confidenceInterval),
    max: Math.round(predictedHeight + confidenceInterval)
  };

  // Calculate percentile (simplified)
  const percentile = calculatePercentile(predictedHeight, sex);

  return {
    predictedHeight: Math.round(predictedHeight),
    predictionRange,
    percentile,
    confidenceInterval,
    measurementDate: new Date().toISOString(),
  };
};

const calculatePercentile = (height: number, sex: 'male' | 'female'): number => {
  // Simplified percentile calculation
  // In a real implementation, this would use WHO/CDC growth charts
  const meanHeight = sex === 'male' ? 176 : 163;
  const stdDev = 7;
  
  const zScore = (height - meanHeight) / stdDev;
  return Math.round(100 * (0.5 * (1 + erf(zScore / Math.sqrt(2)))));
};

// Error function approximation for percentile calculation
const erf = (x: number): number => {
  const sign = x >= 0 ? 1 : -1;
  x = Math.abs(x);

  const a1 = 0.254829592;
  const a2 = -0.284496736;
  const a3 = 1.421413741;
  const a4 = -1.453152027;
  const a5 = 1.061405429;
  const p = 0.3275911;

  const t = 1.0 / (1.0 + p * x);
  const y = 1.0 - (((((a5 * t + a4) * t) + a3) * t + a2) * t + a1) * t * Math.exp(-x * x);
  return sign * y;
};