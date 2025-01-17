'use client';

import { useEffect, useRef, useCallback } from 'react';

interface Particle {
  x: number;
  y: number;
  dx: number;
  dy: number;
  radius: number;
  color: string;
  alpha: number;
  rotation: number;
}

interface MouseTrailPoint {
  x: number;
  y: number;
  age: number;
}

const VisualEffects = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const particlesRef = useRef<Particle[]>([]);
  const mouseTrailRef = useRef<MouseTrailPoint[]>([]);
  const mousePos = useRef({ x: 0, y: 0 });
  const frameRef = useRef(0);

  const PARTICLE_COUNT = 75;
  const TRAIL_LENGTH = 3;
  const TRAIL_DURATION = 15;
  const INTERACTION_RADIUS = 100;
  const BASE_PARTICLE_SPEED = 0.5;

  const createParticle = useCallback((x?: number, y?: number): Particle => ({
    x: x ?? Math.random() * window.innerWidth,
    y: y ?? Math.random() * window.innerHeight,
    dx: (Math.random() - 0.5) * BASE_PARTICLE_SPEED,
    dy: (Math.random() - 0.5) * BASE_PARTICLE_SPEED,
    radius: Math.random() * 2 + 1,
    color: `hsl(${Math.random() * 60 + 100}, 100%, 50%)`,
    alpha: Math.random() * 0.5 + 0.5,
    rotation: Math.random() * Math.PI * 2
  }), []);

  const initializeCanvas = (canvas: HTMLCanvasElement) => {
    const ctx = canvas.getContext('2d')!;
    ctx.globalCompositeOperation = 'lighter';
    return ctx;
  };

  const handleResize = useCallback(() => {
    if (!canvasRef.current) return;
    canvasRef.current.width = window.innerWidth;
    canvasRef.current.height = window.innerHeight;
    
    particlesRef.current = Array.from(
      { length: PARTICLE_COUNT }, 
      () => createParticle()
    );
  }, [createParticle]);

  const updateParticles = (ctx: CanvasRenderingContext2D) => {
    const time = performance.now() * 0.001;
    
    particlesRef.current.forEach(particle => {
      // Update position with smooth sine wave motion
      particle.x += particle.dx * Math.sin(time * 0.5) * 1.2;
      particle.y += particle.dy * Math.cos(time * 0.5) * 1.2;
      particle.rotation += 0.01;

      // Mouse interaction
      const dx = mousePos.current.x - particle.x;
      const dy = mousePos.current.y - particle.y;
      const distance = Math.sqrt(dx * dx + dy * dy);

      if (distance < INTERACTION_RADIUS) {
        const force = (1 - distance / INTERACTION_RADIUS) * 0.02;
        particle.dx -= dx * force;
        particle.dy -= dy * force;
      }

      // Boundary check with smooth transition
      if (particle.x < 0) particle.x = window.innerWidth;
      if (particle.x > window.innerWidth) particle.x = 0;
      if (particle.y < 0) particle.y = window.innerHeight;
      if (particle.y > window.innerHeight) particle.y = 0;

      // Draw particle with gradient
      const gradient = ctx.createRadialGradient(
        particle.x, particle.y, 0,
        particle.x, particle.y, particle.radius * 2
      );
      gradient.addColorStop(0, `${particle.color.replace(')', `,${particle.alpha})`)}`);
      gradient.addColorStop(1, 'rgba(0,0,0,0)');

      ctx.save();
      ctx.translate(particle.x, particle.y);
      ctx.rotate(particle.rotation);
      ctx.beginPath();
      ctx.fillStyle = gradient;
      ctx.fillRect(
        -particle.radius,
        -particle.radius,
        particle.radius * 2,
        particle.radius * 2
      );
      ctx.restore();
    });
  };

  const updateMouseTrail = (ctx: CanvasRenderingContext2D) => {
    // Update trail points
    mouseTrailRef.current = mouseTrailRef.current
      .map(point => ({ ...point, age: point.age + 1 }))
      .filter(point => point.age < TRAIL_DURATION);

    // Draw trail
    if (mouseTrailRef.current.length > 1) {
      ctx.beginPath();
      ctx.moveTo(mouseTrailRef.current[0].x, mouseTrailRef.current[0].y);
      
      mouseTrailRef.current.forEach((point, i) => {
        const nextPoint = mouseTrailRef.current[i + 1];
        if (nextPoint) {
          const xc = (point.x + nextPoint.x) / 2;
          const yc = (point.y + nextPoint.y) / 2;
          ctx.quadraticCurveTo(point.x, point.y, xc, yc);
        }
        
        const alpha = 1 - point.age / TRAIL_DURATION;
        ctx.strokeStyle = `hsla(145, 100%, 50%, ${alpha * 0.5})`;
        ctx.lineWidth = (TRAIL_DURATION - point.age) * 0.5;
        ctx.lineCap = 'round';
        ctx.stroke();
      });
    }
  };

  const animate = useCallback(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    
    const ctx = canvas.getContext('2d')!;
    ctx.fillStyle = 'rgba(0, 0, 0, 0.05)';
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    updateParticles(ctx);
    updateMouseTrail(ctx);

    frameRef.current = requestAnimationFrame(animate);
  }, []);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    initializeCanvas(canvas);
    handleResize();

    const handleMouseMove = (e: MouseEvent) => {
      mousePos.current = { x: e.clientX, y: e.clientY };
      mouseTrailRef.current.push({
        x: e.clientX,
        y: e.clientY,
        age: 0
      });

      if (mouseTrailRef.current.length > TRAIL_LENGTH) {
        mouseTrailRef.current.shift();
      }
    };

    window.addEventListener('resize', handleResize);
    window.addEventListener('mousemove', handleMouseMove);
    frameRef.current = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('mousemove', handleMouseMove);
      cancelAnimationFrame(frameRef.current);
    };
  }, [handleResize, animate]);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-0"
    />
  );
};

export default VisualEffects;
