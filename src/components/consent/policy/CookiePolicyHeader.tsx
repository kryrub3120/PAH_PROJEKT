import React from 'react';
import { Cookie } from 'lucide-react';

export const CookiePolicyHeader: React.FC = () => (
  <div className="text-center mb-8">
    <Cookie className="w-12 h-12 text-blue-600 mx-auto mb-4" />
    <h1 className="text-3xl font-bold text-gray-900">Cookie Policy</h1>
  </div>
);