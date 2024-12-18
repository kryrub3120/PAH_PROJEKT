import React from 'react';
import { FileText } from 'lucide-react';

export const TermsAndConditions: React.FC = () => {
  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      <div className="text-center mb-8">
        <FileText className="w-12 h-12 text-blue-600 mx-auto mb-4" />
        <h1 className="text-3xl font-bold text-gray-900">Terms and Conditions</h1>
      </div>
      
      <div className="prose prose-blue max-w-none">
        <h2>Service Usage</h2>
        <p>
          Our height prediction service is provided for informational purposes only.
          Predictions are based on statistical models and should not be considered medical advice.
        </p>

        <h2>User Responsibilities</h2>
        <p>
          Users agree to:
        </p>
        <ul>
          <li>Provide accurate information</li>
          <li>Use the service responsibly</li>
          <li>Not attempt to manipulate or abuse the system</li>
        </ul>

        <h2>Liability</h2>
        <p>
          While we strive for accuracy, we cannot guarantee the precision of height predictions.
          Users acknowledge that predictions are estimates based on available data.
        </p>
      </div>
    </div>
  );
};