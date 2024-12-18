import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { FAQ } from '../../../types';

interface FAQAccordionProps {
  items: FAQ[];
}

export const FAQAccordion: React.FC<FAQAccordionProps> = ({ items }) => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleItem = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="space-y-4">
      {items.map((item, index) => (
        <div
          key={index}
          className="bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors duration-200"
        >
          <button
            onClick={() => toggleItem(index)}
            className="w-full px-6 py-4 flex items-center justify-between text-left"
            aria-expanded={openIndex === index}
          >
            <span className="text-lg font-medium text-gray-900">
              {item.question}
            </span>
            <ChevronDown 
              className={`w-5 h-5 text-gray-500 transition-transform duration-200 ${
                openIndex === index ? 'transform rotate-180' : ''
              }`}
            />
          </button>
          <div
            className={`px-6 overflow-hidden transition-all duration-200 ${
              openIndex === index ? 'pb-4 max-h-96' : 'max-h-0'
            }`}
          >
            <p className="text-gray-600">
              {item.answer}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};