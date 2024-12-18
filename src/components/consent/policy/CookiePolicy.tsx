import React from 'react';
import { CookiePolicyHeader } from './CookiePolicyHeader';
import { CookiePolicyContent } from './CookiePolicyContent';

export const CookiePolicy: React.FC = () => (
  <div className="max-w-4xl mx-auto px-4 py-12">
    <CookiePolicyHeader />
    <CookiePolicyContent />
  </div>
);