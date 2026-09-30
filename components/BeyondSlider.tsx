"use client";

import { useRef, useState, useEffect, useCallback } from "react";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { BEYOND_IMAGES } from "@/data";

const TOTAL_DOTS = 3;
const AUTO_SCROLL_DELAY = 3800; // 3.8 seconds

export default function BeyondSlider() {
  const gridRef = useRef<HTMLDivElement>(null);
  const [activeDot, setActiveDot] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  // Computes single-card width + gap for precise item-by-item scrolling
  const getScrollStep = useCallback(() => {
    const grid = gridRef.current;
    if (!grid) return 0;
    const firstChild = grid.firstElementChild as HTMLElement | null;
    if (!firstChild) return grid.clientWidth;
    const computed = window.getComputedStyle(grid);
    const gap = parseFloat(computed.gap || computed.columnGap) || 20;
    return firstChild.offsetWidth + gap;
  }, []);

  const handleNext = useCallback(() => {
    const grid = gridRef.current;
    if (!grid) return;
    const step = getScrollStep();
    const maxScroll = grid.scrollWidth - grid.clientWidth;

    if (grid.scrollLeft >= maxScroll - 15) {
      grid.scrollTo({ left: 0, behavior: "smooth" });
    } else {
      grid.scrollBy({ left: step, behavior: "smooth" });
    }
  }, [getScrollStep]);

  const handlePrev = useCallback(() => {
    const grid = gridRef.current;
    if (!grid) return;
    const step = getScrollStep();
    const maxScroll = grid.scrollWidth - grid.clientWidth;

    if (grid.scrollLeft <= 15) {
      grid.scrollTo({ left: maxScroll, behavior: "smooth" });
    } else {
      grid.scrollBy({ left: -step, behavior: "smooth" });
    }
  }, [getScrollStep]);

  // Maps the 3 dots to start (0%), middle (50%), and end (100%) of the 5-image gallery
  const handleDotClick = (dotIndex: number) => {
    const grid = gridRef.current;
    if (!grid) return;
    const maxScroll = grid.scrollWidth - grid.clientWidth;
    if (maxScroll <= 0) return;

    let targetLeft = 0;
    if (dotIndex === 1) {
      targetLeft = Math.round(maxScroll / 2);
    } else if (dotIndex === 2) {
      targetLeft = maxScroll;
    }

    grid.scrollTo({
      left: targetLeft,
      behavior: "smooth",
    });
    setActiveDot(dotIndex);
  };

  // Synchronize the 3-dot pagination based on the user's scroll position
  useEffect(() => {
    const grid = gridRef.current;
    if (!grid) return;

    let timeoutId: ReturnType<typeof setTimeout>;

    const handleScroll = () => {
      clearTimeout(timeoutId);
      timeoutId = setTimeout(() => {
        const maxScroll = grid.scrollWidth - grid.clientWidth;
        if (maxScroll > 0) {
          const ratio = grid.scrollLeft / maxScroll;
          const mappedDot = Math.min(
            TOTAL_DOTS - 1,
            Math.max(0, Math.round(ratio * (TOTAL_DOTS - 1)))
          );
          setActiveDot(mappedDot);
        }
      }, 40);
    };

    grid.addEventListener("scroll", handleScroll, { passive: true });
    return () => {
      clearTimeout(timeoutId);
      grid.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Automatic scrolling after delay, paused on hover or user interaction
  useEffect(() => {
    if (isPaused) return;

    const intervalId = setInterval(() => {
      handleNext();
    }, AUTO_SCROLL_DELAY);

    return () => clearInterval(intervalId);
  }, [isPaused, handleNext]);

  return (
    <>
      <div
        className="beyond-carousel"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
        onTouchStart={() => setIsPaused(true)}
        onTouchEnd={() => {
          setTimeout(() => setIsPaused(false), 2000);
        }}
      >
        <button
          className="beyond-nav prev"
          aria-label="Previous photo"
          onClick={handlePrev}
          type="button"
        >
          <ArrowLeft size={18} strokeWidth={2.2} />
        </button>

        <div
          className="beyond-grid"
          ref={gridRef}
          tabIndex={0}
          aria-label="Beyond work photo gallery"
        >
          {BEYOND_IMAGES.map((img) => (
            <div key={img.id} className="beyond-item">
              <img src={img.src} alt={img.alt} loading="lazy" />
              <div className="beyond-item-overlay">
                {img.tag && <span className="beyond-item-tag">{img.tag}</span>}
                <h4 className="beyond-item-title">{img.title}</h4>
              </div>
            </div>
          ))}
        </div>

        <button
          className="beyond-nav next"
          aria-label="Next photo"
          onClick={handleNext}
          type="button"
        >
          <ArrowRight size={18} strokeWidth={2.2} />
        </button>
      </div>

      <div className="beyond-dots" role="tablist" aria-label="Gallery sections">
        {Array.from({ length: TOTAL_DOTS }).map((_, idx) => (
          <button
            key={idx}
            type="button"
            role="tab"
            aria-selected={idx === activeDot}
            aria-label={`Go to section ${idx + 1} of ${TOTAL_DOTS}`}
            className={`beyond-dot ${idx === activeDot ? "active" : ""}`}
            onClick={() => handleDotClick(idx)}
          />
        ))}
      </div>
    </>
  );
}
