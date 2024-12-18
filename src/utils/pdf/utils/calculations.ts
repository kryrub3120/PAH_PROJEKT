import { addMonths } from 'date-fns';

export const calculateGrowthProgress = (
  currentHeight: number,
  predictedHeight: number
): number => {
  return (currentHeight / predictedHeight) * 100;
};

export const calculateTimeToCompletion = (currentAge: number) => {
  const yearsRemaining = Math.max(0, 18 - currentAge);
  const monthsRemaining = yearsRemaining * 12;
  const completionDate = addMonths(new Date(), monthsRemaining);

  return {
    yearsRemaining,
    completionDate,
  };
};