// MapComponent.jsx
"use client";
import React from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import L from "leaflet";

// Fix for default marker icon issues with Webpack
import markerIcon from "leaflet/dist/images/marker-icon.png";
import markerShadow from "leaflet/dist/images/marker-shadow.png";
import { SiHere } from "react-icons/si";

let DefaultIcon = L.icon({
  iconUrl:"https://i.ibb.co/jTfCgzd/landmark-removebg-preview.png",
  iconSize: [30, 50],
    shadowUrl: markerShadow,
  iconAnchor: [12, 41],
});

L.Marker.prototype.options.icon = DefaultIcon;

const position = [22.327443428294522, 91.81243104896637]; // Replace with the coordinates of your specific location

function MapLeaflet() {
  return (
    <MapContainer
      center={position}
      zoom={15}
      style={{ height: "400px", width: "100%" }}
    >
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
      />
      <Marker position={position}>
        <Popup>
          I&apos;m here
          <br /> in Agrabad area, Chattogram, Bangladesh.
        </Popup>
      </Marker>
    </MapContainer>
  );
}

export default MapLeaflet;
