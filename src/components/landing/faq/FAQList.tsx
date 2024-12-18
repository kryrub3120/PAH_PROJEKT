import React from 'react';
import { FAQItem } from './FAQItem';
import { FAQ } from '../../../types';

interface FAQListProps {
  items: FAQ[];
}

export const FAQList: React.FC<FAQListProps> = ({ items = [] }) => {
  if (!items.length) return null;

  return (
    <dl className="space-y-6">
      {items.map((faq, index) => (
        <FAQItem key={index} {...faq} />
      ))}
    </dl>
  );
};