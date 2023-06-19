import { useState } from "react";
import ModalComponent from "../../shared/modal/ModalComponent";

let btnCaptions = {
  1: "I understand & continue",
  2: "I understand & continue",
  3: "Submit",
  4: "Close",
};

let titles = {
  1: "Cancel task",
  2: "Cancellation request",
  3: "Cancellation reason",
  4: "Cancellation request submitted",
};

export default function CancellationRequest({ close }) {
  const [description, setDescription] = useState("");
  const [step, setStep] = useState(1);

  const detailsView = () => {
    return (
      <>
        <div className="text-center pa-20">
          <img
            className="mr-2"
            src="./assets/images/cancellation-request.png"
            alt="logo big"
          />
        </div>
        <p className="font-bold">
          Cancellation can impact your completion rate!
        </p>
        <p className="mt-20">
          We encourage tasks to only be cancelled if no alternative solution is
          possible.
        </p>
      </>
    );
  };

  const cancelTaskView = () => {
    return (
      <>
        <div className="text-center pa-20">
          <img
            className="mr-2"
            src="./assets/images/cancellation-request.png"
            alt="logo big"
          />
        </div>
        <p className="font-bold">Cancellation request!</p>
        <p className="mt-20">
          [Tasker name] will be notified of this task cancellation and will have
          48 hours to respond.
        </p>
        <p className="mt-20">
          Once [Tasker name] confirms, we will review the cancelation.
        </p>
      </>
    );
  };

  const reasonView = () => {
    return (
      <>
        <div className="form-control-group my-20">
          <div className="form-control-group-label mb-10">
            Provide more detials
          </div>
          <div className="form-control-group-description size-13 text-end">
            Minimum 25 characters
          </div>
          <textarea
            className="phone-input w-100 mt-10"
            minLength={25}
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
          <p className="mt-5 size-13">
            Let them know why you're requesting cancellation.
          </p>
        </div>
      </>
    );
  };

  const submittedView = () => {
    return (
      <>
        <div className="text-center pa-20">
          <img
            className="mr-2"
            src="./assets/images/cancellation-request.png"
            alt="logo big"
          />
        </div>
        <p className="font-bold">
          Task cancelation request has been submitted.
        </p>
        <p className="mt-20">
          <span className="font-bold">User name</span>
          has 48 hours to respond. Once they do, we will notify you for the next
          steps to take.
        </p>
      </>
    );
  };

  const renderBackBtn = () => {
    return (
      <button
        className="position-absolute bg-transparent border-0"
        style={{ left: "20px" }}
        onClick={() => setStep(step - 1)}
      >
        <img src="./assets/images/icons/arrow-back.svg" alt="close" />
      </button>
    );
  };

  return (
    <>
      <ModalComponent
        btnCaption={btnCaptions[step]}
        title={titles[step]}
        bordered
        noPadding
        hideAction={step === 4}
        append={step > 1 && renderBackBtn}
        btnStyle={step <= 2 ? "btn-danger" : "btn-green"}
        close={() => close()}
        onClick={() => {
          step >= 4 ? close() : setStep(step + 1);
        }}
      >
        <div className="scroll-area container">
          {step === 1
            ? cancelTaskView()
            : step === 2
            ? detailsView()
            : step === 3
            ? reasonView()
            : submittedView()}
        </div>
      </ModalComponent>
    </>
  );
}
