import React from 'react';
import { BookOpen } from 'lucide-react';
import { EbookCard } from './EbookCard';
import { publications } from './constants';

export const EbookSection: React.FC = () => {
  return (
    <div className="mb-16">
      <div className="flex items-center gap-3 mb-8">
        <BookOpen className="w-8 h-8 text-blue-600" />
        <h2 className="text-2xl font-semibold text-gray-900">Publications</h2>
      </div>

      <div className="grid grid-cols-1 gap-8">
        {publications.map((publication, index) => (
          <EbookCard
            key={index}
            {...publication}
          />
        ))}
      </div>
    </div>
  );
};