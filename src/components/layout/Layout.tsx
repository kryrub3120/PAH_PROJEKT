import React from 'react';
import { Navbar } from '../navigation/Navbar';
import { Footer } from './Footer';
import { ConsentBanner } from '../consent/banner/ConsentBanner';

interface LayoutProps {
  children: React.ReactNode;
}

export const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        {children}
      </main>
      <Footer />
      <ConsentBanner />
    </div>
  );
};