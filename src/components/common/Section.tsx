// Reusable section component with consistent styling
import React from 'react';
import { commonStyles } from '../../utils/styles';

interface SectionProps {
  children: React.ReactNode;
  className?: string;
  background?: 'white' | 'gray';
}

export const Section: React.FC<SectionProps> = ({
  children,
  className = '',
  background = 'white',
}) => {
  const bgColor = background === 'white' ? 'bg-white' : 'bg-gray-50';

  return (
    <div className={`${commonStyles.section} ${bgColor}`}>
      <div className={`${commonStyles.container} ${className}`}>
        {children}
      </div>
    </div>
  );
};