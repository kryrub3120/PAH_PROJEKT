import React, { useEffect, useRef } from 'react';

interface GrowthAnimationProps {
  className?: string;
}

export const GrowthAnimation: React.FC<GrowthAnimationProps> = ({ 
  className = "" 
}) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let progress = 0;

    // Define child silhouette points
    const drawChildSilhouette = (height: number, x: number) => {
      ctx.beginPath();
      // Head
      ctx.arc(x, height - 40, 15, 0, Math.PI * 2);
      // Body
      ctx.moveTo(x, height - 25);
      ctx.lineTo(x, height);
      // Arms
      ctx.moveTo(x - 20, height - 20);
      ctx.lineTo(x + 20, height - 20);
      ctx.stroke();
    };

    // Draw measuring scale
    const drawScale = () => {
      const scaleHeight = canvas.height - 40;
      ctx.beginPath();
      ctx.moveTo(40, 20);
      ctx.lineTo(40, scaleHeight);
      
      // Draw scale marks
      for (let y = 20; y < scaleHeight; y += 20) {
        const markLength = (y % 40 === 0) ? 10 : 5;
        ctx.moveTo(40, y);
        ctx.lineTo(40 + markLength, y);
      }
      ctx.stroke();
    };

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      // Set styles
      ctx.strokeStyle = '#2563eb';
      ctx.lineWidth = 2;
      
      // Draw scale
      drawScale();
      
      // Calculate child height based on progress
      const minHeight = canvas.height - 40;
      const maxHeight = 60;
      const currentHeight = minHeight - ((minHeight - maxHeight) * (progress / 100));
      
      // Draw child
      drawChildSilhouette(currentHeight, 100);
      
      // Update progress
      progress += 0.5;
      if (progress > 100) {
        progress = 0; // Reset for continuous animation
      }
      
      animationFrameId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      width={150}
      height={200}
      className={`${className} mx-auto`}
    />
  );
};