import React from 'react';

interface RAEAlertProps {
  message: string;
}

export const RAEAlert: React.FC<RAEAlertProps> = ({ message }) => (
  <div className="flex items-center gap-2 text-amber-600 bg-amber-50 p-3 rounded-lg">
    <span className="text-xl">⚠️</span>
    <p className="text-sm">{message}</p>
  </div>
);