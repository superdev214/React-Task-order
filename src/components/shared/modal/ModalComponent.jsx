const ModalComponent = (props) => {
  return (
    <div className="modal-area">
      <div
        className={`py-md flex justify-content-between p-3 weight-700 ${
          props.bordered && " border-bottom"
        }`}
      >
        {props.append && !props.hideAction && props.append()}
        <p style={{ margin: "3px auto" }} className="font-bold">
          {props.title}
        </p>
        {!props.hideAction && (
          <button
            onClick={props.close}
            className="position-absolute bg-transparent border-0 close-btn"
          >
            <img src="./assets/images/close.png" alt="close" />
          </button>
        )}
      </div>
      <div className={`${!props.noPadding ? "p-3  scroll-area" : ""}`}>
        {props.children}
      </div>
      {props.btnCaption && (
        <div className={`fixed-bottom ${props.bordered ? " border-top" : ""}`}>
          <button
            className={`d-block btn-w-350 btn ${props.btnStyle || "btn-green"}`}
            onClick={props.onClick}
          >
            {props.btnCaption}
          </button>
        </div>
      )}
    </div>
  );
};

export default ModalComponent;
