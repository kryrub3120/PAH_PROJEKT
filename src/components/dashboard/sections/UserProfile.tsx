import React from 'react';
import { User } from '../../../types';
import { User as UserIcon, Mail, Calendar } from 'lucide-react';

interface UserProfileProps {
  user: User;
}

export const UserProfile: React.FC<UserProfileProps> = ({ user }) => {
  return (
    <div className="bg-white rounded-lg shadow p-6">
      <div className="flex items-center gap-4">
        <div className="w-16 h-16 rounded-full bg-blue-100 flex items-center justify-center">
          <UserIcon className="w-8 h-8 text-blue-600" />
        </div>
        <div>
          <h1 className="text-2xl font-semibold text-gray-900">{user.name}</h1>
          <div className="flex items-center gap-2 text-gray-500">
            <Mail className="w-4 h-4" />
            <span>{user.email}</span>
          </div>
        </div>
      </div>
    </div>
  );
};