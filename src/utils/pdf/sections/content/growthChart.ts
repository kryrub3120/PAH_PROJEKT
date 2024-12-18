import { jsPDF } from 'jspdf';
import { ChildData } from '../../../../types';
import { getGrowthData } from '../../../growth/percentiles';
import { PDF_COLORS } from '../../config';

export const drawGrowthChart = (doc: jsPDF, childData: ChildData) => {
  const yStart = 140;
  const chartWidth = 160;
  const chartHeight = 80;
  const margin = { left: 25, bottom: 20 };

  // Get growth data
  const growthData = getGrowthData(childData.sex);
  
  // Calculate scales
  const xScale = chartWidth / 16; // Ages 2-18 (16 years)
  const yScale = chartHeight / 140; // Height range ~60-200cm

  // Draw axes
  doc.setDrawColor(PDF_COLORS.text);
  doc.setLineWidth(0.1);

  // Y-axis
  doc.line(margin.left, yStart, margin.left, yStart - chartHeight);
  // X-axis
  doc.line(margin.left, yStart, margin.left + chartWidth, yStart);

  // Draw percentile lines
  doc.setDrawColor(PDF_COLORS.primary);
  doc.setLineWidth(0.1);

  // Helper function to draw a line series
  const drawLine = (data: { age: number; height: number }[]) => {
    doc.moveTo(margin.left + (data[0].age - 2) * xScale, yStart - (data[0].height - 60) * yScale);
    data.forEach((point, i) => {
      if (i === 0) return;
      doc.lineTo(
        margin.left + (point.age - 2) * xScale,
        yStart - (point.height - 60) * yScale
      );
    });
    doc.stroke();
  };

  // Draw percentile lines
  doc.setDrawColor(PDF_COLORS.primary);
  doc.setLineWidth(0.1);
  drawLine(growthData.percentile95);
  drawLine(growthData.percentile50);
  drawLine(growthData.percentile5);

  // Plot current height point
  doc.setFillColor(255, 0, 0);
  doc.circle(
    margin.left + (childData.age - 2) * xScale,
    yStart - (childData.currentHeight - 60) * yScale,
    1,
    'F'
  );

  // Add labels
  doc.setFontSize(8);
  doc.setTextColor(PDF_COLORS.text);

  // Y-axis labels
  [60, 100, 140, 180].forEach(height => {
    doc.text(
      height.toString(),
      margin.left - 5,
      yStart - (height - 60) * yScale,
      { align: 'right' }
    );
  });

  // X-axis labels
  [2, 6, 10, 14, 18].forEach(age => {
    doc.text(
      age.toString(),
      margin.left + (age - 2) * xScale,
      yStart + 5,
      { align: 'center' }
    );
  });

  // Add title and labels
  doc.setFontSize(10);
  doc.text('Growth Chart', margin.left + chartWidth / 2, yStart - chartHeight - 10, { align: 'center' });
  doc.text('Age (years)', margin.left + chartWidth / 2, yStart + margin.bottom, { align: 'center' });
  doc.text('Height (cm)', margin.left - 15, yStart - chartHeight / 2, { angle: 90 });

  // Add legend
  const legendY = yStart + margin.bottom + 10;
  doc.setFontSize(8);
  
  // 95th percentile
  doc.text('95th', margin.left + 10, legendY);
  doc.line(margin.left, legendY - 1, margin.left + 8, legendY - 1);
  
  // 50th percentile
  doc.text('50th', margin.left + 35, legendY);
  doc.line(margin.left + 25, legendY - 1, margin.left + 33, legendY - 1);
  
  // 5th percentile
  doc.text('5th', margin.left + 55, legendY);
  doc.line(margin.left + 45, legendY - 1, margin.left + 53, legendY - 1);
  
  // Current height
  doc.setFillColor(255, 0, 0);
  doc.circle(margin.left + 70, legendY - 1, 1, 'F');
  doc.text('Current', margin.left + 80, legendY);
};