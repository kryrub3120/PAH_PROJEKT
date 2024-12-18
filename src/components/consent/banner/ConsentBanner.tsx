import React from 'react';
import { useConsent } from '../../../hooks/useConsent';
import { ConsentBannerContent } from './ConsentBannerContent';
import { ConsentBannerActions } from './ConsentBannerActions';

export const ConsentBanner: React.FC = () => {
  const { acceptCookies, hasAcceptedCookies } = useConsent();

  if (hasAcceptedCookies) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 shadow-lg p-4 z-50">
      <div className="max-w-7xl mx-auto flex items-center justify-between gap-4">
        <ConsentBannerContent />
        <ConsentBannerActions 
          onAccept={acceptCookies} 
          onClose={acceptCookies} 
        />
      </div>
    </div>
  );
};