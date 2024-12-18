import React from 'react';
import { X } from 'lucide-react';

interface ConsentBannerActionsProps {
  onAccept: () => void;
  onClose: () => void;
}

export const ConsentBannerActions: React.FC<ConsentBannerActionsProps> = ({
  onAccept,
  onClose,
}) => (
  <div className="flex items-center gap-4">
    <button
      onClick={onAccept}
      className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors text-sm"
    >
      Accept
    </button>
    <button
      onClick={onClose}
      className="text-gray-400 hover:text-gray-600"
      aria-label="Close"
    >
      <X className="w-5 h-5" />
    </button>
  </div>
);