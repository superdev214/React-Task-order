import { NavLink } from "react-router-dom";
import SecondaryHeader from "../Layouts/Header/SecondaryHeader/SecondaryHeader";
import { useEffect } from "react"; 
import { useDispatch, useSelector } from 'react-redux';
import { getChat } from "../../redux/chat/actions";

export default function MessagesPage() {
  const dispatch = useDispatch();
  const chats = useSelector(state => state.chat.chats)
  const loading = useSelector(state => state.chat.loading)
  const error = useSelector(state => state.chat.error)
  useEffect(() => {
    dispatch(getChat());
  }, [dispatch])

  return (
    <>
    {/* {
        chats.length > 0 && chats.map(chat => (
          <p>{chat.id}</p>
        ))
      } */}
    <div className="task-page">
      <SecondaryHeader title="Messages" />
      <div className={`task-cards scroll-area`}>
        {chats?.map((message, index) => {
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
                  <span className="font-bold">{message.task_title}</span>
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
        })}      </div>
    </div>
    
    </>
  );
}
