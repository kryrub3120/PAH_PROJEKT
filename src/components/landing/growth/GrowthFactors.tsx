import React from 'react';
import { Apple, Sun, Heart, Activity } from 'lucide-react';

interface GrowthFactorsProps {
  t: any;
}

export const GrowthFactors: React.FC<GrowthFactorsProps> = ({ t }) => {
  const factors = [
    {
      icon: <Apple className="h-8 w-8 text-green-600" />,
      title: t.nutrition,
      description: t.nutritionDesc,
      color: 'bg-green-50',
    },
    {
      icon: <Activity className="h-8 w-8 text-red-600" />,
      title: t.physicalActivity,
      description: t.physicalActivityDesc,
      color: 'bg-red-50',
    },
    {
      icon: <Sun className="h-8 w-8 text-yellow-600" />,
      title: t.environment,
      description: t.environmentDesc,
      color: 'bg-yellow-50',
    },
    {
      icon: <Heart className="h-8 w-8 text-purple-600" />,
      title: t.genetics,
      description: t.geneticsDesc,
      color: 'bg-purple-50',
    },
  ];

  return (
    <div className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-gray-900">
            {t.growthFactorsTitle}
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-500">
            {t.growthFactorsDescription}
          </p>
        </div>

        <div className="mt-10">
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {factors.map((factor, index) => (
              <div
                key={index}
                className={`${factor.color} rounded-lg p-6 hover:scale-105 transition-transform duration-200`}
              >
                <div className="flex justify-center mb-4">
                  {factor.icon}
                </div>
                <h3 className="text-lg font-medium text-gray-900 text-center mb-2">
                  {factor.title}
                </h3>
                <p className="text-base text-gray-500 text-center">
                  {factor.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};