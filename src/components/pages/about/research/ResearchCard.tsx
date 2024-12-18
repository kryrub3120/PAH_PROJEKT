import React from 'react';
import { ResearchArea } from './types';
import { ResearchIcons } from './icons';

type ResearchCardProps = ResearchArea;

export const ResearchCard: React.FC<ResearchCardProps> = ({
  iconKey,
  title,
  description,
  color,
}) => {
  return (
    <div className={`${color} rounded-xl p-6 transition-transform hover:scale-105 duration-200`}>
      <div className="flex items-center gap-3 mb-4">
        {ResearchIcons[iconKey]()}
        <h3 className="font-semibold text-gray-900">{title}</h3>
      </div>
      <p className="text-gray-600 text-sm leading-relaxed">
        {description}
      </p>
    </div>
  );
};