import { useState } from "react";
import { NavLink } from "react-router-dom";
import Notifications from "../../Notifications/Notifications";

export default function Header() {
  const [modal, setModal] = useState(false);

  return (
    <>
      {modal && <Notifications close={() => setModal(false)} />}

      <header className="header">
        <nav className="navbar">
          <div className="container">
            <NavLink
              to={"/home"}
              className="navbar-brand d-flex align-items-center"
            >
              <img src="./assets/images/logo.svg" alt="logo" />
            </NavLink>
            <img
              src="./assets/images/icons/bell.svg"
              alt="bell"
              onClick={() => setModal(true)}
            />
          </div>
        </nav>
      </header>
    </>
  );
}
