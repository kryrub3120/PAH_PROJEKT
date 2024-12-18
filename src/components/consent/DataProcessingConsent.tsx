import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from '../../hooks/useTranslation';

interface DataProcessingConsentProps {
  checked: boolean;
  onChange: (checked: boolean) => void;
  error?: string | null;
}

export const DataProcessingConsent: React.FC<DataProcessingConsentProps> = ({
  checked,
  onChange,
  error,
}) => {
  const t = useTranslation();

  return (
    <div className="space-y-2">
      <div className="flex items-start gap-2">
        <input
          type="checkbox"
          id="data-processing-consent"
          checked={checked}
          onChange={(e) => onChange(e.target.checked)}
          className="mt-1 h-4 w-4 text-blue-600 rounded border-gray-300 focus:ring-blue-500"
        />
        <label 
          htmlFor="data-processing-consent" 
          className="text-sm text-gray-600"
        >
          I agree to the processing of my personal data in accordance with the{' '}
          <Link to="/privacy" className="text-blue-600 hover:underline">
            Privacy Policy
          </Link>{' '}
          and{' '}
          <Link to="/terms" className="text-blue-600 hover:underline">
            Terms & Conditions
          </Link>.
        </label>
      </div>
      {error && (
        <p className="text-sm text-red-600" role="alert">
          {error}
        </p>
      )}
    </div>
  );
};