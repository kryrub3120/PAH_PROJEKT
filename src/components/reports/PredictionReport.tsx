import React from 'react';
import { format } from 'date-fns';
import {
  RulerIcon,
  User,
  Scale,
  Calendar,
  Users,
  Apple,
  Moon,
  Activity,
  BookOpen,
} from 'lucide-react';
import { HeightPrediction } from '../../types/prediction';
import { ChildData, ParentData } from '../../types';

interface PredictionReportProps {
  prediction: HeightPrediction;
  childData: ChildData;
  parentData: ParentData;
  reportId: string;
  t: any;
}

export const PredictionReport: React.FC<PredictionReportProps> = ({
  prediction,
  childData,
  parentData,
  reportId,
  t,
}) => {
  return (
    <div className="max-w-3xl mx-auto bg-white p-8 shadow-lg">
      {/* Header */}
      <header className="text-center mb-12">
        <RulerIcon className="w-16 h-16 text-blue-600 mx-auto mb-4" />
        <h1 className="text-4xl font-bold text-gray-900 mb-2">
          {t.heightPredictionReport}
        </h1>
        <p className="text-lg text-gray-600">
          {format(new Date(), 'MMMM d, yyyy')}
        </p>
      </header>

      {/* Main Prediction */}
      <div className="bg-blue-50 rounded-xl p-8 mb-12 text-center">
        <h2 className="text-6xl font-bold text-blue-600 mb-2">
          {prediction.predictedHeight} {t.cm}
        </h2>
        <p className="text-xl text-gray-600">
          {t.predictionRange}: {prediction.predictionRange.min}–
          {prediction.predictionRange.max} {t.cm}
        </p>
      </div>

      {/* Input Data */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
        {/* Child Data */}
        <div className="bg-gray-50 rounded-lg p-6">
          <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
            <User className="w-5 h-5 text-blue-600" />
            {t.childInfo}
          </h3>
          <ul className="space-y-3">
            <li className="flex items-center gap-2">
              <RulerIcon className="w-4 h-4 text-gray-500" />
              {t.height}: {childData.currentHeight} {t.cm}
            </li>
            <li className="flex items-center gap-2">
              <Scale className="w-4 h-4 text-gray-500" />
              {t.weight}: {childData.weight} {t.kg}
            </li>
            <li className="flex items-center gap-2">
              <Calendar className="w-4 h-4 text-gray-500" />
              {t.age}: {childData.age} {t.years}
            </li>
          </ul>
        </div>

        {/* Parent Data */}
        <div className="bg-gray-50 rounded-lg p-6">
          <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
            <Users className="w-5 h-5 text-blue-600" />
            {t.parentInfo}
          </h3>
          <ul className="space-y-3">
            <li className="flex items-center gap-2">
              <RulerIcon className="w-4 h-4 text-gray-500" />
              {t.fatherHeight}: {parentData.fatherHeight} {t.cm}
            </li>
            <li className="flex items-center gap-2">
              <RulerIcon className="w-4 h-4 text-gray-500" />
              {t.motherHeight}: {parentData.motherHeight} {t.cm}
            </li>
          </ul>
        </div>
      </div>

      {/* Method Explanation */}
      <div className="bg-gray-50 rounded-lg p-6 mb-12">
        <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
          <BookOpen className="w-5 h-5 text-blue-600" />
          {t.aboutMethod}
        </h3>
        <p className="text-gray-600 mb-4">
          {t.methodExplanation}
        </p>
      </div>

      {/* Growth Tips */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
        <div className="bg-green-50 rounded-lg p-4 text-center">
          <Apple className="w-8 h-8 text-green-600 mx-auto mb-2" />
          <h4 className="font-medium mb-2">{t.nutrition}</h4>
          <p className="text-sm text-gray-600">{t.nutritionTip}</p>
        </div>
        <div className="bg-purple-50 rounded-lg p-4 text-center">
          <Activity className="w-8 h-8 text-purple-600 mx-auto mb-2" />
          <h4 className="font-medium mb-2">{t.exercise}</h4>
          <p className="text-sm text-gray-600">{t.exerciseTip}</p>
        </div>
        <div className="bg-blue-50 rounded-lg p-4 text-center">
          <Moon className="w-8 h-8 text-blue-600 mx-auto mb-2" />
          <h4 className="font-medium mb-2">{t.sleep}</h4>
          <p className="text-sm text-gray-600">{t.sleepTip}</p>
        </div>
      </div>

      {/* Footer */}
      <footer className="text-center text-sm text-gray-500 pt-8 border-t">
        <p className="mb-2">
          Report ID: {reportId}
        </p>
        <p>
          © {new Date().getFullYear()} Height Predictor. {t.disclaimer}
        </p>
      </footer>
    </div>
  );
};