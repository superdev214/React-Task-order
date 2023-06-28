import React from "react";
import "./submitReport.scss";

const SubmitReport = (props) => {
  return (
    <div className="popupSubmit">
      {props.isVisbleSubmitReport && (
        <>
          <div className="menuSubmit">
            <ul className="m-0 p-0">
              <li className="headerSubmit">
                Report
                <br />
                <span className="detailSubmit">Report as inappropriate?</span>
              </li>
              <li
                className="itemsSubmit size-17"
                onClick={() =>
                  props.setSubmitReport(!props.isVisbleSubmitReport)
                }
              >
                Yes, report
              </li>
              <li
                className="itemsSubmit size-17"
                onClick={() => {
                    props.setSubmitReport(!props.isVisbleSubmitReport)
                    props.handleReport();
                  }
                }
              >
                No, cancel
              </li>
            </ul>
          </div>
        </>
      )}
    </div>
  );
};

export default SubmitReport;
