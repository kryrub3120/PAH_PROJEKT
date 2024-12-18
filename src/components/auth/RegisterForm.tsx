import React from 'react';
import { useForm } from 'react-hook-form';
import { Mail, Lock, User, Loader } from 'lucide-react';
import { FormInput } from './FormInput';

interface RegisterFormProps {
  onSubmit: (data: { 
    email: string; 
    password: string; 
    name: string; 
  }) => Promise<void>;
  isLoading: boolean;
  error: string | null;
}

export const RegisterForm: React.FC<RegisterFormProps> = ({
  onSubmit,
  isLoading,
  error,
}) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
  } = useForm();

  const password = watch('password');

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
      <FormInput
        label="Full Name"
        type="text"
        icon={<User className="h-5 w-5 text-gray-400" />}
        registration={register('name', {
          required: 'Name is required',
          minLength: {
            value: 2,
            message: 'Name must be at least 2 characters',
          },
        })}
        error={errors.name?.message as string}
        placeholder="John Doe"
      />

      <FormInput
        label="Email"
        type="email"
        icon={<Mail className="h-5 w-5 text-gray-400" />}
        registration={register('email', {
          required: 'Email is required',
          pattern: {
            value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
            message: 'Invalid email address',
          },
        })}
        error={errors.email?.message as string}
        placeholder="you@example.com"
      />

      <FormInput
        label="Password"
        type="password"
        icon={<Lock className="h-5 w-5 text-gray-400" />}
        registration={register('password', {
          required: 'Password is required',
          minLength: {
            value: 8,
            message: 'Password must be at least 8 characters',
          },
          pattern: {
            value: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
            message: 'Password must contain at least one uppercase letter, one lowercase letter, one number and one special character',
          },
        })}
        error={errors.password?.message as string}
        placeholder="••••••••"
      />

      <FormInput
        label="Confirm Password"
        type="password"
        icon={<Lock className="h-5 w-5 text-gray-400" />}
        registration={register('confirmPassword', {
          required: 'Please confirm your password',
          validate: value => 
            value === password || 'Passwords do not match',
        })}
        error={errors.confirmPassword?.message as string}
        placeholder="••••••••"
      />

      {error && (
        <div className="rounded-md bg-red-50 p-4">
          <p className="text-sm text-red-700">{error}</p>
        </div>
      )}

      <button
        type="submit"
        disabled={isLoading}
        className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 disabled:opacity-50 disabled:cursor-not-allowed transition-colors duration-200"
      >
        {isLoading ? (
          <Loader className="h-5 w-5 animate-spin" />
        ) : (
          'Create Account'
        )}
      </button>
    </form>
  );
};