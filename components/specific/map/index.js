import React from "react";
import L from "leaflet";
import { MapContainer, TileLayer, Marker } from "react-leaflet";
import "leaflet/dist/leaflet.css";

const ContactUsMap = () => {
  const greenIcon = new L.icon({
    iconUrl: "/images/pin.svg",

    iconSize: [28, 75], // size of the icon
    shadowSize: [50, 64], // size of the shadow
    iconAnchor: [22, 54], // point of the icon which will correspond to marker's location
    shadowAnchor: [4, 62], // the same for the shadow
    popupAnchor: [-3, -76] // point from which the popup should open relative to the iconAnchor
  });
  return (
    <>
      <MapContainer
        center={[35.7466205465051, 51.30166853906937]}
        zoom={15}
        style={{ height: "100%", width: "100%", zIndex: "3" }}
        zoomControl={false}
      >
        <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
        <Marker
          position={[35.7466205465051, 51.30166853906937]}
          icon={greenIcon}
        ></Marker>
      </MapContainer>
    </>
  );
};

export default ContactUsMap;
