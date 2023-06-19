import { useState } from "react";
import ModalComponent from "../../shared/modal/ModalComponent";

let titles = "All offers";

const offers = [
  {
    images: [{ path: "person/5" }, { path: "person/6" }, { path: "person/2" }],
  },
];

export default function ViewAllOffer({ close }) {
  const [description, setDescription] = useState("");
  const [step, setStep] = useState(1);
  const gallery = (images) => {
    return (
      <div className="d-flex justify-content-between gallery flex-wrap">
        {images.map((image, index) => {
          return (
            <div key={index} className="mt-10 img-area">
              <img src={`./assets/images/${image.path}.png`} alt="close" />
            </div>
          );
        })}
      </div>
    );
  };

  const detailsView = () => {
    return (
      <div>
        <div className="pa-20">
          <p className="font-heavy" style={{ fontSize: "17px" }}>
            DETAILS
          </p>
        </div>
        <div className="bg-grey pa-20">
          <div className="mt-10 d-flex justify-content-between align-items-center">
            <div className="d-flex justify-content-between align-items-center">
              <div>
                <img src="./assets/images/icons/fly-dark.svg" alt="logo big" />
              </div>
              <div className="ml-20">
                <div className="mbb-5 font-bold size-15">Gaurav C.</div>
                <span>
                  <span className="font-bold size-15">
                    3.8{" "}
                    <img
                      src={`./assets/images/icons/star-gold.svg`}
                      alt="star"
                    />
                  </span>
                  <span className="font-bold size-15"> 94% </span> Completion
                  rate
                </span>
              </div>
            </div>
          </div>
          <p className="mt-10">
            Hi, i’m happy to help today, i have the tools and experience. Please
            check my portfolio for peace of mind.
          </p>
          {gallery(offers[0].images)}
          <div className="mt-10 size-13 d-flex justify-content-between align-items-center">
            <span className="">
              12m
              <img
                className="ml-10"
                src="./assets/images/icons/chat.svg"
                alt="logo big"
              />
            </span>
            <button className="bg-transparent border-0">
              <img src="./assets/images/icons/more.svg" alt="more" />
            </button>
          </div>
        </div>
        <div className="pa-20 border-bottom">
          <div className="d-flex align-items-center">
            <img
              src="./assets/images/icons/fly-mark.svg"
              style={{ width: "24px", height: "24px" }}
              alt="logo big"
            />
            <div className="ml-10">
              <div className="font-bold size-15 d-flex align-items-center">
                Aftab A.
                <button
                  className="d-block btn btn-gray ml-10 poster"
                  style={{
                    color: "#42ADE2",
                    padding: "2px 12px",
                    fontSize: "10px",
                  }}
                >
                  <img
                    src="./assets/images/icons/poster.svg"
                    alt="logo big"
                    className="mr-10"
                  />
                  <span className="font-bold text-black">POSTER</span>
                </button>
              </div>
            </div>
          </div>
          <p className="mt-10">
            Thank you for the offer, could you please make sure
            <img
              src="./assets/images/icons/moderated.svg"
              alt="logo big"
              style={{ padding: "0 5px" }}
            />
            you have the right tools.
          </p>
          <div className="mt-10" style={{ fontSize: "13px" }}>
            15m ago
          </div>
        </div>
        <div className="bg-grey pa-20">
          <div className="mt-10 d-flex justify-content-between align-items-center">
            <div className="d-flex justify-content-between align-items-center">
              <div>
                <img src="./assets/images/icons/fly-dark.svg" alt="logo big" />
              </div>
              <div className="ml-20">
                <div className="mbb-5 font-bold size-15">Gaurav C.</div>
                <span>
                  <span className="font-bold size-15">
                    3.8{" "}
                    <img
                      src={`./assets/images/icons/star-gold.svg`}
                      alt="star"
                    />
                  </span>
                  <span className="font-bold size-15"> 94% </span> Completion
                  rate
                </span>
              </div>
            </div>
          </div>
          <p className="mt-10">
            Hi, i’m happy to help today, i have the tools and experience. Please
            check my portfolio for peace of mind.
          </p>
          {gallery(offers[0].images)}
          <div className="mt-10 size-13 d-flex justify-content-between align-items-center">
            <span className="">
              12m
              <img
                className="ml-10"
                src="./assets/images/icons/chat.svg"
                alt="logo big"
              />
            </span>
            <button className="bg-transparent border-0">
              <img src="./assets/images/icons/more.svg" alt="more" />
            </button>
          </div>
        </div>
      </div>
    );
  };

  const renderBackBtn = () => {
    return (
      <button
        className="position-absolute bg-transparent border-0"
        style={{ left: "20px" }}
        onClick={() => close()}
      >
        <img src="./assets/images/icons/arrow-back.svg" alt="close" />
      </button>
    );
  };

  return (
    <>
      <ModalComponent
        title={titles}
        bordered
        noPadding
        append={renderBackBtn}
        // hideAction={step}
        close={() => close()}
      >
        <div className="scroll-area">{detailsView()}</div>
      </ModalComponent>
    </>
  );
}
