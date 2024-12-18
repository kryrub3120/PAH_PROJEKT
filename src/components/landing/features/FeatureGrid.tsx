import React from 'react';
import { Feature } from './Feature';

interface FeatureGridProps {
  features: Array<{
    icon: React.ReactNode;
    title: string;
    description: string;
  }>;
}

export const FeatureGrid: React.FC<FeatureGridProps> = ({ features }) => {
  return (
    <div className="space-y-10 md:space-y-0 md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-10">
      {features.map((feature, index) => (
        <Feature key={index} {...feature} />
      ))}
    </div>
  );
};