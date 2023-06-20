import SliderComponent from "../../shared/slider/SliderComponent";
import { useSwiper } from "swiper/react";

export default function WalkthroughStep(props) {

  return (
    <section
      className="position-relative text-center"
      style={{ height: "calc(100% - 100px)" }}
    >
      <SliderComponent onContinue={props.onContinue}/>
    </section>
  );
}
