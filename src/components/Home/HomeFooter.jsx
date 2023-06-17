export default function HomeFooter() {
  return (
    <section className="home-bottom" style={{ paddingBottom: "150px" }}>
      <div className="container">
        <p className="home-bottom__txt">
          Get your
          <br />
          tasks done.
        </p>
      </div>
      <img
        className="home-bottom__img"
        style={{ paddingTop: "20px", paddingBottom: "20px" }}
        src="./assets/images/earth.png"
        alt="earth"
      />
    </section>
  );
}
