/*global google*/
import React, { useRef, useEffect, useState } from "react";
import { Loader } from "@googlemaps/js-api-loader";

const loader = new Loader({
  apiKey: String(process.env.API_HEY_GOOGLE_MAP),
  version: "weekly",
  libraries: ["places"],
});

const LocationSelection = ({ close, onChange }) => {
  const mapDiv = useRef(null);
  const [address, setAddress] = useState("");
  const [marker, setMarker] = useState(null);
  const [map, setMap] = useState(null);

  const handle = (e) => {
    setMarker(
      new google.maps.Marker({
        map: map,
      })
    );
    setTimeout(() => {
      console.log("marker", marker);
    }, 2000);
  };

  const onContinue = () => {
    onChange && onChange(address);
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
      });
      marker.setMap(map);

      const geocoder = new google.maps.Geocoder();

      geocoder.geocode({ address: "Montreal" }, (e) => {
        if (e.length > 0) setAddress(e[0].formatted_address);
      });

      google.maps.event.addListener(marker, "click", function () {
        console.log("click");
        map.setZoom(9);
        map.setCenter(marker.getPosition());
      });

      setMarker(marker);
      setMap(map);
    };

    fetchMap();
  }, []);

  return (
    <div className="modal-area">
      <div className="py-md flex justify-content-between p-3 weight-700">
        <button
          onClick={close}
          className="position-absolute bg-transparent border-0 close-btn"
        >
          <img src="./assets/images/close.png" alt="close" />
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
          className="d-block btn btn-green btn-w-350"
          onClick={onContinue}
        >
          Confirm
        </button>
      </div>
    </div>
  );
};

export default LocationSelection;
