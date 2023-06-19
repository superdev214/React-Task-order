import { NavLink } from "react-router-dom";
import SecondaryHeader from "../../Layouts/Header/SecondaryHeader/SecondaryHeader";

let menuItems = [
  {
    title: "Payment settings",
    children: [
      {
        icon: "bill",
        label: "Transaction history",
        link: "/transactions",
      },
      { icon: "wallet", label: "Update payment", link: "/update-payment" },
    ],
  },
  {
    title: "Personal",
    children: [
      {
        icon: "notification",
        label: "Notification preferences",
        link: "/notification-preferences",
      },
      { icon: "skills", label: "Skills", link: "/skills" },
    ],
  },
  {
    title: "More",
    children: [
      // {
      //   icon: "setup-task",
      //   label: "Set up task alerts",
      //   link: "/transactions",
      // },
      {
        icon: "community",
        label: "Community guidelines",
        link: "/transactions",
      },
      {
        icon: "poster",
        label: "Poster principles",
        link: "/poster-principles",
      },
      {
        icon: "tasker",
        label: "Tasker principles",
        link: "/tasker-principles",
      },
      { icon: "language", label: "Language", link: "/language-setting" },
    ],
  },
  {
    title: "safety",
    children: [
      { icon: "terms", label: "Terms and conditions", link: "/transactions" },
      { icon: "contact-us", label: "Contact us", link: "/transactions" },
      { icon: "mobile", label: "Update number", link: "/update-number" },
      {
        icon: "recycle-bin",
        label: "Delete my account",
        link: "/transactions",
      },
      { icon: "sign-out", label: "Sign out", link: "/transactions" },
    ],
  },
];

export default function UserAccount() {
  const informationView = () => {
    return (
      <div className="mt-20 d-flex align-items-center">
        <div>
          <img
            src="./assets/images/avatar.png"
            className="avatar"
            alt="Post a task"
          />
        </div>
        <div className="ml-10">
          <div className="font-bold">User name</div>
          <p className="mt-5 d-flex align-items-center">
            <span className="font-bold">3.8</span>
            <img
              style={{ margin: "0 5px" }}
              src={`./assets/images/icons/star-gold.svg`}
              alt="star"
            />{" "}
            (5)
          </p>
          <p className="mt-5">
            <span className="font-bold"> 94% </span> Completion rate
          </p>
          <p className="mt-5">Unit no, City, Latvia</p>
        </div>
      </div>
    );
  };

  const menuView = () => {
    return (
      <>
        {menuItems.map((menu, index) => {
          return (
            <ul className="mt-20" key={index}>
              <p className="font-bold uppercase">{menu.title}</p>
              {menu.children.map((item, index) => {
                return (
                  <NavLink to={item.link} key={index}>
                    <li key={index} className="mt-10">
                      <img
                        src={`./assets/images/profile/${item.icon}.svg`}
                        alt=""
                      />
                      <span className="pl-10">{item.label}</span>
                    </li>
                  </NavLink>
                );
              })}
            </ul>
          );
        })}
      </>
    );
  };

  return (
    <div>
      <SecondaryHeader hideSearch={true} title="Account" />
      <div className="pa-20 scroll-area">
        <p className="font-bold" style={{ marginTop: "48px" }}>
          PUBLIC PROFILE
        </p>
        {informationView()}
        <div className="gray-list" style={{ marginTop: "40px" }}>
          <NavLink to={"/profile"}>
            <li className="text-blue">My public profile</li>
          </NavLink>
          {menuView()}
        </div>
      </div>
    </div>
  );
}
