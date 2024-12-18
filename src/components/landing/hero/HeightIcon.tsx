import React from 'react';
import { RulerIcon } from 'lucide-react';

interface HeightIconProps {
  className?: string;
}

export const HeightIcon: React.FC<HeightIconProps> = ({
  className = "",
}) => {
  return (
    <div className={`${className} flex justify-center items-center`}>
      <div className="relative w-48 h-40">
        {/* Parent figure */}
        <div className="absolute left-1/4 top-1/4">
          <div className="w-8 h-8 rounded-full bg-blue-600" />
          <div className="w-1 h-16 bg-blue-600 mx-auto mt-1" />
          <div className="w-12 h-1 bg-blue-600 -mt-10 mx-auto" />
        </div>

        {/* Child figure */}
        <div className="absolute left-1/2 top-1/3">
          <div className="w-6 h-6 rounded-full bg-blue-400" />
          <div className="w-1 h-12 bg-blue-400 mx-auto mt-1" />
          <div className="w-8 h-1 bg-blue-400 -mt-8 mx-auto" />
        </div>

        {/* Ruler */}
        <div className="absolute right-8 h-full w-1 bg-gray-200">
          {[...Array(8)].map((_, i) => (
            <div 
              key={i}
              className="absolute w-2 h-0.5 bg-gray-400 right-0"
              style={{ top: `${(i + 1) * 12.5}%` }}
            />
          ))}
        </div>

        {/* Ruler icon */}
        <RulerIcon className="absolute right-0 top-1/2 transform -translate-y-1/2 w-6 h-6 text-blue-600" />
      </div>
    </div>
  );
};