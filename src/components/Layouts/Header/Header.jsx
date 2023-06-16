import { NavLink } from "react-router-dom";

export default function Header() {
  return (
    <header className="header">
      <nav className="navbar">
        <div className="container">
          <NavLink
            to={"/home"}
            className="navbar-brand d-flex align-items-center"
          >
            <img src="./assets/images/logo.svg" alt="logo" />
          </NavLink>
          <button className="btn btn-bell" type="button">
            <img src="./assets/images/icons/bell.svg" alt="logo" />
          </button>
        </div>
      </nav>
    </header>
  );
}
