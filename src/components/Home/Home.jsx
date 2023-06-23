import React, { useEffect, useRef, useState } from "react";
import HomeFooter from "./HomeFooter";
import Slogan from "./Slogan";
import TaskCategories from "./TaskCategories";
import "./Home.scss";

export default function Home() {
  const divRef = useRef(null);
  const [touchedEvent, setTouchedEvent] = useState(true);

  const handleScroll = () => {
    const { scrollTop, scrollHeight, clientHeight } = divRef.current;
    if (scrollTop < 0 && !touchedEvent) {
      divRef.current.scrollTo({ top: 140, behavior: "instant" });
      setTouchedEvent(true)
    }
    if (scrollTop < 140 && !touchedEvent) {
      divRef.current.scrollTo({ top: 140, behavior: 'auto' });
      setTouchedEvent(true)
    }
    if (scrollTop + clientHeight > scrollHeight - 70 && touchedEvent === false) {
      const img = document.getElementById('imagediv');
      const scrollPosition = (img.scrollHeight / 2) - 70;
      divRef.current.scrollTo({ top: scrollPosition });
      setTouchedEvent(true);
    }
  };

  const trackScrolling = () => {
    setTouchedEvent(false);
  }

  useEffect(() => {
    // Disable overscroll behavior on the body element
    document.body.style.overscrollBehaviorY = "contain";

    // Enable overscroll behavior on component unmount
    return () => {
      document.body.style.overscrollBehaviorY = "auto";
    };
  }, []);

  return (
    <main ref={divRef} id="main_wrapper" onScroll={handleScroll} onTouchEnd={trackScrolling}>
      <Slogan />
      <TaskCategories />
      <HomeFooter />
    </main>
  );
}
