import {useEffect} from 'react';
import { useDispatch, useSelector } from "react-redux";
import moment from 'moment';

import ModalComponent from "../shared/modal/ModalComponent";
import { updateNotifications } from '../../redux/actions';

let messages = [
  {
    title: "“task title”",
    icon: "notify",
    created_at: "8s",
    message: "in “suburb name or remotely” SR 500",
    seen: false,
    image: "fly-dark",
  },
  {
    seen: true,
    title: "User name.",
    created_at: "10m",
    icon: "chat-fill",
    message: "Has made an offer on Task title",
    image: "fly-dark",
  },
  {
    seen: true,
    title: "",
    created_at: "10m",
    icon: "star-gold",
    message: "Task is done! Please leave a review for need flower purchase",
    image: "fly-dark",
  },
];

export default function Notifications({ close }) {

  const dispatch = useDispatch();
  messages = useSelector(state => state.userReducer.notifications);
  console.log("no========", messages);
  useEffect(() => {
    dispatch(updateNotifications());
  }, [])

  return (
    <ModalComponent
      btnStyle="btn-gray text-blue"
      noPadding
      onClick={() => {}}
      title="Notifications"
      close={() => close()}
    >
      <div className="text-black">
        {messages?.map((message, index) => {
          return (
            <div
              key={index}
              className={`d-flex py-10 container align-items-center justify-content-between border-bottom z-0 ${
                message?.seen ? "chat-grey" : ""
              }`}
            >
              <div className="mr-10">
                <img
                  src={`./assets/images/icons/${message?.user?.profile_pic? message.user.profile_pic: "fly-dark"}.svg`}
                  alt=""
                />
              </div>
              <div className="d-flex flex-column justify-content-between w-100">
                <div className="d-flex justify-content-between align-items-center">
                  <img src={`./assets/images/icons/${message?.icon}.svg`} alt="" />
                  {/* <img src={`./assets/images/icons/fly-dark.svg`} alt="" /> */}
                  <span className="size-13">{moment.utc(message?.created_at).local().startOf('seconds').fromNow()}</span>
                </div>
                <div>
                  {message?.title && (
                  <p className="mt-10 font-bold">{message?.title}</p>
                  )}
                </div>                
                <p className="mt-10">{message?.message}</p>
              </div>
            </div>
          );
        })}
      </div>
    </ModalComponent>
  );
}
