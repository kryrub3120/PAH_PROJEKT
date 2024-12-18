import React from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { Mail, Lock, Loader } from 'lucide-react';
import { FormInput } from '../common/FormInput';
import { loginSchema, LoginFormData } from './validation';

interface LoginFormProps {
  onSubmit: (data: LoginFormData) => Promise<void>;
  isLoading: boolean;
  error: string | null;
}

export const LoginForm: React.FC<LoginFormProps> = ({
  onSubmit,
  isLoading,
  error,
}) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginFormData>({
    resolver: zodResolver(loginSchema),
  });

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
      <FormInput
        label="Email"
        type="email"
        icon={<Mail className="h-5 w-5 text-gray-400" />}
        registration={register('email')}
        error={errors.email?.message}
        placeholder="you@example.com"
      />

      <FormInput
        label="Password"
        type="password"
        icon={<Lock className="h-5 w-5 text-gray-400" />}
        registration={register('password')}
        error={errors.password?.message}
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
          'Sign In'
        )}
      </button>
    </form>
  );
};