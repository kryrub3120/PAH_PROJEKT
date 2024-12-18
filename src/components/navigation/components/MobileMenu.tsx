import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { NavLink } from 'react-router-dom';
import { useAuth } from '../../../hooks/useAuth';

export const MobileMenu: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { user, logout } = useAuth();

  const links = [
    { to: '/calculator', label: 'Calculator' },
    { to: '/about', label: 'About' },
    { to: '/store', label: 'Products' },
  ];

  return (
    <div className="md:hidden">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="text-gray-600 hover:text-blue-600 transition-colors"
        aria-label={isOpen ? 'Close menu' : 'Open menu'}
      >
        {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
      </button>

      {isOpen && (
        <div className="absolute top-full left-0 right-0 bg-white border-t border-gray-100 shadow-lg">
          <div className="max-w-7xl mx-auto px-4 py-4 space-y-4">
            {links.map(({ to, label }) => (
              <NavLink
                key={to}
                to={to}
                onClick={() => setIsOpen(false)}
                className={({ isActive }) =>
                  `block py-2 text-gray-600 hover:text-blue-600 transition-colors ${
                    isActive ? 'text-blue-600 font-medium' : ''
                  }`
                }
              >
                {label}
              </NavLink>
            ))}
            
            <div className="pt-4 border-t border-gray-100">
              {user ? (
                <button
                  onClick={() => {
                    logout();
                    setIsOpen(false);
                  }}
                  className="w-full text-left py-2 text-gray-600 hover:text-blue-600 transition-colors"
                >
                  Sign Out
                </button>
              ) : (
                <div className="space-y-2">
                  <NavLink
                    to="/login"
                    onClick={() => setIsOpen(false)}
                    className="block w-full py-2 text-center text-gray-600 hover:text-blue-600 transition-colors"
                  >
                    Sign In
                  </NavLink>
                  <NavLink
                    to="/register"
                    onClick={() => setIsOpen(false)}
                    className="block w-full py-2 text-center bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                  >
                    Sign Up
                  </NavLink>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};