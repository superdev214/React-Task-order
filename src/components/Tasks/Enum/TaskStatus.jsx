import React from "react";
import "./TaskStatus.scss";

export const TaskStatusEnum = {
  DRAFT: 0,
  ASSIGNED: 1,
  COMPLETED: 2,
  REVIEW: 3,
  UNPAID: 4,
  POSTED: 5,
  EXPIRED: 6,
};

export function taskStatusDisplayCaption(status) {
  let types = [
    "DRAFT",
    "ASSIGNED",
    "COMPLETED",
    "REVIEW",
    "UNPAID",
    "POSTED",
    "EXPIRED",
  ];
  return types.length <= status ? status : types[status];
}

export function taskStatusColor(status) {
  let types = ["warning", "black", "gray", "warning", "red", "green", "gray"];
  return types.length <= status ? "dark" : types[status];
}

export default function TaskStatusDisplayBadge(status) {
  return (
    <>
      <div className={`badge  text-${taskStatusColor(status)}`}>
        <p className="font-heavy size-13">{taskStatusDisplayCaption(status)}</p>
        {status === 1 && (
          <>
            <div className="dot ml-10 mr-10"></div>
            <label>13 Offers</label>
          </>
        )}
      </div>
    </>
  );
}
