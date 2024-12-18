import React from 'react';
import { Utensils, Activity, Moon } from 'lucide-react';

interface GrowthFactorsProps {
  t: any;
}

export const GrowthFactors: React.FC<GrowthFactorsProps> = ({ t }) => {
  const factors = [
    {
      icon: <Utensils className="w-8 h-8 text-green-600" />,
      title: t.nutrition,
      description: t.nutritionTip,
      bgColor: 'bg-green-50',
      iconColor: 'text-green-600',
    },
    {
      icon: <Activity className="w-8 h-8 text-purple-600" />,
      title: t.exercise,
      description: t.exerciseTip,
      bgColor: 'bg-purple-50',
      iconColor: 'text-purple-600',
    },
    {
      icon: <Moon className="w-8 h-8 text-blue-600" />,
      title: t.sleep,
      description: t.sleepTip,
      bgColor: 'bg-blue-50',
      iconColor: 'text-blue-600',
    },
  ];

  return (
    <div className="mb-12">
      <h3 className="text-xl font-semibold mb-6 text-center text-gray-900">
        {t.growthFactorsTitle}
      </h3>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {factors.map((factor, index) => (
          <div
            key={index}
            className={`${factor.bgColor} rounded-xl p-6 text-center transition-transform hover:scale-105 duration-200`}
          >
            <div className="flex justify-center mb-4">
              {factor.icon}
            </div>
            <h4 className="font-semibold mb-2 text-gray-900">
              {factor.title}
            </h4>
            <p className="text-sm text-gray-600">
              {factor.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};