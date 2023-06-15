import { NavLink } from "react-router-dom";

export default function WalkthroughStep(props) {
  return (
    <div className="text-center" id="phone-number">
      <div className="form">
        <img src="./assets/images/logo-big.png" alt="logo big" />
        <div className="container" style={{ paddingTop: "50px" }}>
          <input
            className="phone-input w-100 text-center"
            type="number"
            inputMode="numeric"
            pattern="[0-9]*"
            onInput={(event) => {
              event.target.value = event.target.value.slice(0, 10);
            }}
            placeholder="Enter phone number"
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
