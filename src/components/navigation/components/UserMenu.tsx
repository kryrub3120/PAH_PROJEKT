import React from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../../../hooks/useAuth';
import { UserCircle } from 'lucide-react';

export const UserMenu: React.FC = () => {
  const { user, logout } = useAuth();

  if (!user) {
    return (
      <div className="flex items-center gap-4">
        <Link
          to="/login"
          className="text-gray-600 hover:text-blue-600 transition-colors"
        >
          Sign In
        </Link>
        <Link
          to="/register"
          className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors"
        >
          Sign Up
        </Link>
      </div>
    );
  }

  return (
    <div className="relative group">
      <button className="flex items-center gap-2 text-gray-600 hover:text-blue-600 transition-colors">
        <UserCircle className="w-6 h-6" />
        <span className="hidden sm:inline">{user.name}</span>
      </button>
      
      <div className="absolute right-0 mt-2 w-48 py-2 bg-white rounded-lg shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
        <button
          onClick={logout}
          className="w-full px-4 py-2 text-left text-gray-600 hover:bg-gray-50 hover:text-blue-600 transition-colors"
        >
          Sign Out
        </button>
      </div>
    </div>
  );
};