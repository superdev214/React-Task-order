import { NavLink } from "react-router-dom";
import "./TaskPublished.scss";

export default function TaskPublished() {
  return (
    <div className="TaskPublished">
      <div className="top-bar d-flex align-items-center justify-content-center">
        <p className="text-center nav-title">Published</p>
      </div>
      <div className="container">
        <div className="text-center py-20">
          <img src="./assets/images/published.png" alt="location" />
        </div>
        <p className="mb-20 font-bold">All Done!</p>
        <p className="size-17">
          Your task is posted, here is what will happen next:
        </p>
        <ul>
          <li className="d-flex align-items-center">
            <img src="./assets/images/icons/circle-num1.svg" alt="circle one" />
            <p className="size-17">Taskers will make offers</p>
          </li>
          <li className="d-flex align-items-center">
            <img src="./assets/images/icons/circle-num2.svg" alt="circle two" />
            <p className="size-17">Accept an offer</p>
          </li>
          <li className="d-flex align-items-center">
            <img
              src="./assets/images/icons/circle-num3.svg"
              alt="circle three"
            />
            <p className="size-17">Chat and get it done!</p>
          </li>
        </ul>
      </div>
      <div className="fixed-bottom">
        <NavLink to={"/home"}>
          <button className="d-block btn btn-green btn-w-350">
            Go to my tasks
          </button>
        </NavLink>
      </div>
    </div>
  );
}
