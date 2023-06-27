/*global google*/
import React, { useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { chooseTask } from "../../../redux/actions";
import { Loader } from "@googlemaps/js-api-loader";

const MapComponent = ({ onChange, style, lat }) => {
  const mapDiv = useRef(null);

  let initLat = 45.508, initLong = -73.587;
  const dispatch = useDispatch();

  for (let i = 0; i<lat.length; i++) {
    if (lat[i].latitude && lat[i].longitude) {
      initLat = lat[i].latitude;
      initLong = lat[i].longitude;
      break;
    }
  }
  const getTaskId = (latitude, longitude) => {
    let selectedTaskId = 0;
    for (let i = 0; i<lat.length; i++) {
      if (lat[i].latitude == latitude && lat[i].longitude == longitude) {
        selectedTaskId = i;
        break;
      }
    }
    console.log("select map", selectedTaskId);
    dispatch(chooseTask(selectedTaskId));  
  }
  useEffect(() => {
    const loader = new Loader({
      apiKey: String(process.env.API_HEY_GOOGLE_MAP),
      version: "weekly",
      libraries: ["places"],
    });

    const initializeMap = async () => {
      await loader.load();
      const map = new google.maps.Map(mapDiv.current, {
        center: new google.maps.LatLng(initLat, initLong),
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
          map.setZoom(9);
          map.setCenter(marker.getPosition());
          getTaskId(marker.getPosition().lat(), marker.getPosition().lng());
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
