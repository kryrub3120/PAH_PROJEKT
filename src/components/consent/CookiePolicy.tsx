import React from 'react';
import { Cookie } from 'lucide-react';

export const CookiePolicy: React.FC = () => {
  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      <div className="text-center mb-8">
        <Cookie className="w-12 h-12 text-blue-600 mx-auto mb-4" />
        <h1 className="text-3xl font-bold text-gray-900">Cookie Policy</h1>
      </div>
      
      <div className="prose prose-blue max-w-none">
        <h2>What are cookies?</h2>
        <p>
          Cookies are small text files that are stored on your device when you visit our website.
          They help us provide you with a better experience by remembering your preferences
          and enabling certain features.
        </p>

        <h2>How we use cookies</h2>
        <ul>
          <li>Essential cookies: Required for the website to function properly</li>
          <li>Analytics cookies: Help us understand how visitors use our site</li>
          <li>Preference cookies: Remember your settings and choices</li>
          <li>Authentication cookies: Keep you signed in to your account</li>
        </ul>

        <h2>Your choices</h2>
        <p>
          You can control and/or delete cookies as you wish. You can delete all cookies
          that are already on your computer and you can set most browsers to prevent them
          from being placed.
        </p>

        <h2>Updates to this policy</h2>
        <p>
          We may update this Cookie Policy from time to time. Any changes will be posted
          on this page with an updated revision date.
        </p>
      </div>
    </div>
  );
};