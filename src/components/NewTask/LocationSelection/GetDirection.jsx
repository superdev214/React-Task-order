/*global google*/
import React, { useRef, useEffect, useState } from "react";
import { Loader } from "@googlemaps/js-api-loader";
import { useMemo } from "react";

const loader = new Loader({
  apiKey: String(process.env.API_HEY_GOOGLE_MAP),
  version: "weekly",
  libraries: ["places"],
});

const GetDirection = ({ close, onChange, onGetValue }) => {
  const mapDiv = useRef(null);
  const [address, setAddress] = useState("");
  const [latlng, setLatlng] = useState({ lat: 45.508, lng: -73.587 });

  const onContinue = () => {
    onChange && onChange(address);
    onGetValue && onGetValue(latlng);
    close();
  };

  useEffect(() => {
    const fetchMap = async () => {
      await loader.load();
      const myCenter = new google.maps.LatLng(45.508, -73.587);
      const map = new google.maps.Map(mapDiv.current, {
        center: myCenter,
        zoom: 5,
        mapTypeId: google.maps.MapTypeId.ROADMAP,
      });
      const marker = new google.maps.Marker({
        position: myCenter,
        map: map,
      });
      console.log("marker", marker);
      google.maps.event.addListener(map, "click", function (event) {
        map.setCenter({ lat: event.latLng.lat(), lng: event.latLng.lng() });
        marker.setPosition({
          lat: event.latLng.lat(),
          lng: event.latLng.lng(),
        });
        setLatlng({
          ...latlng,
          lat: event.latLng.lat(),
          lng: event.latLng.lng(),
        });
      });
    };

    fetchMap();
  }, []);

  useEffect(() => {
    const geocoder = new google.maps.Geocoder();

    geocoder.geocode({ location: latlng }, (results, status) => {
      if (status === "OK") {
        setAddress(results[0].formatted_address);
      } else {
        console.error(status);
      }
    });
  }, [latlng]);

  return (
    <div className="modal-area">
      <div className="py-md d-flex justify-content-between p-3 font-bold">
        <button
          onClick={close}
          className="position-absolute bg-transparent border-0 close-btn"
        >
          <img src="./assets/images/icons/close.svg" alt="close" />
        </button>
        <p style={{ margin: "3px auto" }} className="font-bold">
          Location
        </p>
      </div>
      <div>
        <div
          ref={mapDiv}
          style={{ width: "100%", height: "90vh", borderRadius: "5px" }}
        />
        <div style={{ height: "100vh", width: "100%" }}></div>
      </div>
      <div className="fixed-bottom">
        <button
          className="d-block btn btn-gray btn-w-350"
          style={{ color: "#42ADE2", justifyContent: "center" }}
          onClick={onContinue}
        >
          <>
            <img
              src="./assets/images/icons/get-direction.svg"
              className="mr-10"
              alt="close"
            />
            Get directions
          </>
        </button>
      </div>
    </div>
  );
};

export default GetDirection;
