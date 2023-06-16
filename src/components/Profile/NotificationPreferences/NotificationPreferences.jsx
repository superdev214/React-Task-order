import React, { useContext, useState, useEffect } from "react";
import ProfileHeader from "../Header/ProfileHeader";
import ToggleSwitch from "../../shared/toggle-switch/ToggleSwitch";
import accountContext from "../../../context/AccountContext";

const preferencesData = [
  {
    isSelected: false,
    subTitle:
      "You will always receive important notifications about any payments, cancellations and your account.",
    title: "Transactional",
  },
  {
    isSelected: false,
    subTitle:
      "Receive updates on any new comments, messages, offers and reviews.",
    title: "Task updates",
  },
  {
    isSelected: false,
    subTitle:
      "Friendly reminders if you’ve forgotten to accept an offer, release a payment or leave a review.",
    title: "Task reminder",
  },
  {
    isSelected: false,
    subTitle:
      "You’ll be instantly notified when a task is posted that matches your requirement.",
    title: "Task alerts",
  },
];

const NotificationPreferences = () => {
  const context = useContext(accountContext);
  const [preferences, setPreferences] = useState([]);

  useEffect(() => {
    setPreferences(
      preferencesData.map((item) => ({
        ...item,
        isSelected: context.notifications.includes(item.title),
      }))
    );
  }, [context.notifications]);

  const toggle = (index) => {
    const temp = [...preferences];
    temp[index].isSelected = !temp[index].isSelected;

    setPreferences(temp);

    const keys = temp
      .filter((item) => item.isSelected)
      .map(({ title }) => title);
    context.notifications = keys;
  };

  return (
    <div>
      <ProfileHeader title="Notification preferences" />
      <div className="gray-list" style={{ marginTop: "70px" }}>
        <div className="mt-20">
          {preferences.map((preference, index) => (
            <div key={index} className="bg-grey py-10 px-20">
              <div className="d-flex align-items-center justify-content-between">
                <p className="font-bold">{preference.title}</p>
                <ToggleSwitch
                  dark={true}
                  id={`toggle-${preference.title}`}
                  value={preference.isSelected}
                  onChange={() => toggle(index)}
                />
              </div>
              <p className="mt-10">{preference.subTitle}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default NotificationPreferences;
