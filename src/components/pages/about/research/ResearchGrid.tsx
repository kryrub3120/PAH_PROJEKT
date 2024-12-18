import React from 'react';
import { ResearchCard } from './ResearchCard';
import type { ResearchArea } from './types';

interface ResearchGridProps {
  areas: ResearchArea[];
}

export const ResearchGrid: React.FC<ResearchGridProps> = ({ areas }) => {
  if (!areas?.length) return null;

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      {areas.map((area, index) => (
        <ResearchCard key={index} {...area} />
      ))}
    </div>
  );
};