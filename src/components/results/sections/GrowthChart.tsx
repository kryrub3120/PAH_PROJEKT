import React from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Line } from 'react-chartjs-2';
import { getGrowthData } from '../../../utils/growth/percentiles';
import { ChildData } from '../../../types';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
);

interface GrowthChartProps {
  childData: ChildData;
  t: any;
}

export const GrowthChart: React.FC<GrowthChartProps> = ({ childData, t }) => {
  const growthData = getGrowthData(childData.sex);

  const data = {
    labels: Array.from({ length: 17 }, (_, i) => i + 2), // Ages 2-18
    datasets: [
      {
        label: t.percentile95 || '95th Percentile',
        data: growthData.percentile95.map(point => ({
          x: point.age,
          y: point.height,
        })),
        borderColor: 'rgba(59, 130, 246, 0.3)',
        borderWidth: 1,
        fill: false,
      },
      {
        label: t.percentile50 || '50th Percentile',
        data: growthData.percentile50.map(point => ({
          x: point.age,
          y: point.height,
        })),
        borderColor: 'rgba(59, 130, 246, 0.5)',
        borderWidth: 2,
        fill: false,
      },
      {
        label: t.percentile5 || '5th Percentile',
        data: growthData.percentile5.map(point => ({
          x: point.age,
          y: point.height,
        })),
        borderColor: 'rgba(59, 130, 246, 0.3)',
        borderWidth: 1,
        fill: false,
      },
      {
        label: t.currentHeight || 'Current Height',
        data: [{ x: childData.age, y: childData.currentHeight }],
        borderColor: 'rgb(220, 38, 38)',
        backgroundColor: 'rgb(220, 38, 38)',
        pointRadius: 6,
        pointHoverRadius: 8,
        showLine: false,
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: 'top' as const,
      },
      title: {
        display: true,
        text: t.growthChart || 'Growth Chart',
        font: {
          size: 16,
          weight: 'bold',
        },
      },
      tooltip: {
        callbacks: {
          label: (context: any) => {
            return `${context.dataset.label}: ${context.parsed.y} cm`;
          },
        },
      },
    },
    scales: {
      y: {
        title: {
          display: true,
          text: t.heightCm || 'Height (cm)',
        },
        min: 60,
        max: 200,
      },
      x: {
        title: {
          display: true,
          text: t.ageYears || 'Age (years)',
        },
        min: 2,
        max: 18,
      },
    },
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-sm">
      <div className="h-[400px]">
        <Line options={options} data={data} />
      </div>
    </div>
  );
};