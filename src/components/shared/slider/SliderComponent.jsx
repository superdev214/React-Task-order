import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import "./SliderComponent.scss";

export default function SliderComponent() {
  return (
    <>
      <Swiper
        style={{ padding: "40px 0" }}
        modules={[Pagination]}
        pagination={{
          clickable: true,
          bulletClass: `swiper-pagination-bullet swiper-pagination-testClass swiper-pagination-style-active`,
        }}
      >
        <SwiperSlide>
          <img
            src="./assets/images/girl.png"
            alt=""
            className="mx-auto img-fluid onboard-img"
          />
          <div className="container">
            <div className="onboard-content">
              <p className="onboard-content__heading">What do you need done?</p>
              <p className="onboard-content__txt">
                Start by telling us about your task. Mention when and where (in
                person or remotely) you need it done, then suggest a fair budget
                for the task. Post any task, literally!
              </p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="./assets/images/boy.png"
            alt=""
            className="mx-auto img-fluid onboard-img"
          />
          <div className="container">
            <div className="onboard-content">
              <p className="onboard-content__heading">
                Assign the best person for you
              </p>
              <p className="onboard-content__txt">
                Take a look at profiles and reviews to pick the best Tasker for
                your task. when you accept an offer, your payment is held
                securely with Taklief Pay until the task is complete. Now you
                can message and call the Tasker to sort out the details.
              </p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="./assets/images/girl-and-boy.png"
            alt=""
            className="mx-auto img-fluid onboard-img"
          />
          <div className="container">
            <div className="onboard-content">
              <p className="onboard-content__heading">Task completed</p>
              <p className="onboard-content__txt">
                With your task complete, you just need to release the payment
                held with Taklief Pay. Then you’re free to leave a review for
                the Tasker so everyone can know what a great job they’ve done!.
              </p>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </>
  );
}
