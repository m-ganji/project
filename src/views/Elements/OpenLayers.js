import React, { useEffect, useRef } from "react";
import "ol/ol.css";
import Map from "ol/Map";
import View from "ol/View";
import TileLayer from "ol/layer/Tile";
import { fromLonLat } from "ol/proj";
import { toLonLat } from "ol/proj";
import OSM from "ol/source/OSM";
import TileWMS from 'ol/source/TileWMS.js';
import MousePosition from 'ol/control/MousePosition';
import { createStringXY } from 'ol/coordinate.js';
import { FullScreen, defaults as defaultControls } from 'ol/control.js';
import { toStringHDMS } from 'ol/coordinate.js';


export default function OpenLayers() {
    const mapRef = useRef();
    useEffect(() => {
        const map = new Map({
            controls: defaultControls().extend([new FullScreen()]),
            target: mapRef.current,
            layers: [
                new TileLayer({
                    source: new OSM(),
                    projection: 'EPSG:32639',
                }),
                new TileLayer({
                    source: new TileWMS({
                        url: 'http://localhost:8080/geoserver/rassam-ws/wms?',
                        params: {
                            'LAYERS': 'rassam-ws:pow_distr_rigo_boundary'
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
        map.addControl(
            new MousePosition({
                coordinateFormat: function (coord) {
                    console.log((coord))
                    console.log(toStringHDMS(coord))
                    return (coord);
                },
                projection: 'EPSG:4326',
            })
        );
        // map.on('pointermove', function (event) {
        //     console.log(event)
        //     const type = map.hasFeatureAtPixel(event.pixel) ? 'pointer' : 'inherit';
        //     map.getViewport().style.cursor = type;
        // });
    });
    return <div className="map" ref={mapRef} />;
};