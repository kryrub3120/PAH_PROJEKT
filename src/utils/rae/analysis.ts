import { RAEQuarter, RAEAnalysis } from '../../types/rae';
import { RAE_QUARTERS, QUARTER_LABELS } from './constants';

export const getDayOfYear = (date: Date): number => {
  const start = new Date(date.getFullYear(), 0, 0);
  const diff = date.getTime() - start.getTime();
  const oneDay = 1000 * 60 * 60 * 24;
  return Math.floor(diff / oneDay);
};

export const getQuarter = (dayOfYear: number): RAEQuarter => {
  const quarterNumber = (Object.entries(RAE_QUARTERS).find(([_, range]) => 
    dayOfYear >= range.start && dayOfYear <= range.end
  ) || [1])[0] as unknown as 1 | 2 | 3 | 4;

  return {
    quarter: quarterNumber,
    startDay: RAE_QUARTERS[quarterNumber].start,
    endDay: RAE_QUARTERS[quarterNumber].end,
    label: QUARTER_LABELS[quarterNumber],
  };
};

export const analyzeRAE = (birthDate: Date): RAEAnalysis => {
  const dayOfYear = getDayOfYear(birthDate);
  const quarter = getQuarter(dayOfYear);
  
  return {
    dayOfYear,
    quarter,
    isRelativelyYoung: quarter.quarter === 4,
  };
};