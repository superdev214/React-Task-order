import { useState } from "react";
import { NavLink, useSearchParams } from "react-router-dom";
import Notifications from "../../../Notifications/Notifications";
import "./SecondaryHeader.scss";

export default function SecondaryHeader(props) {
  const [searchParams] = useSearchParams();
  const [search, setSearch] = useState(searchParams.get("query") || "");
  const [modal, setModal] = useState(false);

  return (
    <div>
      {modal && <Notifications close={() => setModal(false)} />}
      <header className="secondary-header">
        <nav
          className={`navbar-top ${
            props.hideSearch ? "border-bottom short" : ""
          }`}
        >
          <div className="p d-flex justify-content-between align-items-center">
            <div style={{ width: "25%" }}>
              {props.appendEvent && props.appendEvent()}
            </div>
            <p className="font-bold nav-title">{props.title}</p>
            <div style={{ width: "25%" }} className="text-end">
              <img
                src="./assets/images/icons/bell.svg"
                alt=""
                onClick={() => setModal(true)}
              />
            </div>
          </div>
          {!props.hideSearch && (
            <div
              className="p search position-relative"
              style={{ width: "100%" }}
            >
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
    </div>
  );
}
