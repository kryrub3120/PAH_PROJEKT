import React from 'react';
import { GrowthCard } from './GrowthCard';

interface GrowthGridProps {
  factors: Array<{
    icon: React.ReactNode;
    title: string;
    description: string;
    color: string;
  }>;
}

export const GrowthGrid: React.FC<GrowthGridProps> = ({ factors }) => {
  return (
    <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
      {factors.map((factor, index) => (
        <GrowthCard key={index} {...factor} />
      ))}
    </div>
  );
};