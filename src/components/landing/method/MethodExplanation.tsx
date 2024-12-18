import React from 'react';
import { BookOpen, BarChart, Calculator, Users } from 'lucide-react';

interface MethodExplanationProps {
  t: any;
}

export const MethodExplanation: React.FC<MethodExplanationProps> = ({ t }) => {
  const features = [
    {
      icon: <Calculator className="h-6 w-6 text-blue-600" />,
      title: t.scientificMethod,
      description: t.scientificMethodDesc,
    },
    {
      icon: <BarChart className="h-6 w-6 text-blue-600" />,
      title: t.accuratePredictions,
      description: t.accuratePredictionsDesc,
    },
    {
      icon: <Users className="h-6 w-6 text-blue-600" />,
      title: t.parentalFactors,
      description: t.parentalFactorsDesc,
    },
    {
      icon: <BookOpen className="h-6 w-6 text-blue-600" />,
      title: t.researchBased,
      description: t.researchBasedDesc,
    },
  ];

  return (
    <div className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:text-center">
          <h2 className="text-base text-blue-600 font-semibold tracking-wide uppercase">
            {t.methodology}
          </h2>
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
            {t.methodTitle}
          </p>
          <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
            {t.methodDescription}
          </p>
        </div>

        <div className="mt-10">
          <div className="space-y-10 md:space-y-0 md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-10">
            {features.map((feature, index) => (
              <div key={index} className="relative">
                <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-blue-50">
                  {feature.icon}
                </div>
                <p className="ml-16 text-lg leading-6 font-medium text-gray-900">
                  {feature.title}
                </p>
                <p className="mt-2 ml-16 text-base text-gray-500">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};