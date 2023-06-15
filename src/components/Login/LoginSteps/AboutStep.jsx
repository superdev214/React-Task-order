export default function AboutStep(props) {
  return (
    <>
      {" "}
      <section id="verify-code">
        <div style={{ padding: "13px 0", borderBottom: "2px solid #F5F7FA" }}>
          <div className="container">
            <div className="d-flex align-items-center justify-content-center">
              <button className="position-absolute bg-transparent border-0 close-btn">
                <img
                  src="./assets/images/close.png"
                  alt="close"
                  onClick={props.onClose}
                />
              </button>
              <p className="font-bold">About</p>
            </div>
          </div>
        </div>
        <div className="container text-initial mt-20">
          <p className="font-bold">
            Tell us about yourself to setup your profile
          </p>
          <div className="form-control-group mt-20">
            <p className="font-bold mb-10">First name</p>
            <input className="w-100" />
          </div>
          <div className="form-control-group mt-20">
            <p className="font-bold mb-10">Last name</p>
            <input className="w-100" />
          </div>
        </div>
        <div className="fixed-bottom">
          <button
            className="d-block btn btn-green btn-w-350"
            onClick={props.onContinue}
          >
            Continue
          </button>
        </div>
      </section>
    </>
  );
}
