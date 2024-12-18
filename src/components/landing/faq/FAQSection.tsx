import React from 'react';
import { HelpCircle } from 'lucide-react';
import { FAQAccordion } from './FAQAccordion';
import { faqItems } from './constants';

interface FAQSectionProps {
  title: string;
  description: string;
}

export const FAQSection: React.FC<FAQSectionProps> = ({
  title,
  description,
}) => {
  return (
    <div className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <HelpCircle className="h-12 w-12 text-blue-600 mx-auto mb-4" />
          <h2 className="text-3xl font-extrabold text-gray-900">
            {title}
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-500">
            {description}
          </p>
        </div>

        <div className="mt-12 max-w-3xl mx-auto">
          <FAQAccordion items={faqItems} />
        </div>
      </div>
    </div>
  );
};