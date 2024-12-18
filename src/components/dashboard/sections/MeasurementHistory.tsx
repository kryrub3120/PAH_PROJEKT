import React from 'react';
import { Ruler } from 'lucide-react';

export const MeasurementHistory: React.FC = () => {
  return (
    <div className="bg-white rounded-lg shadow p-6">
      <div className="flex items-center gap-3 mb-4">
        <Ruler className="w-6 h-6 text-blue-600" />
        <h2 className="text-lg font-semibold text-gray-900">Measurement History</h2>
      </div>
      
      <div className="text-center text-gray-500 py-8">
        <p>No measurements recorded yet.</p>
        <p className="text-sm mt-2">Start by making your first prediction!</p>
      </div>
    </div>
  );
};