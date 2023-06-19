import { useState, useEffect } from "react";
import { connect } from "react-redux";
import { verifyOtp } from "../../../redux/user/actions";

function VerifyCodeStep(props) {
  const [firstNum, setFirst] = useState("");
  const [secondNum, setSecond] = useState("");
  const [thirdNum, setThird] = useState("");
  const [forthNum, setForth] = useState("");
  const [timer, setTimer] = useState(60);
  const [showResend, setShowResend] = useState(false);

  useEffect(() => {
    let interval = null;
    if (timer > 0) {
      interval = setInterval(() => {
        setTimer((prevTimer) => prevTimer - 1);
      }, 1000);
    } else {
      setShowResend(true);
    }
    return () => {
      clearInterval(interval);
    };
  }, [timer]);

  const onContinue = () => {
    const verifyCode =
      firstNum * 1000 + secondNum * 100 + thirdNum * 10 + forthNum * 1;
    if (
      firstNum !== "" ||
      secondNum !== "" ||
      thirdNum !== "" ||
      forthNum !== ""
    ) {
      props.verifyOtp({ phone_no: props.phone_no, otp: verifyCode });
    }
    if (verifyCode !== 0) {
      props.onContinue();
    }
  };

  const onResend = () => {
    setTimer(60);
    setShowResend(false);
    // Add logic to resend the code
  };

  return (
    <section id="verify-code">
      <div style={{ padding: "13px 0", borderBottom: "2px solid #F5F7FA" }}>
        <div className="container">
          <div className="d-flex align-items-center justify-content-center">
            <button className="position-absolute bg-transparent border-0 close-btn">
              <img
                src="./assets/images/icons/close.svg"
                alt="close"
                onClick={props.onClose}
              />
            </button>
            <p className="nav-title">Verification Code</p>
          </div>
        </div>
      </div>
      <div
        className="container d-flex justify-content-center flex-column align-items-center"
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
          <span style={{ fontFamily: "SF Pro Text Bold" }}>
            {props.phone_no}
          </span>
        </p>
        <div className="d-flex align-items-center justify-content-between area-inputs">
          <input
            className="input-code"
            type="number"
            inputMode="numeric"
            pattern="[0-9]*"
            onInput={(event) => {
              event.target.value = event.target.value.slice(0, 1);
            }}
            onChange={(e) => setFirst(e.target.value)}
            alt="code number"
          />
          <input
            className="input-code"
            type="number"
            inputMode="numeric"
            pattern="[0-9]*"
            onInput={(event) => {
              event.target.value = event.target.value.slice(0, 1);
            }}
            onChange={(e) => setSecond(e.target.value)}
            alt="code number"
          />
          <input
            className="input-code"
            type="number"
            inputMode="numeric"
            pattern="[0-9]*"
            onInput={(event) => {
              event.target.value = event.target.value.slice(0, 1);
            }}
            onChange={(e) => setThird(e.target.value)}
            alt="code number"
          />
          <input
            className="input-code"
            type="number"
            inputMode="numeric"
            pattern="[0-9]*"
            onInput={(event) => {
              event.target.value = event.target.value.slice(0, 1);
            }}
            onChange={(e) => setForth(e.target.value)}
            alt="code number"
          />
        </div>
        <p>
          Time remaining:{" "}
          <span style={{ fontFamily: "SF Pro Text Bold" }}>{timer}s</span>
        </p>
      </div>
      <div className="fixed-bottom">
        {showResend && (
          <button className="resend-code bottom-txt bg-transparent" onClick={onResend}>
            Resend code
          </button>
        )}
        {!showResend && (
          <button
            className="d-block btn btn-green btn-w-350"
            onClick={onContinue}
          >
             Continue
          </button>
        )}
      </div>
    </section>
  );
}

const mapStateToProps = ({ userReducer }) => {
  const { phone_no, otp, error, verifyCode } = userReducer;
  return { phone_no, error, verifyCode, otp };
};

const mapDispatchToProps = {
  verifyOtp,
};

export default connect(mapStateToProps, mapDispatchToProps)(VerifyCodeStep);
