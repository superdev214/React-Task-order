import React, { useState, useEffect, useRef } from "react";
import { connect, useDispatch, useSelector } from "react-redux";
import { loginWithSMSFail, verifyOtp, verifyOtpSuccess } from "../../../redux/user/actions";
import { loginWithSMS } from "../../../redux/user/actions";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function VerifyCodeStep(props) {
  const [firstNum, setFirst] = useState("");
  const [secondNum, setSecond] = useState("");
  const [thirdNum, setThird] = useState("");
  const [forthNum, setForth] = useState("");
  const [timer, setTimer] = useState(60);
  const [showResend, setShowResend] = useState(false);
  const [showSuccessToast, setShowSuccessToast] = useState(false);
  const dispatch = useDispatch();
  const firstNumRef = useRef(null);
  const secondNumRef = useRef(null);
  const thirdNumRef = useRef(null);
  const forthNumRef = useRef(null);

  const verificationStatus = useSelector((state) => state.userReducer.otpError);
  const isVerificationFailed = verificationStatus.stauts !== 200;

  useEffect(() => {
    if(verificationStatus) {
      if(verificationStatus.status === 200) {
        toast.success("Login Successfully.");
        setTimeout(() => {
          props.onContinue();
        }, 1000);
      } else {
        toast.error("Wrong OTP. Please try again.");
      }
    }
  }, [verificationStatus])

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

  const handleFirstNumChange = (e) => {
    const value = e.target.value.slice(0, 1);
    setFirst(value);
    if (value === "") {
      return;
    }
    secondNumRef.current.focus();
  };

  const handleSecondNumChange = (e) => {
    const value = e.target.value.slice(0, 1);
    setSecond(value);
    if (value === "") {
      firstNumRef.current.focus();
    } else {
      thirdNumRef.current.focus();
    }
  };

  const handleThirdNumChange = (e) => {
    const value = e.target.value.slice(0, 1);
    setThird(value);
    if (value === "") {
      secondNumRef.current.focus();
    } else {
      forthNumRef.current.focus();
    }
  };

  const handleForthNumChange = (e) => {
    const value = e.target.value.slice(0, 1);
    setForth(value);
    if (value === "") {
      thirdNumRef.current.focus();
    }
  };

  const onContinue = async () => {
    const verifyCode =
      firstNum * 1000 + secondNum * 100 + thirdNum * 10 + forthNum * 1;
      await props.verifyOtp({ phone_no: props.phone_no, otp: verifyCode })
  };

  const onResend = () => {
    setTimer(60);
    setShowResend(false);
    props.loginWithSMS(props.phone_no);
    setFirst("");
    setSecond("");
    setThird("");
    setForth("");
  };

  const isContinueDisabled =
    firstNum === "" || secondNum === "" || thirdNum === "" || forthNum === "";

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
            +{props.phone_no}
          </span>
        </p>
        <div className="d-flex align-items-center justify-content-between area-inputs">
          <input
            className={`input-code ${isVerificationFailed ? 'wrong-otp' : ''}`}
            type="number"
            inputMode="numeric"
            pattern="[0-9]*"
            onChange={handleFirstNumChange}
            value={firstNum}
            alt="code number"
            ref={firstNumRef}
          />
          <input
            className={`input-code ${isVerificationFailed ? 'wrong-otp' : ''}`}
            type="number"
            inputMode="numeric"
            pattern="[0-9]*"
            onChange={handleSecondNumChange}
            value={secondNum}
            alt="code number"
            ref={secondNumRef}
          />
          <input
            className={`input-code ${isVerificationFailed ? 'wrong-otp' : ''}`}
            type="number"
            inputMode="numeric"
            pattern="[0-9]*"
            onChange={handleThirdNumChange}
            value={thirdNum}
            alt="code number"
            ref={thirdNumRef}
          />
          <input
            className={`input-code ${isVerificationFailed ? 'wrong-otp' : ''}`}
            type="number"
            inputMode="numeric"
            pattern="[0-9]*"
            onChange={handleForthNumChange}
            value={forthNum}
            alt="code number"
            ref={forthNumRef}
          />
        </div>
        <p>
          Time remaining:{" "}
          <span style={{ fontFamily: "SF Pro Text Bold" }}>{timer}s</span>
        </p>
      </div>
      <div className="fixed-bottom">
        <button
          className="btn-no-border bg-transparent font-bold size-13"
          onClick={onResend}
          disabled={!showResend}
        >
          Didn't receive the code?
        </button>
        <button
          className="d-block btn btn-green btn-w-350"
          onClick={onContinue}
          disabled={isContinueDisabled}
        >
          Continue
        </button>
      </div>
      <ToastContainer />
    </section>
  );
}

const mapStateToProps = ({ userReducer }) => {
  const { phone_no, otp, error, verifyCode, token } = userReducer;
  return { phone_no, error, verifyCode, otp, token };
};

const mapDispatchToProps = {
  verifyOtp,
  verifyOtpSuccess,
  loginWithSMS,
};

export default connect(mapStateToProps, mapDispatchToProps)(VerifyCodeStep);
