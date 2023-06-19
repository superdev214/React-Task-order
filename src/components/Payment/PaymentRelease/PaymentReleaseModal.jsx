import { useState } from "react";
import ModalComponent from "../../shared/modal/ModalComponent";
import RatingComponent from "./Rating/RatingComponent";

let filters = [
  { key: 0, value: "SR 30" },
  { key: 1, value: "SR 60" },
  { key: 2, value: "SR 100" },
];

let btnCaptions = {
  1: "Release payment",
  2: "Leave review",
  3: "Continue",
  4: "Close",
};

let titles = {
  1: "Release payment",
  2: "Payment released",
  3: "Payment successful ",
  4: "Review sent",
};

export default function PaymentReleaseModal({ close }) {
  const [filter, setFilter] = useState("");
  const [description, setDescription] = useState("");
  const [step, setStep] = useState(1);

  const informationView = () => {
    return (
      <div className="pa-20">
        <div className="text-center">
          <img
            src="./assets/images/avatar.png"
            className="avatar"
            alt="logo big"
          />
          <p className="font-bold mt-20">User name with surname initial.</p>
        </div>
        <div className="mt-20">
          <p>
            Are you satisfied the task is done? If so, let’s release the
            payment!
          </p>
        </div>
        <div className="mt-20 d-flex align-items-center justify-content-end">
          <img
            className="mr-10"
            src="./assets/images/icons/lock.svg"
            alt="logo big"
          />
          <p className="text-green font-bold">Payment secured</p>
        </div>
        <div className="mt-20 d-flex justify-content-between">
          <p>Task price</p>
          <p>SR 330</p>
        </div>
        <p className="mt-20 mb-10">Want to thank them with a little extra?</p>
        {filters.map((item, index) => {
          return (
            <div key={index} className="py-10">
              <button
                onClick={() => {
                  if (filter === item.key) {
                    setFilter("");
                  } else {
                    setFilter(item.key);
                  }
                }}
                className={`d-block x btn btn-w-350 ${
                  filter === item.key
                    ? "btn-blue text-white"
                    : "btn-gray text-black"
                }`}
              >
                {item.value}
              </button>
            </div>
          );
        })}
        <div className="mt-20">
          <p>
            Please note that by releasing the payment you’re agreeing to our
          </p>
          <p className="text-blue">terms & conditions</p>
        </div>
      </div>
    );
  };

  const releasedView = () => {
    return (
      <>
        <div className="bg-grey pa-20 text-center">
          <img className="mr-2" src="./assets/images/fly.png" alt="logo big" />
        </div>
        <div className="container">
          <p className="mt-20 font-bold">Released</p>
          <p className="mt-20">
            Thank you <span className="font-bold">Sara A.</span> Payment has
            been released successfully to{" "}
            <span className="font-bold">Aden J.</span>
          </p>
          <p className="mt-10">
            Tap below to review <span className="font-bold">Aden J.</span>
          </p>
        </div>
      </>
    );
  };

  const successfullyView = () => {
    return (
      <>
        <div className="bg-grey pa-20 mt-20">
          <p>
            Thanks <span className="font-bold">Sara A.</span> Payment has been
            released to <span className="font-bold">Aden J.</span>
          </p>
          <p className="mt-10">
            Leave a review for <span className="font-bold">Aden J.</span> Tap
            below to set star rating.
          </p>
        </div>
        <RatingComponent />
        <div className="form-control-group mb-10 pa-20">
          <textarea
            className="phone-input w-100 mt-10"
            minLength={25}
            maxLength={2000}
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
          <p className="mt-20 size-13">
            We’ll share it as soon as Aden J. leaves their review or after the
            two weeks review deadline.
          </p>
        </div>
      </>
    );
  };

  const reviewView = () => {
    return (
      <>
        <div className="text-center pa-20">
          <img
            className="mr-2"
            src="./assets/images/task-img.png"
            alt="logo big"
          />
        </div>
        <div className="container">
          <p className="font-bold">Sent</p>
          <p className="mt-20">
            We’ll share it as soon as Aden J. leaves their review or after the
            two weeks review deadline.
          </p>
        </div>
      </>
    );
  };

  return (
    <>
      <ModalComponent
        btnCaption={btnCaptions[step]}
        title={titles[step]}
        bordered
        noPadding
        close={() => close()}
        onClick={() => {
          step >= 4 ? close() : setStep(step + 1);
        }}
      >
        <div className="scroll-area">
          {step === 1
            ? informationView()
            : step === 2
            ? releasedView()
            : step === 3
            ? successfullyView()
            : reviewView()}
        </div>
      </ModalComponent>
    </>
  );
}
