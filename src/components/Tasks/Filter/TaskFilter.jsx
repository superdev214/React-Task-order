import { useState } from "react";
import ReactSlider from "react-slider";
import { useDispatch, useSelector } from "react-redux";

import ModalComponent from "../../shared/modal/ModalComponent";
import "./TaskFilter.scss";
import { filterTask } from "../../../redux/actions";
import MapComponent from "../../shared/map/MapComponent";

let filters = [
  { key: 0, value: "In person" },
  { key: 1, value: "Remotely" },
  { key: "", value: "All" },
];

export default function FilterComponent(props) {
  const [filter, setFilter] = useState("");
  const [radiusValue, setRadiusValue] = useState(5);
  const [priceValue, setPriceValue] = useState({
    max: 100000000,
    min: 0,
  });
  const [location, setLocation] = useState({
    lat: "",
    lng: "",
    location: "",
  })

  const dispatch = useDispatch();
  const applyFilter = () => {
    let filterQuery = `?to_be_done=${filter}&lattitude=${location.lat}&longitude=${location.lng}&distance=${radiusValue}&min_price=${priceValue.min}&max_price=${priceValue.max}`;
    
    dispatch(filterTask(filterQuery));
    props.onFilter(filterQuery);
  }
  const apply = () => {
    applyFilter();
    props.closeFilter();
  };

  return (
    <>
    {
      props.locationModal ? (
        <>
          <ModalComponent
            close={props.close}
            title="Location"
          >
            <MapComponent setLocation={setLocation}/>
          </ModalComponent>
        </>
      )
      :
      (
        <>
          <ModalComponent
            btnCaption="Apply"
            bordered={true}
            title="Filter"
            close={props.closeFilter}
            onClick={apply}
          >

            <div className="filter">
              <p className="font-bold mt-20">To be done</p>
              {filters.map((item, index) => {
                return (
                  <div key={index} className="py-10">
                    <button
                      onClick={() => setFilter(item.key)}
                      className={`d-block x btn btn-w-350 ${
                        filter === item.key
                          ? "btn-blue text-white"
                          : "btn-gray text-black"
                      }`}
                    >
                      {item.value}
                    </button>
                  </div>
                );
              })}
              {filter !== 1 && 
                <>
                  <div className="my-20">
                    <p className="font-bold">Location</p>
                    <button
                      onClick={() => {
                          setFilter("")
                          props.setLocationModal(true);
                        }}
                      className="d-block btn btn-gray btn-w-350 mt-10"
                    >
                      <img
                        src="./assets/images/icons/location-dark.svg"
                        alt="location"
                        className="mr-10"
                      />
                      {location.location.length === 0 && "Latvia 1594"}
                      {location.location.length && location.location + "," + location.lat + "," + location.lng}
                    </button>
                  </div>

                  <div style={{ marginTop: "40px" }}>
                    <div className="d-flex justify-content-between mb-20">
                      <p className="font-bold">Distance</p>
                      <span className="size-15">{radiusValue} km</span>
                    </div>
                    <ReactSlider
                      marks={[5, 10, 25, 50, 100]}
                      markClassName="range-mark"
                      onChange={(event) => setRadiusValue(Number(event))}
                      min={0}
                      max={100}
                      thumbClassName="range-thumb"
                      trackClassName="range-track"
                      renderThumb={(props, state) => <div {...props}></div>}
                    />
                  </div>

                </>             
              }
              <div style={{ marginTop: "60px" }} className="pb-20">
                <div className="d-flex justify-content-between mb-20">
                  <p className="font-bold">Price</p>
                  <span className="size-15">
                    SR {priceValue.min} - {priceValue.max}
                  </span>
                </div>
                <ReactSlider
                  thumbClassName="range-thumb"
                  trackClassName="range-track"
                  onChange={(event) =>
                    setPriceValue({
                      max: event[1],
                      min: event[0],
                    })
                  }
                  min={0}
                  max={1000}
                  renderThumb={(props, state) => <div {...props}></div>}
                  pearling
                  defaultValue={[priceValue.min, priceValue.max]}
                  ariaLabel={["Lower thumb", "Upper thumb"]}
                />
              </div>
            </div>
          </ModalComponent>
        </>
      )
    }
    </>
  );
}
