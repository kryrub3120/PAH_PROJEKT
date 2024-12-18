import React from 'react';
import { RulerIcon, ArrowRight } from 'lucide-react';

interface HeroProps {
  t: any;
  onStartCalculation: () => void;
  onLearnMore: () => void;
}

export const Hero: React.FC<HeroProps> = ({
  t,
  onStartCalculation,
  onLearnMore,
}) => {
  return (
    <div className="relative overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="relative z-10 pb-8 sm:pb-16 md:pb-20 lg:w-full lg:pb-28 xl:pb-32">
          <main className="mt-10 mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28">
            <div className="text-center">
              <RulerIcon className="w-16 h-16 text-blue-600 mx-auto mb-6" />
              <h1 className="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
                <span className="block">{t.title}</span>
                <span className="block text-blue-600 text-3xl sm:text-4xl mt-3">
                  {t.subtitle}
                </span>
              </h1>
              <p className="mt-3 max-w-md mx-auto text-base text-gray-500 sm:text-lg md:mt-5 md:text-xl md:max-w-3xl">
                {t.heroDescription}
              </p>
              <div className="mt-5 max-w-md mx-auto sm:flex sm:justify-center md:mt-8">
                <div className="rounded-md shadow">
                  <button
                    onClick={onStartCalculation}
                    className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 md:py-4 md:text-lg md:px-10 transition duration-150 ease-in-out"
                  >
                    {t.startCalculation}
                    <ArrowRight className="ml-2 w-5 h-5" />
                  </button>
                </div>
                <div className="mt-3 sm:mt-0 sm:ml-3">
                  <button
                    onClick={onLearnMore}
                    className="w-full flex items-center justify-center px-8 py-3 border border-blue-600 text-base font-medium rounded-md text-blue-600 bg-white hover:bg-blue-50 md:py-4 md:text-lg md:px-10 transition duration-150 ease-in-out"
                  >
                    {t.learnMore}
                  </button>
                </div>
              </div>
            </div>
          </main>
        </div>
      </div>
    </div>
  );
};