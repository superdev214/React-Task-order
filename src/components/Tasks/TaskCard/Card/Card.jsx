import { NavLink } from "react-router-dom";
import taskStatusDisplayBadge from "../../Enum/TaskStatus";
import "../TaskCards.scss";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getBrowsetask } from "../../../../redux/actions";
import TaskCardItem from "../TaskCardItem";

export default function BrowseTaskCards(props) {

  const dispatch = useDispatch();
  const myposts = useSelector(state => state.postApi.categories)
  useEffect(() => {
    dispatch(getBrowsetask())
  }, [dispatch])

  return (
    <>
      {myposts &&
        myposts.length > 0 &&
         myposts.map((task, index) => {
          return (
            <TaskCardItem key={index} task={task} />
          );
        })}
    </>
  );
}
