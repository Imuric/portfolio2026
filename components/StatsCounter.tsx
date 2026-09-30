"use client";

import { useEffect, useRef, useState } from "react";
import { STATS_DATA } from "@/data";

interface CounterProps {
  target: number;
  suffix: string;
  duration?: number;
  trigger: boolean;
}

function AnimatedCounter({
  target,
  suffix,
  duration = 1900,
  trigger,
}: CounterProps) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!trigger) return;

    let startTime: number | null = null;
    let animationFrameId: number;

    const animate = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const elapsed = timestamp - startTime;
      const progress = Math.min(elapsed / duration, 1);

      // Smooth ease-out cubic curve
      const easeProgress = 1 - Math.pow(1 - progress, 3);
      const currentVal = Math.round(easeProgress * target);

      setCount(currentVal);

      if (progress < 1) {
        animationFrameId = requestAnimationFrame(animate);
      } else {
        setCount(target);
      }
    };

    animationFrameId = requestAnimationFrame(animate);

    return () => cancelAnimationFrame(animationFrameId);
  }, [trigger, target, duration]);

  return (
    <div className="stat-number-wrap">
      <span className="stat-number">{count}</span>
      <span className="stat-suffix">{suffix}</span>
    </div>
  );
}

export default function StatsCounter() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [hasStarted, setHasStarted] = useState(false);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        if (entry.isIntersecting) {
          setHasStarted(true);
          observer.disconnect();
        }
      },
      {
        threshold: 0.2,
      }
    );

    observer.observe(el);

    return () => observer.disconnect();
  }, []);

  return (
    <section className="stats-section reveal-on-scroll" ref={containerRef}>
      <div className="container">
        <div className="stats-grid">
          {STATS_DATA.map((item, idx) => (
            <div key={idx} className="stat-item">
              <AnimatedCounter
                target={item.value}
                suffix={item.suffix}
                trigger={hasStarted}
              />
              <h3 className="stat-label">{item.label}</h3>
              {item.description && (
                <p className="stat-desc">{item.description}</p>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
