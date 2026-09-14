"use client";

import { useEffect, useRef } from "react";

type Particle = {
  x: number;
  y: number;
  vx: number;
  vy: number;
};

const LINK_DISTANCE = 140;
const SPEED = 0.45;

type ParticleFieldProps = {
  className?: string;
  /** Liczba cząstek. */
  count?: number;
  /** Kolor kropek (dowolny format akceptowany przez canvas, np. "rgba(255,255,255,0.8)"). */
  particleColor?: string;
  /** Kolor łączących linii — bez alpha, alpha liczona per-linia wg dystansu. */
  lineColorRgb?: string;
  /** Promień kropki w px. */
  particleRadius?: number;
};

// Wolna sieć cząstek w tle — wyłączana przy prefers-reduced-motion (dostępność > efekt).
export function ParticleField({
  className,
  count = 46,
  particleColor = "rgba(255, 118, 0, 0.55)",
  lineColorRgb = "68, 68, 68",
  particleRadius = 1.6,
}: ParticleFieldProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    let width = 0;
    let height = 0;
    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    let particles: Particle[] = [];
    let frameId = 0;

    function resize() {
      const rect = canvas!.parentElement?.getBoundingClientRect();
      width = rect?.width ?? canvas!.clientWidth;
      height = rect?.height ?? canvas!.clientHeight;
      canvas!.width = width * dpr;
      canvas!.height = height * dpr;
      canvas!.style.width = `${width}px`;
      canvas!.style.height = `${height}px`;
      ctx!.setTransform(dpr, 0, 0, dpr, 0, 0);
    }

    function seed() {
      particles = Array.from({ length: count }, () => ({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * SPEED,
        vy: (Math.random() - 0.5) * SPEED,
      }));
    }

    function step() {
      ctx!.clearRect(0, 0, width, height);

      for (const p of particles) {
        p.x += p.vx;
        p.y += p.vy;
        if (p.x < 0 || p.x > width) p.vx *= -1;
        if (p.y < 0 || p.y > height) p.vy *= -1;
      }

      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const a = particles[i];
          const b = particles[j];
          const dx = a.x - b.x;
          const dy = a.y - b.y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < LINK_DISTANCE) {
            ctx!.strokeStyle = `rgba(${lineColorRgb}, ${0.35 * (1 - dist / LINK_DISTANCE)})`;
            ctx!.lineWidth = 1;
            ctx!.beginPath();
            ctx!.moveTo(a.x, a.y);
            ctx!.lineTo(b.x, b.y);
            ctx!.stroke();
          }
        }
      }

      for (const p of particles) {
        ctx!.fillStyle = particleColor;
        ctx!.beginPath();
        ctx!.arc(p.x, p.y, particleRadius, 0, Math.PI * 2);
        ctx!.fill();
      }

      frameId = requestAnimationFrame(step);
    }

    resize();
    seed();

    // Jedna statyczna klatka przy prefers-reduced-motion: step() planuje kolejną
    // klatkę przez requestAnimationFrame, więc od razu ją odwołujemy.
    step();
    if (prefersReducedMotion) {
      cancelAnimationFrame(frameId);
    }

    const handleResize = () => {
      resize();
      seed();
    };
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
      cancelAnimationFrame(frameId);
    };
  }, [count, particleColor, lineColorRgb, particleRadius]);

  return <canvas ref={canvasRef} aria-hidden className={className} />;
}
