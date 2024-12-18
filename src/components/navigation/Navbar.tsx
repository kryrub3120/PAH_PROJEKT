import React from 'react';
import { Logo } from './components/Logo';
import { NavLinks } from './components/NavLinks';
import { UserMenu } from './components/UserMenu';
import { MobileMenu } from './components/MobileMenu';
import { LanguageSelector } from './components/LanguageSelector';
import { useTranslation } from '../../hooks/useTranslation';
import { useAppStore } from '../../store';

export const Navbar: React.FC = () => {
  const t = useTranslation();
  const { language, setLanguage } = useAppStore();

  return (
    <header className="sticky top-0 z-50 bg-white border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Logo title={t.title} />
          <NavLinks t={t} />
          <div className="flex items-center gap-4">
            <LanguageSelector 
              currentLanguage={language}
              onLanguageChange={setLanguage}
              t={t}
            />
            <UserMenu t={t} />
            <MobileMenu t={t} />
          </div>
        </div>
      </div>
    </header>
  );
};