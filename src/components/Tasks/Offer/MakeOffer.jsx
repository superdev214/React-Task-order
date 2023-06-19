import { useState } from "react";
import ModalComponent from "../../shared/modal/ModalComponent";
import ToggleSwitch from "../../shared/toggle-switch/ToggleSwitch";
import Uploader from "../../shared/uploader/Uploader";
import "./MakeOffer.scss";

export default function MakeOffer(props) {
  const [step, setStep] = useState(1);
  const [task, setTask] = useState({
    type: "InPerson",
    description: "",
    title: "",
  });
  const [useTemplate, setUseTemplate] = useState(false);
  const [updateNow, setUpdateNow] = useState(true);
  const [mustHavesItems, setMustHavesItems] = useState([
    { label: "Ladder", isSelected: true },
    { label: "Brush", isSelected: true },
    { label: "Sheet", isSelected: true },
    { label: "Tools", isSelected: true },
  ]);

  let btnCaptions = {
    1: "Continue",
    2: "Continue",
    3: "Submit offer",
    4: "Close",
  };
  const [handleMsg, sethandleMsg] = useState("");
  const handleStep = () => {
    sethandleMsg("");
    if (step === 4) return props.close();
    if (step === 1) {
      let check_must_have = mustHavesItems.find(
        (item) => item.isSelected === false
      );
      if (check_must_have) {
        sethandleMsg("Please Select All");
        return false;
      }
    }
    setStep(step + 1);
  };

  // const handleTextAreaChange = (event) => {
  //   const inputText = event.target.value;
  //   if (inputText.length <= 2000) {
  //     setDescription(inputText);
  //   }
  // };
  const handleDescriptionChange = (e) => {
    const value = e.target.value;
    setTask({ ...task, description: value });
  };

  const getDescriptionCharacterCount = () => {
    return task.description.length;
  };
  const remainingDescriptionWords = 2000 - getDescriptionCharacterCount();

  const onSelect = (index) => {
    let temp = mustHavesItems;
    temp[index].isSelected = !temp[index].isSelected;

    setMustHavesItems(temp);
    setUpdateNow(!updateNow);
  };

  const haveMustSelectionView = () => {
    return (
      <div className="pa-20">
        <p>
          <b>Sarah</b> has a few must-haves you need to be checked before making
          an offer
        </p>
        <p className="font-bold mt-20">Must-haves</p>
        <ul className="mt-20">
          {mustHavesItems.map((item, index) => {
            return (
              <li onClick={() => onSelect(index)} key={index}>
                <div
                  className={item.isSelected ? "circle select" : "circle"}
                ></div>
                <span className="pl-10">{item.label}</span>
              </li>
            );
          })}
        </ul>
        {handleMsg ? <div className="text-danger">{handleMsg}</div> : ""}
      </div>
    );
  };

  const detailsView = () => {
    return (
      <div>
        <div className="bg-grey text-center" style={{ padding: "55px 20px" }}>
          <p className="mt-10 font-bold size-27">SR 330</p>
        </div>
        <div className="pa-20 border-bottom">
          <div className="d-flex justify-content-between">
            <p>Service fees</p>
            <p className="font-bold">-SR 40</p>
          </div>
          <div className="d-flex justify-content-between mt-10">
            <p className="font-bold">You’ll recieve</p>
            <p className="font-bold">SR 354</p>
          </div>
        </div>
        <div className="pa-20">
          <p className="font-bold">Why are you the best for the task?</p>
          <div className="form-control-group my-10">
            <div className="text-end size-13 mb-10">
              <span>Minimum 15 characters</span>
            </div>
            <textarea
              className="phone-input w-100"
              minLength={15}
              // maxLength={2000}
              value={task.description}
              onChange={handleDescriptionChange}
            />
            <div
              className="remaining-letter-description"
              style={{ textAlign: "end" }}
            >
              {remainingDescriptionWords < 0 ? (
                <span className="text-red-description">
                  {remainingDescriptionWords}
                </span>
              ) : (
                <span className="word-count-description">
                  {remainingDescriptionWords}
                </span>
              )}
            </div>
          </div>
          <div className="my-20">
            <ToggleSwitch
              label="Use as template?"
              onChange={() => {
                setUseTemplate(!useTemplate);
              }}
            />
          </div>
          {/* {useTemplate && <Uploader />} */}
          <Uploader />
          <div className="my-20">
            <img src="./assets/images/icons/task.svg" alt="Post a task" />
            <span className="text-blue ml-10">Forgot task details?</span>
          </div>
        </div>
      </div>
    );
  };

  const confirmOfferView = () => {
    return (
      <div>
        <div className="pa-20 d-flex align-items-center">
          <div>
            <img
              src="./assets/images/avatar.png"
              className="avatar"
              alt="Post a task"
            />
          </div>
          <div className="ml-10">
            <p className="font-bold">The user whos is making offer</p>
            <p className="mt-5">
              <span className="font-bold">3.8 </span>
              <img src={`./assets/images/icons/star-gold.svg`} alt="star" /> (5)
            </p>
            <p className="mt-5">
              <span className="font-bold"> 94% </span> Completion rate
            </p>
          </div>
        </div>
        <div className="bg-grey text-center" style={{ padding: "40px 20px" }}>
          <p>TOTAL</p>
          <p className="mt-10 font-bold size-27">SR 330</p>
        </div>
        <div className="pa-20">
          <p className="font-bold">Includes:</p>
          <div className="d-flex justify-content-between mt-10">
            <p>“Task title”</p>
            <p>SR 999.91</p>
          </div>
          <div className="d-flex justify-content-between mt-10">
            <p>Service fees</p>
            <p>SR 99.99</p>
          </div>
          <div className="line light my-20"></div>
          <span>By submitting your offer you agree to the</span>
          <span className="text-blue p-1">terms & conditions</span>
          <span>and Community Guidelines</span>
        </div>
      </div>
    );
  };

  const congratulationView = () => {
    return (
      <div className="pa-20">
        <div className="text-center">
          <img src="./assets/images/congratulation.png" alt="congratulation" />
        </div>
        <div className="mt-20">
          <p className="font-bold">Congratulations!</p>
          <p className="mt-20">
            Your offer been sent to <b> Aftab A.</b>
          </p>
          <p className="mt-20"> Your current method of receiving payment is:</p>
        </div>
        <ul className="mt-20">
          <li>
            <img
              src="./assets/images/profile/bank-account.svg"
              alt="bank account"
            />
            <span className="pl-10">
              Bank account: <b>****-7001</b>
            </span>
          </li>
        </ul>
      </div>
    );
  };

  const renderBackBtn = () => {
    return (
      <button
        className="position-absolute bg-transparent border-0"
        style={{ left: "20px", top: "10px" }}
        onClick={() => setStep(step - 1)}
      >
        <img src="./assets/images/icons/arrow-back.svg" alt="close" />
      </button>
    );
  };

  return (
    <>
      <ModalComponent
        onClick={handleStep}
        bordered={true}
        close={props.close}
        noPadding={true}
        append={step > 1 && renderBackBtn}
        btnCaption={`${btnCaptions[step]}`}
        title={`${step === 4 ? "Congratulation" : "Make an offer"}`}
      >
        <div className="make-offer">
          {step === 1
            ? haveMustSelectionView()
            : step === 2
            ? detailsView()
            : step === 3
            ? confirmOfferView()
            : congratulationView()}
        </div>
      </ModalComponent>
    </>
  );
}
