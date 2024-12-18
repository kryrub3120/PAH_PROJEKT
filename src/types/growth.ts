export interface GrowthDataPoint {
  age: number;
  height: number;
}

export interface GrowthData {
  percentile5: GrowthDataPoint[];
  percentile50: GrowthDataPoint[];
  percentile95: GrowthDataPoint[];
}

export interface PercentileResult {
  percentile: number;
  interpretation: string;
}