import React from 'react';
import { BookOpen } from 'lucide-react';

export const Biography: React.FC = () => {
  return (
    <div className="mb-16">
      <div className="flex flex-col md:flex-row items-center gap-8 mb-12">
        <div className="w-48 h-48 rounded-lg overflow-hidden shadow-lg flex-shrink-0">
          <img
            src="https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?auto=format&fit=crop&w=400&h=400"
            alt="Dr. Krystian Rubajczyk"
            className="w-full h-full object-cover"
          />
        </div>
        <div>
          <h1 className="text-3xl font-bold text-gray-900 mb-2">
            Dr. Krystian Rubajczyk
          </h1>
          <p className="text-lg text-blue-600 mb-4">
            Deputy Head of Central Research Laboratory
          </p>
          <p className="text-gray-600">
            University School of Physical Education in Wrocław (AWF Wrocław)
          </p>
        </div>
      </div>

      <div className="prose prose-blue max-w-none">
        <p className="text-lg leading-relaxed text-gray-700">
          Dr. Krystian Rubajczyk is a recognized innovator in the field of physical culture sciences, 
          affiliated with the University School of Physical Education in Wrocław (AWF Wrocław). 
          As the Deputy Head of the Central Research Laboratory, he specializes in the commercialization 
          of scientific research and implementing its findings in training practice.
        </p>
      </div>
    </div>
  );
};