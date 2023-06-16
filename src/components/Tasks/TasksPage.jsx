import { useState } from "react";
import SecondaryHeader from "../Layouts/Header/SecondaryHeader/SecondaryHeader";
import FilterComponent from "./Filter/TaskStatusFilter";
import TaskCards from "./TaskCard/TaskCards";

let tasks = [
  {
    description: "",
    title: "Test human design",
    status: 0,
    date: "28, October, 2020",
    location: "Khamis Ash Shuara st",
  },
  {
    description: "",
    title: "Test human design 2",
    status: 1,
    date: "28, October, 2020",
    location: "Khamis Ash Shuara st",
  },
  {
    description: "",
    title: "Test human design 3",
    status: 2,
    date: "28, October, 2020",
    location: "Khamis Ash Shuara st",
  },
  {
    description: "",
    title: "Test human design",
    status: 4,
    date: "28, October, 2020",
    location: "Khamis Ash Shuara st",
  },
  {
    description: "",
    title: "Test human design",
    status: 5,
    date: "28, October, 2020",
    location: "Khamis Ash Shuara st",
  },
];
export default function TasksPage() {
  const [status, setStatus] = useState(null);
  const [filterModal, setFilterModal] = useState(false);

  const renderEventView = () => {
    return (
      <>
        <button
          className="bg-transparent border-0"
          onClick={() => setFilterModal(true)}
        >
          <img src="./assets/images/icons/filter.svg" alt="" />
        </button>
      </>
    );
  };

  return (
    <div className="task-page">
      {filterModal && (
        <FilterComponent
          filter={status}
          close={() => setFilterModal(false)}
          onFilter={(value) => setStatus(value)}
        />
      )}
      <SecondaryHeader title="My tasks" appendEvent={renderEventView} />
      <div className={`task-cards scroll-area`}>
        <TaskCards
          tasks={
            status == null
              ? tasks
              : tasks.filter((item) => item.status === status)
          }
        />
      </div>
    </div>
  );
}
