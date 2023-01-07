import React, { createRef, Component } from "react";
import {
  Map,
  TileLayer,
  Marker,
  Popup,
  FeatureGroup,
  WMSTileLayer,
} from "react-leaflet";
import "leaflet/dist/leaflet.css";
import { useSelector } from "react-redux";

export default class MapExample extends Component {
  // const buttonCompare =

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
        {/* <div onClick={this.handleClick}>Zoom</div> */}
        <Map
          center={{ lat: 30.660803, lng: 50.984062 }}
          zoom={12}
          ref={this.mapRef}
        >
          <TileLayer
            attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          <WMSTileLayer
            url="http://10.26.106.232:8080/geoserver/ows?"
            layers="rassam-ws:pow_distr_rigo_boundary"
            format="image/png"
            transparent="true"
          />
          <WMSTileLayer
            url="http://10.26.106.232:8080/geoserver/ows?"
            layers="rassam-ws:oh_mv_line"
            format="image/png"
            transparent="true"
          />
          <WMSTileLayer
            url="http://10.26.106.232:8080/geoserver/ows?"
            layers="rassam-ws:auto_boostr"
            format="image/png"
            transparent="true"
          />
          <WMSTileLayer
            url="http://10.26.106.232:8080/geoserver/ows?"
            layers="rassam-ws:auto_switch"
            format="image/png"
            transparent="true"
          />
          <WMSTileLayer
            url="http://10.26.106.232:8080/geoserver/ows?"
            layers="rassam-ws:busbar"
            format="image/png"
            transparent="true"
          />
          <WMSTileLayer
            url="http://10.26.106.232:8080/geoserver/ows?"
            layers="rassam-ws:circt_brk"
            format="image/png"
            transparent="true"
          />
          <WMSTileLayer
            url="http://10.26.106.232:8080/geoserver/ows?"
            layers="rassam-ws:contactor"
            format="image/png"
            transparent="true"
          />
          <WMSTileLayer
            url="http://10.26.106.232:8080/geoserver/ows?"
            layers="rassam-ws:ct"
            format="image/png"
            transparent="true"
          />
          <WMSTileLayer
            url="http://10.26.106.232:8080/geoserver/ows?"
            layers="rassam-ws:cut_out"
            format="image/png"
            transparent="true"
          />
          <WMSTileLayer
            url="http://10.26.106.232:8080/geoserver/ows?"
            layers="rassam-ws:data_logger"
            format="image/png"
            transparent="true"
          />
          <WMSTileLayer
            url="http://10.26.106.232:8080/geoserver/ows?"
            layers="rassam-ws:dist_tr"
            format="image/png"
            transparent="true"
          />
          <WMSTileLayer
            url="http://10.26.106.232:8080/geoserver/ows?"
            layers="rassam-ws:discnt_s"
            format="image/png"
            transparent="true"
          />
          <WMSTileLayer
            url="http://10.26.106.232:8080/geoserver/ows?"
            layers="rassam-ws:distrb_box"
            format="image/png"
            transparent="true"
          />
          <WMSTileLayer
            url="http://10.26.106.232:8080/geoserver/ows?"
            layers="rassam-ws:earth_sys"
            format="image/png"
            transparent="true"
          />
          <WMSTileLayer
            url="http://10.26.106.232:8080/geoserver/ows?"
            layers="rassam-ws:flt_indc"
            format="image/png"
            transparent="true"
          />
          <WMSTileLayer
            url="http://10.26.106.232:8080/geoserver/ows?"
            layers="rassam-ws:fuse_switch"
            format="image/png"
            transparent="true"
          />
          <WMSTileLayer
            url="http://10.26.106.232:8080/geoserver/ows?"
            layers="rassam-ws:hv_substat"
            format="image/png"
            transparent="true"
          />
          <WMSTileLayer
            url="http://10.26.106.232:8080/geoserver/ows?"
            layers="rassam-ws:light_line_dedicated"
            format="image/png"
            transparent="true"
          />
          <WMSTileLayer
            url="http://10.26.106.232:8080/geoserver/ows?"
            layers="rassam-ws:light_pole"
            format="image/png"
            transparent="true"
          />
          <WMSTileLayer
            url="http://10.26.106.232:8080/geoserver/ows?"
            layers="rassam-ws:lighting_control_system"
            format="image/png"
            transparent="true"
          />
          <WMSTileLayer
            url="http://10.26.106.232:8080/geoserver/ows?"
            layers="rassam-ws:lv_busbar"
            format="image/png"
            transparent="true"
          />
          <WMSTileLayer
            url="http://10.26.106.232:8080/geoserver/ows?"
            layers="rassam-ws:lv_c_jnt"
            format="image/png"
            transparent="true"
          />
          <WMSTileLayer
            url="http://10.26.106.232:8080/geoserver/ows?"
            layers="rassam-ws:lv_cpacitr"
            format="image/png"
            transparent="true"
          />
          <WMSTileLayer
            url="http://10.26.106.232:8080/geoserver/ows?"
            layers="rassam-ws:lv_feeder"
            format="image/png"
            transparent="true"
          />
          <WMSTileLayer
            url="http://10.26.106.232:8080/geoserver/ows?"
            layers="rassam-ws:lv_isolator"
            format="image/png"
            transparent="true"
          />
          {/* page1 */}
          <WMSTileLayer
            url="http://10.26.106.232:8080/geoserver/ows?"
            layers="rassam-ws:lv_jumper"
            format="image/png"
            transparent="true"
          />
          <WMSTileLayer
            url="http://10.26.106.232:8080/geoserver/ows?"
            layers="	rassam-ws:lv_pole"
            format="image/png"
            transparent="true"
          />
          <WMSTileLayer
            url="http://10.26.106.232:8080/geoserver/ows?"
            layers="rassam-ws:lv_s_brd"
            format="image/png"
            transparent="true"
          />
          <WMSTileLayer
            url="http://10.26.106.232:8080/geoserver/ows?"
            layers="rassam-ws:lv_selfstand_terminal"
            format="image/png"
            transparent="true"
          />
          <WMSTileLayer
            url="http://10.26.106.232:8080/geoserver/ows?"
            layers="rassam-ws:modem"
            format="image/png"
            transparent="true"
          />
          <WMSTileLayer
            url="http://10.26.106.232:8080/geoserver/ows?"
            layers="rassam-ws:mof"
            format="image/png"
            transparent="true"
          />
          <WMSTileLayer
            url="http://10.26.106.232:8080/geoserver/ows?"
            layers="rassam-ws:mv_c_hd"
            format="image/png"
            transparent="true"
          />
          <WMSTileLayer
            url="http://10.26.106.232:8080/geoserver/ows?"
            layers="rassam-ws:mv_c_jnt"
            format="image/png"
            transparent="true"
          />
          <WMSTileLayer
            url="http://10.26.106.232:8080/geoserver/ows?"
            layers="rassam-ws:mv_cpaci"
            format="image/png"
            transparent="true"
          />
          <WMSTileLayer
            url="http://10.26.106.232:8080/geoserver/ows?"
            layers="rassam-ws:mv_feeder"
            format="image/png"
            transparent="true"
          />
          <WMSTileLayer
            url="http://10.26.106.232:8080/geoserver/ows?"
            layers="rassam-ws:mv_isolator"
            format="image/png"
            transparent="true"
          />
          <WMSTileLayer
            url="http://10.26.106.232:8080/geoserver/ows?"
            layers="rassam-ws:mv_jumpr"
            format="image/png"
            transparent="true"
          />
          <WMSTileLayer
            url="http://10.26.106.232:8080/geoserver/ows?"
            layers="rassam-ws:mv_pole"
            format="image/png"
            transparent="true"
          />
          <WMSTileLayer
            url="http://10.26.106.232:8080/geoserver/ows?"
            layers="rassam-ws:mv_s_brd"
            format="image/png"
            transparent="true"
          />
          <WMSTileLayer
            url="http://10.26.106.232:8080/geoserver/ows?"
            layers="rassam-ws:mv_selfstand_terminal"
            format="image/png"
            transparent="true"
          />
          <WMSTileLayer
            url="http://10.26.106.232:8080/geoserver/ows?"
            layers="rassam-ws:no_subscribers"
            format="image/png"
            transparent="true"
          />
          <WMSTileLayer
            url="http://10.26.106.232:8080/geoserver/ows?"
            layers="rassam-ws:oh_lv_line"
            format="image/png"
            transparent="true"
          />
          <WMSTileLayer
            url="http://10.26.106.232:8080/geoserver/ows?"
            layers="rassam-ws:oh_mv_line"
            format="image/png"
            transparent="true"
          />
          <WMSTileLayer
            url="http://10.26.106.232:8080/geoserver/ows?"
            layers="rassam-ws:pd_mdsub"
            format="image/png"
            transparent="true"
          />
          <WMSTileLayer
            url="http://10.26.106.232:8080/geoserver/ows?"
            layers="rassam-ws:pl_mdsub"
            format="image/png"
            transparent="true"
          />
          <WMSTileLayer
            url="http://10.26.106.232:8080/geoserver/ows?"
            layers="rassam-ws:pole_let"
            format="image/png"
            transparent="true"
          />
          <WMSTileLayer
            url="http://10.26.106.232:8080/geoserver/ows?"
            layers="rassam-ws:pow_distr_rigo_boundary"
            format="image/png"
            transparent="true"
          />
          <WMSTileLayer
            url="http://10.26.106.232:8080/geoserver/ows?"
            layers="rassam-ws:power_exchange_c"
            format="image/png"
            transparent="true"
          />
          <WMSTileLayer
            url="http://10.26.106.232:8080/geoserver/ows?"
            layers="rassam-ws:pt"
            format="image/png"
            transparent="true"
          />
          <WMSTileLayer
            url="http://10.26.106.232:8080/geoserver/ows?"
            layers="rassam-ws:recloser"
            format="image/png"
            transparent="true"
          />
          {/* page2 */}
          <WMSTileLayer
            url="http://10.26.106.232:8080/geoserver/ows?"
            layers="rassam-ws:relay"
            format="image/png"
            transparent="true"
          />
          <WMSTileLayer
            url="http://10.26.106.232:8080/geoserver/ows?"
            layers="rassam-ws:rtu"
            format="image/png"
            transparent="true"
          />
          <WMSTileLayer
            url="http://10.26.106.232:8080/geoserver/ows?"
            layers="rassam-ws:rural_map"
            format="image/png"
            transparent="true"
          />
          <WMSTileLayer
            url="http://10.26.106.232:8080/geoserver/ows?"
            layers="rassam-ws:sec_relay"
            format="image/png"
            transparent="true"
          />
          <WMSTileLayer
            url="http://10.26.106.232:8080/geoserver/ows?"
            layers="rassam-ws:sectionalizer"
            format="image/png"
            transparent="true"
          />
          <WMSTileLayer
            url="http://10.26.106.232:8080/geoserver/ows?"
            layers="rassam-ws:shulter"
            format="image/png"
            transparent="true"
          />
          <WMSTileLayer
            url="http://10.26.106.232:8080/geoserver/ows?"
            layers="rassam-ws:sp_lv_cable"
            format="image/png"
            transparent="true"
          />
          <WMSTileLayer
            url="http://10.26.106.232:8080/geoserver/ows?"
            layers="rassam-ws:sp_mv_cable"
            format="image/png"
            transparent="true"
          />
          <WMSTileLayer
            url="http://10.26.106.232:8080/geoserver/ows?"
            layers="rassam-ws:street_light"
            format="image/png"
            transparent="true"
          />
          <WMSTileLayer
            url="http://10.26.106.232:8080/geoserver/ows?"
            layers="rassam-ws:subscriber_cable"
            format="image/png"
            transparent="true"
          />
          <WMSTileLayer
            url="http://10.26.106.232:8080/geoserver/ows?"
            layers="rassam-ws:surg_arstr"
            format="image/png"
            transparent="true"
          />
          <WMSTileLayer
            url="http://10.26.106.232:8080/geoserver/ows?"
            layers="rassam-ws:ug_lv_line"
            format="image/png"
            transparent="true"
          />
          <WMSTileLayer
            url="http://10.26.106.232:8080/geoserver/ows?"
            layers="rassam-ws:ug_mv_line"
            format="image/png"
            transparent="true"
          />
          <WMSTileLayer
            url="http://10.26.106.232:8080/geoserver/ows?"
            layers="rassam-ws:v_meter"
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
        </Map>
      </div>
    );
  }
}
