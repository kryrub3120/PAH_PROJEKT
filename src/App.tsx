import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Layout } from './components/layout/Layout';
import { LandingPage } from './components/LandingPage';
import { LoginPage } from './components/auth/pages/LoginPage';
import { RegisterPage } from './components/auth/pages/RegisterPage';
import { CalculatorSection } from './components/calculator/CalculatorSection';
import { AboutPage } from './components/pages/AboutPage';
import { PrivacyPolicy } from './components/pages/PrivacyPolicy';
import { TermsAndConditions } from './components/pages/TermsAndConditions';
import { CookiePolicy } from './components/consent/policy/CookiePolicy';
import { ProductsPage } from './components/store/pages/ProductsPage';
import { ProductPage } from './components/store/pages/ProductPage';
import { useTranslation } from './hooks/useTranslation';

function App() {
  const t = useTranslation();

  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<LandingPage t={t} />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/calculator" element={<CalculatorSection t={t} />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/privacy" element={<PrivacyPolicy />} />
          <Route path="/terms" element={<TermsAndConditions />} />
          <Route path="/cookies" element={<CookiePolicy />} />
          <Route path="/store" element={<ProductsPage />} />
          <Route path="/store/products/:slug" element={<ProductPage />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;