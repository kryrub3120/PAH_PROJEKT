import React from 'react';
import { BookOpen, Award, Flask, Users } from 'lucide-react';
import { ResearchHighlights } from './about/ResearchHighlights';
import { Achievements } from './about/Achievements';
import { Biography } from './about/Biography';
import { EbookSection } from './about/ebook';

export const AboutPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      <div className="max-w-4xl mx-auto px-4 py-12">
        <Biography />
        <ResearchHighlights />
        <EbookSection />
        <Achievements />
      </div>
    </div>
  );
};