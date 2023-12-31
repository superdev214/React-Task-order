import { NavLink } from "react-router-dom";
import NavigationBar from "../NavigationBar";
import "./Footer.scss";

export default function Footer() {
  const verify_user = localStorage.getItem("user_id");
  return (
    <footer className="footer mt-auto">
      <div className="container">
        <NavLink to={ verify_user === null ? `/` :`/new-task?id=0`}>
          <button className="d-block btn btn-blue btn-w-350 my-2 mx-auto">
            I need something else
          </button>
        </NavLink>
        <NavigationBar />
      </div>
    </footer>
  );
}
