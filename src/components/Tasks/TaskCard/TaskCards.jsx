import { NavLink } from "react-router-dom";
import taskStatusDisplayBadge from "../Enum/TaskStatus";
import "./TaskCards.scss";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { postTaskget } from "../../../redux/actions";
import TaskCardItem from "./TaskCardItem";

export default function TaskCards(props) {

  const dispatch = useDispatch();
  const myposts = useSelector(state => state.postApi.categories.data)

  useEffect(() => {
    dispatch(postTaskget());
  }, [dispatch])

  return (
    <>
      {myposts &&
        myposts.length > 0 &&
         myposts.map((task, index) => {
          return (
            <NavLink to={"/task-details"} key={index}>
              <div className="t-card">
                <div className="d-flex justify-content-between">
                  <p className="font-bold">{task.task_title}</p>
                  <p className="font-bold">SR {task.task_total_budget}</p>
                </div>
                <div className="mt-10">
                  <img
                    src="./assets/images/icons/location-light.svg"
                    alt="logo big"
                    style={{ paddingLeft: "1px", paddingRight: "1px" }}
                  />
                  <span>{task.address}</span>
                </div>
                <div className="mt-10">
                  <img
                    src="./assets/images/icons/calendar-light.svg"
                    alt="logo big"
                  />
                  <span>{task.task_complete_date}</span>
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
            // <TaskCardItem key={index} task={task} />
          );
        })}
    </>
  );
}
