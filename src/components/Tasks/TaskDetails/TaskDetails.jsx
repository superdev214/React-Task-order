import { useState } from "react";
import { NavLink } from "react-router-dom";
import MakeOffer from "../Offer/MakeOffer";
import ViewAllOffer from "../Offer/ViewAllOffer";
import PaymentReleaseModal from "../../Payment/PaymentRelease/PaymentReleaseModal";
import MakePaymentModal from "../../Payment/MakePayment/MakePayment";
import CancellationRequest from "../CancellationRequest/CancellationRequest";
import IncreasePrice from "../IncreasePrice/IncreasePrice";
import Uploader from "../../shared/uploader/Uploader";
import MapComponent from "../../shared/map/MapComponent";
import ModalComponent from "../../shared/modal/ModalComponent";
import TickIcon from "../../../assets/images/Tick.svg";
import "./TaskDetails.scss";
import "../../../assets/style/components/task-tab-bar.scss";
import LocationSelection from "../../NewTask/LocationSelection/LocationSelection";
import GetDirection from "../../NewTask/LocationSelection/GetDirection";
const task = {
  images: [
    { path: "person/1" },
    { path: "person/2" },
    { path: "person/3" },
    { path: "person/4" },
    { path: "person/5" },
    { path: "person/6" },
    { path: "person/7" },
    { path: "person/8" },
    { path: "person/9" },
  ],
  haveMusts: [{ value: "First" }, { value: "Second" }, { value: "Third " }],
  description: "",
  title: "Test human design",
  status: 0,
  date: "28, October, 2020",
  location: "Khamis Ash Shuara st",
};

const offers = [
  {
    images: [{ path: "person/5" }, { path: "person/6" }, { path: "person/2" }],
  },
];

