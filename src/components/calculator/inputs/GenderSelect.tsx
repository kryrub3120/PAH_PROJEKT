import React from 'react';
import { GenderIcon } from '../../common/GenderIcon';

interface GenderSelectProps {
  value: 'male' | 'female';
  onChange: (value: 'male' | 'female') => void;
  t: any;
}

export const GenderSelect: React.FC<GenderSelectProps> = ({
  value,
  onChange,
  t,
}) => {
  return (
    <div>
      <label className="block text-sm font-medium text-gray-700 mb-2">
        {t.sex}
      </label>
      <div className="flex gap-4">
        {['male', 'female'].map((gender) => (
          <button
            key={gender}
            onClick={() => onChange(gender as 'male' | 'female')}
            className={`flex-1 py-2 px-4 rounded-lg border ${
              value === gender
                ? 'bg-blue-600 text-white border-blue-600'
                : 'border-gray-300 text-gray-700 hover:border-blue-600'
            } flex items-center justify-center gap-2`}
            type="button"
          >
            <GenderIcon 
              gender={gender as 'male' | 'female'} 
              className="w-4 h-4"
            />
            <span>{t[gender]}</span>
          </button>
        ))}
      </div>
    </div>
  );
};