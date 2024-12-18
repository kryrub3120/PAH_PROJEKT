import React from 'react';
import { RulerIcon } from 'lucide-react';
import { Link } from 'react-router-dom';

interface LogoProps {
  title: string;
}

export const Logo: React.FC<LogoProps> = ({ title }) => {
  return (
    <Link 
      to="/"
      className="flex items-center gap-2 hover:opacity-90 transition-opacity"
      aria-label="Home"
    >
      <RulerIcon className="w-8 h-8 text-blue-600" />
      <span className="text-xl font-semibold text-gray-900 hidden sm:inline">
        {title}
      </span>
    </Link>
  );
};