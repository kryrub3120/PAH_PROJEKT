import React from 'react';
import { ChildSection } from './calculator/sections/ChildSection';
import { ParentSection } from './calculator/sections/ParentSection';
import { ChildData, ParentData } from '../types';
import { Loader } from 'lucide-react';

interface CalculatorProps {
  t: any;
  childData: ChildData;
  parentData: ParentData;
  onChildDataChange: (data: Partial<ChildData>) => void;
  onParentDataChange: (data: Partial<ParentData>) => void;
  onCalculate: () => void;
  isCalculating: boolean;
  error: string | null;
}

export const Calculator: React.FC<CalculatorProps> = ({
  t,
  childData,
  parentData,
  onChildDataChange,
  onParentDataChange,
  onCalculate,
  isCalculating,
  error,
}) => {
  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <ChildSection
        data={childData}
        onChange={onChildDataChange}
        t={t}
      />

      <ParentSection
        data={parentData}
        onChange={onParentDataChange}
        t={t}
      />

      {error && (
        <div className="mb-6 p-4 bg-red-50 rounded-lg text-red-700 text-sm">
          {error}
        </div>
      )}

      <div className="text-center">
        <button
          onClick={onCalculate}
          disabled={isCalculating}
          className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors text-lg font-medium disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2 mx-auto"
        >
          {isCalculating ? (
            <>
              <Loader className="w-5 h-5 animate-spin" />
              {t.calculating}
            </>
          ) : (
            t.calculate
          )}
        </button>
      </div>
    </div>
  );
};