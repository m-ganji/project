import React from "react";
import { useSelector } from "react-redux";
import Drawer from "./Elements/Drawer.js";
import MapExample from "./Elements/Map.js";
import { useMap, useMapEvents } from "react-leaflet";



export default function MapLayout() {
  const coordinates = useSelector((state) => state.layout.coordinates);
  console.log(coordinates)

  return (
    <div>
      <Drawer />
      <MapExample />
    </div>
  );
}





