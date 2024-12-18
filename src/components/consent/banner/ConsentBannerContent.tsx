import React from 'react';
import { Link } from 'react-router-dom';

export const ConsentBannerContent: React.FC = () => (
  <p className="text-sm text-gray-600">
    This website uses cookies to enhance your experience. By continuing to use this site, 
    you consent to our use of cookies in accordance with our{' '}
    <Link to="/cookies" className="text-blue-600 hover:underline">
      Cookie Policy
    </Link>.
  </p>
);