import React, { useState, useEffect } from "react";
import TickIcon from "../../../assets/images/Tick.svg";
import ModalComponent from "../../shared/modal/ModalComponent";

const TasksOffer = ({ close, onChange, allItems }) => {
  const [text, setText] = useState("");
  const [items, setItems] = useState([]);

  useEffect(() => {
    setItems([...allItems]);
  }, [allItems]);

  const addItem = () => {
    if (items.length >= 3) return;

    const temp = [...items];
    temp.push({ value: text });

    setItems(temp);
    setText("");
  };

  const save = () => {
    close();
    onChange(items);
  };

  const remove = (index) => {
    const temp = [...items];
    temp.splice(index, 1);

    setItems(temp);
  };

  return (
    <ModalComponent
      btnCaption="Save"
      title="Must-haves"
      close={close}
      onClick={save}
    >
      <div>
        <span>
          Add up to 3 things the tasker needs to have or do to make an offer,
          eg:
        </span>
        <div className="pt-sm">
          <div className="pt-sm">
            <img src={TickIcon} alt="" />
            <span className="p-2">Must be have tools</span>
          </div>
          <div className="pt-sm">
            <img src={TickIcon} alt="" />
            <span className="p-2">Must be available on Friday</span>
          </div>
          <div className="pt-sm">
            <img src={TickIcon} alt="" />
            <span className="p-2">Must have experience</span>
          </div>
        </div>
        <div className="form-control-group pt-sm">
          <input
            className="w-100 custom-input"
            type="text"
            maxLength={50}
            value={text}
            onChange={(e) => setText(e.target.value)}
          />
        </div>
        <div className="pt-sm d-flex justify-content-end">
          <button
            disabled={!text || items.length >= 3}
            className="d-block btn btn-info"
            onClick={addItem}
          >
            Add
          </button>
        </div>
        <hr />
        <div className="pt-sm">
          {items.map((item, index) => (
            <div
              className="my-xs radius-3 bg-light p-2 d-flex justify-content-between"
              key={index}
            >
              <span>{item.value}</span>
              <button
                onClick={() => remove(index)}
                className="bg-transparent border-0 close-btn"
              >
                <img src="./assets/images/icons/close.svg" alt="close" />
              </button>
            </div>
          ))}
        </div>
      </div>
    </ModalComponent>
  );
};

export default TasksOffer;
