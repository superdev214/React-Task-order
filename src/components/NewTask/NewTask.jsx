import { useState, useRef, useEffect } from "react";
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

  const titleInputRef = useRef();

  //title input handler
  const handleTitleChange = (e) => {
    const value = e.target.value;
    setTask({ ...task, title: value });
  };

  // const handleTitleChange = () => {
  //   const element = titleInputRef.current;
  //   const maxLength = 50;
  //   let text = element.textContent;

  //   if (text.length > maxLength) {
  //     const overText = text.substr(maxLength);
  //     text = text.substr(0, maxLength);
  //     element.innerHTML = `${text}<span class="highlight">${overText}</span>`;
  //   } else {
  //     element.innerHTML = text;
  //   }

  //   const value = element.textContent.trim();
  //   setTask({ ...task, title: value });
  // };

  //Description input handler

  const handleDescriptionChange = (e) => {
    const value = e.target.value;
    setTask({ ...task, description: value });
  };
  // count Remaining of title char
  const getTitleCharacterCount = () => {
    return task.title.length;
  };
  const remainingTitleWords = 50 - getTitleCharacterCount();

  // count Remaining of title Description.

  const getDescriptionCharacterCount = () => {
    return task.description.length;
  };
  const remainingDescriptionWords = 2000 - getDescriptionCharacterCount();

  const isValidForm = () => {
    if (
      task.title &&
      task.title.length > 10 &&
      task.title.length < 51 &&
      task.description &&
      task.description.length > 25 &&
      task.description.length < 2000
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
        <p className="mb-20 font-bold">ABOUT</p>
        <div className="form-control-group">
          <div className="d-flex align-items-center justify-content-between mb-10">
            <p className="form-control-group-label">Task title</p>
            <p className="form-control-group-description">
              Minimum 10 characters
            </p>
          </div>
          <input
            className="phone-input w-100"
            type="text"
            minLength={10}
            value={task.title}
            onChange={handleTitleChange}
          />

          {/* //title highlight// */}
          {/* <div
            ref={titleInputRef}
            // style={{ direction: "ltr", unicodeBidi: "plaintext" }}
            className="asdasd"
            contentEditable="true"
            onInput={handleTitleChange}
            spellCheck={false}
          >
            {task.title}
            {task.excessCharacters && (
              <span className="excess-characters">{task.excessCharacters}</span>
            )}
          </div> */}

          <div className="form-control-group-description">
            {(
              <span
                className={`word-count-title ${
                  remainingTitleWords < 0 && "text-red-title"
                }`}
              >
                {remainingTitleWords}
              </span>
            ) || (
              <span className="word-count-title">{remainingTitleWords}</span>
            )}
          </div>
        </div>

        <div className="form-control-group mt-20">
          <div className="d-flex align-items-center justify-content-between mb-10">
            <p className="form-control-group-label">Task description</p>
            <p className="form-control-group-description">
              Minimum 25 characters
            </p>
          </div>
          <textarea
            className="phone-input w-100"
            minLength={25}
            // maxLength={2000}
            value={task.description}
            onChange={handleDescriptionChange}
          />
          <div className="form-control-group-description">
            {(
              <span
                className={`word-count-description ${
                  remainingDescriptionWords < 0 && "text-red-description"
                }`}
              >
                {remainingDescriptionWords}
              </span>
            ) || (
              <span className="word-count-description">
                {remainingDescriptionWords}
              </span>
            )}
          </div>
        </div>
        <p className="mt-20 font-bold">How this task can be done?</p>
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
                  className="mb-10 radius-3 bg-light p-2 d-flex justify-content-between"
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
            <>
              <img
                src="./assets/images/icons/marker.svg"
                className="mr-10"
                alt="location marker"
              />
              {task.location ? task.location : "Choose location"}
            </>
          </button>
        )}
      </>
    );
  };

  const dateTime = () => {
    return (
      <>
        <p className="mb-20 font-bold size-15">DATE AND TIME</p>
        <p className="mb-10 font-bold size-15">When do you need this done?</p>
        <DatePickerComponent
          onChange={(date) => setTask({ ...task, date: date })}
        />
        {task.date && (
          <>
            <p className="check-box-area mt-20 mb-10">
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
              <label htmlFor="checkbox" className="font-medium">
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
                      <img
                        src="./assets/images/icons/sunrise.svg"
                        alt="Morning"
                      />
                      <b>Morning</b> Before 10 am
                    </div>
                    {task.certainTime === "Morning" && <span></span>}
                  </li>
                  <li
                    onClick={() => setTask({ ...task, certainTime: "Miday" })}
                  >
                    <div>
                      <img src="./assets/images/icons/sun.svg" alt="Miday" />
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
                        src="./assets/images/icons/sunset.svg"
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
                      <img src="./assets/images/icons/moon.svg" alt="Evening" />
                      <b>Evening</b> After 6pm
                    </div>
                    {task.certainTime === "Evening" && <span></span>}
                  </li>
                </ul>
                <div className="note mt-20">
                  <img src="./assets/images/icons/caution.svg" alt="note" />
                  You can discuss exact times with your Tasker later.
                </div>
              </>
            )}
          </>
        )}
      </>
    );
  };

  const handleBudgetChange = (e) => {
    const value = parseFloat(e.target.value);
    setTask({ ...task, budget: value });
  };

  const isBudgetValid = () => {
    return task.budget >= 15 && task.budget <= 20000;
  };

  const handleSubmit = () => {
    if (isBudgetValid()) {
      // Proceed with task submission
    } else {
      // Show an error message or prevent task submission
    }
  };

  const stepBudget = () => {
    return (
      <>
        <p className="mb-20 font-bold">DATE AND TIME</p>
        <p className="font-bold">Enter your budget</p>
        <div className="form-control-group">
          <p className="my-10">You can always negotiate the price later</p>
          <p className="form-control-group-description danger mb-10">
            Minimum budget <span className="font-heavy">SR 15</span>
          </p>
          <input
            className="phone-input w-100"
            type="number"
            value={task.budget}
            onChange={handleBudgetChange}
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
          <div className="top-bar d-flex align-items-center justify-content-center">
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
                <img src="./assets/images/icons/arrow-back.svg" alt="close" />
              </button>
            )}
            <p className="nav-title">New Task</p>
          </div>
          <div className="px-20">
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
          <div
            className="container"
            style={{
              height: "80vh",
              overflowY: "scroll",
              paddingBottom: "40px",
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
              <NavLink to={isBudgetValid() ? "/new-task-published" : "#"}>
                <button
                  className="d-block btn btn-gray btn-w-350 button-continue"
                  disabled={!isBudgetValid()} // Disable if the budget is not valid
                  onClick={handleSubmit}
                >
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
