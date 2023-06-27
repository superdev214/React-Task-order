import { NavLink } from "react-router-dom";
import taskStatusDisplayBadge from "../../Enum/TaskStatus";
import "../TaskCards.scss";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getBrowsetask } from "../../../../redux/actions";
import TaskCardItem from "../TaskCardItem";

export default function BrowseTaskCards(props) {

  const myPosts = useSelector(state => state.task.filteredTasks); 
  return (
    <>
      {myPosts &&
        myPosts.length > 0 &&
         myPosts.map((task, index) => {
          return (
            <TaskCardItem key={index} task={task} />
          );
        })}
    </>
  );
}
