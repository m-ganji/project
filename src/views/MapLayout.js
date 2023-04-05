import { useSelector } from "react-redux";
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

export default function MapLayout() {
  // const coordinates = useSelector((state) => state.layout.coordinates);
  // console.log(coordinates);

  const UTMSituation = useSelector((state) => state.layout.isUTM);
  const NotUTMSituation = useSelector((state) => state.layout.isNotUTM);
  console.log(UTMSituation, NotUTMSituation)


  const position = [32.3274, 50.865];
  const mapRef = createRef();
  const groupRef = createRef();

  // const [lat, setLat] = useState()
  // const [lon, setLon] = useState()
  const [x, setX] = useState()
  const [y, setY] = useState()

  // console.log(x)
  // console.log(y)

  // const [utmSelected, setUTMSelected] = useState()

  function MyComponent() {
    const map = useMapEvents({
      mousemove(e) {
        console.log(e.latlng)
        setX(e.latlng.utm().x.toFixed(2))
        setY(e.latlng.utm().y.toFixed(2))
        // setLat(e.latlng.lat)
        // setLon(e.latlng.lng)
      },
    })
    return null
  }

  return (
    <div>
      <Drawer />
      {/* <MapExample /> */}
      <div>
        <MapContainer
          center={{ lat: 32.3274, lng: 50.865 }}
          zoom={11}
          ref={mapRef}
          maxNativeZoom={19}
          maxZoom={24}
        // crs={CRS.EPSG32639}
        >
          {/* <MyComponent /> */}
          <ScaleControl position="bottomleft" sticky={true} />
          <TileLayer
            // attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
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
      <p className="position-absolute top-70 start-100 translate-middle">
        {x}
        <br></br>
        {y}
      </p>
    </div >
  );
}





