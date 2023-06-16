import { useState } from "react";
import { NavLink } from "react-router-dom";
import TasksOffer from "./TasksOffer/TasksOffer";
import LocationSelection from "./LocationSelection/LocationSelection";
import DatePickerComponent from "../shared/date-picker/DatePicker";
import Uploader from "../shared/uploader/Uploader";
import TickIcon from "../../assets/images/TickDark.svg";
import "./NewTask.scss";
import "../../assets/style/components/task-tab-bar.scss";

export default function NewTask() {
  const [step, setStep] = useState(1);
  const [modal, setModal] = useState(false);
  const [locationSelectionModal, setLocationSelectionModal] = useState(false);
  const [task, setTask] = useState({
    type: "InPerson",
    description: "",
    title: "",
    haveCertainTime: true,
    certainTime: "Morning",
  });

  const isValidForm = () => {
    if (
      task.title &&
      task.title.length > 10 &&
      task.description &&
      task.description.length > 25
    )
      return true;
    return false;
  };

  const setHaveMust = (items) => {
    setTask({ ...task, mustHaves: items });
  };

  const remove = (index) => {
    if (task.mustHaves === undefined) return;
    let temp = task.mustHaves;
    temp.splice(index, 1);

    setHaveMust(temp);
  };

  const stepAbout = () => {
    return (
      <>
        <p className="mb-20">ABOUT</p>
        <div className="form-control-group">
          <div className="form-control-group-label mb-10">Task title</div>
          <div className="form-control-group-description">
            Minimum 10 characters
          </div>
          <input
            className="phone-input w-100"
            type="text"
            minLength={10}
            maxLength={50}
            value={task.title}
            onChange={(e) => setTask({ ...task, title: e.target.value })}
          />
        </div>

        <div className="form-control-group mt-20">
          <div className="form-control-group-label mb-10">Task description</div>
          <div className="form-control-group-description">
            Minimum 25 characters
          </div>
          <textarea
            className="phone-input w-100"
            minLength={25}
            maxLength={2000}
            value={task.description}
            onChange={(e) => setTask({ ...task, description: e.target.value })}
          />
        </div>
        <p className="mt-20">How this task can be done?</p>
        <div className="switch-button">
          <button
            className={
              "d-block btn btn-gray btn-w-350 mt-3 " +
              (task.type === "InPerson" && "active")
            }
            onClick={() => setTask({ ...task, type: "InPerson" })}
          >
            In person
          </button>
          <button
            className={
              "d-block btn btn-gray btn-w-350 mt-3 " +
              (task.type === "Remotely" && "active")
            }
            onClick={() => setTask({ ...task, type: "Remotely" })}
          >
            Remotely
          </button>
        </div>
        <Uploader />
        {task.mustHaves && task.mustHaves.length > 0 && (
          <div className="mt-20">
            {task.mustHaves.map((item, index) => {
              return (
                <div
                  className="mb-10 radius-3 bg-light p-2 flex justify-content-between"
                  key={index}
                >
                  <div>
                    <img src={TickIcon} alt="" />
                    <span className="pl-sm">{item.value}</span>
                  </div>
                  <button
                    onClick={() => remove(index)}
                    className="bg-transparent border-0 close-btn"
                  >
                    <img src="./assets/images/icons/close.svg" alt="close" />
                  </button>
                </div>
              );
            })}
          </div>
        )}
        <button
          className="d-block btn btn-gray btn-w-350 mt-3"
          onClick={() => setModal(true)}
        >
          <img
            src="./assets/images/icons/check.svg"
            alt="close"
            className="mr-10"
          />
          Add must haves
        </button>
        {task.type === "InPerson" && (
          <button
            className="d-block btn btn-gray btn-w-350 mt-3"
            onClick={() => setLocationSelectionModal(true)}
          >
            {task.location ? (
              <>
                <img
                  src="./assets/images/location.svg"
                  className="mr-10"
                  alt="close"
                />
                {task.location}
              </>
            ) : (
              <>
                <img
                  src="./assets/images/icons/marker.svg"
                  className="mr-10"
                  alt="close"
                />
                Choose location
              </>
            )}
          </button>
        )}
      </>
    );
  };

  const dateTime = () => {
    return (
      <>
        <p className="mb-20">DATE AND TIME</p>
        <p className="mb-10">When do you need this done?</p>
        <DatePickerComponent
          onChange={(date) => setTask({ ...task, date: date })}
        />
        {task.date && (
          <>
            <p style={{ marginBottom: "3px" }} className="check-box-area mt-20">
              <input
                type="checkbox"
                id="checkbox"
                name="checkbox"
                value="Paneer"
                checked={task.haveCertainTime}
                onChange={() =>
                  setTask({ ...task, haveCertainTime: !task.haveCertainTime })
                }
              />
              {task.haveCertainTime}
              <span
                className={"check-box " + (task.haveCertainTime && "checked")}
              ></span>
              <label htmlFor="checkbox">
                I need it at certain time of the day
              </label>
            </p>
            {!task.haveCertainTime && (
              <>
                <ul className="time-picker-radio">
                  <li
                    onClick={() => setTask({ ...task, certainTime: "Morning" })}
                  >
                    <div>
                      <img src="./assets/images/morning.png" alt="Morning" />
                      <b>Morning</b> Before 10 am
                    </div>
                    {task.certainTime === "Morning" && <span></span>}
                  </li>
                  <li
                    onClick={() => setTask({ ...task, certainTime: "Miday" })}
                  >
                    <div>
                      <img src="./assets/images/miday.png" alt="Miday" />
                      <b>Miday</b> 10am to 2pm
                    </div>
                    {task.certainTime === "Miday" && <span></span>}
                  </li>
                  <li
                    onClick={() =>
                      setTask({ ...task, certainTime: "Afternoon" })
                    }
                  >
                    <div>
                      <img
                        src="./assets/images/afternoon.png"
                        alt="Afternoon"
                      />
                      <b>Afternoon</b> 1pm - 6pm
                    </div>
                    {task.certainTime === "Afternoon" && <span></span>}
                  </li>
                  <li
                    onClick={() => setTask({ ...task, certainTime: "Evening" })}
                  >
                    <div>
                      <img src="./assets/images/evening.png" alt="Evening" />
                      <b>Evening</b> After 6pm
                    </div>
                    {task.certainTime === "Evening" && <span></span>}
                  </li>
                </ul>
                <div className="note mt-20">
                  <img src="./assets/images/caution.png" alt="Evening" />
                  You can discuss exact times with your Tasker later.
                </div>
              </>
            )}
          </>
        )}
      </>
    );
  };

  const stepBudget = () => {
    return (
      <>
        <p className="mb-20">DATE AND TIME</p>
        <p>Enter your budget</p>
        <div className="form-control-group">
          <div className="mute my-10" style={{ textAlign: "initial" }}>
            You can always negotiate the price later
          </div>
          <div className="form-control-group-description danger mb-10">
            Minimum budget <b>SR 15</b>
          </div>
          <input
            className="phone-input w-100"
            type="number"
            value={task.budget}
            onChange={(e) =>
              setTask({ ...task, budget: parseFloat(e.target.value) })
            }
          />
        </div>
      </>
    );
  };

  return (
    <>
      {modal && (
        <TasksOffer
          allItems={task.mustHaves || []}
          onChange={(items) => setHaveMust(items)}
          close={() => setModal(false)}
        />
      )}
      {locationSelectionModal && (
        <LocationSelection
          onChange={(address) => setTask({ ...task, location: address })}
          close={() => setLocationSelectionModal(false)}
        />
      )}
      <div className="NewTask">
        <div className="new-task">
          <div style={{ padding: "13px 13px 0px" }}>
            <div>
              <div className="d-flex align-items-center justify-content-center">
                <NavLink to={"/home"}>
                  <button className="position-absolute bg-transparent border-0 close-btn">
                    <img src="./assets/images/icons/close.svg" alt="close" />
                  </button>
                </NavLink>
                {step > 1 && (
                  <button
                    className="position-absolute bg-transparent border-0"
                    style={{ left: "20px" }}
                    onClick={() => setStep(step - 1)}
                  >
                    <img src="./assets/images/arrow-back.png" alt="close" />
                  </button>
                )}
                <p>New Task</p>
              </div>
              <div className={"task-tab-bar step" + step}>
                <div className="tab1">
                  <button>ABOUT</button>
                </div>
                <div className="tab2">
                  <button>DATE & TIME</button>
                </div>
                <div className="tab3">
                  <button>BUDGET</button>
                </div>
              </div>
            </div>
          </div>
          <div
            className="container"
            style={{
              height: "80vh",
              overflowY: "scroll",
              paddingBottom: "36px",
            }}
          >
            {step === 1 ? stepAbout() : step === 2 ? dateTime() : stepBudget()}
          </div>
          <div className="fixed-bottom">
            {step < 3 ? (
              <button
                className="d-block btn btn-gray btn-w-350 button-continue"
                disabled={!isValidForm()}
                onClick={() => {
                  setTimeout(() => setStep(step + 1));
                }}
              >
                Continue
              </button>
            ) : (
              <NavLink to={"/new-task-published"}>
                <button className="d-block btn btn-gray btn-w-350 button-continue">
                  Publish
                </button>
              </NavLink>
            )}
          </div>
        </div>
      </div>
    </>
  );
}
