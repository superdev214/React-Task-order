import { NavLink } from "react-router-dom";
import logoSvg from "../../../assets/images/logo.svg";
import { loginWithSMS } from "../../../redux/user/actions";
import { connect } from "react-redux";
import { useState } from "react";

function WalkthroughStep(props) {
  const [phoneNum, setPhoneNum] = useState("");
  const [error, setError] = useState("");

  const continueTo = () => {
    if (phoneNum !== "") {
      if (/^((?:[+?0?0?966]+)(?:\s?\d{2})(?:\s?\d{7}))$/.test(phoneNum)) {
        props.loginWithSMS(phoneNum);
        props.onContinue();
      } else {
        setError("Please enter a valid phone number for Saudi Arabia.");
      }
    } else {
      setError("Please enter a phone number.");
    }
  };

  const handlePhoneNumberChange = (e) => {
    const value = e.target.value;
    setPhoneNum(value);
    setError("");
  };

  const isContinueDisabled =
    phoneNum === "" ||
    !/^((?:[+?0?0?966]+)(?:\s?\d{2})(?:\s?\d{7}))$/.test(phoneNum);

  return (
    <div className="text-center" id="phone-number">
      <div className="form">
        <img className="logo-login" src={logoSvg} alt="logo" />
        <div className="container">
          {error && <p className="error-message">{error}</p>}
          <input
            className={`phone-input w-100 text-center ${error ? "error" : ""}`}
            type="number"
            inputMode="numeric"
            pattern="[0-9]*"
            onInput={(event) => {
              event.target.value = event.target.value.slice(0, 13);
            }}
            placeholder="Enter phone number"
            onChange={handlePhoneNumberChange}
          />
          <p className="size-13">
            By joining you agree to Taklief’s
            <br />
            <a className="size-13" href="/">
              Terms & Conditions
            </a>{" "}
            and&nbsp;
            <a className="size-13" href="/">
              Community Guidelines
            </a>
          </p>
        </div>
      </div>
      <div className="fixed-bottom">
        <p className="made-for-community">Made for the community</p>
        <NavLink to={"/home"}>
          <button className="d-block btn btn-gray btn-w-350" id="skipBtn">
            Skip
          </button>
        </NavLink>
        <button
          className="d-block btn btn-green btn-w-350"
          style={{ marginTop: "20px" }}
          onClick={continueTo}
          disabled={isContinueDisabled}
        >
          Continue
        </button>
      </div>
    </div>
  );
}

const mapStateToProps = ({ userReducer }) => {
  const { phone_no, error, verifyCode } = userReducer;
  return { phone_no, error };
};

const mapDispatchToProps = {
  loginWithSMS,
};

export default connect(mapStateToProps, mapDispatchToProps)(WalkthroughStep);
