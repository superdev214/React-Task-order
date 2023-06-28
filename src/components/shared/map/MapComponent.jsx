/*global google*/
import React, { useEffect, useState, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { chooseTask } from "../../../redux/actions";
import { Loader } from "@googlemaps/js-api-loader";

const MapComponent = ({ onChange, style, lat, setLocation}) => {
  const mapDiv = useRef(null);

  const [map, setMap] = useState(null);
  const [marker, setMarker] = useState(null);

  let initLat = 45.508, initLong = -73.587;
  const dispatch = useDispatch();
  if (lat) {
    for (let i = 0; i<lat.length; i++) {
      if (lat[i].latitude && lat[i].longitude) {
        initLat = lat[i].latitude;
        initLong = lat[i].longitude;
        break;
      }
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

      setMap(map);
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

  useEffect(() => {
    if (map) {
      let newMarker = null;
      const handleClick = (event)=> {
        const {latLng} = event;

        marker?.setMap(null);
        newMarker?.setMap(null);

        newMarker = new google.maps.Marker({
          position: latLng,
          icon: "./assets/images/marker.svg",
          map: map
        })

        setMarker(newMarker);

        const geocoder = new google.maps.Geocoder();
        geocoder.geocode({location: latLng}, (results, status) => {
          if (status === 'OK') {
            const cityResult = results[0].address_components.find((component) => component.types.includes('locality'));
            setLocation && setLocation({lat: latLng.lat().toFixed(3), lng: latLng.lng().toFixed(3), location: cityResult === undefined ? "" : cityResult.long_name});
          } else {
            setLocation && setLocation({lat: latLng.lat().toFixed(3), lng: latLng.lng().toFixed(3)});
          }
        });

      }
      map.addListener('click', handleClick);
    }
  }, [map, marker])

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
