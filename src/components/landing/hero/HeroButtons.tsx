import React from 'react';
import { ArrowRight } from 'lucide-react';

interface HeroButtonsProps {
  startText: string;
  learnMoreText: string;
  onStartClick: () => void;
  onLearnMoreClick: () => void;
}

export const HeroButtons: React.FC<HeroButtonsProps> = ({
  startText,
  learnMoreText,
  onStartClick,
  onLearnMoreClick,
}) => {
  return (
    <div className="mt-5 max-w-md mx-auto sm:flex sm:justify-center md:mt-8">
      <div className="rounded-md shadow">
        <button
          onClick={onStartClick}
          className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 md:py-4 md:text-lg md:px-10 transition duration-150 ease-in-out"
        >
          {startText}
          <ArrowRight className="ml-2 w-5 h-5" />
        </button>
      </div>
      <div className="mt-3 sm:mt-0 sm:ml-3">
        <button
          onClick={onLearnMoreClick}
          className="w-full flex items-center justify-center px-8 py-3 border border-blue-600 text-base font-medium rounded-md text-blue-600 bg-white hover:bg-blue-50 md:py-4 md:text-lg md:px-10 transition duration-150 ease-in-out"
        >
          {learnMoreText}
        </button>
      </div>
    </div>
  );
};