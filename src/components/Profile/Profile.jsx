import { useState } from "react";
import { NavLink } from "react-router-dom";
import Uploader from "../shared/uploader/Uploader";
import CardReview from "../Tasks/Card/CardReview";
import ProfileHeader from "./Header/ProfileHeader";
import "./Profile.scss";

let badges = [
  { label: "Mobile", icon: "mobile" },
  { label: "Email", icon: "email" },
  { label: "Bank Account", icon: "bank-account" },
  { label: "Payment Method", icon: "wallet" },
];

let skills = [
  {
    label: "Transportation",
    id: 1,
    icon: "transportation",
    children: [
      { label: "Walk", icon: "walk" },
      { label: "Public transportation", icon: "public-transportation" },
      { label: "Truck", icon: "truck" },
      { label: "Car", icon: "car" },
      { label: "Helicopter", icon: "helicopter" },
      { label: "Spaceship", icon: "spaceship" },
    ],
  },
  { id: 2, label: "Education", icon: "education" },
  { id: 3, label: "Language", icon: "language" },
  { id: 4, label: "Work", icon: "work" },
  { id: 5, label: "Specialties", icon: "specialties" },
];

export default function ProfilePage() {
  const [activeTab, toggleActiveTab] = useState("Poster");
  const [updateNow, setUpdateNow] = useState(true);
  const [expansion, setExpansion] = useState(
    skills.map(({ id }) => {
      return {
        id,
        isOpened: false,
      };
    })
  );

  const toggle = (id) => {
    let temp = expansion;
    let index = expansion.map(({ id }) => id).indexOf(id);

    temp[index].isOpened = !temp[index].isOpened;

    setExpansion(temp);
    setUpdateNow(!updateNow);
  };

  const appendAction = () => {
    return (
      <div className="position-absolute" style={{ right: "20px", top: "10px" }}>
        <NavLink to={"/edit-profile"}>
          <button className="bg-transparent border-0">
            <img
              src="./assets/images/icons/edit-profile.svg"
              alt="edit profile"
            />
          </button>
        </NavLink>
        <button className="bg-transparent border-0 ml-20">
          <img src="./assets/images/icons/install.svg" alt="install" />
        </button>
      </div>
    );
  };

  const tabView = () => {
    return (
      <div className="switch-button">
        <button
          className={
            "d-block btn btn-gray btn-w-350 " +
            (activeTab === "Tasker" && "active")
          }
          onClick={() => toggleActiveTab("Tasker")}
        >
          As a tasker
        </button>
        <button
          className={
            "d-block btn btn-gray btn-w-350 " +
            (activeTab === "Poster" && "active")
          }
          onClick={() => toggleActiveTab("Poster")}
        >
          As a poster
        </button>
      </div>
    );
  };

  const badgesView = () => {
    return (
      <div className="pa-20 gray-list">
        <p className="font-bold">Badges</p>
        <ul>
          {badges.map((badge, index) => {
            return (
              <li
                key={index}
                className="font-bold mt-10 d-flex align-items-center"
              >
                <img
                  src={`./assets/images/profile/${badge.icon}.svg`}
                  alt="avatar"
                />
                <span className="ml-10">{badge.label}</span>
              </li>
            );
          })}
        </ul>
      </div>
    );
  };

  const skillsView = () => {
    return (
      <div className="pa-20 gray-list">
        <p className="font-bold">Skills</p>
        <ul>
          {skills.map((skill, index) => {
            return (
              <li
                key={index}
                className="font-bold mt-10"
                style={{ display: "block" }}
                onClick={() => toggle(skill.id)}
              >
                <img
                  src={`./assets/images/profile/${skill.icon}.svg`}
                  alt="avatar"
                />
                <span className="ml-10">{skill.label}</span>
                {expansion.length > 0 &&
                  expansion.filter(({ id }) => id === skill.id)[0].isOpened && (
                    <div className="d-flex flex-wrap mt-10">
                      {skill.children &&
                        skill.children.map((child, childIndex) => {
                          return (
                            <div className="chip m-1" key={childIndex}>
                              <img
                                src={`./assets/images/profile/${child.icon}.svg`}
                                alt="avatar"
                              />
                              <span className="text-white ml-10 size-15">
                                {child.label}
                              </span>
                            </div>
                          );
                        })}
                    </div>
                  )}
              </li>
            );
          })}
        </ul>
      </div>
    );
  };

  return (
    <div className="profile">
      <ProfileHeader appendEvent={appendAction} title="Aftab A." />
      <div className="scroll-area" style={{ height: "100vh" }}>
        <div className="header-top mb-10 position-relative">
          <div className="under-avatar">
            <img src="./assets/images/profile-avatar.png" alt="avatar" />
          </div>
        </div>
        <div className="container" style={{ marginTop: "100px" }}>
          <div className="mt-20 text-center">
            <p className="font-bold" style={{ fontSize: "27px" }}>
              Aftab A.
            </p>
            <p className="mt-10">
              Qaisar Bagh 226001, Lucknow, Uttar Pradesh, India{" "}
            </p>
          </div>
          <div className="line light my-20"></div>
          {tabView()}
          <div className="mt-20 card-detail pa-20">
            <div className="d-flex justify-content-between">
              <div className="d-flex align-items-center">
                <p className="font-bold mr-5">4.8</p>
                <img src={`./assets/images/icons/star-gold.svg`} alt="star" />
              </div>
              <p className="font-bold">98%</p>
            </div>
            <div className="d-flex justify-content-between mt-10">
              <p className="font-bold">Overall rating</p>
              <p className="font-bold">Completion rate</p>
            </div>
            <div className="size-13 d-flex justify-content-between mt-10">
              <span>9 Review</span>
              <span>14 Completed task</span>
            </div>
          </div>
        </div>
        <p className="pa-20 font-bold uppercase">Latest review</p>
        <div className="bg-grey">
          <div className="pa-20">
            <CardReview />
          </div>
        </div>
        <div className="pa-20">
          <button
            className="d-block btn btn-gray btn-w-350"
            style={{ color: "#42ADE2" }}
          >
            Read all reviews
          </button>
        </div>
        <div className="line light"></div>
        <div className="pa-20">
          <p className="font-bold">About</p>
          <p className="mt-10">
            **Welcome** <br />i am fan of flatpak <br /> Looking forward to
            meeting you and take
            <br /> that extra stress out of you in a blink of an eye.
            <br />
            <br /> Last online: 52 seconds ago
            <br /> Member since: November, 2021
          </p>
        </div>
        <div className="line light"></div>
        <div className="pa-20">
          <p className="uppercase font-bold">PORTFOLIO</p>
          <Uploader
            renderBtn={() => {
              return (
                <button
                  className="d-block btn btn-gray btn-w-350 mt-3"
                  style={{ color: "#42ADE2" }}
                >
                  Update portfolio
                </button>
              );
            }}
          />
        </div>
        <div className="line light"></div>
        {badgesView()}
        <div className="line light"></div>
        {skillsView()}
      </div>
    </div>
  );
}
