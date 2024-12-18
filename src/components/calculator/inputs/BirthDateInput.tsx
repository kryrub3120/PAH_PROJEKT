import React from 'react';
import { Calendar } from 'lucide-react';
import { format } from 'date-fns';

interface BirthDateInputProps {
  value: string;
  onChange: (value: string) => void;
  t: any;
}

export const BirthDateInput: React.FC<BirthDateInputProps> = ({
  value,
  onChange,
  t,
}) => {
  const id = React.useId();

  return (
    <div className="mb-6">
      <div className="flex justify-between items-center mb-2">
        <label 
          htmlFor={id}
          className="text-sm font-medium text-gray-700"
        >
          {t.birthDate}
        </label>
      </div>
      <div className="relative">
        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
          <Calendar className="h-5 w-5 text-gray-400" />
        </div>
        <input
          id={id}
          type="date"
          value={value}
          onChange={(e) => onChange(e.target.value)}
          max={format(new Date(), 'yyyy-MM-dd')}
          className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
        />
      </div>
    </div>
  );
};