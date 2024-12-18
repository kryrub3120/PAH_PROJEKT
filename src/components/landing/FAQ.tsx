import React from 'react';
import { HelpCircle } from 'lucide-react';

interface FAQProps {
  t: any;
}

export const FAQ: React.FC<FAQProps> = ({ t }) => {
  return (
    <div className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <HelpCircle className="h-12 w-12 text-blue-600 mx-auto mb-4" />
          <h2 className="text-3xl font-extrabold text-gray-900">
            {t.faqTitle}
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-500">
            {t.faqDescription}
          </p>
        </div>

        <div className="mt-12 max-w-3xl mx-auto">
          <dl className="space-y-6">
            {t.faqs.map((faq: any, index: number) => (
              <div
                key={index}
                className="p-6 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors duration-200"
              >
                <dt className="text-lg font-medium text-gray-900 mb-2">
                  {faq.question}
                </dt>
                <dd className="text-base text-gray-500">
                  {faq.answer}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  );
};