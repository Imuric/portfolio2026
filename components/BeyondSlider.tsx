"use client";

import { useRef, useState, useEffect } from "react";
import { ArrowLeft, ArrowRight } from "lucide-react";

const IMAGES = [
  {
    src: "https://via.placeholder.com/600x600/E9EAEB/181D27?text=Travel+1",
    alt: "Travel Photo 1",
  },
  {
    src: "https://via.placeholder.com/600x600/D5D7DA/181D27?text=Travel+2",
    alt: "Travel Photo 2",
  },
  {
    src: "https://via.placeholder.com/600x600/E9EAEB/181D27?text=Travel+3",
    alt: "Travel Photo 3",
  },
];

export default function BeyondSlider() {
  const gridRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const scrollAmt = () => (gridRef.current ? gridRef.current.clientWidth : 0);

  const handleNext = () => {
    if (gridRef.current) {
      gridRef.current.scrollBy({ left: scrollAmt(), behavior: "smooth" });
    }
  };

  const handlePrev = () => {
    if (gridRef.current) {
      gridRef.current.scrollBy({ left: -scrollAmt(), behavior: "smooth" });
    }
  };

  const handleDotClick = (index: number) => {
    if (gridRef.current) {
      gridRef.current.scrollTo({
        left: index * scrollAmt(),
        behavior: "smooth",
      });
      setActiveIndex(index);
    }
  };

  useEffect(() => {
    const grid = gridRef.current;
    if (!grid) return;

    const handleScroll = () => {
      const amt = grid.clientWidth;
      if (amt > 0) {
        const idx = Math.round(grid.scrollLeft / amt);
        setActiveIndex(idx);
      }
    };

    grid.addEventListener("scroll", handleScroll, { passive: true });
    return () => grid.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <div className="beyond-carousel">
        <button
          className="beyond-nav prev"
          aria-label="Previous"
          onClick={handlePrev}
          style={{ display: "inline-flex", alignItems: "center", justifyContent: "center" }}
        >
          <ArrowLeft size={18} strokeWidth={2} />
        </button>
        <div className="beyond-grid" ref={gridRef}>
          {IMAGES.map((img, idx) => (
            <div key={idx} className="beyond-item">
              <img src={img.src} alt={img.alt} />
            </div>
          ))}
        </div>
        <button
          className="beyond-nav next"
          aria-label="Next"
          onClick={handleNext}
          style={{ display: "inline-flex", alignItems: "center", justifyContent: "center" }}
        >
          <ArrowRight size={18} strokeWidth={2} />
        </button>
      </div>

      <div className="beyond-dots">
        {IMAGES.map((_, idx) => (
          <span
            key={idx}
            className={`beyond-dot ${idx === activeIndex ? "active" : ""}`}
            onClick={() => handleDotClick(idx)}
          />
        ))}
      </div>
    </>
  );
}
