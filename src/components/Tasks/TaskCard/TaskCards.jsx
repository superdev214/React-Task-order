import { NavLink } from "react-router-dom";
import taskStatusDisplayBadge from "../Enum/TaskStatus";
import "./TaskCards.scss";

export default function TaskCards(props) {
  return (
    <>
      {props.tasks &&
        props.tasks.length > 0 &&
        props.tasks.map((task, index) => {
          return (
            <NavLink to={"/task-details"} key={index}>
              <div className="t-card">
                <div className="d-flex justify-content-between">
                  <p className="font-bold">{task.title}</p>
                  <p className="font-bold">SR 650</p>
                </div>
                <div className="mt-10">
                  <img
                    src="./assets/images/icons/location-light.svg"
                    alt="logo big"
                    style={{ paddingLeft: "1px", paddingRight: "1px" }}
                  />
                  <span>{task.location}</span>
                </div>
                <div className="mt-10">
                  <img
                    src="./assets/images/icons/calendar-light.svg"
                    alt="logo big"
                  />
                  <span>{task.date}</span>
                </div>
                <div className="mt-10">
                  <img
                    src="./assets/images/icons/clock-light.svg"
                    alt="logo big"
                  />
                  <span>Anytime</span>
                </div>
                <div className="d-flex justify-content-between align-items-center mt-10">
                  {taskStatusDisplayBadge(task.status)}
                  <img
                    src="./assets/images/icons/fly-mark.svg"
                    alt="logo big"
                  />
                </div>
              </div>
            </NavLink>
          );
        })}
    </>
  );
}
