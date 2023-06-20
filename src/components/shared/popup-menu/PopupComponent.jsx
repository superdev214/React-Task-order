import React from "react";
import "./PopupComponent.scss";
const PopupComponent = (props) => {
  const handleClick = (event) => {
    props.setTransactionContent(event.target.textContent);
    props.setIsVisble(!props.isVisblePopup);
    console.log(props.transactions);
    console.log(props.transactions);
  };
  return (
    <main
      className="position-absolute start-0 bottom-0 popup"
      style={{
        marginLeft: "8px",
        marginRight: "8px",
        width: "calc(100% - 16px)",
      }}
    >
      {props.isVisblePopup && (
        <>
          <div className="menu">
            <ul className="list-group">
              <li className="header list-group-item">Show transactions by:</li>
              <li
                className={
                  props.transactions === "Current quarter"
                    ? "activeItem items list-group-item"
                    : "items list-group-item"
                }
                onClick={handleClick}
              >
                Current quarter
              </li>
              <li
                className={
                  props.transactions === "Last quarter"
                    ? "activeItem items list-group-item"
                    : "items list-group-item"
                }
                onClick={handleClick}
              >
                Last quarter
              </li>
              <li
                className={
                  props.transactions === "Current financial year"
                    ? "activeItem items list-group-item"
                    : "items list-group-item"
                }
                onClick={handleClick}
              >
                Current financial year
              </li>
              <li
                className={
                  props.transactions === "Last financial year"
                    ? "activeItem items list-group-item"
                    : "items list-group-item"
                }
                onClick={handleClick}
              >
                Last financial year
              </li>
              <li
                className={
                  props.transactions === "All times"
                    ? "activeItem items list-group-item"
                    : "items list-group-item"
                }
                onClick={handleClick}
              >
                All times
              </li>
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
