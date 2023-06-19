import { useState } from "react";
import { taskStatusColor } from "../Enum/TaskStatus";
import ModalComponent from "../../shared/modal/ModalComponent";

let filters = [
  { key: 0, value: "DRAFT" },
  { key: 1, value: "ASSIGNED" },
  { key: 2, value: "COMPLETED" },
  { key: 3, value: "REVIEW PENDING" },
  { key: 4, value: "UNPAID" },
  { key: 5, value: "POSTED" },
  { key: 6, value: "EXPIRED" },
  { key: null, value: "All" },
];

export default function FilterComponent(props) {
  const [filter, setFilter] = useState(props.filter);

  const apply = () => {
    props.onFilter(filter);
    props.close();
  };

  return (
    <ModalComponent
      btnCaption="Apply"
      bordered={true}
      title="Filter"
      close={props.close}
      onClick={apply}
    >
      <>
        {filters.map((item, index) => {
          return (
            <div key={index} className="pt-20">
              <button
                onClick={() => setFilter(item.key)}
                className={`d-block x btn btn-w-350 ${
                  filter === item.key ? "btn-blue" : "btn-gray"
                }`}
              >
                <span
                  className={`text-center font-bold text-${
                    filter !== item.key ? taskStatusColor(item.key) : "white"
                  }`}
                >
                  {item.value}
                </span>
              </button>
            </div>
          );
        })}
      </>
    </ModalComponent>
  );
}
