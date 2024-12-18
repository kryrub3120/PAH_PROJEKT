import React from 'react';
import { ArrowRight } from 'lucide-react';
import { HeightIcon } from './HeightIcon';
import { useNavigate } from 'react-router-dom';

interface HeroProps {
  t: any;
}

export const Hero: React.FC<HeroProps> = ({ t }) => {
  const navigate = useNavigate();

  const handleStartCalculation = () => {
    navigate('/calculator');
  };

  return (
    <div className="relative overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="relative z-10 pb-8 sm:pb-16 md:pb-20 lg:pb-28 xl:pb-32">
          <main className="mt-10 mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28">
            <div className="text-center">
              <h1 className="text-3xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
                <span className="block">{t.title}</span>
                <span className="block text-blue-600 text-2xl sm:text-3xl mt-3">
                  {t.subtitle}
                </span>
              </h1>
              
              {/* Height Measurement Icon */}
              <div className="mt-8 mb-6">
                <HeightIcon className="transform hover:scale-105 transition-transform duration-300 max-w-[280px] sm:max-w-none mx-auto" />
              </div>

              <p className="mt-4 max-w-md mx-auto text-base sm:text-lg text-gray-500 px-4">
                Join thousands of parents who trust our scientifically-backed predictions
                to understand their children's growth potential.
              </p>

              <div className="mt-8 sm:mt-10 px-4">
                {/* Primary CTA - Free Analysis */}
                <button
                  onClick={handleStartCalculation}
                  className="inline-flex items-center justify-center px-8 py-4 border border-transparent text-lg font-semibold rounded-lg text-white bg-blue-600 hover:bg-blue-700 transition-all duration-200 transform hover:scale-105 shadow-lg hover:shadow-xl"
                >
                  Try Your Free Growth Prediction
                  <ArrowRight className="ml-2 w-5 h-5" />
                </button>
              </div>
            </div>
          </main>
        </div>
      </div>
    </div>
  );
};