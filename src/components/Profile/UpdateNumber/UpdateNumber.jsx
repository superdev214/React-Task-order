import { useContext, useState } from "react";
import ProfileHeader from "../Header/ProfileHeader";
import accountContext from "../../../context/AccountContext";

const UpdateNumber = () => {
  const context = useContext(accountContext);
  const [phoneNumber, setPhoneNumber] = useState("");

  const saveChanges = () => {
    context.user.number = phoneNumber;
    setPhoneNumber("");
  };

  return (
    <div>
      <ProfileHeader title="Update number" />
      <div className="gray-list container" style={{ marginTop: "70px" }}>
        <p className="font-bold" style={{ paddingTop: "40px" }}>
          Your current number:
        </p>
        <p className="mt-10">{context.user.number}</p>
        <p className="mt-10 font-bold">New Number:</p>
        <p className="mt-10">
          Your new number will receive a confirmation code through SMS.
        </p>
        <div className="mt-10">
          <input
            className="w-100 custom-input"
            type="tel"
            value={phoneNumber}
            onChange={(e) => {
              setPhoneNumber(e.target.value);
            }}
          />
        </div>
        <p className="mt-20">
          You can change your Taklief number here. Your account and all your
          data will be moved to the new number.
        </p>
      </div>
      <div className="fixed-bottom border-top">
        <button
          className="d-block btn btn-green btn-w-350"
          onClick={saveChanges}
        >
          Continue
        </button>
      </div>
    </div>
  );
};

export default UpdateNumber;
