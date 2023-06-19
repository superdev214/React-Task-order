import { useEffect, useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import ChatIcon from "../../assets/images/ChatIcon";
import HomeIcon from "../../assets/images/HomeIcon";
import SearchIcon from "../../assets/images/SearchIcon";
import TaskListIcon from "../../assets/images/TaskListIcon";
import UserProfileIcon from "../../assets/images/UserProfileIcon";

export default function NavigationBar() {
  const [activeItem, setActiveItem] = useState(window.location.pathname);

  const { pathname } = useLocation();

  useEffect(() => {
    setActiveItem(pathname);
  }, [pathname]);

  return (
    <nav className="footer-nav">
      <ul className="nav justify-content-between">
        <li className={"nav-item"} onClick={() => setActiveItem("/home")}>
          <NavLink to={"/home"} className="nav-link px-2 py-0">
            {HomeIcon(activeItem === "/home" && "fill")}
          </NavLink>
        </li>
        <li className={"nav-item"} onClick={() => setActiveItem("/tasks")}>
          <NavLink to={"/tasks"} className="nav-link px-2 py-0">
            {TaskListIcon(activeItem === "/tasks" && "fill")}
          </NavLink>
        </li>
        <li className={"nav-item"} onClick={() => setActiveItem("/search")}>
          <NavLink to={"/search"} className="nav-link px-2 py-0">
            {SearchIcon(activeItem === "/search" && "fill")}
          </NavLink>
        </li>
        <li
          className={
            "nav-item " + (activeItem === "/messages" && "active-item")
          }
          onClick={() => setActiveItem("/messages")}
        >
          <NavLink to={"/messages"} className="nav-link px-2 py-0">
            {ChatIcon(activeItem === "/messages" && "fill")}
          </NavLink>
        </li>
        <li
          className={"nav-item " + (activeItem === "/account" && "active-item")}
          onClick={() => setActiveItem("/account")}
        >
          <NavLink to={"/account"} className="nav-link px-2 py-0">
            {UserProfileIcon(activeItem === "/account" && "fill")}
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}
