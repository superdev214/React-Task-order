import "./ToggleSwitch.scss";

export default function ToggleSwitch(props) {
  return (
    <div className="switch d-flex align-items-center">
      <label htmlFor={props.id || "toggle"}>
        <input
          type="checkbox"
          checked={props.value}
          value={props.value}
          onChange={(e) => props.onChange(e.target.value)}
          id={props.id || "toggle"}
        />
        <div className={`toggle-wrapper ${props.dark ? "dark" : ""}`}>
          <span className="selector"></span>
        </div>
      </label>
      {props.label && <span className="ml-10">{props.label}</span>}
    </div>
  );
}
