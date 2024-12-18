import React from 'react';
import { User } from 'lucide-react';

interface GenderIconProps {
  gender: 'male' | 'female';
  className?: string;
}

export const GenderIcon: React.FC<GenderIconProps> = ({ 
  gender,
  className = "w-5 h-5"
}) => {
  // Since lucide-react doesn't have specific gender icons,
  // we'll use a custom SVG for female and User icon for male
  if (gender === 'female') {
    return (
      <svg 
        viewBox="0 0 24 24" 
        fill="none" 
        stroke="currentColor" 
        strokeWidth="2" 
        strokeLinecap="round" 
        strokeLinejoin="round"
        className={`${className} text-pink-600`}
      >
        <circle cx="12" cy="8" r="7"/>
        <line x1="12" y1="15" x2="12" y2="23"/>
        <line x1="8" y1="19" x2="16" y2="19"/>
      </svg>
    );
  }

  return <User className={`${className} text-blue-600`} />;
};