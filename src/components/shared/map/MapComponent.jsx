/*global google*/
import React, { useEffect, useRef } from "react";
import { Loader } from "@googlemaps/js-api-loader";

const MapComponent = ({ onChange, style }) => {
  const mapDiv = useRef(null);

  useEffect(() => {
    const loader = new Loader({
      apiKey: String(process.env.API_HEY_GOOGLE_MAP),
      version: "weekly",
      libraries: ["places"],
    });

    const initializeMap = async () => {
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
        if (e.length > 0) {
          onChange && onChange(e[0].formatted_address);
        }
      });

      google.maps.event.addListener(marker, "click", () => {
        console.log("click");
        map.setZoom(9);
        map.setCenter(marker.getPosition());
      });
    };

    initializeMap();
  }, [onChange]);

  return (
    <div
      ref={mapDiv}
      style={
        style || {
          width: "100%",
          height: "90vh",
          borderRadius: "5px",
        }
      }
    />
  );
};

export default MapComponent;
