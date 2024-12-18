import React, { useState } from 'react';
import { UseFormRegisterReturn } from 'react-hook-form';
import { Eye, EyeOff } from 'lucide-react';

interface FormInputProps {
  label?: string;
  type: string;
  icon: React.ReactNode;
  registration: UseFormRegisterReturn;
  error?: string;
  placeholder?: string;
}

export const FormInput: React.FC<FormInputProps> = ({
  label,
  type: initialType,
  icon,
  registration,
  error,
  placeholder,
}) => {
  const [showPassword, setShowPassword] = useState(false);
  const id = `input-${registration.name}`;
  
  const type = initialType === 'password' && showPassword ? 'text' : initialType;

  return (
    <div>
      {label && (
        <label 
          htmlFor={id} 
          className="block text-sm font-medium text-gray-700"
        >
          {label}
        </label>
      )}
      <div className="mt-1 relative">
        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
          {icon}
        </div>
        <input
          id={id}
          type={type}
          className={`appearance-none block w-full pl-10 pr-10 py-2 border ${
            error ? 'border-red-300' : 'border-gray-300'
          } rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 transition duration-150 ease-in-out sm:text-sm`}
          placeholder={placeholder}
          aria-invalid={error ? 'true' : 'false'}
          aria-describedby={error ? `${id}-error` : undefined}
          {...registration}
        />
        {initialType === 'password' && (
          <button
            type="button"
            onClick={() => setShowPassword(!showPassword)}
            className="absolute inset-y-0 right-0 pr-3 flex items-center"
          >
            {showPassword ? (
              <EyeOff className="h-5 w-5 text-gray-400" />
            ) : (
              <Eye className="h-5 w-5 text-gray-400" />
            )}
          </button>
        )}
      </div>
      {error && (
        <p 
          className="mt-1 text-sm text-red-600" 
          role="alert"
          id={`${id}-error`}
        >
          {error}
        </p>
      )}
    </div>
  );
};