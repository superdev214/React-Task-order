import { useState } from "react";
import { NavLink } from "react-router-dom";
import CreditCardView from "../CreditCardView/CreditCardView";

let gate = {
  title: "MasterCard *** 4473",
  desc: "Expires 5/27",
  image: "master-card",
  key: 1,
};

export default function PaymentApproval() {
  const [step, setStep] = useState(1);

  const handleStep = () => {
    if (step === 2) return;
    setStep(step + 1);
  };

  const acceptedView = () => {
    return (
      <>
        <div className="d-flex align-items-center">
          <img
            src="./assets/images/credit-card-accepted.png"
            style={{ width: "100%" }}
            alt="Post a task"
          />
        </div>
        <p className="mt-20 font-bold">
          Your payment is secured and Adnan J. is assigned to the task
        </p>
        <p className="mt-20">
          You can now send private messages with important information to Adnan
          J. to get the task done!
        </p>
      </>
    );
  };

  const approvalView = () => {
    return (
      <>
        <div className="d-flex align-items-center">
          <img
            src="./assets/images/credit-card.png"
            alt="Post a task"
            style={{ width: "100%" }}
          />
        </div>
        <div className="mt-20">
          <p className="font-bold">You’re paying</p>
          <div className="d-flex justify-content-between mt-10">
            <p>Task price</p>
            <p className="font-bold">SR 220</p>
          </div>
          <div className="d-flex justify-content-between mt-10">
            <p>Total</p>
            <p className="font-bold">SR 220</p>
          </div>
        </div>
        <div className="mt-20">
          <CreditCardView
            img={gate.image}
            title={gate.title}
            isSelected={true}
            desc={gate.desc}
          />
        </div>
        <div className="mt-20 size-13">
          <span>
            Payment will be held securely inside taklief Pay until you’re happy
            the task has been completed.
          </span>
          <span className="text-blue p-1">View terms</span>
        </div>
      </>
    );
  };

  return (
    <>
      <div className="modal-area">
        <div
          className={`top-bar d-flex align-items-center justify-content-center`}
        >
          {step === 1 && (
            <button
              className="position-absolute bg-transparent border-0"
              style={{ left: "20px" }}
            >
              <img src="./assets/images/icons/arrow-back.svg" alt="close" />
            </button>
          )}
          <p className="nav-title">
            {step === 1 ? "Payment approval" : "Offer accepted"}
          </p>
        </div>
        <div className="scroll-area">
          <div className="make-payment bg-grey pa-20">
            {step === 1 ? approvalView() : acceptedView()}
          </div>
        </div>
        <div className={`fixed-bottom border-top`}>
          <button
            className={`d-block btn-w-350 btn btn-green`}
            onClick={handleStep}
          >
            {step === 1 ? "Securely hold payment" : "Message Aden J."}
          </button>
          {step === 2 && (
            <NavLink to={"/task-details"}>
              <button className="d-block btn btn-gray btn-w-350 mt-10">
                Go to task
              </button>
            </NavLink>
          )}
        </div>
      </div>
    </>
  );
}
