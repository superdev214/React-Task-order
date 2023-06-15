import { NavLink } from "react-router-dom";

export default function WalkthroughStep(props) {
  return (
    <div className="text-center" id="phone-number">
      <div className="form">
        <img src="./assets/images/logo-big.png" alt="logo big" />
        <div className="container" style={{ paddingTop: "50px" }}>
          <input
            className="phone-input w-100 text-center"
            type="tel"
            placeholder="Enter phone number"
            oninput="this.value=this.value.slice(0,this.maxLength)"
            maxlength="10"
          />
          <p style={{ fontSize: "13px" }}>
            By joining you agree to Taklief’s
            <br />
            <a href="/">Terms & Conditions</a> and
            <a href="/">Community Guidlines</a>
          </p>
        </div>
      </div>
      <div className="fixed-bottom">
        <p className="bottom-txt">Made for the community</p>
        <NavLink to={"/home"}>
          <button className="d-block btn btn-gray btn-w-350" id="skipBtn">
            Skip
          </button>
        </NavLink>
        <button
          className="d-block btn btn-green btn-w-350"
          style={{ marginTop: "10px" }}
          onClick={props.onContinue}
        >
          Continue
        </button>
      </div>
    </div>
  );
}
