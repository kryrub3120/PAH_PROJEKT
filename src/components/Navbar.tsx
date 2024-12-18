import React from 'react';
import { User, Language } from '../types';
import { LanguageSelector } from './LanguageSelector';
import { RulerIcon, UserCircle } from 'lucide-react';

interface NavbarProps {
  t: any;
  user: User | null;
  language: Language;
  onLanguageChange: (lang: Language) => void;
  onLogin: () => void;
  onRegister: () => void;
  onLogout: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  t,
  user,
  language,
  onLanguageChange,
  onLogin,
  onRegister,
  onLogout,
}) => {
  return (
    <nav className="bg-white shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <RulerIcon className="w-8 h-8 text-blue-600" />
            <span className="ml-2 text-xl font-semibold">{t.title}</span>
          </div>
          <div className="flex items-center gap-4">
            <LanguageSelector
              currentLanguage={language}
              onLanguageChange={onLanguageChange}
            />
            {user ? (
              <div className="relative group">
                <button className="flex items-center gap-2">
                  <UserCircle className="w-6 h-6" />
                  <span>{user.name}</span>
                </button>
                <div className="absolute right-0 w-48 py-2 mt-2 bg-white rounded-md shadow-xl opacity-0 group-hover:opacity-100 transition-opacity">
                  <button
                    onClick={onLogout}
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 w-full text-left"
                  >
                    {t.logout}
                  </button>
                </div>
              </div>
            ) : (
              <div className="flex gap-2">
                <button
                  onClick={onLogin}
                  className="text-blue-600 hover:text-blue-700"
                >
                  {t.login}
                </button>
                <button
                  onClick={onRegister}
                  className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700"
                >
                  {t.register}
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
}