import React, { useEffect, useRef, useState } from "react";
import HomeFooter from "./HomeFooter";
import Slogan from "./Slogan";
import TaskCategories from "./TaskCategories";
import "./Home.scss";

export default function Home() {
  const divRef = useRef(null);
  const [showDiv, setShowDiv] = useState(false);
  const [showFullImage, setShowFullImage] = useState(false);
  const [touchedEvent, setTouchedEvent] = useState(true);

  const handleScroll = () => {
    const { scrollTop, scrollHeight, clientHeight } = divRef.current;
    if (scrollTop < 0) {
      setShowDiv(true);
    }
    if (scrollTop > -10) {
      setShowDiv(false);
    }
    if (scrollTop + clientHeight >= scrollHeight && touchedEvent) {
      if (scrollTop + clientHeight >= scrollHeight + 70) {
        setShowFullImage(true);
      }
    } else {
      setShowFullImage(false)
    }
    if (scrollTop + clientHeight < scrollHeight + 70 && touchedEvent === false) {
      setShowFullImage(false)
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
      <Slogan showDiv={showDiv} />
      <TaskCategories />
      <HomeFooter showFullImage={showFullImage} />
    </main>
  );
}
