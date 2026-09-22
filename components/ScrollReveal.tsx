"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

export default function ScrollReveal() {
  const pathname = usePathname();

  useEffect(() => {
    // Delay slightly to let the DOM settle after route transition
    const timer = setTimeout(() => {
      const io = new IntersectionObserver(
        (entries) => {
          entries.forEach((en) => {
            if (en.isIntersecting) {
              en.target.classList.add("in");
              io.unobserve(en.target);
            }
          });
        },
        { threshold: 0.12 }
      );

      const elements = document.querySelectorAll(
        ".reveal-on-scroll, .work-card, .leader-card, .testi, .section-head, article"
      );

      elements.forEach((el) => {
        el.classList.add("reveal");
        io.observe(el);
      });

      return () => {
        io.disconnect();
      };
    }, 50);

    return () => clearTimeout(timer);
  }, [pathname]);

  return null;
}

