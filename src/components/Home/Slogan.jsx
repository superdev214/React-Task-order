import React from "react";

export default function Slogan({ showDiv }) {
  return (
    <section className="container home-hero">
      {showDiv && (
        <div className="text_gap home-bottom__txt">
          Made for <br /> the community.
        </div>
      )}
      <p id="main" className="home-hero__text">
        Your hybrid platform to outsource your everyday task.
      </p>
    </section>
  );
}
