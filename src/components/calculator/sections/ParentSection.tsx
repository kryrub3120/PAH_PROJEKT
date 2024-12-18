import React from 'react';
import { Users } from 'lucide-react';
import { HeightInput } from '../inputs/HeightInput';
import { ParentData } from '../../../types';

interface ParentSectionProps {
  data: ParentData;
  onChange: (data: Partial<ParentData>) => void;
  t: any;
}

export const ParentSection: React.FC<ParentSectionProps> = ({
  data,
  onChange,
  t,
}) => {
  return (
    <div className="bg-white rounded-xl shadow-lg p-6 mb-6">
      <div className="flex items-center gap-3 mb-6">
        <Users className="w-6 h-6 text-blue-600" />
        <h2 className="text-xl font-semibold text-gray-900">
          {t.parentInfo}
        </h2>
      </div>
      <div className="space-y-6">
        <HeightInput
          value={data.fatherHeight}
          onChange={(value) => onChange({ fatherHeight: value })}
          label={t.fatherHeight}
          t={t}
          min={130}
          max={200}
        />
        <HeightInput
          value={data.motherHeight}
          onChange={(value) => onChange({ motherHeight: value })}
          label={t.motherHeight}
          t={t}
          min={130}
          max={200}
        />
      </div>
    </div>
  );
};