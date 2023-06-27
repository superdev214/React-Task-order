import { NavLink } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import "./TaskCards.scss";
import taskStatusDisplayBadge from "../Enum/TaskStatus";
import { setTaskId } from "../../../redux/actions";

export default function TaskCardItem(props) {
  const task = props?.task
  const dispatch = useDispatch();

  
  return <>
    <NavLink to={"/task-details"} onClick={() => dispatch(setTaskId(task?.id))}>
      <div className="t-card">
        <div className="d-flex justify-content-between">
          <p className="font-bold">{task?.task_title}</p>
          <p className="font-bold">SR {task?.task_total_budget}</p>
        </div>
        <div className="mt-10">
          <img
            src="./assets/images/icons/location-light.svg"
            alt="logo big"
            style={{ paddingLeft: "1px", paddingRight: "1px" }}
          />
          <span>{task?.address ? task?.address: "Khamis Ash Shuara st, " + task?.latitude + " " + task?.longitude}</span>
        </div>
        <div className="mt-10">
          <img
            src="./assets/images/icons/calendar-light.svg"
            alt="logo big"
          />
          <span>{task?.task_complete_date}</span>
        </div>
        <div className="mt-10">
          <img
            src="./assets/images/icons/clock-light.svg"
            alt="logo big"
          />
          <span>Anytime</span>
        </div>
        <div className="d-flex justify-content-between align-items-center mt-10">
          {taskStatusDisplayBadge(task?.task_going_status)}
          <img
            src="./assets/images/icons/fly-mark.svg"
            alt="logo big"
          />
        </div>
      </div>
    </NavLink>
  </>
}