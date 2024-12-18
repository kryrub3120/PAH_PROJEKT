import React from 'react';
import { useNavigate, Navigate } from 'react-router-dom';
import { LoginForm } from '../forms/LoginForm';
import { useAuth } from '../../../hooks/useAuth';
import { AuthLayout } from '../layouts/AuthLayout';
import type { LoginFormData } from '../forms/validation';

export const LoginPage: React.FC = () => {
  const navigate = useNavigate();
  const { login, isLoading, error, clearError, user } = useAuth();

  // If user is already logged in, redirect to calculator
  if (user) {
    return <Navigate to="/calculator" replace />;
  }

  const handleLogin = async (data: LoginFormData) => {
    const result = await login(data.email, data.password);
    if (result.success) {
      navigate('/calculator');
    }
  };

  React.useEffect(() => {
    return () => clearError();
  }, [clearError]);

  return (
    <AuthLayout
      title="Sign in to your account"
      subtitle={
        <>
          Don't have an account?{' '}
          <button
            onClick={() => navigate('/register')}
            className="font-medium text-blue-600 hover:text-blue-500 focus:outline-none focus:underline transition ease-in-out duration-150"
          >
            Create an account
          </button>
        </>
      }
    >
      <LoginForm
        onSubmit={handleLogin}
        isLoading={isLoading}
        error={error}
      />
    </AuthLayout>
  );
};