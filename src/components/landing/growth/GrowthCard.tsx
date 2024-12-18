import React from 'react';

interface GrowthCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  color: string;
}

export const GrowthCard: React.FC<GrowthCardProps> = ({
  icon,
  title,
  description,
  color,
}) => {
  return (
    <div className={`${color} rounded-lg p-6 hover:scale-105 transition-transform duration-200`}>
      <div className="flex justify-center mb-4">
        {icon}
      </div>
      <h3 className="text-lg font-medium text-gray-900 text-center mb-2">
        {title}
      </h3>
      <p className="text-base text-gray-500 text-center">
        {description}
      </p>
    </div>
  );
};