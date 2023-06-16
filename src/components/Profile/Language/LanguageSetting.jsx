import { useContext, useState, useEffect } from "react";
import accountContext from "../../../context/AccountContext";
import ProfileHeader from "../Header/ProfileHeader";

const preferences = [
  {
    value: "Arabic",
    key: "ar",
  },
  {
    key: "en",
    value: "English",
  },
];

const LanguageSetting = () => {
  const context = useContext(accountContext);
  const [language, setLanguage] = useState("en");

  useEffect(() => {
    setLanguage(context.language);
  }, [context.language]);

  const saveChanges = () => {
    context.language = language;
  };

  return (
    <div>
      <ProfileHeader title="Change language" />
      <div className="gray-list container" style={{ marginTop: "70px" }}>
        <p className="font-bold">Choose your preferred language</p>
        <ul>
          {preferences.map((preference, index) => (
            <li
              key={index}
              className="d-flex align-items-center justify-content-between bg-grey pointer mt-10"
              onClick={() => setLanguage(preference.key)}
            >
              <div className="d-flex align-items-center">
                <img
                  src={`./assets/images/flags/${preference.key}.png`}
                  alt="flag"
                />
                <span className="ml-10 size-13">{preference.value}</span>
              </div>
              <div
                className={preference.key === language ? "circle select" : ""}
              ></div>
            </li>
          ))}
        </ul>
      </div>
      <div className="fixed-bottom border-top">
        <button
          className="d-block btn btn-green btn-w-350"
          onClick={saveChanges}
        >
          Save changes
        </button>
      </div>
    </div>
  );
};

export default LanguageSetting;
