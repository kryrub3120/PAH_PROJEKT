import React from 'react';

interface FAQItemProps {
  question: string;
  answer: string;
}

export const FAQItem: React.FC<FAQItemProps> = ({ question, answer }) => {
  return (
    <div className="p-6 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors duration-200">
      <dt className="text-lg font-medium text-gray-900 mb-2">
        {question}
      </dt>
      <dd className="text-base text-gray-500">
        {answer}
      </dd>
    </div>
  );
};