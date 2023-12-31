import { NavLink } from "react-router-dom";

export default function LocationAccessStep() {
  return (
    <section id="location-access">
      <div className="top-bar border-bottom d-flex align-items-center justify-content-center">
        <p className="nav-title">Location</p>
      </div>
      <div className="container">
        <div
          className="text-center"
          style={{ padding: "20px 0", marginBottom: "20px" }}
        >
          <img src="./assets/images/location.png" alt="location" />
        </div>
        <p className="my-20 font-bold">Location permission required</p>
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
