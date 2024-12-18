import React from 'react';
import { useNavigate } from 'react-router-dom';
import { RegisterForm } from './RegisterForm';
import { useAuth } from '../../hooks/useAuth';
import { RulerIcon } from 'lucide-react';

export const RegisterPage: React.FC = () => {
  const navigate = useNavigate();
  const { register, isLoading, error, clearError } = useAuth();

  const handleRegister = async (data: { 
    email: string; 
    password: string; 
    name: string;
  }) => {
    await register(data.email, data.password, data.name);
    if (!error) {
      navigate('/dashboard');
    }
  };

  React.useEffect(() => {
    return () => clearError();
  }, [clearError]);

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col justify-center py-12 sm:px-6 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-md">
        <div className="flex justify-center">
          <RulerIcon className="w-12 h-12 text-blue-600" />
        </div>
        <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
          Create your account
        </h2>
        <p className="mt-2 text-center text-sm text-gray-600">
          Already have an account?{' '}
          <button
            onClick={() => navigate('/login')}
            className="font-medium text-blue-600 hover:text-blue-500 focus:outline-none focus:underline transition ease-in-out duration-150"
          >
            Sign in
          </button>
        </p>
      </div>

      <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
        <div className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
          <RegisterForm
            onSubmit={handleRegister}
            isLoading={isLoading}
            error={error}
          />
        </div>
      </div>
    </div>
  );
};