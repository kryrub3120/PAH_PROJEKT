import React from 'react';
import { Ruler, Scale, Calendar, Users } from 'lucide-react';
import { ChildData, ParentData } from '../../../types';
import { GenderIcon } from '../../common/GenderIcon';

interface InputDataSummaryProps {
  childData: ChildData;
  parentData: ParentData;
  t: any;
}

export const InputDataSummary: React.FC<InputDataSummaryProps> = ({
  childData,
  parentData,
  t,
}) => {
  return (
    <div className="mb-12">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Child Data */}
        <div className="bg-gray-50 rounded-xl p-6">
          <h3 className="text-lg font-semibold mb-4 text-gray-900">
            {t.childInfo}
          </h3>
          <div className="grid grid-cols-2 gap-4">
            <DataItem
              icon={<Ruler className="w-5 h-5 text-blue-600" />}
              label={t.height}
              value={`${childData.currentHeight} ${t.cm}`}
            />
            <DataItem
              icon={<Scale className="w-5 h-5 text-blue-600" />}
              label={t.weight}
              value={`${childData.weight} ${t.kg}`}
            />
            <DataItem
              icon={<Calendar className="w-5 h-5 text-blue-600" />}
              label={t.age}
              value={`${childData.age} ${t.years}`}
            />
            <DataItem
              icon={<GenderIcon gender={childData.sex} />}
              label={t.sex}
              value={t[childData.sex]}
            />
          </div>
        </div>

        {/* Parent Data */}
        <div className="bg-gray-50 rounded-xl p-6">
          <h3 className="text-lg font-semibold mb-4 text-gray-900">
            {t.parentInfo}
          </h3>
          <div className="space-y-4">
            <DataItem
              icon={<Users className="w-5 h-5 text-blue-600" />}
              label={t.fatherHeight}
              value={`${parentData.fatherHeight} ${t.cm}`}
            />
            <DataItem
              icon={<Users className="w-5 h-5 text-blue-600" />}
              label={t.motherHeight}
              value={`${parentData.motherHeight} ${t.cm}`}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

interface DataItemProps {
  icon: React.ReactNode;
  label: string;
  value: string;
}

const DataItem: React.FC<DataItemProps> = ({ icon, label, value }) => (
  <div className="flex items-center gap-2">
    {icon}
    <div>
      <p className="text-sm text-gray-500">{label}</p>
      <p className="font-medium text-gray-900">{value}</p>
    </div>
  </div>
);