"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { ArrowUpRight, Menu, X } from "lucide-react";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  const toggleNav = () => setIsOpen((prev) => !prev);
  const closeNav = () => setIsOpen(false);

  return (
    <header className="nav" id="siteNav">
      <div className="container nav-inner">
        <Link href="/" className="brand" onClick={closeNav}>
          Prathamesh Patil
        </Link>
        <button
          className="nav-toggle"
          aria-expanded={isOpen}
          aria-controls="primaryNav"
          aria-label="Toggle navigation"
          onClick={toggleNav}
          style={{ display: "inline-flex", alignItems: "center", justifyContent: "center" }}
        >
          {isOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
        <nav
          id="primaryNav"
          className={`primary-nav ${isOpen ? "open" : ""}`}
        >
          <Link
            href="/#work"
            className={`nav-link ${pathname === "/" ? "is-active" : ""}`}
            onClick={closeNav}
          >
            Projects
          </Link>
          <Link
            href="/about"
            className={`nav-link ${pathname === "/about" ? "is-active" : ""}`}
            onClick={closeNav}
          >
            About
          </Link>
          <Link
            href="/experiments"
            className={`nav-link ${pathname === "/experiments" ? "is-active" : ""}`}
            onClick={closeNav}
          >
            Experiments
          </Link>
          <a
            href="https://writing.imuric.com"
            className="nav-link"
            target="_blank"
            rel="noopener noreferrer"
            onClick={closeNav}
            style={{ display: "inline-flex", alignItems: "center", gap: "4px" }}
          >
            Writings
            <ArrowUpRight size={14} />
          </a>
          <a
            href="https://resume.imuric.com"
            className="btn btn-primary btn-sm"
            id="resumeBtn"
            target="_blank"
            rel="noopener noreferrer"
            onClick={closeNav}
            style={{ display: "inline-flex", alignItems: "center", gap: "6px" }}
          >
            Resume
            <ArrowUpRight size={14} strokeWidth={2} />
          </a>
        </nav>
      </div>
    </header>
  );
}
