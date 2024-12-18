import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { Mail, Lock, User, Loader, RefreshCw } from 'lucide-react';
import { FormInput } from '../common/FormInput';
import { registerSchema, RegisterFormData } from './validation';
import { generateSecurePassword } from '../../../utils/passwordGenerator';

interface RegisterFormProps {
  onSubmit: (data: RegisterFormData) => Promise<void>;
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
    setValue,
    watch,
  } = useForm<RegisterFormData>({
    resolver: zodResolver(registerSchema),
  });

  const [generatedPassword, setGeneratedPassword] = useState<string>('');

  const handleGeneratePassword = () => {
    const newPassword = generateSecurePassword();
    setGeneratedPassword(newPassword);
    setValue('password', newPassword);
    setValue('confirmPassword', newPassword);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
      <FormInput
        label="Full Name"
        type="text"
        icon={<User className="h-5 w-5 text-gray-400" />}
        registration={register('name')}
        error={errors.name?.message}
        placeholder="John Doe"
      />

      <FormInput
        label="Email"
        type="email"
        icon={<Mail className="h-5 w-5 text-gray-400" />}
        registration={register('email')}
        error={errors.email?.message}
        placeholder="you@example.com"
      />

      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <label className="block text-sm font-medium text-gray-700">
            Password
          </label>
          <button
            type="button"
            onClick={handleGeneratePassword}
            className="text-sm text-blue-600 hover:text-blue-500 flex items-center gap-1"
          >
            <RefreshCw className="h-4 w-4" />
            Generate Secure Password
          </button>
        </div>

        <FormInput
          type="password"
          icon={<Lock className="h-5 w-5 text-gray-400" />}
          registration={register('password')}
          error={errors.password?.message}
          placeholder="••••••••"
        />

        {generatedPassword && (
          <div className="rounded-md bg-blue-50 p-4">
            <p className="text-sm text-blue-700">
              Generated password: <span className="font-mono">{generatedPassword}</span>
            </p>
            <p className="text-xs text-blue-600 mt-1">
              Make sure to save this password in a secure location!
            </p>
          </div>
        )}
      </div>

      <FormInput
        label="Confirm Password"
        type="password"
        icon={<Lock className="h-5 w-5 text-gray-400" />}
        registration={register('confirmPassword')}
        error={errors.confirmPassword?.message}
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