export default function TaskDetails() {
  const [step, setStep] = useState(1);
  const [address, setAddress] = useState("");
  const [latlng, setLatlng] = useState({ lat: 0, lng: 0 });
  const [question, setQuestion] = useState("");
  const [makeOfferModal, setMakeOfferModal] = useState(false);
  const [increasePriceModal, setIncreasePriceModal] = useState(false);
  const [cancellationRequestModal, setCancellationRequestModal] =
    useState(false);
  const [makePaymentModal, setMakePaymentModal] = useState(false);
  const [paymentReleaseModal, setPaymentReleaseModal] = useState(false);
  const [locationModal, setLocationModal] = useState(false);
  const [viewAllOfferModal, setviewAllOfferModal] = useState(false);

  const actions = [
    {
      caption: "Make an offer",
      onClick: () => setMakeOfferModal(true),
      bg: "green",
    },
    {
      caption: "Release payment",
      onClick: () => setPaymentReleaseModal(true),
      bg: "green",
      icon: "unlock",
    },
    {
      caption: "Increase price",
      onClick: () => setIncreasePriceModal(true),
      bg: "info",
      icon: "plus",
    },
    {
      caption: "View cancellation request",
      onClick: () => setCancellationRequestModal(true),
      bg: "danger",
    },
  ];

  const openView = () => {
    return (
      <div>
        <div className="container pt-10">
          <div className="title font-bold">Test human design</div>
          <div className="mt-20 d-flex justify-content-between align-items-center">
            <div className="d-flex justify-content-between align-items-center">
              <div>
                <img src="./assets/images/icons/fly-mark.svg" alt="logo big" />
              </div>
              <div className="ml-20">
                <div className="mbb-5 font-bold size-15">POSTED BY</div>
                <span className="text-blue size-15">Aftab .A</span>
              </div>
            </div>
            <p className="size-15">22s ago</p>
          </div>
          <div className="mt-20 d-flex justify-content-between align-items-center">
            <div className="d-flex justify-content-between align-items-center">
              <div className="card-info-img">
                <img
                  src="./assets/images/icons/location-dark.svg"
                  alt="logo big"
                />
              </div>
              <div className="ml-20 mr-20">
                <div className="mbb-5 font-bold size-15">LOCATION</div>
                <span className="size-15">
                  {address
                    ? address
                    : "Qaisar Bagh 226001, Lucknow, Uttar Pradesh, India"}
                </span>
              </div>
            </div>
            <button
              className="bg-transparent border-0 ml-10"
              onClick={() => setLocationModal(true)}
            >
              <img src="./assets/images/icons/frame.svg" alt="logo big" />
            </button>
          </div>
          <div className="mt-20 d-flex justify-content-between align-items-center">
            <div className="d-flex justify-content-between align-items-center">
              <div className="card-info-img">
                <img
                  src="./assets/images/icons/calendar-dark.svg"
                  alt="logo big"
                />
              </div>
              <div className="ml-20 mr-20">
                <div className="mbb-5 font-bold size-15">TO BE DONE ON</div>
                <span className="size-15">
                  Thursday, 25 August Afternoon (2pm - 6pm){" "}
                </span>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-grey pa-20 mt-20 mb-20">
          <div className="text-center">
            <span className="font-heavy size-15">TASK PRICE</span>
            <p className="font-heavy size-27 mt-10">SR 330</p>
            <p className="font-bold mt-10">You offered SR 400</p>
          </div>
          <div className="line"></div>
          <div className="d-flex justify-content-between">
            <p>Service fees</p>
            <p>-SR 40</p>
          </div>
          <div className="d-flex justify-content-between mt-10">
            <p className="font-bold">You’ll recieve</p>
            <p>SR 354</p>
          </div>
          {actions.map((action, index) => {
            return (
              <button
                key={index}
                className={`d-block btn btn-${action.bg} btn-w-350 mt-20`}
                onClick={action.onClick}
              >
                {action.icon && (
                  <img
                    className="mr-10"
                    src={`./assets/images/icons/${action.icon}.svg`}
                    alt="action icon"
                  />
                )}
                <span>{action.caption}</span>
              </button>
            );
          })}
          {/* <button
            className="d-block btn btn-gray-1 btn-w-350 mt-20"
            onClick={() => setPaymentReleaseModal(true)}
          >
            Waiting offers
          </button> */}
        </div>
        <div className="pa-20">
          <button
            className="d-block btn btn-gray btn-w-350"
            style={{ color: "#42ADE2" }}
          >
            More options
          </button>
        </div>
        <div className="border-top border-bottom pa-20">
          <p className="font-bold">DETAILS</p>
          <p className="mt-10">
            I need to mount 13 wall paintings, one of them will be on the
            seedlings 6 meters of the ground
          </p>
          {gallery(task.images)}
          {mustHaveView()}
        </div>
        {offersView()}
      </div>
    );
  };

  const assignedView = () => {};

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

  const mustHaveView = () => {
    return (
      <>
        <p className="font-bold mt-10">MUST HAVES</p>
        {task.haveMusts.map((task, index) => {
          return (
            <div className="pt-sm" key={index}>
              <img src={TickIcon} alt="" />
              <span className="p-2">{task.value}</span>
            </div>
          );
        })}
      </>
    );
  };

  const offersView = () => {
    return (
      <>
        <div className="container">
          <p className="font-bold mt-20">OFFERS (3)</p>
        </div>
        <div className="bg-grey pa-20 mt-20 mb-20">
          <div className="text-end">
            <button
              className="btn btn-green"
              onClick={() => setMakePaymentModal(true)}
              style={{ padding: "7px 10px", fontSize: "13px" }}
            >
              <span>Accept</span>
              <img
                src="./assets/images/icons/ellipse.svg"
                alt="logo big"
                className="mr-10 ml-10"
              />
              <span>SR 300</span>
            </button>
          </div>
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
          <div className="mt-20">
            <button
              className="d-block btn btn-gray btn-w-350"
              style={{ color: "#42ADE2" }}
              onClick={() => setviewAllOfferModal(true)}
            >
              View all offers
            </button>
          </div>
        </div>
        <div className="container my-20">
          <p className="font-bold">QUESTIONS (12)</p>
          <div className="d-flex justify-content-between align-items-center">
            <div className="d-flex justify-content-between align-items-center">
              <div>
                <img src="./assets/images/icons/fly-mark.svg" alt="logo big" />
              </div>
              <div className="ml-20 mt-10">
                <p>
                  Please don’t share personal information to protect yourself,
                  insurance wont apply for tasks not done through the platform
                </p>
              </div>
            </div>
          </div>
          <input
            className="mt-20 w-100"
            type="text"
            placeholder="Ask Aftab a question"
            maxLength={2000}
            value={question}
            onChange={(e) => setQuestion(e.target.value)}
          />

          <div className="mt-20 position-relative">
            <Uploader
              renderBtn={() => {
                return (
                  <img
                    className="mr-10"
                    src="./assets/images/icons/attach-icon.svg"
                    alt="logo big"
                  />
                );
              }}
            />
            <button
              disabled={!question}
              className="d-block btn btn-info small position-absolute"
              style={{ right: 0, bottom: "-2px" }}
            >
              Send
            </button>
          </div>
        </div>
      </>
    );
  };

  const completedView = () => {};

  return (
    <>
      {makeOfferModal && <MakeOffer close={() => setMakeOfferModal(false)} />}
      {viewAllOfferModal && (
        <ViewAllOffer close={() => setviewAllOfferModal(false)} />
      )}
      {makePaymentModal && (
        <MakePaymentModal close={() => setMakePaymentModal(false)} />
      )}
      {paymentReleaseModal && (
        <PaymentReleaseModal close={() => setPaymentReleaseModal(false)} />
      )}
      {cancellationRequestModal && (
        <CancellationRequest close={() => setCancellationRequestModal(false)} />
      )}
      {increasePriceModal && (
        <IncreasePrice
          openPayment={() => setMakePaymentModal(true)}
          close={() => setIncreasePriceModal(false)}
        />
      )}
      {locationModal && (
        <ModalComponent
          btnStyle="btn-gray text-blue"
          noPadding
          onClick={() => {}}
          onGetValue={(latlng) => setLatlng(latlng)}
          btnCaption="Get directions"
          title="Task location"
          close={() => setLocationModal(false)}
        >
          {/* <LocationSelection
            onChange={(address) => setAddress(address)}
            onGetValue={(latlng) => setLatlng(latlng)}
            close={() => setLocationModal(false)}
          /> */}
          <GetDirection
            onChange={(address) => setAddress(address)}
            onGetValue={(latlng) => setLatlng(latlng)}
            close={() => setLocationModal(false)}
          />
          <MapComponent onChange={(text) => setAddress(text)} />
        </ModalComponent>
      )}
      <>
        <div className="TaskDetails">
          <div className="header">
            <div className="top-bar d-flex align-items-center justify-content-center border-bottom1">
              <div className="features-area">
                <button className="bg-transparent border-0 mr-10">
                  <img src="./assets/images/icons/flag.svg" alt="flag" />
                </button>
                <button className="bg-transparent border-0 ml-10">
                  <img src="./assets/images/icons/forward.svg" alt="forward" />
                </button>
              </div>
              <NavLink to={"/tasks"}>
                <button
                  className="position-absolute bg-transparent border-0"
                  style={{ left: "20px", top: "10px" }}
                >
                  <img
                    src="./assets/images/icons/arrow-back.svg"
                    alt="arrow back"
                  />
                </button>
              </NavLink>
              <p className="font-bold">Task details</p>
            </div>
            <div className="pa-20">
              <div className={" task-tab-bar step" + step}>
                <div className="tab1">
                  <button onClick={() => setStep(1)}>OPEN</button>
                </div>
                <div className="tab2">
                  <button onClick={() => setStep(2)}>ASSIGNED</button>
                </div>
                <div className="tab3">
                  <button onClick={() => setStep(3)}>COMPLETED</button>
                </div>
              </div>
            </div>
          </div>
          <div className="scroll-area">
            <>
              {step === 1
                ? openView()
                : step === 2
                ? assignedView()
                : completedView()}
            </>
          </div>
        </div>
      </>
    </>
  );
}
