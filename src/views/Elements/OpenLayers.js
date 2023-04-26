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
    var parseFeatureArr = function (arr) {
        var result = {};
        if (arr.length > 0) {
            arr.forEach(function (item) {
                var strId = item.id.split(".");
                if (!result.hasOwnProperty(strId[0]))
                    result[strId[0]] = {};
                result[strId[0]]["count"] = (result[strId[0]]["count"] || 0) + 1;
                if (!result[strId[0]].hasOwnProperty('list'))
                    result[strId[0]]['list'] = [];
                var obj = {};
                obj['id'] = +strId[1];
                obj['properties'] = item.properties;
                result[strId[0]]['list'].push(obj);
            });
        }
        return result;
    };
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
                'LAYERS': 'rassam-ws:pow_distr_rigo_boundary,rassam-ws:oh_lv_line,rassam-ws:oh_mv_line',
                "feature_count": "35",
                "format": "image/png",
            },
            serverType: 'geoserver',
        });
        map.on('click', (event) => {
            document.getElementById('info').innerHTML = '';
            const url = wmsSource.getFeatureInfoUrl(
                event.coordinate,
                map.getView().getResolution(),
                'EPSG:3857',
                { 'INFO_FORMAT': 'text/html' }
            );
            if (url) {
                fetch(url)
                    // .then((response) => response.text())
                    .then((response) => response.text())
                    .then((html) => {
                        document.getElementById('info').innerHTML = html;
                    });
            }
        });
        map.on('click', (event) => {
            const url = wmsSource.getFeatureInfoUrl(
                event.coordinate,
                map.getView().getResolution(),
                'EPSG:3857',
                { 'INFO_FORMAT': 'application/json' }
            );
            if (url) {
                fetch(url)
                    .then((response) => response.text())
                    .then((html) => {
                        const features = parseFeatureArr(JSON.parse(html).features);
                        console.log(features)
                    });
            }
        });
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
            <div id="info"></div>
        </>
    )
};