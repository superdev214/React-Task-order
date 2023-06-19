import { useState } from "react";
import { Navigate } from "react-router-dom";
import ModalComponent from "../../shared/modal/ModalComponent";
import CreditCardView from "../CreditCardView/CreditCardView";
import UpdateCreditCardFrom from "../UpdateCreditCard/UpdateCreditCard";

let paymentMethods = [
  {
    title: "MasterCard *** 4473",
    desc: "Expires 5/27",
    image: "master-card",
    key: 1,
  },
  { title: "", desc: "", image: "apple-pay", key: 2 },
];

export default function MakePaymentModal(props) {
  const [step, setStep] = useState(1);
  const [navigateTo, setNavigateTo] = useState(false);
  const [paymentMethod, setPaymentMethod] = useState(1);

  let btnCaptions = {
    1: "Continue",
    2: "Save",
  };

  let title = {
    1: "Payment required",
    2: "Update credit card",
  };

  const handleStep = () => {
    if (step === 2) return setNavigateTo(true);

    setStep(step + 1);
  };

  const paymentRequiredView = () => {
    return (
      <>
        <div className="pa-20 d-flex align-items-center bg-grey">
          <img
            src="./assets/images/avatar.png"
            className="avatar"
            alt="Post a task"
          />
          <div className="ml-10">
            <div className="font-bold">User name with surname initial.</div>
            <p className="mt-10">Task title</p>
          </div>
        </div>
        <div className="pa-20">
          <p className="font-bold">Summery</p>
          <div className="d-flex justify-content-between mt-10">
            <p>Task price</p>
            <p className="font-bold">SR 220</p>
          </div>
          <div className="d-flex justify-content-between mt-10">
            <p>Total</p>
            <p className="font-bold">SR 220</p>
          </div>
        </div>
        <p className="font-bold pa-20">Payment methods</p>
        <div className="pa-20 bg-grey">
          {paymentMethods.map((item, index) => {
            return (
              <div
                key={index}
                onClick={() => setPaymentMethod(item.key)}
                className={index + 1 < paymentMethods.length && "mb-20"}
              >
                <CreditCardView
                  img={item.image}
                  title={item.title}
                  isSelected={item.key === paymentMethod}
                  desc={item.desc}
                />
              </div>
            );
          })}
        </div>
        <div className="container">
          <div className="line light my-20"></div>
          <span className="size-13">
            <span>
              Payment will be held securely inside taklief Pay until you’re
              happy the task has been completed.
            </span>
            <span className="text-blue p-1">View terms</span>
          </span>
        </div>
      </>
    );
  };

  return (
    <>
      {navigateTo && <Navigate to={"/payment-approval"} />}
      <ModalComponent
        onClick={handleStep}
        bordered={true}
        close={props.close}
        noPadding={true}
        btnCaption={`${btnCaptions[step]}`}
        title={`${title[step]}`}
      >
        <div className="make-payment scroll-area">
          {step === 1 ? paymentRequiredView() : <UpdateCreditCardFrom />}
        </div>
      </ModalComponent>
    </>
  );
}
