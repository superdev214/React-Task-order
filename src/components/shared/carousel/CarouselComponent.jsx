import "./CarouselComponent.scss";

export default function CarouselComponent({ children }) {
  return (
    <>
      <div className={`carousel-custom task-cards`}>{children}</div>
    </>
  );
}
