import React from 'react';
import { Link } from 'react-router-dom';

export const ConsentCheckboxLabel: React.FC = () => (
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
);