import React from 'react';
import { Microscope } from 'lucide-react';
import { ResearchGrid, GrantInfo, researchAreas } from './research';

export const ResearchHighlights: React.FC = () => {
  return (
    <div className="mb-16">
      <div className="flex items-center gap-3 mb-8">
        <Microscope className="w-8 h-8 text-blue-600" />
        <h2 className="text-2xl font-semibold text-gray-900">Research Focus</h2>
      </div>

      <ResearchGrid areas={researchAreas} />
      <GrantInfo />
    </div>
  );
};