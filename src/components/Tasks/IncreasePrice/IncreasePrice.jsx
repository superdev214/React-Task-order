import { useState } from "react";
import ModalComponent from "../../shared/modal/ModalComponent";

export default function IncreasePrice({ close, openPayment }) {
  const [task, setTask] = useState({
    type: "InPerson",
    description: "",
    title: "",
  });
  const handleDescriptionChange = (e) => {
    const value = e.target.value;
    setTask({ ...task, description: value });
  };

  const getDescriptionCharacterCount = () => {
    return task.description.length;
  };
  const remainingDescriptionWords = 2000 - getDescriptionCharacterCount();
  return (
    <>
      <ModalComponent
        title="Increase price"
        btnCaption="Apply"
        bordered
        noPadding
        close={() => close()}
        onClick={() => {
          close();
          openPayment();
        }}
      >
        <div className="scroll-area">
          <div className="pa-20 border-bottom">
            <p className="font-bold">More to be done?</p>
            <p className="mt-5">
              You can increase the payment 3 times, to a maximum of
              <span className="font-bold">SR 20,000</span>
            </p>
          </div>
          <div className="pa-20 form-control-group">
            <div className="mb-20">
              <p className="font-bold mb-10">How much would you like to add?</p>
              <input className="w-100" />
            </div>
            <p className="font-bold">Let NAME know why</p>
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
        </div>
      </ModalComponent>
    </>
  );
}
