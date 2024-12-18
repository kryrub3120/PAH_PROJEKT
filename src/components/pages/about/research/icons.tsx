import React from 'react';
import { Trophy, Activity, LineChart } from 'lucide-react';

export const ResearchIcons = {
  talent: (className: string = "w-6 h-6 text-blue-600") => (
    <Trophy className={className} />
  ),
  development: (className: string = "w-6 h-6 text-green-600") => (
    <Activity className={className} />
  ),
  growth: (className: string = "w-6 h-6 text-purple-600") => (
    <LineChart className={className} />
  ),
};