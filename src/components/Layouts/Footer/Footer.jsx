import { NavLink } from "react-router-dom";
import NavigationBar from "../NavigationBar";
import "./Footer.scss";

export default function Footer() {
  return (
    <footer className="footer mt-auto">
      <div className="container">
        <NavLink to={`/new-task`}>
          <button className="d-block btn btn-blue btn-w-350 my-2 mx-auto">
            I need something else
          </button>
        </NavLink>
        <NavigationBar />
      </div>
    </footer>
  );
}
