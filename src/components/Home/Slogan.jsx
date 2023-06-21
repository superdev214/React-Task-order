import React, { useState, useEffect, useRef } from "react";

export default function Slogan() {
  const [showDiv, setShowDiv] = useState(false);
  const mainDiv = useRef(null);
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY < 0) {
        setShowDiv(true);
      }
      if (window.scrollY > -10) {
        setShowDiv(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <section className="container home-hero">
      {showDiv && (
        <div className="text_gap home-bottom__txt">
          Made for <br /> the community.
        </div>
      )}
      <p id="main" ref={mainDiv} className="home-hero__text">
        Your hybrid platform to outsource your everyday task.
      </p>
    </section>
  );
}
