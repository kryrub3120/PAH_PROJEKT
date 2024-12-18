import React from 'react';
import { UserCircle } from 'lucide-react';
import { User } from '../../types';
import { useNavigate } from 'react-router-dom';

interface UserMenuProps {
  user: User | null;
  onLogout: () => void;
  t: any;
}

export const UserMenu: React.FC<UserMenuProps> = ({
  user,
  onLogout,
  t,
}) => {
  const navigate = useNavigate();

  const handleLogout = () => {
    onLogout();
    navigate('/');
  };

  const handleLogin = () => {
    navigate('/login');
  };

  const handleRegister = () => {
    navigate('/register');
  };

  const handleDashboard = () => {
    navigate('/dashboard');
  };

  if (user) {
    return (
      <div className="relative group">
        <button className="flex items-center gap-2 hover:opacity-80 transition-opacity">
          <UserCircle className="w-6 h-6" />
          <span className="text-gray-700">{user.name}</span>
        </button>
        <div className="absolute right-0 w-48 py-2 mt-2 bg-white rounded-md shadow-xl opacity-0 group-hover:opacity-100 transition-opacity">
          <button
            onClick={handleDashboard}
            className="block w-full px-4 py-2 text-sm text-left text-gray-700 hover:bg-gray-100"
          >
            Dashboard
          </button>
          <button
            onClick={handleLogout}
            className="block w-full px-4 py-2 text-sm text-left text-gray-700 hover:bg-gray-100"
          >
            {t.logout}
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="flex gap-2">
      <button
        onClick={handleLogin}
        className="text-blue-600 hover:text-blue-700 px-4 py-2 rounded-md transition-colors"
      >
        {t.login}
      </button>
      <button
        onClick={handleRegister}
        className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition-colors"
      >
        {t.register}
      </button>
    </div>
  );
};