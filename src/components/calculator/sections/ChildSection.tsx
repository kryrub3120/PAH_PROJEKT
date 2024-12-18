import React from 'react';
import { User } from 'lucide-react';
import { HeightInput } from '../inputs/HeightInput';
import { WeightInput } from '../inputs/WeightInput';
import { AgeInput } from '../inputs/AgeInput';
import { BirthDateInput } from '../inputs/BirthDateInput';
import { GenderSelect } from '../inputs/GenderSelect';
import { ChildData } from '../../../types';

interface ChildSectionProps {
  data: ChildData;
  onChange: (data: Partial<ChildData>) => void;
  t: any;
}

export const ChildSection: React.FC<ChildSectionProps> = ({
  data,
  onChange,
  t,
}) => {
  return (
    <div className="bg-white rounded-xl shadow-lg p-6 mb-6">
      <div className="flex items-center gap-3 mb-6">
        <User className="w-6 h-6 text-blue-600" />
        <h2 className="text-xl font-semibold text-gray-900">
          {t.childInfo}
        </h2>
      </div>
      <div className="space-y-6">
        <HeightInput
          value={data.currentHeight}
          onChange={(value) => onChange({ currentHeight: value })}
          label={t.height}
          t={t}
        />
        <WeightInput
          value={data.weight}
          onChange={(value) => onChange({ weight: value })}
          t={t}
        />
        <AgeInput
          value={data.age}
          onChange={(value) => onChange({ age: value })}
          t={t}
        />
        <BirthDateInput
          value={data.birthDate}
          onChange={(value) => onChange({ birthDate: value })}
          t={t}
        />
        <GenderSelect
          value={data.sex}
          onChange={(value) => onChange({ sex: value })}
          t={t}
        />
      </div>
    </div>
  );
};