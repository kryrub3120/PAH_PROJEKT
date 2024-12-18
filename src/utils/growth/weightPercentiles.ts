import { GrowthData } from '../../types/growth';

// WHO/CDC Weight Growth Chart Data (simplified version)
const WEIGHT_PERCENTILE_DATA = {
  male: {
    P5: [
      { age: 2, weight: 11.0 },
      { age: 4, weight: 14.0 },
      { age: 6, weight: 17.5 },
      { age: 8, weight: 21.0 },
      { age: 10, weight: 25.0 },
      { age: 12, weight: 30.0 },
      { age: 14, weight: 37.0 },
      { age: 16, weight: 45.0 },
      { age: 18, weight: 51.0 },
    ],
    P50: [
      { age: 2, weight: 13.0 },
      { age: 4, weight: 16.5 },
      { age: 6, weight: 21.0 },
      { age: 8, weight: 26.0 },
      { age: 10, weight: 32.0 },
      { age: 12, weight: 39.0 },
      { age: 14, weight: 48.0 },
      { age: 16, weight: 57.0 },
      { age: 18, weight: 63.0 },
    ],
    P95: [
      { age: 2, weight: 15.0 },
      { age: 4, weight: 19.5 },
      { age: 6, weight: 25.0 },
      { age: 8, weight: 32.0 },
      { age: 10, weight: 40.0 },
      { age: 12, weight: 49.0 },
      { age: 14, weight: 60.0 },
      { age: 16, weight: 70.0 },
      { age: 18, weight: 76.0 },
    ],
  },
  female: {
    P5: [
      { age: 2, weight: 10.5 },
      { age: 4, weight: 13.5 },
      { age: 6, weight: 17.0 },
      { age: 8, weight: 20.5 },
      { age: 10, weight: 24.5 },
      { age: 12, weight: 30.0 },
      { age: 14, weight: 37.0 },
      { age: 16, weight: 42.0 },
      { age: 18, weight: 44.0 },
    ],
    P50: [
      { age: 2, weight: 12.5 },
      { age: 4, weight: 16.0 },
      { age: 6, weight: 20.0 },
      { age: 8, weight: 25.5 },
      { age: 10, weight: 31.5 },
      { age: 12, weight: 39.0 },
      { age: 14, weight: 46.0 },
      { age: 16, weight: 50.0 },
      { age: 18, weight: 52.0 },
    ],
    P95: [
      { age: 2, weight: 14.5 },
      { age: 4, weight: 19.0 },
      { age: 6, weight: 24.0 },
      { age: 8, weight: 31.0 },
      { age: 10, weight: 39.0 },
      { age: 12, weight: 48.0 },
      { age: 14, weight: 56.0 },
      { age: 16, weight: 60.0 },
      { age: 18, weight: 62.0 },
    ],
  },
};

export const getGrowthDataForWeight = (sex: 'male' | 'female'): GrowthData => {
  return {
    percentile5: WEIGHT_PERCENTILE_DATA[sex].P5,
    percentile50: WEIGHT_PERCENTILE_DATA[sex].P50,
    percentile95: WEIGHT_PERCENTILE_DATA[sex].P95,
  };
};

export const calculateWeightPercentile = (
  weight: number,
  age: number,
  sex: 'male' | 'female'
): number => {
  const data = WEIGHT_PERCENTILE_DATA[sex];
  
  // Find closest age data points
  const ageData = Object.values(data).map(percentile => {
    const closest = percentile.reduce((prev, curr) => {
      return Math.abs(curr.age - age) < Math.abs(prev.age - age) ? curr : prev;
    });
    return closest.weight;
  });

  // Sort weights for current age
  const sortedWeights = ageData.sort((a, b) => a - b);
  
  // Calculate approximate percentile
  if (weight <= sortedWeights[0]) return 5;
  if (weight >= sortedWeights[2]) return 95;
  
  // Linear interpolation between known percentiles
  if (weight <= sortedWeights[1]) {
    return 5 + (weight - sortedWeights[0]) / (sortedWeights[1] - sortedWeights[0]) * 45;
  }
  return 50 + (weight - sortedWeights[1]) / (sortedWeights[2] - sortedWeights[1]) * 45;
};