import React from 'react';
import { Lock, Loader } from 'lucide-react';

interface LockedOverlayProps {
  onUnlock: () => void;
  isProcessing: boolean;
  error: string | null;
  t: any;
}

export const LockedOverlay: React.FC<LockedOverlayProps> = ({
  onUnlock,
  isProcessing,
  error,
  t,
}) => {
  return (
    <div className="absolute inset-0 flex items-center justify-center bg-white/80 backdrop-blur-sm rounded-lg">
      <div className="text-center p-8">
        <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 rounded-full mb-4">
          <Lock className="w-8 h-8 text-blue-600" />
        </div>
        
        <h3 className="text-xl font-semibold text-gray-900 mb-2">
          {t.detailedResultsLocked || 'Detailed Results Locked'}
        </h3>
        
        <p className="text-gray-600 mb-6 max-w-md">
          {t.unlockDetailedResults || 'Unlock detailed growth analysis, personalized recommendations, and comprehensive insights.'}
        </p>

        <button
          onClick={onUnlock}
          disabled={isProcessing}
          className="inline-flex items-center px-6 py-3 rounded-lg bg-blue-600 text-white hover:bg-blue-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {isProcessing ? (
            <>
              <Loader className="w-5 h-5 mr-2 animate-spin" />
              {t.processing || 'Processing...'}
            </>
          ) : (
            <>
              {t.getDetailedReport || 'Get Detailed Report'} ($5)
            </>
          )}
        </button>

        {error && (
          <p className="mt-4 text-sm text-red-600">
            {error}
          </p>
        )}
      </div>
    </div>
  );
};