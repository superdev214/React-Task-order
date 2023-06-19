const ModalComponent = (props) => {
  return (
    <div className="modal-area">
      <div
        className={`top-bar d-flex justify-content-between align-items-center font-bold ${
          props.bordered && "border-bottom"
        }`}
      >
        {props.append && !props.hideAction && props.append()}
        <p className="nav-title mx-auto">{props.title}</p>
        {!props.hideAction && (
          <button
            onClick={props.close}
            className="position-absolute bg-transparent border-0 close-btn"
          >
            <img src="./assets/images/icons/close.svg" alt="close" />
          </button>
        )}
      </div>
      <div className={`${!props.noPadding ? "px-20 scroll-area" : ""}`}>
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
