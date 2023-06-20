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
    <main className="position-absolute start-0 bottom-0 popup">
      {props.isVisblePopup && (
        <>
          <div className="menu">
            <ul className="list-group">
              <li className="header list-group-item">Show transactions by:</li>
              {ulList.map((list) => (
                <li
                  key={list.index}
                  className={
                    props.transactions === list.content
                      ? "activeItem items list-group-item"
                      : "items list-group-item"
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
              Close
            </button>
          </div>
        </>
      )}
    </main>
  );
};

export default PopupComponent;
