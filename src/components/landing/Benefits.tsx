import React from 'react';
import { 
  Calculator, 
  LineChart, 
  Sliders, 
  BookOpen,
  Shield,
  History
} from 'lucide-react';

interface BenefitsProps {
  t: any;
}

export const Benefits: React.FC<BenefitsProps> = ({ t }) => {
  const benefits = [
    {
      icon: <Calculator className="h-8 w-8 text-blue-600" />,
      title: 'Khamis-Roche Method',
      description: 'Scientifically validated calculations based on extensive research and clinical studies',
      color: 'bg-blue-50 hover:bg-blue-100',
    },
    {
      icon: <LineChart className="h-8 w-8 text-green-600" />,
      title: 'Growth Charts',
      description: 'Compare predictions with WHO/CDC percentile charts for comprehensive insights',
      color: 'bg-green-50 hover:bg-green-100',
    },
    {
      icon: <Sliders className="h-8 w-8 text-purple-600" />,
      title: 'Easy Input',
      description: 'Intuitive sliders and forms make entering measurements simple and accurate',
      color: 'bg-purple-50 hover:bg-purple-100',
    },
    {
      icon: <BookOpen className="h-8 w-8 text-yellow-600" />,
      title: 'Educational Resources',
      description: 'Access expert information about growth, nutrition, and development factors',
      color: 'bg-yellow-50 hover:bg-yellow-100',
    },
    {
      icon: <Shield className="h-8 w-8 text-red-600" />,
      title: 'Data Privacy',
      description: 'Your information is securely stored and protected with industry-standard encryption',
      color: 'bg-red-50 hover:bg-red-100',
    },
    {
      icon: <History className="h-8 w-8 text-indigo-600" />,
      title: 'Track Progress',
      description: 'Monitor growth over time with historical tracking and visualization tools',
      color: 'bg-indigo-50 hover:bg-indigo-100',
    },
  ];

  return (
    <div className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            Why Use Our App?
          </h2>
          <p className="mt-4 text-xl text-gray-500 max-w-3xl mx-auto">
            Our comprehensive height prediction tool combines scientific accuracy with user-friendly features
            to provide you with reliable insights into your child's growth potential.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className={`${benefit.color} rounded-xl p-8 transform transition-all duration-200 hover:scale-105 hover:shadow-lg`}
            >
              <div className="flex items-center justify-center mb-4">
                {benefit.icon}
              </div>
              <h3 className="text-xl font-semibold text-gray-900 text-center mb-3">
                {benefit.title}
              </h3>
              <p className="text-gray-600 text-center">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};