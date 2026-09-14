"use client";

import { useEffect, useRef } from "react";

type Point = { x: number; y: number };

export function SignalField() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const pointer = useRef<Point>({ x: 0.55, y: 0.42 });

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const context = canvas.getContext("2d", { alpha: true });
    if (!context) return;
    const drawingContext = context;

    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    let width = 0;
    let height = 0;
    let frame = 0;
    let raf = 0;
    let isVisible = true;
    let documentVisible = !document.hidden;

    const resize = () => {
      const rect = canvas.getBoundingClientRect();
      const dpr = Math.min(window.devicePixelRatio || 1, 1.6);
      width = rect.width;
      height = rect.height;
      canvas.width = Math.round(width * dpr);
      canvas.height = Math.round(height * dpr);
      drawingContext.setTransform(dpr, 0, 0, dpr, 0, 0);
      renderFrame();
    };

    function renderFrame() {
      drawingContext.clearRect(0, 0, width, height);
      const time = reduceMotion ? 18 : frame * 0.004;
      const cx = width * (0.62 + (pointer.current.x - 0.5) * 0.035);
      const cy = height * (0.48 + (pointer.current.y - 0.5) * 0.04);
      const min = Math.min(width, height);

      const glow = drawingContext.createRadialGradient(cx, cy, 0, cx, cy, min * 0.54);
      glow.addColorStop(0, "rgba(64, 91, 255, .2)");
      glow.addColorStop(0.38, "rgba(68, 39, 180, .09)");
      glow.addColorStop(1, "rgba(0, 0, 0, 0)");
      drawingContext.fillStyle = glow;
      drawingContext.fillRect(0, 0, width, height);

      drawingContext.globalCompositeOperation = "screen";
      for (let ring = 0; ring < 34; ring += 1) {
        const progress = ring / 33;
        const radius = min * (0.07 + progress * 0.42);
        const points = 160;
        drawingContext.beginPath();
        for (let index = 0; index <= points; index += 1) {
          const angle = (index / points) * Math.PI * 2;
          const wave = Math.sin(angle * 3 + time * 0.9 + progress * 6) * 0.05;
          const fold = Math.cos(angle * 5 - time * 0.55 + ring * 0.17) * 0.025;
          const breath = 1 + Math.sin(time * 0.45 + progress * 4) * 0.035;
          const rx = radius * (1.18 + wave + fold) * breath;
          const ry = radius * (0.73 - wave * 0.34 + fold) * breath;
          const x = cx + Math.cos(angle) * rx + Math.sin(angle * 2 + time) * min * 0.012 * progress;
          const y = cy + Math.sin(angle) * ry + Math.cos(angle * 3 - time) * min * 0.01 * progress;
          if (index === 0) drawingContext.moveTo(x, y);
          else drawingContext.lineTo(x, y);
        }
        const hue = 220 + progress * 35;
        drawingContext.strokeStyle = `hsla(${hue}, 100%, ${62 + progress * 10}%, ${0.32 - progress * 0.21})`;
        drawingContext.lineWidth = ring % 7 === 0 ? 1.15 : 0.52;
        drawingContext.stroke();
      }
      drawingContext.globalCompositeOperation = "source-over";
    }

    const draw = () => {
      raf = 0;
      renderFrame();
      frame += 1;
      if (isVisible && documentVisible) raf = requestAnimationFrame(draw);
    };

    const start = () => {
      if (!reduceMotion && isVisible && documentVisible && !raf) {
        raf = requestAnimationFrame(draw);
      }
    };

    const stop = () => {
      if (!raf) return;
      cancelAnimationFrame(raf);
      raf = 0;
    };

    const onPointerMove = (event: PointerEvent) => {
      const rect = canvas.getBoundingClientRect();
      pointer.current = {
        x: (event.clientX - rect.left) / rect.width,
        y: (event.clientY - rect.top) / rect.height,
      };
    };

    const observer = new IntersectionObserver(([entry]) => {
      isVisible = entry.isIntersecting;
      if (isVisible) start();
      else stop();
    }, { threshold: 0.01 });

    const onVisibilityChange = () => {
      documentVisible = !document.hidden;
      if (documentVisible) start();
      else stop();
    };

    resize();
    observer.observe(canvas);
    start();
    window.addEventListener("resize", resize);
    document.addEventListener("visibilitychange", onVisibilityChange);
    canvas.addEventListener("pointermove", onPointerMove);
    return () => {
      stop();
      observer.disconnect();
      window.removeEventListener("resize", resize);
      document.removeEventListener("visibilitychange", onVisibilityChange);
      canvas.removeEventListener("pointermove", onPointerMove);
    };
  }, []);

  return <canvas ref={canvasRef} className="signal-field" aria-hidden="true" />;
}
