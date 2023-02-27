import React, { createRef, Component } from "react";
import {
  MapContainer,
  TileLayer,
  Marker,
  Popup,
  FeatureGroup,
  WMSTileLayer,
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
  }



  render() {
    return (
      <div>
        <MapContainer
          center={{ lat: 31.515923503234955, lng: 50.8202975353157 }}
          zoom={12}
          ref={this.mapRef}
        >
          <TileLayer
            attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          <WMSTileLayer
            url="http://10.26.106.232:8080/geoserver/rassam-ws/wms?"
            layers="rassam-ws:pow_distr_rigo_boundary"
            format="image/png"
            transparent="true"
          />
          <WMSTileLayer
            url="http://10.26.106.232:8080/geoserver/rassam-ws/wms?"
            layers="rassam-ws:pow_distr_rigo_boundary"
            format="image/png"
            transparent="true"
          />
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
