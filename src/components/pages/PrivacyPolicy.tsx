import React from 'react';
import { Shield } from 'lucide-react';

export const PrivacyPolicy: React.FC = () => {
  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      <div className="text-center mb-8">
        <Shield className="w-12 h-12 text-blue-600 mx-auto mb-4" />
        <h1 className="text-3xl font-bold text-gray-900">Privacy Policy</h1>
      </div>
      
      <div className="prose prose-blue max-w-none">
        <h2>Data Collection and Usage</h2>
        <p>
          We collect only the minimum amount of data necessary to provide our height prediction service.
          This includes:
        </p>
        <ul>
          <li>Child's current height, weight, age, and gender</li>
          <li>Parents' heights</li>
          <li>Account information (email) for registered users</li>
        </ul>

        <h2>Data Protection</h2>
        <p>
          Your data is protected using industry-standard encryption and security measures.
          We never share your personal information with third parties without your explicit consent.
        </p>

        <h2>Your Rights</h2>
        <p>
          You have the right to:
        </p>
        <ul>
          <li>Access your personal data</li>
          <li>Request data correction</li>
          <li>Request data deletion</li>
          <li>Export your data</li>
        </ul>
      </div>
    </div>
  );
};