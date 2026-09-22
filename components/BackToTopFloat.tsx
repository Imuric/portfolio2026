"use client";

import { useEffect, useState } from "react";
import { ArrowUp } from "lucide-react";

export default function BackToTopFloat() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setVisible(window.scrollY > 300);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <button
      className={`back-top-float ${visible ? "visible" : ""}`}
      id="backTopFloat"
      aria-label="Back to top"
      title="Back to top"
      onClick={scrollToTop}
      style={{ display: visible ? "inline-flex" : "none", alignItems: "center", justifyContent: "center" }}
    >
      <ArrowUp size={20} strokeWidth={2.5} />
    </button>
  );
}
