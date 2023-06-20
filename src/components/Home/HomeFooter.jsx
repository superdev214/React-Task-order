import React, { useState, useEffect } from 'react';
import { debounce } from 'lodash';

export default function HomeFooter() {
  const [showFullImage, setShowFullImage] = useState(false);

  useEffect(() => {
    let bottomValue;
    let isScrolling =true;
    const handleTouchEnd = () => {
      isScrolling = false;
      setShowFullImage(false);
    };
    const trackScrolling = () => {
      const { scrollTop, clientHeight, scrollHeight } = document.documentElement;
      if (scrollTop + clientHeight >= scrollHeight) {
        console.log("true");
        bottomValue = scrollTop;
        setShowFullImage(true);
      } else {
        if (showFullImage === true && isScrolling === false) {
          console.log("false");
          setShowFullImage(false);
        }
      }
    };
    document.addEventListener('touchend', handleTouchEnd);
    window.addEventListener('scroll', trackScrolling);
    return () => {
      window.removeEventListener('scroll', trackScrolling);
    };
  }, [showFullImage]);

  return (
    <section className={`home-bottom`} style={{ paddingBottom: "150px" }}>
      <div className="container">
        <p className="home-bottom__txt">
          Get your
          <br />
          tasks done.
        </p>
      </div>
      <div id='imagediv' className={`${showFullImage ? 'show-full' : 'show-half'}`}>
        <img
          className="home-bottom__img image-container-img"
          style={{ paddingTop: "20px", paddingBottom: "20px" }}
          src="./assets/images/earth.png"
          alt="earth"
        />
      </div>
    </section>
  );
}
