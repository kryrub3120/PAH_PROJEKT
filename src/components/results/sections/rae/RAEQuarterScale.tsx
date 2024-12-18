import React from 'react';
import { QUARTER_LABELS } from '../../../../utils/rae/constants';

interface RAEQuarterScaleProps {
  dayOfYear: number;
}

export const RAEQuarterScale: React.FC<RAEQuarterScaleProps> = ({ dayOfYear }) => {
  const position = (dayOfYear / 365) * 100;

  return (
    <div className="relative pt-1">
      <div className="flex mb-2 items-center justify-between">
        {Object.values(QUARTER_LABELS).map((label) => (
          <div key={label} className="text-xs text-gray-500">{label}</div>
        ))}
      </div>
      <div className="h-4 bg-gray-200 rounded-full overflow-hidden">
        <div className="flex h-full">
          <div className="w-1/4 bg-blue-100 border-r border-gray-300" />
          <div className="w-1/4 bg-blue-200 border-r border-gray-300" />
          <div className="w-1/4 bg-blue-300 border-r border-gray-300" />
          <div className="w-1/4 bg-blue-400" />
        </div>
        <div 
          className="relative h-4 w-2 bg-red-500"
          style={{ 
            left: `${position}%`,
            marginLeft: '-4px',
            marginTop: '-16px'
          }}
        />
      </div>
    </div>
  );
};