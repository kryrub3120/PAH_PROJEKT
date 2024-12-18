import React from 'react';
import { Hero } from './landing/hero/Hero';
import { Benefits } from './landing/benefits/Benefits';
import { MethodExplanation } from './landing/method/MethodExplanation';
import { GrowthFactors } from './landing/growth/GrowthFactors';
import { FAQSection } from './landing/faq/FAQSection';
import { AboutSection } from './landing/about/AboutSection';

interface LandingPageProps {
  t: any;
}

export const LandingPage: React.FC<LandingPageProps> = ({ t }) => {
  return (
    <div className="min-h-[calc(100vh-4rem)] bg-gradient-to-b from-blue-50 to-white">
      <Hero t={t} />
      <Benefits t={t} />
      <MethodExplanation t={t} />
      <AboutSection />
      <GrowthFactors t={t} />
      <FAQSection
        title={t.faqTitle}
        description={t.faqDescription}
        items={t.faqs || []}
      />
    </div>
  );
};