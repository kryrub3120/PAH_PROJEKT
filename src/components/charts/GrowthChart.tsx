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
import { HeightPrediction, Measurement } from '../../types/prediction';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

interface GrowthChartProps {
  measurements: Measurement[];
  predictions: HeightPrediction[];
  percentileData: number[][];
}

export const GrowthChart: React.FC<GrowthChartProps> = ({
  measurements,
  predictions,
  percentileData,
}) => {
  const data = {
    labels: measurements.map(m => m.date),
    datasets: [
      {
        label: 'Actual Height',
        data: measurements.map(m => m.height),
        borderColor: 'rgb(59, 130, 246)',
        backgroundColor: 'rgba(59, 130, 246, 0.5)',
      },
      {
        label: 'Predicted Height',
        data: predictions.map(p => p.predictedHeight),
        borderColor: 'rgb(99, 102, 241)',
        backgroundColor: 'rgba(99, 102, 241, 0.5)',
        borderDash: [5, 5],
      },
      {
        label: '95th Percentile',
        data: percentileData[0],
        borderColor: 'rgba(156, 163, 175, 0.5)',
        fill: false,
      },
      {
        label: '50th Percentile',
        data: percentileData[1],
        borderColor: 'rgba(156, 163, 175, 0.5)',
        fill: false,
      },
      {
        label: '5th Percentile',
        data: percentileData[2],
        borderColor: 'rgba(156, 163, 175, 0.5)',
        fill: false,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top' as const,
      },
      title: {
        display: true,
        text: 'Growth Chart',
      },
    },
    scales: {
      y: {
        title: {
          display: true,
          text: 'Height (cm)',
        },
      },
      x: {
        title: {
          display: true,
          text: 'Date',
        },
      },
    },
  };

  return <Line options={options} data={data} />;
}