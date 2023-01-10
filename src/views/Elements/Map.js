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
            layers="rassam-ws:pow_distr_rigo_boundary,rassam-ws:oh_mv_line,rassam-ws:auto_boostr,rassam-ws:auto_switch,rassam-ws:busbar,rassam-ws:circt_brk,rassam-ws:contactor,rassam-ws:ct,rassam-ws:cut_out,rassam-ws:data_logger,rassam-ws:dist_tr,rassam-ws:discnt_s,rassam-ws:distrb_box,rassam-ws:earth_sys,rassam-ws:flt_indc,rassam-ws:fuse_switch,rassam-ws:lv_feeder,rassam-ws:lv_isolator,rassam-ws:lv_jumper,rassam-ws:lv_pole,rassam-ws:lv_s_brd,rassam-ws:lv_selfstand_terminal,rassam-ws:,rassam-ws:modem,rassam-ws:mof,rassam-ws:mv_c_hd,rassam-ws:mv_c_jnt,rassam-ws:mv_cpaci,rassam-ws:mv_feeder,rassam-ws:mv_isolator,rassam-ws:mv_jumpr,rassam-ws:no_subscribers,rassam-ws:,rassam-ws:,rassam-ws:,rassam-ws:,rassam-ws:,rassam-ws:,rassam-ws:,rassam-ws:,rassam-ws:oh_lv_line,rassam-ws:,rassam-ws:mv_pole,rassam-ws:mv_s_brd,rassam-ws:mv_selfstand_terminal,rassam-ws:,rassam-ws:,rassam-ws:,rassam-ws:,rassam-ws:,rassam-ws:oh_mv_line,rassam-ws:,rassam-ws:,rassam-ws:,rassam-ws:,rassam-ws:lv_c_jnt,rassam-ws:,rassam-ws:,rassam-ws:,rassam-ws:,rassam-ws:,rassam-ws:,rassam-ws:,rassam-ws:pd_mdsub,rassam-ws:pole_let,rassam-ws:,rassam-ws:,rassam-ws:,rassam-ws:,rassam-ws:light_line_dedicated,rassam-ws:,rassam-ws:lv_cpacitr,rassam-ws:,rassam-ws:,rassam-ws:pl_mdsub,rassam-ws:,rassam-ws:,rassam-ws:,rassam-ws:,rassam-ws:,rassam-ws:,rassam-ws:,rassam-ws:lv_busbar,rassam-ws:hv_substat,rassam-ws:,rassam-ws:,rassam-ws:power_exchange_c,rassam-ws:pt,rassam-ws:recloser,rassam-ws:,rassam-ws:sec_relay,rassam-ws:,rassam-ws:,rassam-ws:rtu,rassam-ws:relay,rassam-ws:lighting_control_system,rassam-ws:light_pole,"
            format="image/png"
            transparent="true"
          />
          {/* page1 */}
          {/* page2 */}

          {/* <WMSTileLayer
            url="http://10.26.106.232:8080/geoserver/ows?"
            layers="rassam-ws:rural_map"
            format="image/png"
            transparent="true"
          /> */}
          <WMSTileLayer
            url="http://10.26.106.232:8080/geoserver/ows?"
            layers="rassam-ws:"
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
