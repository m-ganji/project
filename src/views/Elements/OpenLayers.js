import React, { useEffect, useRef } from "react";
import "ol/ol.css";
import Map from "ol/Map";
import View from "ol/View";
import TileLayer from "ol/layer/Tile";
import OSM from "ol/source/OSM";
import TileWMS from 'ol/source/TileWMS.js';
import MousePosition from 'ol/control/MousePosition';
import { createStringXY } from 'ol/coordinate.js';
import { FullScreen, defaults as defaultControls } from 'ol/control.js';
import { toStringHDMS } from 'ol/coordinate.js';
import { useSelector } from "react-redux";
// import WMSGetFeatureInfo from 'ol/format/WMSGetFeatureInfo.js';
import proj4 from 'proj4-fully-loaded';
import { register } from 'ol/proj/proj4';
import { fromLonLat, transform } from "ol/proj";

export default function OpenLayers() {
    const mapRef = useRef();
    useEffect(() => {
        const map = new Map({
            controls: defaultControls().extend([new FullScreen()]),
            target: mapRef.current,
            layers: [
                new TileLayer({
                    source: new OSM(),
                }),
                new TileLayer({
                    source: new TileWMS({
                        url: 'http://localhost:8080/geoserver/rassam-ws/wms?',
                        params: {
                            'LAYERS': 'rassam-ws:pow_distr_rigo_boundary,rassam-ws:oh_lv_line,rassam-ws:oh_mv_line'
                        },
                        serverType: 'geoserver',
                    }),
                })
            ],
            view: new View({
                center: fromLonLat([51.225720, 31.347616]),
                zoom: 6
            }),
        });

        const wmsSource = new TileWMS({
            url: 'http://localhost:8080/geoserver/rassam-ws/wms?',
            params: {
                'LAYERS': 'rassam-ws:pow_distr_rigo_boundary,rassam-ws:oh_lv_line,rassam-ws:oh_mv_line'
            },
            serverType: 'geoserver',
        });
        map.on('click', (event) => {
            const url = wmsSource.getFeatureInfoUrl(
                event.coordinate,
                map.getView().getResolution(),
                'EPSG:3857',
                { 'INFO_FORMAT': 'text/html' }
            );
            console.log(url)
            if (url) {
                fetch(url)
                    .then((response) => response.text())
                    .then((html) => {
                        console.log(html);
                        document.getElementById('info').innerHTML = html;
                    });
            }
        });

        // map.addControl(
        //     new MousePosition({
        //         coordinateFormat: function (coord) {
        //             // console.log(toStringHDMS(coord))
        //             return (toStringHDMS(coord));
        //         },
        //         projection: 'EPSG:4326',
        //     })
        // )     
        map.addControl(
            new MousePosition({
                coordinateFormat: function (coord) {
                    const pointInUTM = proj4("EPSG:3857", "EPSG:32639").forward(coord);
                    return pointInUTM;
                },
            })
        )
    });
    return (
        <>
            <div className="map" ref={mapRef} />
        </>
    )
};