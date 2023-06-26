import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function Slogan() {
  const navigate = useNavigate()

  useEffect(() => {
    const overscrollDiv = document.getElementById("main")
    if(overscrollDiv){
      overscrollDiv.scrollIntoView({ behavior: "instant", block: "start" });
      console.log("ok ",overscrollDiv)
    }
  }, [navigate])

  return (
    <section className="container home-hero">
      <div className="text_gap home-bottom__txt">
        Made for <br /> the community.
      </div>
      <p id="main" className="home-hero__text">
        Your hybrid platform to outsource your everyday task.
      </p>
    </section>
  );
}
