export interface HeightPrediction {
  predictedHeight: number;
  predictionRange: {
    min: number;
    max: number;
  };
  percentile: number;
  confidenceInterval: number;
  measurementDate: string;
}

export interface ChildProfile {
  id: string;
  name: string;
  birthDate: string;
  sex: 'male' | 'female';
  measurements: Measurement[];
  predictions: HeightPrediction[];
}

export interface Measurement {
  date: string;
  height: number;
  weight: number;
  age: number;
}