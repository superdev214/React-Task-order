import React from "react";
import "./ReportModal.scss";

const ReportModal = (props) => {
  const handleClick = (event) => {
    props.setViewReport(!props.isVisbleReport);
    props.setSubmitReport(!props.isVisbleSubmitReport);
    console.log(props.isVisbleReport);
    console.log(props.isVisbleSubmitReport);
  };
  return (
    <div className="position-absolute start-0 bottom-0 popupReport">
      {props.isVisbleReport && (
        <>
          {/* <div className="menu">
            <ul className="m-0">
              <li className="header">
                Report
                <br />
                <span className="detail">Report as inappropriate?</span>
              </li>
              <li className="items size-17">
                Yes, report
              </li>
              <li className="items size-17" onClick={handleClick}>
                No, cancel
              </li>
            </ul>
          </div>
          <br /> */}
          <div>
            <button className="w-100 popCloseReport" onClick={handleClick}>
              Report
            </button>
          </div>
          <div>
            <button
              className="w-100 popCloseReport"
              onClick={() => props.setViewReport(!props.isVisbleReport)}
            >
              Close
            </button>
          </div>
        </>
      )}
    </div>
  );
};

export default ReportModal;
