import React from 'react';
import { X } from 'lucide-react';
import { useConsent } from '../../hooks/useConsent';
import { Link } from 'react-router-dom';

export const ConsentBanner: React.FC = () => {
  const { acceptCookies, hasAcceptedCookies } = useConsent();

  if (hasAcceptedCookies) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 shadow-lg p-4 z-50">
      <div className="max-w-7xl mx-auto flex items-center justify-between gap-4">
        <p className="text-sm text-gray-600">
          This website uses cookies to enhance your experience. By continuing to use this site, 
          you consent to our use of cookies in accordance with our{' '}
          <Link to="/cookies" className="text-blue-600 hover:underline">
            Cookie Policy
          </Link>.
        </p>
        <div className="flex items-center gap-4">
          <button
            onClick={acceptCookies}
            className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors text-sm"
          >
            Accept
          </button>
          <button
            onClick={acceptCookies}
            className="text-gray-400 hover:text-gray-600"
            aria-label="Close"
          >
            <X className="w-5 h-5" />
          </button>
        </div>
      </div>
    </div>
  );
};