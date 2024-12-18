export interface RAEQuarter {
  quarter: 1 | 2 | 3 | 4;
  startDay: number;
  endDay: number;
  label: string;
}

export interface RAEAnalysis {
  dayOfYear: number;
  quarter: RAEQuarter;
  isRelativelyYoung: boolean;
}