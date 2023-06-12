import "./CarouselComponent.scss";

export default function CarouselComponent({ children }) {
  return (
    <>
      <div className={`carousel-custom task-cards pr-20`}>{children}</div>
    </>
  );
}
