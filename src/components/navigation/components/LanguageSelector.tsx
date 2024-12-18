import React from 'react';
import { Globe } from 'lucide-react';
import { Language } from '../../../types';

interface LanguageSelectorProps {
  currentLanguage: Language;
  onLanguageChange: (lang: Language) => void;
  t: any;
}

export const LanguageSelector: React.FC<LanguageSelectorProps> = ({
  currentLanguage,
  onLanguageChange,
  t,
}) => {
  const languages = [
    { code: 'en', label: 'English' },
    { code: 'pl', label: 'Polski' },
    { code: 'es', label: 'Español' },
  ];

  return (
    <div className="flex items-center gap-2">
      <Globe className="w-5 h-5 text-gray-400" />
      <select
        value={currentLanguage}
        onChange={(e) => onLanguageChange(e.target.value as Language)}
        className="bg-white border border-gray-300 rounded-md px-2 py-1 text-sm text-gray-600 hover:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
      >
        {languages.map(({ code, label }) => (
          <option key={code} value={code}>
            {label}
          </option>
        ))}
      </select>
    </div>
  );
};