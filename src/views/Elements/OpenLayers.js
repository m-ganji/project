import React, { useEffect, useRef } from "react";
import "ol/ol.css";
import Map from "ol/Map";
import View from "ol/View";
import TileLayer from "ol/layer/Tile";
import { fromLonLat } from "ol/proj";
import OSM from "ol/source/OSM";
import TileWMS from 'ol/source/TileWMS.js';

export default function OpenLayers() {
    const mapRef = useRef();
    useEffect(() => {
        new Map({
            target: mapRef.current,
            layers: [
                new TileLayer({
                    source: new OSM()
                }),
                new TileLayer({
                    source: new TileWMS({
                        url: 'http://localhost:8080/geoserver/rassam-ws/wms?',
                        params: { 'LAYERS': 'rassam-ws:oh_lv_line' },
                        serverType: 'geoserver',
                    }),
                })
            ],

            view: new View({
                center: fromLonLat([51.225720, 31.347616]),
                zoom: 6
            })
        });
    });
    return <div className="map" ref={mapRef} />;
};





