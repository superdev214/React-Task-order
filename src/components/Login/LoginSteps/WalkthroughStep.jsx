import SliderComponent from "../../shared/slider/SliderComponent";

export default function WalkthroughStep(props) {
  return (
    <section
      className="position-relative text-center"
      style={{ height: "calc(100% - 100px)" }}
    >
      <SliderComponent />
      <div className="fixed-bottom">
        <button
          className="d-block btn btn-green btn-w-350"
          onClick={props.onContinue}
        >
          Continue
        </button>
      </div>
    </section>
  );
}
