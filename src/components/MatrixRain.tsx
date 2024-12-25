<<<<<<< HEAD
// components/MatrixRain.tsx
=======


>>>>>>> c1c113d (Completed the website as promised)
'use client';
import { useEffect, useRef } from 'react';

const MatrixRain = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

<<<<<<< HEAD
=======
    let columns: number;
    let drops: number[];

>>>>>>> c1c113d (Completed the website as promised)
    // Set canvas size to window size
    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
<<<<<<< HEAD
=======

      // Update columns and reset drops
      const fontSize = 14;
      columns = Math.floor(canvas.width / fontSize);
      drops = Array(columns).fill(1);
>>>>>>> c1c113d (Completed the website as promised)
    };
    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    // Matrix rain characters
    const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789@#$%^&*';
    const fontSize = 14;
<<<<<<< HEAD
    const columns = canvas.width / fontSize;
    
    // Array to track the y position of each column
    const drops: number[] = [];
    for (let i = 0; i < columns; i++) {
      drops[i] = 1;
    }
=======
>>>>>>> c1c113d (Completed the website as promised)

    const draw = () => {
      // Set a semi-transparent black background to create fade effect
      ctx.fillStyle = 'rgba(0, 0, 0, 0.05)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // Set the text color and font
      ctx.fillStyle = '#0F0';
      ctx.font = `${fontSize}px monospace`;

      // Draw the characters
      for (let i = 0; i < drops.length; i++) {
<<<<<<< HEAD
        // Random character from chars
        const char = chars[Math.floor(Math.random() * chars.length)];
        
        // Draw the character
=======
        const char = chars[Math.floor(Math.random() * chars.length)];
>>>>>>> c1c113d (Completed the website as promised)
        ctx.fillText(char, i * fontSize, drops[i] * fontSize);

        // Move the drop down
        if (drops[i] * fontSize > canvas.height && Math.random() > 0.975) {
          drops[i] = 0;
        }
        drops[i]++;
      }
    };

    // Animation loop
    const interval = setInterval(draw, 33);

    return () => {
      clearInterval(interval);
      window.removeEventListener('resize', resizeCanvas);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
<<<<<<< HEAD
      className="fixed top-0 left-0 w-full h-full -z-10 opacity-20"
=======
      className="fixed top-0 left-0 w-full h-full z-0 opacity-20"
>>>>>>> c1c113d (Completed the website as promised)
    />
  );
};

<<<<<<< HEAD
export default MatrixRain;
=======
export default MatrixRain;
>>>>>>> c1c113d (Completed the website as promised)
