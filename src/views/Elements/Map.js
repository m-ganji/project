import React, { createRef, Component, useEffect } from "react";
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
import CustomWMSLayer from './CustomWMSLayer'
import { CRS } from 'leaflet';
import { useSelector } from "react-redux";
import { useMapEvents } from "react-leaflet";




export default class MapExample extends Component {
  constructor() {
    super();
    this.mapRef = createRef();
    this.groupRef = createRef();
    // this.buttonSituation = useSelector((state) => state.layout.buttonSituation);
    this.position = [32.3274, 50.865]
  }
  render() {
    return (
      <div>
        <MapContainer
          center={{ lat: 32.3274, lng: 50.865 }}
          zoom={11}
          ref={this.mapRef}
          maxNativeZoom={19}
          maxZoom={24}
        // crs={CRS.EPSG32639}
        >
          <ScaleControl position="bottomleft" sticky={true} />
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
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
        </MapContainer>
      </div>
    );
  }
}
