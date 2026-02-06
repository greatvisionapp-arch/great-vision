import React from "react";
import "./Community.css";

const TOP_BOXES = [
  { name: "Verma Electric", msg: "Building together,\npowering ideas ⚡" },
  { name: "Sharma Power", msg: "Reliable solutions\nfor modern needs" },
  { name: "Patna Grid", msg: "Smart energy\nstrong networks" },
  { name: "Singh Works", msg: "Crafting quality\nwith trust" },
];

const BOTTOM_BOXES = [
  { name: "Kumar Systems", msg: "Innovating daily\nfor tomorrow" },
  { name: "Apex Electric", msg: "Precision &\nperformance" },
  { name: "Nova Tech", msg: "Future-ready\ninfrastructure" },
  { name: "Unity Power", msg: "Connected minds,\nconnected grids" },
];

export default function Community() {
  const handleMove = (
    e: React.MouseEvent<HTMLDivElement, MouseEvent>
  ) => {
    const el = e.currentTarget;
    const r = el.getBoundingClientRect();

    el.style.setProperty("--x", `${e.clientX - r.left}px`);
    el.style.setProperty("--y", `${e.clientY - r.top}px`);
  };

  const scrollToCommunity = () => {
    document
      .getElementById("community")
      ?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      className="community"
      id="community"
      style={{ scrollMarginTop: "90px" }}   // header offset
    >
      {/* CARD */}
      <div
        className="community-card"
        onMouseMove={handleMove}
      >
        <h2 className="community-title">
          Built by the community,<br />for the community
        </h2>

        <p className="community-desc">
          Join developers, designers, and creators building together.
          Share ideas, get support, and grow faster.
        </p>

        <div className="community-actions">
          <button
            className="community-btn primary"
            onClick={scrollToCommunity}
          >
            Join Community
          </button>

          <button className="community-btn">Learn More</button>
        </div>
      </div>

      {/* LOOP */}
      <div className="loop-wrapper">
        <div className="loop left">
          <div className="track">
            {[...TOP_BOXES, ...TOP_BOXES].map((b, i) => (
              <Box key={`top-${i}`} {...b} />
            ))}
          </div>
        </div>

        <div className="loop right">
          <div className="track">
            {[...BOTTOM_BOXES, ...BOTTOM_BOXES].map((b, i) => (
              <Box key={`bottom-${i}`} {...b} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function Box({ name, msg }: { name: string; msg: string }) {
  const handleMove = (
    e: React.MouseEvent<HTMLDivElement, MouseEvent>
  ) => {
    const el = e.currentTarget;
    const r = el.getBoundingClientRect();

    el.style.setProperty("--x", `${e.clientX - r.left}px`);
    el.style.setProperty("--y", `${e.clientY - r.top}px`);
  };

  return (
    <div
      className="box"
      onMouseMove={handleMove}
    >
      <strong>{name}</strong>
      <div>
        {msg.split("\n").map((l, i) => (
          <span key={i}>{l}</span>
        ))}
      </div>
    </div>
  );
}
