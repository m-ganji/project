import Drawer from "./Elements/Drawer.js";
// import MapExample from "./Elements/Map.js";
import { useMap, useMapEvents } from "react-leaflet";
import React, { createRef, Component, useEffect, useState } from "react";
import {
  MapContainer,
  TileLayer,
  Marker,
  Popup,
  FeatureGroup,
  WMSTileLayer,
  ScaleControl,
} from "react-leaflet";
import "leaflet/dist/leaflet.css";
import CustomWMSLayer from "./Elements/CustomWMSLayer.js";
import "leaflet.utm";
import { useSelector } from "react-redux";

export default function MapLayout() {
  
  const position = [32.3274, 50.865];
  const mapRef = createRef();

  const [lat, setLat] = useState()
  const [lon, setLon] = useState()
  const [x, setX] = useState()
  const [y, setY] = useState()

  const systemSelector = useSelector(state => state.system.systemSelector)
  const systemSelectorLatLon = useSelector(state => state.system.systemSelectorLatLon)

  function MyComponent() {
    const map = useMapEvents({
      mousemove(e) {
        setX(convertToPersianNumber(e.latlng.utm().x.toFixed(2)))
        setY(convertToPersianNumber(e.latlng.utm().y.toFixed(2)))
        setLat(convertToPersianNumber(e.latlng.lat.toFixed(7)))
        setLon(convertToPersianNumber(e.latlng.lng.toFixed(7)))
      },
    })
    return null
  }

  var persianDigits = "۰۱۲۳۴۵۶۷۸۹";
  var persianMap = persianDigits.split("");

  function convertToPersianNumber(input) {
    return input.replace(/\d/g, function (m) {
      return persianMap[parseInt(m)];
    });
  }

  console.log(systemSelector, systemSelectorLatLon)

  return (
    <div>
      <Drawer />
      <div>
        <MapContainer
          center={position}
          zoom={11}
          ref={mapRef}
          maxNativeZoom={19}
          maxZoom={24}
        >
          <ScaleControl position="bottomleft" sticky={true} />
          <TileLayer
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            maxNativeZoom={19}
            maxZoom={24}
          />
          <CustomWMSLayer
            layers={['rassam-ws:oh_lv_line,rassam-ws:oh_mv_line,rassam-ws:pl_mdsub,rassam-ws:sp_lv_cable,rassam-ws:subscriber_cable,rassam-ws:ug_lv_line,rassam-ws:pow_distr_rigo_boundary,rassam-ws:hv_substat,rassam-ws:no_subscribers']}
            options={{
              "format": "image/png",
              "transparent": "true",
              "maxZoom": "{24}",
              "feature_count": "10",
              "info_format": "text/html"
            }}
            url="http://localhost:8080/geoserver/rassam-ws/wms?"
          />
          {/* PROBLEM rassam-ws:pd_mdsub */}
          <MyComponent />
        </MapContainer>
      </div>
      {systemSelector && !systemSelectorLatLon &&
        <p className="position-absolute top-70 start-100 translate-middle">
          {x}
          <br></br>
          {y}
        </p>
      }
      {systemSelectorLatLon && !systemSelector &&
        <p className="position-absolute top-70 start-100 translate-middle">
          {lat}
          <br></br>
          {lon}
        </p>
      }
    </div >
  );
}





