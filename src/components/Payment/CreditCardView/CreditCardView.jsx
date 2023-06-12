export default function CreditCardView({ img, title, desc, isSelected }) {
  return (
    <div className="flex items-center justify-between bg-grey gate-item">
      <div className="flex items-center">
        <img
          src={`./assets/images/${img}.png`}
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
