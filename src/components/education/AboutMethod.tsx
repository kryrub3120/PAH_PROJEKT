import React from 'react';
import { BookOpen, Ruler, Apple, Sun } from 'lucide-react';

interface AboutMethodProps {
  t: any;
}

export const AboutMethod: React.FC<AboutMethodProps> = ({ t }) => {
  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <div className="bg-white rounded-xl shadow-lg p-8">
        <h2 className="text-2xl font-semibold mb-6">{t.aboutMethod}</h2>
        
        <div className="grid gap-6 md:grid-cols-2">
          <div className="p-6 bg-blue-50 rounded-lg">
            <div className="flex items-center gap-3 mb-4">
              <BookOpen className="w-6 h-6 text-blue-600" />
              <h3 className="font-semibold">{t.methodExplanation}</h3>
            </div>
            <p className="text-gray-600">{t.methodDetails}</p>
          </div>

          <div className="p-6 bg-green-50 rounded-lg">
            <div className="flex items-center gap-3 mb-4">
              <Ruler className="w-6 h-6 text-green-600" />
              <h3 className="font-semibold">{t.measurementTips}</h3>
            </div>
            <p className="text-gray-600">{t.measurementDetails}</p>
          </div>

          <div className="p-6 bg-yellow-50 rounded-lg">
            <div className="flex items-center gap-3 mb-4">
              <Apple className="w-6 h-6 text-yellow-600" />
              <h3 className="font-semibold">{t.nutritionTips}</h3>
            </div>
            <p className="text-gray-600">{t.nutritionDetails}</p>
          </div>

          <div className="p-6 bg-purple-50 rounded-lg">
            <div className="flex items-center gap-3 mb-4">
              <Sun className="w-6 h-6 text-purple-600" />
              <h3 className="font-semibold">{t.environmentalFactors}</h3>
            </div>
            <p className="text-gray-600">{t.environmentalDetails}</p>
          </div>
        </div>
      </div>
    </div>
  );
};