import React from 'react';
import { ConsentCheckboxLabel } from './ConsentCheckboxLabel';
import { ConsentError } from './ConsentError';

interface ConsentCheckboxProps {
  checked: boolean;
  onChange: (checked: boolean) => void;
  error?: string;
}

export const ConsentCheckbox: React.FC<ConsentCheckboxProps> = ({
  checked,
  onChange,
  error,
}) => (
  <div className="space-y-2">
    <div className="flex items-start gap-2">
      <input
        type="checkbox"
        id="data-processing-consent"
        checked={checked}
        onChange={(e) => onChange(e.target.checked)}
        className="mt-1 h-4 w-4 text-blue-600 rounded border-gray-300 focus:ring-blue-500"
      />
      <ConsentCheckboxLabel />
    </div>
    <ConsentError error={error} />
  </div>
);