import React, { useState } from 'react';
import { Calculator } from '../Calculator';
import { PredictionResult } from '../results/PredictionResult';
import { useAppStore } from '../../store';
import { useCalculator } from './hooks/useCalculator';
import { DataProcessingConsent } from '../consent/DataProcessingConsent';
import { validateConsent } from '../../utils/consent';
import { useTranslation } from '../../hooks/useTranslation';

interface CalculatorSectionProps {
  t: any;
}

export const CalculatorSection: React.FC<CalculatorSectionProps> = ({ t }) => {
  const {
    childData,
    parentData,
    setChildData,
    setParentData,
  } = useAppStore();

  const [consentGiven, setConsentGiven] = useState(false);
  const [consentError, setConsentError] = useState<string | null>(null);

  const {
    prediction,
    isCalculating,
    error,
    calculate,
  } = useCalculator();

  const handleCalculate = () => {
    const consentError = validateConsent(consentGiven);
    if (consentError) {
      setConsentError(consentError);
      return;
    }
    
    setConsentError(null);
    calculate(childData, parentData);
  };

  return (
    <>
      <Calculator
        t={t}
        childData={childData}
        parentData={parentData}
        onChildDataChange={setChildData}
        onParentDataChange={setParentData}
        onCalculate={handleCalculate}
        isCalculating={isCalculating}
        error={error}
      />

      <div className="max-w-4xl mx-auto px-4 mb-8">
        <DataProcessingConsent
          checked={consentGiven}
          onChange={setConsentGiven}
          error={consentError}
          t={t}
        />
      </div>

      {prediction && (
        <PredictionResult
          prediction={prediction}
          childData={childData}
          parentData={parentData}
          t={t}
        />
      )}
    </>
  );
};