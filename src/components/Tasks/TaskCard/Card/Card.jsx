import { NavLink } from "react-router-dom";
import taskStatusDisplayBadge from "../../Enum/TaskStatus";
import "../TaskCards.scss";

export default function TaskCard({ task }) {
  return (
    <div className="task-cards float">
      <NavLink to={"/task-details"}>
        <div className="t-card pa-20 float">
          <div className="d-flex justify-content-between">
            <p className="font-bold">{task.title}</p>
            <p className="font-bold">SR 650</p>
          </div>
          <div className="mt-10">
            <img src="./assets/images/location-light.png" alt="logo big" />
            <span>{task.location}</span>
          </div>
          <div className="mt-10">
            <img src="./assets/images/calendar-light.png" alt="logo big" />
            <span>{task.date}</span>
          </div>
          <div className="mt-10">
            <img src="./assets/images/time-light.png" alt="logo big" />
            <span>Any time</span>
          </div>
          <div className="d-flex flex justify-content-between items-center mt-10">
            {taskStatusDisplayBadge(task.status)}

            <img src="./assets/images/fly-mark.png" alt="logo big" />
          </div>
        </div>
      </NavLink>
    </div>
  );
}
