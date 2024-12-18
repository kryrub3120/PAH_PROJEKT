import React from 'react';
import { Quote } from 'lucide-react';

interface TestimonialProps {
  quote: string;
  author: string;
  role: string;
}

export const Testimonial: React.FC<TestimonialProps> = ({ quote, author, role }) => {
  return (
    <div className="relative bg-white rounded-lg shadow-sm p-6 hover:shadow-md transition-shadow duration-200">
      <Quote className="h-8 w-8 text-blue-200 absolute -top-4 -left-4" />
      <blockquote className="text-gray-600 italic mb-4">
        "{quote}"
      </blockquote>
      <div className="text-right">
        <cite className="text-gray-900 font-medium not-italic">{author}</cite>
        <p className="text-gray-500 text-sm">{role}</p>
      </div>
    </div>
  );
};