import ModalComponent from "../shared/modal/ModalComponent";

let messages = [
  {
    title: "“task title”",
    icon: "notify",
    createdAt: "8s",
    description: "in “suburb name or remotely” SR 500",
    seen: false,
    image: "fly-dark",
  },
  {
    seen: true,
    title: "User name.",
    createdAt: "10m",
    icon: "chat-fill",
    description: "Has made an offer on Task title",
    image: "fly-dark",
  },
  {
    seen: true,
    title: "",
    createdAt: "10m",
    icon: "star-gold",
    description: "Task is done! Please leave a review for need flower purchase",
    image: "fly-dark",
  },
];

export default function Notifications({ close }) {
  return (
    <ModalComponent
      btnStyle="btn-gray text-blue"
      noPadding
      onClick={() => {}}
      title="Notifications"
      close={() => close()}
    >
      <div className="text-black">
        {messages.map((message, index) => {
          return (
            <div
              key={index}
              className={`d-flex py-10 container ${
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
                <img src={`./assets/images/icons/${message.icon}.svg`} alt="" />
                {message.title && (
                  <p className="mt-10 font-bold">{message.title}</p>
                )}
                <p className="mt-10">{message.description}</p>
              </div>
              <div className="d-flex flex-column justify-content-between">
                <span className="size-13">{message.createdAt}</span>
                <div></div>
              </div>
            </div>
          );
        })}
      </div>
    </ModalComponent>
  );
}
