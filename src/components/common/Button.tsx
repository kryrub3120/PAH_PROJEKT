// Reusable button component
import React from 'react';
import { commonStyles } from '../../utils/styles';

interface ButtonProps {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary';
  className?: string;
  onClick?: () => void;
  disabled?: boolean;
  type?: 'button' | 'submit' | 'reset';
}

export const Button: React.FC<ButtonProps> = ({
  children,
  variant = 'primary',
  className = '',
  onClick,
  disabled = false,
  type = 'button',
}) => {
  const baseStyles = 'px-6 py-2 rounded-md font-medium transition-colors duration-200';
  const variantStyles = commonStyles.button[variant];

  return (
    <button
      type={type}
      className={`${baseStyles} ${variantStyles} ${className} ${
        disabled ? 'opacity-50 cursor-not-allowed' : ''
      }`}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </button>
  );
};