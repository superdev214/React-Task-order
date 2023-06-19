import { useState } from "react";
import { NavLink, useSearchParams } from "react-router-dom";
import Notifications from "../../../Notifications/Notifications";
import "./SecondaryHeader.scss";

export default function SecondaryHeader(props) {
  const [searchParams] = useSearchParams();
  const [search, setSearch] = useState(searchParams.get("query") || "");
  const [modal, setModal] = useState(false);

  return (
    <>
      {modal && <Notifications close={() => setModal(false)} />}

      <header className="secondary-header">
        <nav
          className={`navbar-top ${
            props.hideSearch ? "border-bottom short" : ""
          }`}
        >
          <div className="top-bar px-20 d-flex justify-content-between align-items-center">
            <div style={{ width: "25%" }}>
              {props.appendEvent && props.appendEvent()}
            </div>
            <p className="nav-title">{props.title}</p>
            <div style={{ width: "25%" }} className="text-end">
              <img
                src="./assets/images/icons/bell.svg"
                alt="bell"
                onClick={() => setModal(true)}
              />
            </div>
          </div>
          {!props.hideSearch && (
            <div className="search position-relative w-100 py-10 px-20">
              <NavLink
                className="position-absolute"
                to={`/search?query=${search}`}
              >
                <img src="./assets/images/icons/search.svg" alt="" />
              </NavLink>
              <input
                className="search"
                type="text"
                placeholder="Search"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
              />
            </div>
          )}
        </nav>
      </header>
    </>
  );
}
