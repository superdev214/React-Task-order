import { NavLink } from "react-router-dom";

export default function ProfileHeader(props) {
  return (
    <header className="header">
      <nav className={`navbar border-bottom p-3`} style={{ height: "auto" }}>
        <NavLink to={props.redirect || "/account"}>
          <button
            className="position-absolute bg-transparent border-0"
            style={{ left: "20px", top: "12px" }}
          >
            <img src="./assets/images/icons/arrow-back.svg" alt="close" />
          </button>
        </NavLink>
        <p className="nav-title">{props.title}</p>
        <div>{props.appendEvent && props.appendEvent()}</div>
      </nav>
    </header>
  );
}
