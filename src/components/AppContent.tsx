import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { LandingPage } from './LandingPage';
import { LoginPage } from './auth/pages/LoginPage';
import { RegisterPage } from './auth/pages/RegisterPage';
import { CalculatorSection } from './calculator/CalculatorSection';
import { DashboardPage } from './dashboard/DashboardPage';
import { AboutPage } from './pages/AboutPage';
import { PrivacyPolicy } from './pages/PrivacyPolicy';
import { TermsAndConditions } from './pages/TermsAndConditions';
import { useAppStore } from '../store';
import { useTranslation } from '../hooks/useTranslation';

export const AppContent: React.FC = () => {
  const {
    language,
    setLanguage,
  } = useAppStore();
  
  const t = useTranslation();

  return (
    <Routes>
      <Route path="/" element={<LandingPage t={t} />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/register" element={<RegisterPage />} />
      <Route path="/about" element={<AboutPage />} />
      <Route path="/privacy" element={<PrivacyPolicy />} />
      <Route path="/terms" element={<TermsAndConditions />} />
      <Route path="/calculator" element={<CalculatorSection t={t} />} />
      
      {/* Protected Routes */}
      <Route path="/dashboard" element={<DashboardPage />} />
    </Routes>
  );
};