import React from 'react';
import { UseFormRegisterReturn } from 'react-hook-form';

interface FormInputProps {
  label: string;
  type: string;
  icon: React.ReactNode;
  registration: UseFormRegisterReturn;
  error?: string;
  placeholder?: string;
}

export const FormInput: React.FC<FormInputProps> = ({
  label,
  type,
  icon,
  registration,
  error,
  placeholder,
}) => {
  return (
    <div>
      <label htmlFor={registration.name} className="block text-sm font-medium text-gray-700">
        {label}
      </label>
      <div className="mt-1 relative">
        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
          {icon}
        </div>
        <input
          type={type}
          className={`appearance-none block w-full pl-10 pr-3 py-2 border ${
            error ? 'border-red-300' : 'border-gray-300'
          } rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 transition duration-150 ease-in-out sm:text-sm`}
          placeholder={placeholder}
          {...registration}
        />
      </div>
      {error && (
        <p className="mt-1 text-sm text-red-600" role="alert">
          {error}
        </p>
      )}
    </div>
  );
};