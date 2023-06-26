import React from "react";

export default function HomeFooter({ showFullImage }) {
  return (
    <section className={`home-bottom`} style={{ paddingBottom: "150px" }}>
      <div className="container">
        <p className="home-bottom__txt">
          Get your
          <br />
          tasks done.
        </p>
      </div>
      <div
        id="imagediv"
        className="earth-image-wrapper"
      >
        <img
          className="home-bottom__img image-container-img"
          style={{ paddingTop: "20px", paddingBottom: "40px" }}
          src="./assets/images/earth.png"
          alt="earth"
        />
      </div>
    </section>
  );
}
