import React, { useEffect, useRef } from 'react';

interface Point {
  x: number;
  y: number;
}

export const GrowthPreview: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let progress = 0;

    const points: Point[] = [
      { x: 0, y: 80 },
      { x: 20, y: 70 },
      { x: 40, y: 60 },
      { x: 60, y: 45 },
      { x: 80, y: 35 },
      { x: 100, y: 20 },
    ];

    const drawLine = (progress: number) => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      ctx.beginPath();
      ctx.moveTo(0, canvas.height);
      ctx.strokeStyle = '#2563eb';
      ctx.lineWidth = 3;

      for (let i = 0; i < points.length - 1; i++) {
        const currentPoint = points[i];
        const nextPoint = points[i + 1];
        
        if ((i + 1) * (100 / (points.length - 1)) <= progress) {
          ctx.lineTo(
            currentPoint.x * (canvas.width / 100),
            currentPoint.y * (canvas.height / 100)
          );
          ctx.lineTo(
            nextPoint.x * (canvas.width / 100),
            nextPoint.y * (canvas.height / 100)
          );
        }
      }
      
      ctx.stroke();
    };

    const animate = () => {
      progress += 0.5;
      if (progress > 100) progress = 100;
      
      drawLine(progress);
      
      if (progress < 100) {
        animationFrameId = requestAnimationFrame(animate);
      }
    };

    animate();

    return () => {
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      width={200}
      height={100}
      className="w-full h-32 mx-auto opacity-75"
    />
  );
};