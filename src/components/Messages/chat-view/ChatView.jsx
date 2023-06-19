import { useRef, useState } from "react";
import { NavLink } from "react-router-dom";
import SecondaryHeader from "../../Layouts/Header/SecondaryHeader/SecondaryHeader";
import Uploader from "../../shared/uploader/Uploader";
import { useDispatch } from 'react-redux';
import { sendData } from "../../../redux/chat/actions";
import { useLocation } from "react-router-dom";

let message = {
  title: "Gaurav C.",
  image: "fly-dark",
  chats: [
    {
      message: "Hey! here is some none sense, Hi, i’m happy to help today, i have the tools and experience. Please check my portfolio for peace of mind Hi, i’m happy to help today, i have the tools and experience. Please check my portfolio for peace of mind.",
      attachments: [],
    },
    {
      message: "Hey! here is some none sense, Hi, i’m happy to help today, i have the tools and experience. Please check my portfolio for peace of mind Hi, i’m happy to help today, i have the tools and experience. Please check my portfolio for peace of mind.",
      attachments: [],
    },
  ],
};

const backView = () => {
  return (
    <>
      <NavLink to={"/messages"}>
        <button
          className="position-absolute bg-transparent border-0"
          style={{ left: "20px", top: "10px" }}
        >
          <img src="./assets/images/icons/arrow-back.svg" alt="close" />
        </button>
      </NavLink>
    </>
  );
};

export default function ChatView() {
  const [text, setText] = useState("");
  const uploaderRef = useRef(null);
  const [chats, setChats] = useState(message.chats);
  const dispatch = useDispatch();
 const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const task_ids = JSON.parse(decodeURIComponent(queryParams.get('messageData')));
  const task_id = task_ids.task_id

  const sendMessage = (e) => {
    e.preventDefault();
    const messageObj = {
      // attachments: uploaderRef.current?.state.images,
      message: text,
      task_id: task_id,
      sender_id: 1,
      receiver_id: 2
    };
    dispatch(sendData({messageObj}));
    setText("");

    const tempChats = chats;
    tempChats.push(messageObj)
    setChats(tempChats);
    // uploaderRef.current.clear();
  };

  return (
    <div>
      <SecondaryHeader
        appendEvent={backView}
        hideSearch={true}
        title={message.title}
      />
      <div className={`scroll-area`} style={{ marginTop: "46px" }}>
        <div
          className="chat-grey d-flex justify-content-between container py-10"
          style={{ position: "sticky", top: 0 }}
        >
          <div className="d-flex">
            <img src={`./assets/images/icons/${message.image}.svg`} alt="" />
            <div className="ml-10">
              <span className="font-bold">Task title</span>
              <p>User name</p>
            </div>
          </div>
          <div>
            <span className="font-bold">Task price</span>
            <p>Task status</p>
          </div>
        </div>
        <div
          style={{ background: "#F5F7FA", color: "black"}}
          className="ma-20 radius-10 text-black pa-10 d-flex align-items-center justify-content-between"
        >
          <span>Hey! type something with attch</span>
          <img src={`./assets/images/icons/${message.image}.svg`} alt="" />
        </div>
        <div className="pa-20">
          {chats.map((item, index) => {
            return (
              <div
                key={index}
                className={`d-flex chat-grey radius-10 mb-20 pa-10`}
              >
                <div className="d-flex items-end">
                  <img
                    src={`./assets/images/icons/${message.image}.svg`}
                    alt=""
                  />
                </div>
                <div className="ml-10 mr-20">
                  <p>{item.message}</p>
                  {item.attachments && item.attachments.length > 0 && (
                    <>
                      <div className="line my-10"></div>
                      <p>Here are some attachments as well!</p>
                      <div className="d-flex">
                        {item.attachments.map((image, key) => {
                          return (
                            <div className="area-img pt-md" key={key}>
                              <img
                                style={{ width: "110px", height: "80px" }}
                                src={image.path}
                                alt=""
                              />
                            </div>
                          );
                        })}
                      </div>
                    </>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>
      <form method="POST" onSubmit={sendMessage} className="fixed-bottom">
        <div className="form-control-group">
          <input
            value={text}
            onChange={(e) => setText(e.target.value)}
            className="w-100"
            placeholder="Reply to Shivum C."
          />
        </div>
        <div className="mt-20 position-relative">
          <Uploader
            ref={uploaderRef}
            renderBtn={() => {
              return (
                <img
                  src="./assets/images/icons/attach-icon.svg"
                  alt="logo big"
                  className="mr-10"
                />
              );
            }}
          />
          <button
            disabled={!text}
            className="d-block btn btn-info small position-absolute"
            style={{ right: 0, top: 0 }}
          >
            Send
          </button>
        </div>
      </form>
    </div>
  );
}
