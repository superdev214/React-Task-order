import React from "react";
import "./PopupComponent.scss";

const PopupComponent = (props) => {
  const handleClick = (event) => {
    props.setTransactionContent(event.target.textContent);
    props.setIsVisble(!props.isVisblePopup);
  };
  const ulList = [
    {
      index: 1,
      content: "Current quarter",
    },
    {
      index: 2,
      content: "Last quarter",
    },
    {
      index: 3,
      content: "Current financial year",
    },
    {
      index: 4,
      content: "Last financial year",
    },
    {
      index: 5,
      content: "All times",
    },
  ];
  return (
    <div className="position-absolute start-0 bottom-0 popup">
      {props.isVisblePopup && (
        <>
          <div className="menu">
            <ul className="m-0">
              <li className="header size-13">Show transactions by:</li>
              {ulList.map((list) => (
                <li
                  key={list.index}
                  className={
                    props.transactions === list.content
                      ? "activeItem items size-17"
                      : "items size-17"
                  }
                  onClick={handleClick}
                >
                  {list.content}
                </li>
              ))}
            </ul>
          </div>
          <br />
          <div>
            <button
              className="w-100 popClose"
              onClick={() => props.setIsVisble(!props.isVisblePopup)}
            >
              Cancel
            </button>
          </div>
        </>
      )}
    </div>
  );
};

export default PopupComponent;
