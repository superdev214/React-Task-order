/*global google*/
import React, { useEffect, useRef } from "react";
import { Loader } from "@googlemaps/js-api-loader";

const MapComponent = ({ onChange, style, lat }) => {
  const mapDiv = useRef(null);

  useEffect(() => {
    const loader = new Loader({
      apiKey: String(process.env.API_HEY_GOOGLE_MAP),
      version: "weekly",
      libraries: ["places"],
    });

    const initializeMap = async () => {
      await loader.load();
      const map = new google.maps.Map(mapDiv.current, {
        center: new google.maps.LatLng(45.508, -73.587),
        zoom: 5,
        mapTypeId: google.maps.MapTypeId.ROADMAP,
      });

      const geocoder = new google.maps.Geocoder();
      lat?.forEach((location) => {
        const marker = new google.maps.Marker({
          position: new google.maps.LatLng(location.latitude, location.longitude),
          icon: "./assets/images/marker.svg",
          map: map,
        });

        geocoder.geocode({ location: marker.getPosition() }, (results, status) => {
          if (status === google.maps.GeocoderStatus.OK) {
            if (results[0]) {
              onChange && onChange(results[0].formatted_address);
            }
          }
        });

        google.maps.event.addListener(marker, "click", () => {
          console.log("click");
          map.setZoom(9);
          map.setCenter(marker.getPosition());
        });
      });
    };

    initializeMap();
  }, []);

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
