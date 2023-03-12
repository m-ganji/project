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
import CustomWMSLayer from './CustomWMSLayer'


export default class MapExample extends Component {
  constructor() {
    super();
    this.mapRef = createRef();
    this.groupRef = createRef();
    // this.buttonSituation = useSelector((state) => state.layout.buttonSituation);
    this.position = [32.3274, 50.865]
    this.state = {
    };
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
          {/* <WMSTileLayer
            url="http://localhost:8080/geoserver/rassam-ws/wms?"
            layers="rassam-ws:oh_lv_line,rassam-ws:oh_mv_line,rassam-ws:pl_mdsub,rassam-ws:sp_lv_cable,rassam-ws:subscriber_cable,rassam-ws:ug_lv_line,rassam-ws:pow_distr_rigo_boundary,rassam-ws:hv_substat,rassam-ws:no_subscribers"
            format="image/png"
            transparent="true"
            maxZoom={24}
          /> */}
          <CustomWMSLayer
            layers={['rassam-ws:oh_lv_line,rassam-ws:oh_mv_line,rassam-ws:pl_mdsub,rassam-ws:sp_lv_cable,rassam-ws:subscriber_cable,rassam-ws:ug_lv_line,rassam-ws:pow_distr_rigo_boundary,rassam-ws:hv_substat,rassam-ws:no_subscribers']}
            options={{
              "format": "image/png",
              "transparent": "true",
              // "attribution": "<a href='https://ows.terrestris.de/'>terrestris</a>",
              // "info_format": "text/html"
              "maxZoom": "{24}",
              "feature_count": "24"
              // "property_name": "attr1,attr2,attr3,attr4,attr5"
            }}
            url="http://localhost:8080/geoserver/rassam-ws/wms?"
          />
          {/* <Marker position={this.position} eventHandlers={{
            click: (e) => {
              console.log('marker clicked', e)
            },
          }}>
            <Popup>
              <table>
                <tr>
                  <th>Company</th>
                  <th>Contact</th>
                  <th>Country</th>
                </tr>
                <tr>
                  <td>Alfreds Futterkiste</td>
                  <td>Maria Anders</td>
                  <td>Germany</td>
                </tr>
                <tr>
                  <td>Centro comercial Moctezuma</td>
                  <td>Francisco Chang</td>
                  <td>Mexico</td>
                </tr>
                <tr>
                  <td>Ernst Handel</td>
                  <td>Roland Mendel</td>
                  <td>Austria</td>
                </tr>
                <tr>
                  <td>Island Trading</td>
                  <td>Helen Bennett</td>
                  <td>UK</td>
                </tr>
                <tr>
                  <td>Laughing Bacchus Winecellars</td>
                  <td>Yoshi Tannamuri</td>
                  <td>Canada</td>
                </tr>
                <tr>
                  <td>Magazzini Alimentari Riuniti</td>
                  <td>Giovanni Rovelli</td>
                  <td>Italy</td>
                </tr>
              </table>
            </Popup>
          </Marker>
          <WMSTileLayer
            url="http://localhost:8080/geoserver/rassam-ws/wms?"
            layers="rassam-ws:oh_lv_line,rassam-ws:oh_mv_line,rassam-ws:pl_mdsub,rassam-ws:sp_lv_cable,rassam-ws:subscriber_cable,rassam-ws:ug_lv_line,rassam-ws:pow_distr_rigo_boundary,rassam-ws:hv_substat,rassam-ws:no_subscribers"
            format="image/png"
            transparent="true"
            maxZoom={24}
          /> */}
          {/* <WMSTileLayer
            url="http://localhost:8080/geoserver/rassam-ws/wms?"
            layers="rassam-ws:pd_mdsub"
            format="image/png"
            transparent="true"
            maxZoom={24}
           */}
          {/* PROBLEM rassam-ws:pd_mdsub */}
        </MapContainer>
      </div>
    );
  }
}
