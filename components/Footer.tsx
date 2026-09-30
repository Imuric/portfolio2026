"use client";

import { Mail, Phone, ArrowUp, Heart } from "lucide-react";
import SafeImage from "./SafeImage";
import SocialLinks from "./SocialLinks";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <>
      <section className="status">
        <div className="container status-inner" style={{ justifyContent: "flex-end" }}>
          <button className="back-top" id="backTop" onClick={scrollToTop}>
            Back to top{" "}
            <span className="back-arrow">
              <ArrowUp size={16} strokeWidth={2.5} />
            </span>
          </button>
        </div>
      </section>
      <footer className="footer" id="contact">
        <div className="container">
          <div className="row footer-row">
            <div className="col-md-6 footer-me">
              <div className="me-card">
                <SafeImage
                  src="/assets/home/hero-portrait.png"
                  alt="Prathamesh Patil"
                  className="me-avatar"
                  fallbackSrc="https://via.placeholder.com/100"
                />
                <div>
                  <p className="me-name">Prathamesh Patil</p>
                  <p className="me-role muted">Product Designer</p>
                </div>
              </div>
              <div className="contact-block">
                <p className="contact-label muted">Contact me</p>
                <div className="contact-rows">
                  <a
                    href="mailto:uxbypratham@gmail.com"
                    className="contact-row"
                  >
                    <Mail size={16} strokeWidth={2} />
                    uxbypratham@gmail.com
                  </a>
                  <a href="tel:+918485847584" className="contact-row">
                    <Phone size={16} strokeWidth={2} />
                    (+91) 84858 47584
                  </a>
                </div>
              </div>
            </div>
            <div className="col-md-6 footer-connect">
              <h3 className="connect-title">Let&apos;s Connect</h3>
              <p className="connect-sub">
                Feel free to reach out for collaborations or just a friendly
                hello.
              </p>
              <SocialLinks className="connect-socials" />
            </div>
          </div>
          <div className="footer-bottom">
            <p style={{ display: "inline-flex", alignItems: "center", gap: "6px" }}>
              Made with{" "}
              <Heart
                size={14}
                fill="#ff4d4f"
                color="#ff4d4f"
                className="heart"
              />{" "}
              by Prathamesh
            </p>
          </div>
        </div>
      </footer>
    </>
  );
}
