import React from 'react';
import { Award, Users } from 'lucide-react';

export const Achievements: React.FC = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
      <div className="bg-white rounded-xl shadow-sm p-8">
        <div className="flex items-center gap-3 mb-6">
          <Award className="w-6 h-6 text-blue-600" />
          <h2 className="text-2xl font-semibold text-gray-900">Expertise</h2>
        </div>

        <ul className="space-y-4">
          <li className="flex items-start gap-3">
            <div className="w-1.5 h-1.5 rounded-full bg-blue-600 mt-2" />
            <p className="text-gray-600">
              Development of tools for sports and health applications
            </p>
          </li>
          <li className="flex items-start gap-3">
            <div className="w-1.5 h-1.5 rounded-full bg-blue-600 mt-2" />
            <p className="text-gray-600">
              Integration of theoretical knowledge with practical solutions
            </p>
          </li>
          <li className="flex items-start gap-3">
            <div className="w-1.5 h-1.5 rounded-full bg-blue-600 mt-2" />
            <p className="text-gray-600">
              Research commercialization and practical implementation
            </p>
          </li>
        </ul>
      </div>

      <div className="bg-white rounded-xl shadow-sm p-8">
        <div className="flex items-center gap-3 mb-6">
          <Users className="w-6 h-6 text-blue-600" />
          <h2 className="text-2xl font-semibold text-gray-900">Collaboration</h2>
        </div>

        <ul className="space-y-4">
          <li className="flex items-start gap-3">
            <div className="w-1.5 h-1.5 rounded-full bg-blue-600 mt-2" />
            <p className="text-gray-600">
              Active participation in international conferences
            </p>
          </li>
          <li className="flex items-start gap-3">
            <div className="w-1.5 h-1.5 rounded-full bg-blue-600 mt-2" />
            <p className="text-gray-600">
              Collaboration with experts across various scientific fields
            </p>
          </li>
          <li className="flex items-start gap-3">
            <div className="w-1.5 h-1.5 rounded-full bg-blue-600 mt-2" />
            <p className="text-gray-600">
              Valued contributions in both academic and practical sports contexts
            </p>
          </li>
        </ul>
      </div>
    </div>
  );
};