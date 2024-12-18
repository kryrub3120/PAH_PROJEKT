import React from 'react';

interface FeatureProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

export const Feature: React.FC<FeatureProps> = ({ icon, title, description }) => {
  return (
    <div className="relative">
      <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-blue-50">
        {icon}
      </div>
      <p className="ml-16 text-lg leading-6 font-medium text-gray-900">
        {title}
      </p>
      <p className="mt-2 ml-16 text-base text-gray-500">
        {description}
      </p>
    </div>
  );
};