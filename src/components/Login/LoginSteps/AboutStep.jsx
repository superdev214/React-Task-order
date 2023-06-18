import { useState } from "react";
import LocationSelection from "../../NewTask/LocationSelection/LocationSelection";
import { editProfile } from "../../../redux/actions";
import { connect } from "react-redux";

function AboutStep(props) {
  const [locationSelectionModal, setLocationSelectionModal] = useState(false);
  const [address, setAddress] = useState();
  const [latlng, setLatlng] = useState({ lat: 0, lng: 0 });
  const [fullName, setFullName] = useState({
    firstName: null,
    lastName: null,
  });

  const isValidForm = () => {
    if (fullName.firstName && fullName.lastName) return true;
    return false;
  };

  const onContinue = () => {
    if (isValidForm()) {
      props.editProfile({ fullName: fullName, address: latlng });
      props.onContinue();
    } else {
      console.log("error==================>");
    }
  };

  return (
    <>
      {" "}
      <section id="verify-code">
        <div style={{ padding: "13px 0" }}>
          <div className="container">
            <div className="d-flex align-items-center justify-content-center">
              <button className="position-absolute bg-transparent border-0 close-btn">
                <img
                  src="./assets/images/icons/close.svg"
                  alt="close"
                  onClick={props.onClose}
                />
              </button>
              <p className="nav-title">About</p>
            </div>
          </div>
        </div>
        <div className="container text-initial mt-20">
          <p className="about-heading">
            Tell us about yourself to setup your profile
          </p>
          <div className="form-control-group mt-20">
            <p className="font-bold mb-10">First name</p>
            <input
              className="w-100 px-2"
              onChange={(e) =>
                setFullName({ ...fullName, firstName: e.target.value })
              }
            />
          </div>
          <div className="form-control-group mt-20">
            <p className="font-bold mb-10">Last name</p>
            <input
              className="w-100 px-2"
              onChange={(e) =>
                setFullName({ ...fullName, lastName: e.target.value })
              }
            />
          </div>
          <div className="mt-20">
            <p className="font-bold mb-10">Location</p>
            <button
              className="d-block btn btn-gray btn-w-350"
              onClick={() => setLocationSelectionModal(true)}
            >
              <div className="d-flex justify-content-center align-items-center">
                <img
                  src="./assets/images/icons/location-dark.svg"
                  alt="close"
                  onClick={props.onClose}
                />
                <p className="font-bold ml-10">
                  {address ? address : "Choose Location"}
                </p>
              </div>
            </button>
          </div>
          {locationSelectionModal && (
            <LocationSelection
              onChange={(address) => setAddress(address)}
              onGetValue={(latlng) => setLatlng(latlng)}
              close={() => setLocationSelectionModal(false)}
            />
          )}
        </div>
        <div className="fixed-bottom">
          <button
            className="d-block btn btn-green btn-w-350"
            onClick={onContinue}
          >
            Continue
          </button>
        </div>
      </section>
    </>
  );
}

const mapStateToProps = ({ userReducer }) => {
  const { message, error } = userReducer;
  return { message, error };
};

const mapDispatchToProps = {
  editProfile,
};

export default connect(mapStateToProps, mapDispatchToProps)(AboutStep);
