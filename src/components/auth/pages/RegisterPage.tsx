import React from 'react';
import { useNavigate, Navigate } from 'react-router-dom';
import { RegisterForm } from '../forms/RegisterForm';
import { useAuth } from '../../../hooks/useAuth';
import { AuthLayout } from '../layouts/AuthLayout';
import type { RegisterFormData } from '../forms/validation';

export const RegisterPage: React.FC = () => {
  const navigate = useNavigate();
  const { register, isLoading, error, clearError, user } = useAuth();

  // If user is already logged in, redirect to calculator
  if (user) {
    return <Navigate to="/calculator" replace />;
  }

  const handleRegister = async (data: RegisterFormData) => {
    const result = await register(data.email, data.password, data.name);
    if (result.success) {
      navigate('/calculator');
    }
  };

  React.useEffect(() => {
    return () => clearError();
  }, [clearError]);

  return (
    <AuthLayout
      title="Create your account"
      subtitle={
        <>
          Already have an account?{' '}
          <button
            onClick={() => navigate('/login')}
            className="font-medium text-blue-600 hover:text-blue-500 focus:outline-none focus:underline transition ease-in-out duration-150"
          >
            Sign in
          </button>
        </>
      }
    >
      <RegisterForm
        onSubmit={handleRegister}
        isLoading={isLoading}
        error={error}
      />
    </AuthLayout>
  );
};