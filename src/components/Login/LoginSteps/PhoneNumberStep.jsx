import { NavLink } from "react-router-dom";
import logoSvg from "../../../assets/images/logo.svg";
import { loginWithSMS } from "../../../redux/actions";
import { connect } from 'react-redux';
import { useState } from "react";

function WalkthroughStep(props) {

  const [phoneNum, setPhoneNum] = useState("");

  const continueTo = () => {
    if(phoneNum !== "") {
      props.loginWithSMS(phoneNum)
    } 
    if(phoneNum !== "") {///Insert Verifycode condition.
      props.onContinue()
    }
  }

  return (
    <div className="text-center" id="phone-number">
      <div className="form">
        <img className="logo-login" src={logoSvg} alt="logo" />
        <div className="container">
          <input
            className="phone-input w-100 text-center"
            type="number"
            inputMode="numeric"
            pattern="[0-9]*"
            onInput={(event) => {
              event.target.value = event.target.value.slice(0, 10);
            }}
            placeholder="Enter phone number"
            onChange={(e) => setPhoneNum(e.target.value)}
          />
          <p style={{ fontSize: "13px" }}>
            By joining you agree to Taklief’s
            <br />
            <a style={{ fontSize: "13px" }} href="/">
              Terms & Conditions
            </a>{" "}
            and&nbsp;
            <a style={{ fontSize: "13px" }} href="/">
              Community Guidlines
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
        >
          Continue
        </button>
      </div>
    </div>
  );
}

const mapStateToProps = ({ userReducer}) => {
  const {phone_no, error, verifyCode} = userReducer;
  return {phone_no, error};
};

const mapDispatchToProps = {
  loginWithSMS,
}

export default connect(mapStateToProps, mapDispatchToProps)(WalkthroughStep);
