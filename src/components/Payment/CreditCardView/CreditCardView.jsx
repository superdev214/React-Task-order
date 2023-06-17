export default function CreditCardView({ img, title, desc, isSelected }) {
  return (
    <div className="d-flex align-items-center justify-content-between bg-grey gate-item">
      <div className="d-flex align-items-center">
        <img
          src={`./assets/images/icons/${img}.svg`}
          className="gate"
          alt="Post a task"
        />
        <div className="ml-10 size-13">
          <div>{title}</div>
          <div className="mt-10">{desc}</div>
        </div>
      </div>
      <div className={isSelected ? "circle select" : "circle"}></div>
    </div>
  );
}
