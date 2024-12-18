import React from 'react';
import { Navigate } from 'react-router-dom';
import { useAuth } from '../../hooks/useAuth';
import { DashboardLayout } from './layout/DashboardLayout';
import { MeasurementHistory } from './sections/MeasurementHistory';
import { UserProfile } from './sections/UserProfile';
import { RecentPredictions } from './sections/RecentPredictions';

export const DashboardPage: React.FC = () => {
  const { user } = useAuth();

  if (!user) {
    return <Navigate to="/login" replace />;
  }

  return (
    <DashboardLayout>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <UserProfile user={user} />
        <div className="mt-8 grid grid-cols-1 lg:grid-cols-2 gap-8">
          <RecentPredictions />
          <MeasurementHistory />
        </div>
      </div>
    </DashboardLayout>
  );
};