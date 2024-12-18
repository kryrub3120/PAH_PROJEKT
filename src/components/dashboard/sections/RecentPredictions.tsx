import React from 'react';
import { LineChart } from 'lucide-react';

export const RecentPredictions: React.FC = () => {
  return (
    <div className="bg-white rounded-lg shadow p-6">
      <div className="flex items-center gap-3 mb-4">
        <LineChart className="w-6 h-6 text-blue-600" />
        <h2 className="text-lg font-semibold text-gray-900">Recent Predictions</h2>
      </div>
      
      <div className="text-center text-gray-500 py-8">
        <p>No predictions made yet.</p>
        <p className="text-sm mt-2">Make your first height prediction!</p>
      </div>
    </div>
  );
};