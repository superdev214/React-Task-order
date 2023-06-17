import { NavLink } from "react-router-dom";

export default function LocationAccessStep() {
  return (
    <section id="location-access">
      <div
        style={{
          padding: "13px 0",
          borderBottom: "2px solid #F5F7FA",
        }}
      >
        <p className="nav-title">Location</p>
      </div>
      <div className="container">
        <div
          className="text-center"
          style={{ padding: "20px 0", marginBottom: "20px" }}
        >
          <img src="./assets/images/location.png" alt="location" />
        </div>
        <p className="my-20" style={{ fontFamily: "SF Pro Text Bold" }}>
          Location permission required
        </p>
        <p>
          We need GPS access on your phone to be able to post location based
          tasks. To enable; go to settings and turn on location permission.
        </p>
      </div>
      <div className="fixed-bottom">
        <NavLink to={`/home`}>
          <button className="d-block btn btn-green btn-w-350">
            Give access
          </button>
        </NavLink>
      </div>
    </section>
  );
}
