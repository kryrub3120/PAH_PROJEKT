import React from 'react';

interface ConsentErrorProps {
  error?: string;
}

export const ConsentError: React.FC<ConsentErrorProps> = ({ error }) => {
  if (!error) return null;
  
  return (
    <p className="text-sm text-red-600" role="alert">
      {error}
    </p>
  );
};