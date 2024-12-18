import React from 'react';
import { RulerIcon } from 'lucide-react';

interface GrowthIllustrationProps {
  className?: string;
}

export const GrowthIllustration: React.FC<GrowthIllustrationProps> = ({
  className = "",
}) => {
  return (
    <div className={`${className} relative`}>
      {/* Ruler line */}
      <div className="absolute left-8 h-full w-0.5 bg-gray-200" />
      
      {/* Height markers */}
      <div className="absolute left-6 h-full flex flex-col justify-between py-4">
        <div className="w-4 h-0.5 bg-gray-200" />
        <div className="w-4 h-0.5 bg-gray-200" />
      </div>
      
      {/* Silhouettes container */}
      <div className="relative flex justify-center items-end gap-12 h-48">
        {/* First silhouette */}
        <div className="flex flex-col items-center transform scale-90">
          <div className="w-20 h-32 relative">
            <div className="absolute bottom-0 w-full flex flex-col items-center">
              <div className="w-8 h-8 rounded-full bg-blue-100" />
              <div className="w-1 h-16 bg-blue-100 mt-1" />
              <div className="w-12 h-1 bg-blue-100 -mt-8" />
            </div>
          </div>
          <div className="mt-2 text-sm font-medium text-gray-500">Now</div>
        </div>

        {/* Arrow */}
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
          <div className="w-16 h-0.5 bg-blue-200 relative">
            <div className="absolute right-0 w-2 h-2 border-t-2 border-r-2 border-blue-200 transform rotate-45 -translate-y-1/2" />
          </div>
        </div>

        {/* Second silhouette */}
        <div className="flex flex-col items-center transform scale-110">
          <div className="w-20 h-32 relative">
            <div className="absolute bottom-0 w-full flex flex-col items-center">
              <div className="w-8 h-8 rounded-full bg-blue-500" />
              <div className="w-1 h-16 bg-blue-500 mt-1" />
              <div className="w-12 h-1 bg-blue-500 -mt-8" />
            </div>
          </div>
          <div className="mt-2 text-sm font-medium text-gray-500">Future</div>
        </div>

        {/* Ruler icon */}
        <div className="absolute -right-8 top-1/2 transform -translate-y-1/2">
          <RulerIcon className="w-6 h-6 text-blue-500" />
        </div>
      </div>
    </div>
  );
};