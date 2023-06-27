import { useEffect, useState } from "react";
import SecondaryHeader from "../Layouts/Header/SecondaryHeader/SecondaryHeader";
import FilterComponent from "../Tasks/Filter/TaskFilter";
import TaskCards from "../Tasks/TaskCard/TaskCards";
import CarouselComponent from "../shared/carousel/CarouselComponent";
import MapComponent from "../shared/map/MapComponent";
import BrowseTaskCards from "../Tasks/TaskCard/Card/Card";
import { useDispatch, useSelector } from "react-redux";
import { getBrowsetask } from "../../redux/actions";
import TaskCardItem from "../Tasks/TaskCard/TaskCardItem";
import { chooseTask } from "../../redux/actions";
const allTasks = [
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
];

export default function SearchPage({ query }) {
  const [filter, setFilter] = useState("");
  const [filterModal, setFilterModal] = useState(false);
  const [locationModal, setLocationModal] = useState(false);
  const [tasks, setTasks] = useState(allTasks);
  const [address, setAddress] = useState("");

  const dispatch = useDispatch();
  const lat = useSelector(state => state.postApi.categories);
  const selectedTaskId = useSelector(state => state.task.selectedTaskId);

  console.log("selectedTaskId", selectedTaskId);
  useEffect(() => {
    dispatch(getBrowsetask());
  }, [])

  useEffect(() => {
    let data = query
      ? allTasks.filter((item) => item.title.includes(query))
      : [];
    setTasks(data);
  }, [query]);
  const appendEventHeader = () => {
    return (
      <>
        <button
          className="bg-transparent border-0 mr-10"
          onClick={() => setLocationModal(!locationModal)}
        >
          <img
            src={`./assets/images/icons/${
              !locationModal ? "frame.svg" : "list.svg"
            }`}
            alt=""
          />
        </button>
        <button
          className="bg-transparent border-0 ml-10"
          onClick={() => setFilterModal(true)}
        >
          <img src="./assets/images/icons/filter.svg" alt="" />
        </button>
      </>
    );
  };

  return (
    <div className="search-page">
      {filterModal && (
        <FilterComponent
          close={() => setFilterModal(false)}
          onFilter={(value) => setFilter(value)}
        />
      )}
      {locationModal ? (
        <>
          <div style={{ position: "sticky", zIndex: 10 }}>
            <div>
              <CarouselComponent>
                <TaskCardItem task={lat[selectedTaskId]} />
              </CarouselComponent>
            </div>
          </div>
          <MapComponent
            style={{
              width: "100%",
              height: "calc(100vh - 183px)",
              top: "100px",
              position: "absolute",
            }}
            onChange={(text) => setAddress(text)}
            lat={lat}
          />
        </>
      ) : (
        <div className="task-cards scroll-area">
          <BrowseTaskCards tasks={tasks} />
        </div>
      )}
      <SecondaryHeader title="Browse tasks" appendEvent={appendEventHeader} />
    </div>
  );
}
