import { useState } from "react";
import { Rating } from "react-simple-star-rating";

export default function RatingComponent() {
  const [rate, setRate] = useState(0);

  return (
    <div className="text-center mt-20">
      <Rating
        onClick={(value) => setRate(value)}
        ratingValue={rate}
        size={40}
        transition
        SVGstyle={{ marginLeft: "16px", marginRight: "16px" }}
        fillColor="#FFE818"
        emptyColor="#C5CDD9"
      />
    </div>
  );
}
