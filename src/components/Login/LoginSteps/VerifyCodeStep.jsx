export default function VerifyCodeStep(props) {
  return (
    <section id="verify-code">
      <div style={{ padding: "13px 0" }}>
        <div className="container">
          <div className="d-flex align-items-center justify-content-center">
            {/* onclick="getLogin()" */}
            <button className="position-absolute bg-transparent border-0 close-btn">
              <img
                src="./assets/images/close.png"
                alt="close"
                onClick={props.onClose}
              />
            </button>
            <p className="font-bold">Verification Code</p>
          </div>
        </div>
      </div>
      <div
        className="container flex justify-content-center flex-column align-items-center"
        style={{ height: "70vh", overflowY: "scroll" }}
      >
        <img
          src="./assets/images/sms.png"
          alt="message"
          style={{ width: "139px", height: "139px" }}
        />
        <p style={{ lineHeight: "22px", paddingTop: "45px" }}>
          Please enter the SMS code sent to
          <br />
          <span style={{ fontFamily: "SF Pro Text Bold" }}>+966123456789</span>
        </p>
        <div className="d-flex align-items-center justify-content-between area-inputs">
          <input
            className="input-code"
            type="text"
            maxLength={1}
            alt="code number"
          />
          <input
            className="input-code"
            type="text"
            maxLength={1}
            alt="code number"
          />
          <input
            className="input-code"
            type="text"
            maxLength={1}
            alt="code number"
          />
          <input
            className="input-code"
            type="text"
            maxLength={1}
            alt="code number"
          />
        </div>
        <p style={{ fontFamily: "SF Pro Text Bold" }}>Time remining: 0m 60s</p>
      </div>
      <div className="fixed-bottom">
        <button className="resend-code bottom-txt bg-transparent">
          Didn't recieve the code?
        </button>
        <button
          className="d-block btn btn-green btn-w-350"
          onClick={props.onContinue}
        >
          Continue
        </button>
      </div>
    </section>
  );
}
