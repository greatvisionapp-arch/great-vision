import "./features.css";
import { useEffect } from "react";
import { FaStar, FaWifi, FaCheckCircle, FaRocket } from "react-icons/fa";

export default function Features() {
  useEffect(() => {
  const cards = document.querySelectorAll<HTMLElement>(".feature-card");

  cards.forEach(card => {
    card.addEventListener("mousemove", (e: MouseEvent) => {
      const r = card.getBoundingClientRect();
      card.style.setProperty("--x", `${e.clientX - r.left}px`);
      card.style.setProperty("--y", `${e.clientY - r.top}px`);
    });
  });
}, []);


  return (
    <section className="features">
      <div className="features-inner">
        {/* HEADING */}
        <div className="features-heading">
          <div className="features-title badge-title">
            <FaStar className="badge-icon" />
            Features
          </div>
        </div>

        <p className="features-sub">
          Powerful features designed for performance, trust, and scale.
        </p>

        {/* GRID */}
        <div className="features-grid">
          <div className="feature-card">
            <div className="feature-icon blue">
              <FaStar />
            </div>
            <p>18+ years of proven industry experience.</p>
            <h3>Trusted Experience</h3>
          </div>

          <div className="feature-card">
            <div className="feature-icon green">
              <FaWifi />
            </div>
            <p>Strong offline presence with modern online reach.</p>
            <h3>Offline + Online</h3>
          </div>

          <div className="feature-card">
            <div className="feature-icon purple">
              <FaCheckCircle />
            </div>
            <p>Only reliable and certified electrical solutions.</p>
            <h3>Quality Products</h3>
          </div>

          <div className="feature-card">
            <div className="feature-icon orange">
              <FaRocket />
            </div>
            <p>Built to scale with long-term support.</p>
            <h3>Future Ready</h3>
          </div>
        </div>
      </div>
    </section>
  );
}
