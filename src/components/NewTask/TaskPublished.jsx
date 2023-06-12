import { NavLink } from "react-router-dom";
import "./TaskPublished.scss";

export default function TaskPublished() {
  return (
    <div className="TaskPublished">
      <div className="py-13">
        <p className="text-center font-bold">Published</p>
      </div>
      <div className="container">
        <div className="text-center py-20">
          <img src="./assets/images/published.png" alt="location" />
        </div>
        <p className="mb-20 font-bold">All Done!</p>
        <p>Your task is posted, here is what will happen next:</p>
        <ul>
          <li>
            <span>1</span>
            Taskers will make offers
          </li>
          <li>
            <span>2</span>
            Accept an offer
          </li>
          <li>
            <span>3</span>
            Chat and get it done!
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
