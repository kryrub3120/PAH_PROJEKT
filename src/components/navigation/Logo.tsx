import React from 'react';
import { RulerIcon } from 'lucide-react';

interface LogoProps {
  title: string;
  onClick: () => void;
}

export const Logo: React.FC<LogoProps> = ({ title, onClick }) => {
  return (
    <button 
      onClick={onClick}
      className="flex items-center gap-2 hover:opacity-80 transition-opacity focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 rounded-lg p-1"
      aria-label="Go to home page"
    >
      <RulerIcon className="w-8 h-8 text-blue-600" />
      <span className="text-xl font-semibold text-gray-900">{title}</span>
    </button>
  );
};