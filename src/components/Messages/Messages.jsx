import { NavLink } from "react-router-dom";
import SecondaryHeader from "../Layouts/Header/SecondaryHeader/SecondaryHeader";

let messages = [
  {
    seen: true,
    title: "Gaurav C.",
    createdAt: "8s",
    description:
      "Hi, i’m happy to help today, i have the tools and experience. Please check my portfolio for peace of mind. ",
    image: "fly-dark",
  },
  {
    seen: false,
    title: "Gaurav C.",
    createdAt: "10m",
    description:
      "Hi, i’m happy to help today, i have the tools and experience. Please check my portfolio for peace of mind. ",
    image: "fly-dark",
  },
  {
    seen: true,
    title: "Gaurav C.",
    createdAt: "Mon",
    description:
      "Hi, i’m happy to help today, i have the tools and experience. Please check my portfolio for peace of mind. ",
    image: "fly-dark",
  },
  {
    seen: true,
    title: "Gaurav C.",
    createdAt: "Mon",
    description:
      "Hi, i’m happy to help today, i have the tools and experience. Please check my portfolio for peace of mind. ",
    image: "fly-dark",
  },
];

export default function MessagesPage() {
  return (
    <div className="task-page">
      <SecondaryHeader title="Messages" />
      <div className={`task-cards scroll-area`}>
        {messages.map((message, index) => {
          return (
            <NavLink key={index} to={"/message"}>
              <div
                className={`d-flex pa-20 justify-content-between ${
                  !message.seen ? "chat-grey" : ""
                }`}
              >
                <div className="d-flex align-items-center">
                  <img
                    src={`./assets/images/icons/${message.image}.svg`}
                    alt=""
                  />
                </div>
                <div className="ml-10 mr-20">
                  <span className="font-bold">{message.title}</span>
                  <p className="mt-10">{message.description}</p>
                </div>
                <div className="d-flex flex-column justify-content-between">
                  <span className="size-13">{message.createdAt}</span>
                  <div>
                    {!message.seen && (
                      <span
                        className="size-13 text-white"
                        style={{
                          background: "#42ADE2",
                          borderRadius: "100px",
                          padding: "2px 5px",
                        }}
                      >
                        13
                      </span>
                    )}
                  </div>
                </div>
              </div>
            </NavLink>
          );
        })}
      </div>
    </div>
  );
}
