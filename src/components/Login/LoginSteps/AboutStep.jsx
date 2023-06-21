import { useEffect, useState } from "react";
import LocationSelection from "../../NewTask/LocationSelection/LocationSelection";
import { editProfile } from "../../../redux/user/actions";
import { connect, useSelector } from "react-redux";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function AboutStep(props) {
  const [locationSelectionModal, setLocationSelectionModal] = useState(false);
  const [address, setAddress] = useState();
  const [latlng, setLatlng] = useState({ lat: 0, lng: 0 });
  const [fullName, setFullName] = useState({
    firstName: null,
    lastName: null,
  });
  const [showUnauthorized, setShowUnauthorized] = useState(false);
  const token = useSelector(state => state.userReducer?.token);

  if(token) {
    localStorage.setItem('token', token);
  }
  useEffect(() => {
    const timer = setTimeout(() => {
      setShowUnauthorized(true);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  const isValidForm = () => {
    if (fullName.firstName && fullName.lastName && address) {
      return true;
    }
    return false;
  };

  const onContinue = () => {
    if (isValidForm()) {
      props.editProfile({
        first_name: fullName.firstName,
        last_name: fullName.lastName,
        lat: latlng.lat,
        lng: latlng.lng,
        address: address,
        country_code: props.phone_no.slice(0, 3),
        phone: props.phone_no.slice(4, 11),
        country_code_name: "SA",
        user_id: props.user_id,
      });
      props.onContinue();
      toast.success("Profile updated successfully."); // Display success toast
    } else {
      toast.error("Please fill in all the required fields."); // Display error toast
    }
  };

  return (
    <>
      {token ? (
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
      ) : showUnauthorized ? (
        <div>Unauthorized</div>
      ) : null}
    </>
  );
}

const mapStateToProps = ({ userReducer }) => {
  const { message, error, phone_no, user_id } = userReducer;
  return { message, error, phone_no, user_id };
};

const mapDispatchToProps = {
  editProfile,
};

export default connect(mapStateToProps, mapDispatchToProps)(AboutStep);
