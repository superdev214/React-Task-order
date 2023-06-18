import React, { useEffect } from "react";
import HomeFooter from "./HomeFooter";
import Slogan from "./Slogan";
import TaskCategories from "./TaskCategories";
import "./Home.scss";

export default function Home() {
  useEffect(() => {
    // Disable overscroll behavior on the body element
    document.body.style.overscrollBehaviorY = "contain";

    // Enable overscroll behavior on component unmount
    return () => {
      document.body.style.overscrollBehaviorY = "auto";
    };
  }, []);

  return (
    <main>
      <Slogan />
      <TaskCategories />
      <HomeFooter />
    </main>
  );
}
