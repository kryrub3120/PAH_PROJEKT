import React from 'react';

interface GrowthLineProps {
  className?: string;
}

export const GrowthLine: React.FC<GrowthLineProps> = ({
  className = "",
}) => {
  return (
    <div className={`${className} relative h-24 flex items-center justify-center`}>
      <div className="w-48 h-px bg-gradient-to-r from-gray-200 via-blue-500 to-blue-600 relative">
        {/* Start dot */}
        <div className="absolute -left-1 -top-1 w-2 h-2 rounded-full bg-gray-300" />
        
        {/* End dot */}
        <div className="absolute -right-1 -top-1 w-2 h-2 rounded-full bg-blue-600" />
        
        {/* Subtle tick marks */}
        <div className="absolute top-2 left-1/4 w-px h-1 bg-gray-300" />
        <div className="absolute top-2 left-1/2 w-px h-1 bg-gray-400" />
        <div className="absolute top-2 left-3/4 w-px h-1 bg-gray-500" />
      </div>
    </div>
  );
};