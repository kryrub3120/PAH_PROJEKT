import { GrowthData } from '../../types/growth';

// WHO/CDC Growth Chart Data (simplified version)
const PERCENTILE_DATA = {
  male: {
    P5: [
      { age: 2, height: 81.0 },
      { age: 4, height: 94.0 },
      { age: 6, height: 106.0 },
      { age: 8, height: 118.0 },
      { age: 10, height: 129.0 },
      { age: 12, height: 139.0 },
      { age: 14, height: 151.0 },
      { age: 16, height: 163.0 },
      { age: 18, height: 168.0 },
    ],
    P50: [
      { age: 2, height: 87.0 },
      { age: 4, height: 101.0 },
      { age: 6, height: 114.0 },
      { age: 8, height: 127.0 },
      { age: 10, height: 138.0 },
      { age: 12, height: 149.0 },
      { age: 14, height: 163.0 },
      { age: 16, height: 173.0 },
      { age: 18, height: 176.0 },
    ],
    P95: [
      { age: 2, height: 93.0 },
      { age: 4, height: 108.0 },
      { age: 6, height: 122.0 },
      { age: 8, height: 136.0 },
      { age: 10, height: 148.0 },
      { age: 12, height: 160.0 },
      { age: 14, height: 175.0 },
      { age: 16, height: 183.0 },
      { age: 18, height: 184.0 },
    ],
  },
  female: {
    P5: [
      { age: 2, height: 80.0 },
      { age: 4, height: 93.0 },
      { age: 6, height: 105.0 },
      { age: 8, height: 117.0 },
      { age: 10, height: 128.0 },
      { age: 12, height: 140.0 },
      { age: 14, height: 150.0 },
      { age: 16, height: 155.0 },
      { age: 18, height: 157.0 },
    ],
    P50: [
      { age: 2, height: 86.0 },
      { age: 4, height: 100.0 },
      { age: 6, height: 113.0 },
      { age: 8, height: 126.0 },
      { age: 10, height: 138.0 },
      { age: 12, height: 150.0 },
      { age: 14, height: 160.0 },
      { age: 16, height: 163.0 },
      { age: 18, height: 164.0 },
    ],
    P95: [
      { age: 2, height: 92.0 },
      { age: 4, height: 107.0 },
      { age: 6, height: 121.0 },
      { age: 8, height: 135.0 },
      { age: 10, height: 148.0 },
      { age: 12, height: 161.0 },
      { age: 14, height: 170.0 },
      { age: 16, height: 171.0 },
      { age: 18, height: 171.0 },
    ],
  },
};

export const calculatePercentile = (
  height: number,
  age: number,
  sex: 'male' | 'female'
): number => {
  const data = PERCENTILE_DATA[sex];
  
  // Find closest age data points
  const ageData = Object.values(data).map(percentile => {
    const closest = percentile.reduce((prev, curr) => {
      return Math.abs(curr.age - age) < Math.abs(prev.age - age) ? curr : prev;
    });
    return closest.height;
  });

  // Sort heights for current age
  const sortedHeights = ageData.sort((a, b) => a - b);
  
  // Calculate approximate percentile
  if (height <= sortedHeights[0]) return 5;
  if (height >= sortedHeights[2]) return 95;
  
  // Linear interpolation between known percentiles
  if (height <= sortedHeights[1]) {
    return 5 + (height - sortedHeights[0]) / (sortedHeights[1] - sortedHeights[0]) * 45;
  }
  return 50 + (height - sortedHeights[1]) / (sortedHeights[2] - sortedHeights[1]) * 45;
};

export const getGrowthData = (sex: 'male' | 'female'): GrowthData => {
  return {
    percentile5: PERCENTILE_DATA[sex].P5,
    percentile50: PERCENTILE_DATA[sex].P50,
    percentile95: PERCENTILE_DATA[sex].P95,
  };
};