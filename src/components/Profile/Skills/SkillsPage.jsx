import React from "react";
import accountContext from "../../../context/AccountContext";
import ToggleSwitch from "../../shared/toggle-switch/ToggleSwitch";
import ProfileHeader from "../Header/ProfileHeader";

let skillData = [
  {
    icon: "education",
    items: [],
    title: "Education",
    value: "",
  },
  {
    icon: "language",
    items: [],
    title: "Language",
    value: "",
  },
  {
    icon: "work",
    items: [],
    title: "Work",
    value: "",
  },
  {
    icon: "specialties",
    items: [],
    title: "Specialties",
    value: "",
  },
];

let transportationData = [
  {
    isSelected: false,
    title: "Walk",
    icon: "walk",
  },
  {
    isSelected: false,
    title: "Public transportation",
    icon: "public-transportation",
  },
  {
    isSelected: false,
    title: "Car",
    icon: "car",
  },
  {
    isSelected: false,
    title: "Truck",
    icon: "truck",
  },
  {
    isSelected: false,
    title: "Helicopter",
    icon: "helicopter",
  },
  {
    isSelected: false,
    title: "Spaceship",
    icon: "spaceship",
  },
];

export default class SkillsPage extends React.Component {
  static contextType = accountContext;

  constructor(props) {
    super(props);
    this.state = { transportations: [], skills: [] };
  }

  componentDidMount() {
    this.setState({
      transportations: transportationData,
      skills: skillData,
    });
  }

  addItem = (parentIndex) => {
    let tempSkills = this.state.skills;
    tempSkills[parentIndex].items.push(tempSkills[parentIndex].value);
    tempSkills[parentIndex].value = "";

    this.setState({ skills: tempSkills });
    this.forceUpdate();
  };

  removeItem = (parentIndex, index) => {
    let tempSkills = this.state.skills;
    tempSkills[parentIndex].items.splice(index, 1);

    this.setState({ skills: tempSkills });
    this.forceUpdate();
  };

  changeInformationValue = (value, parentIndex) => {
    let tempSkills = this.state.skills;
    tempSkills[parentIndex].value = value;

    this.setState({ skills: tempSkills });
    this.forceUpdate();
  };

  toggle = (index) => {
    let temp = this.state.transportations;
    temp[index].isSelected = !temp[index].isSelected;

    this.setState({
      transportations: temp,
    });
    let keys = temp
      .filter((item) => item.isSelected === true)
      .map(({ title }) => title);
    this.context.notifications = keys;
    this.forceUpdate();
  };

  transportationView = () => {
    let { transportations } = this.state;
    return (
      <>
        <p className="mt-20 font-bold container">
          <img
            src="./assets/images/profile/transportation.svg"
            className="mr-10"
            alt="Post a task"
          />
          Transportation
        </p>
        <div className="mt-10 bg-grey">
          {transportations.map((preference, index) => {
            return (
              <div key={index} className="py-10 px-20">
                <div className=" d-flex align-items-center justify-content-between">
                  <div className="d-flex align-items-center gap-4">
                    <img
                      src={`./assets/images/profile/${preference.icon}.svg`}
                      alt="avatar"
                    />
                    <p className="font-text">{preference.title}</p>
                  </div>

                  <ToggleSwitch
                    dark={true}
                    id={`toggle-${preference.title}`}
                    value={preference.isSelected}
                    onChange={() => {
                      this.toggle(index);
                    }}
                  />
                </div>
              </div>
            );
          })}
          <p className="py-10 px-20">Maybe this one is too much.</p>
        </div>
      </>
    );
  };

  skillView = () => {
    let { skills } = this.state;

    return (
      <div className="container">
        {skills.map((skill, parentIndex) => {
          return (
            <div className="mt-20" key={parentIndex}>
              <p className="font-bold">
                <img
                  src={`./assets/images/profile/${skill.icon}.svg`}
                  className="mr-10"
                  alt="Post a task"
                />
                {skill.title}
              </p>
              <div className="form-control-group pt-sm">
                <input
                  className="w-100 custom-input"
                  type="text"
                  maxLength={50}
                  value={skill.value}
                  onChange={(e) => {
                    this.changeInformationValue(e.target.value, parentIndex);
                  }}
                />
              </div>
              <div className="pt-sm d-flex justify-content-end">
                <button
                  disabled={!skill.value}
                  className="d-block small btn btn-info"
                  onClick={() => {
                    this.addItem(parentIndex);
                  }}
                >
                  Add
                </button>
              </div>
              {skill.items.map((item, index) => {
                return (
                  <div
                    className="my-xs radius-3 bg-light p-2 d-flex justify-content-between"
                    key={index}
                  >
                    <span>{item}</span>
                    <button
                      onClick={() => {
                        this.removeItem(parentIndex, index);
                      }}
                      className="bg-transparent border-0 close-btn"
                    >
                      <img src="./assets/images/icons/close.svg" alt="close" />
                    </button>
                  </div>
                );
              })}
            </div>
          );
        })}
      </div>
    );
  };

  render() {
    return (
      <div>
        <ProfileHeader title="Skills" />
        <div className="gray-list scroll-area" style={{ marginTop: "50px" }}>
          {this.transportationView()}
          {this.skillView()}
        </div>
        <div className="fixed-bottom border-top">
          <button
            className="d-block btn btn-green btn-w-350"
            onClick={() => {}}
          >
            Save
          </button>
        </div>
      </div>
    );
  }
}
