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
import { WMSTileLayerWithHeader } from "./WMSTileLayerWithHeader";

export default class MapExample extends Component {
  constructor() {
    super();
    this.handleClick = this.handleClick.bind(this);
    this.mapRef = createRef();
    this.groupRef = createRef();
    // this.buttonSituation = useSelector((state) => state.layout.buttonSituation);
    this.state = {
      // data: null,
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
      
          <WMSTileLayerWithHeader
            url="https://rassam-pars.ir/rassam/api/public/geoserver/brp_webgis/wms?SERVICE=WMS&VERSION=1.1.1&REQUEST=GetMap&FORMAT=image%2Fpng&TRANSPARENT=true&LAYERS=brp_webgis:pow_distr_rigo_boundary&exceptions=application%2Fvnd.ogc.se_inimage&SRS=EPSG%3A3857&STYLES=&WIDTH=1600&HEIGHT=333&BBOX=5386042.15631346%2C3549450.712957739%2C5947981.92368654%2C3666404.4270422608"
            // format={"image/png"}
            // layers={"brp_webgis:pow_distr_rigo_boundary"}
            headers={{
              "Cookie": "key=be2041f2d7d63af280b26db3a96a50d0"
            }}
          />
          {/* <GeoJSON data={data} /> */}
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
