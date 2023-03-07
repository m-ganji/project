import React, { createRef, Component } from "react";
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
// import { WMSTileLayerWithHeader } from "./WMSTileLayerWithHeader";

export default class MapExample extends Component {
  constructor() {
    super();
    this.handleClick = this.handleClick.bind(this);
    this.mapRef = createRef();
    this.groupRef = createRef();
    // this.buttonSituation = useSelector((state) => state.layout.buttonSituation);
    this.state = {
      locations: [
        {
          name: "1",
          lat: 32.8733,
          lng: 59.2163,
        },
        {
          name: "2",
          lat: 33.8733,
          lng: 60.2163,
        },
        {
          name: "3",
          lat: 34.8733,
          lng: 61.2163,
        },
        {
          name: "4",
          lat: 35.8733,
          lng: 62.2163,
        },
        {
          name: "5",
          lat: 36.8733,
          lng: 63.2163,
        },
      ],
    };
  }

  handleClick() {
    const map = this.mapRef.current.leafletElement;
    const group = this.groupRef.current.leafletElement;
    map.fitBounds(group.getBounds());
    console.log("map, group");
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
        >
          <ScaleControl position="bottomleft" />
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            maxNativeZoom={19}
            maxZoom={24}
          />
          <WMSTileLayer
            url="http://localhost:8080/geoserver/rassam-ws/wms?"
            layers="rassam-ws:oh_lv_line,rassam-ws:oh_mv_line,rassam-ws:pl_mdsub,rassam-ws:sp_lv_cable,rassam-ws:subscriber_cable,rassam-ws:ug_lv_line,rassam-ws:pow_distr_rigo_boundary,rassam-ws:hv_substat,rassam-ws:no_subscribers"
            format="image/png"
            transparent="true"
            maxZoom={24}
          />
          {/* <WMSTileLayer
            url="http://localhost:8080/geoserver/rassam-ws/wms?"
            layers="rassam-ws:pd_mdsub"
            format="image/png"
            transparent="true"
            maxZoom={24}
          /> */}
          {/* PROBLEM rassam-ws:pd_mdsub */}
          {/* <WMSTileLayer
            url="http://10.26.106.232:8080/geoserver/rassam-ws/wms?"
            layers="rassam-ws:pow_distr_rigo_boundary"
            format="image/png"
            transparet="true"
          /> */}
          {/* <WMSTileLayer
            url="http://localhost:8080/geoserver/rassam-ws/wms?"
            layers="rassam-ws:no_subscribers"
            format="image/png"
            transparent="true"
          /> */}
          {/* <WMSTileLayer
            url="http://10.26.106.232:8080/geoserver/rassam-ws/wms?"
            layers="rassam-ws:pow_distr_rigo_boundary"
            format="image/png"
            transparet="true"
          /> */}
          {/* <WMSTileLayer
            url="http://10.26.106.232:8080/geoserver/rassam-ws/wms?"
            layers="rassam-ws:pow_distr_rigo_boundary"
            format="image/png"
            transparet="true"
          /> */}
          {/* <WMSTileLayer
            url="http://10.26.106.232:8080/geoserver/rassam-ws/wms?"
            layers="rassam-ws:hv_substat"
            format="image/png"
            transparent="true"
          /> */}
          {/* <WMSTileLayer
            url="http://10.26.106.232:8080/geoserver/rassam-ws/wms?"
            layers="rassam-ws:pow_distr_rigo_boundary"
            format="image/png"
            transparent="true"
          /> */}
          {/* <WMSTileLayer
            url="http://10.26.106.232:8080/geoserver/rassam-ws/wms?"
            layers="rassam-ws:pow_distr_rigo_boundary"
            format="image/png"
            transparent="true"
          />
          <WMSTileLayer
            url="http://10.26.106.232:8080/geoserver/rassam-ws/wms?"
            layers="rassam-ws:oh_lv_line"
            format="image/png"
            transparent="true"
          />
          <WMSTileLayer
            url="http://10.26.106.232:8080/geoserver/rassam-ws/wms?"
            layers="rassam-ws:no_subscribers"
            format="image/png"
            transparent="true"
          />
          <WMSTileLayer
            url="http://10.26.106.232:8080/geoserver/rassam-ws/wms?"
            layers="rassam-ws:oh_mv_line"
            format="image/png"
            transparent="true"
          />
          <WMSTileLayer
            url="http://10.26.106.232:8080/geoserver/rassam-ws/wms?"
            layers="rassam-ws:pd_mdsub"
            format="image/png"
            transparent="true"
          />
          <WMSTileLayer
            url="http://10.26.106.232:8080/geoserver/rassam-ws/wms?"
            layers="rassam-ws:pl_mdsub"
            format="image/png"
            transparent="true"
          />
          <WMSTileLayer
            url="http://10.26.106.232:8080/geoserver/rassam-ws/wms?"
            layers="rassam-ws:sp_lv_cable"
            format="image/png"
            transparent="true"
          />
          <WMSTileLayer
            url="http://10.26.106.232:8080/geoserver/rassam-ws/wms?"
            layers="rassam-ws:subscriber_cable"
            format="image/png"
            transparent="true"
          />
          <WMSTileLayer
            url="http://10.26.106.232:8080/geoserver/rassam-ws/wms?"
            layers="rassam-ws:ug_lv_line"
            format="image/png"
            transparent="true"
          />
          <WMSTileLayer
            url="http://10.26.106.232:8080/geoserver/rassam-ws/wms?"
            layers="rassam-ws:hv_substat"
            format="image/png"
            transparent="true"
          /> */}
          <FeatureGroup ref={this.groupRef}>
            {this.state.locations.map((location) => (
              <Marker
                key={location.name}
                position={{ lat: location.lat, lng: location.lng }}
                zoom={12}
              >
                <Popup>
                  <span>
                    <h4>{location.name}</h4>
                  </span>
                </Popup>
              </Marker>
            ))}
          </FeatureGroup>
        </MapContainer>
      </div>
    );
  }
}
