import React, { useEffect, useRef } from "react";
import "ol/ol.css";
import Map from "ol/Map";
import View from "ol/View";
import TileLayer from "ol/layer/Tile";
import { fromLonLat } from "ol/proj";
import OSM from "ol/source/OSM";
import TileWMS from 'ol/source/TileWMS.js';
import MousePosition from 'ol/control/MousePosition';
import { createStringXY } from 'ol/coordinate.js';
import { FullScreen, defaults as defaultControls } from 'ol/control.js';
import { toStringHDMS } from 'ol/coordinate.js';
import { useSelector } from "react-redux";
import WMSGetFeatureInfo from 'ol/format/WMSGetFeatureInfo.js';


export default function OpenLayers() {

    // const latLond = useSelector((state) => state.system.systemSelector)
    // console.log(latLond)
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
        map.addControl(
            new MousePosition({
                coordinateFormat: function (coord) {
                    return (coord);
                },
                projection: 'EPSG:4326',
            })
        )

        // map.on('click', function (evt) {
        //     // console.log(evt.frameState.viewState.center)
        //     // console.log(View)
        //     document.getElementById('info').innerHTML = '';
        //     const viewResolution = 67580.12931800757;
        //     const url = wmsSource.getFeatureInfoUrl(
        //         evt.coordinate,
        //         viewResolution,
        //         'EPSG:3857',
        //         { 'INFO_FORMAT': 'text/html' }
        //     );
        //     console.log(url)
        //     if (url) {
        //         fetch(url)
        //             .then((response) => response.text())
        //             .then((html) => {
        //                 document.getElementById('info').innerHTML = html;
        //             });
        //     }
        // });
        map.on('click', (event) => {
            const url = new WMSGetFeatureInfo(
                event.coordinate,
                map.getView().getResolution(),
                map.getView().getProjection(),
                {
                    INFO_FORMAT: 'text/html',
                    FORMAT: 'image/png',
                    TRANSPARENT: true,
                    QUERY_LAYERS: 'my_layer',
                },
                'http://localhost:8080/geoserver/wms'
            );

            // Use the URL to retrieve information about the clicked feature
            fetch(url)
                .then((response) => response.json())
                .then((data) => {
                    // Do something with the data
                    console.log(data);
                });
        });

        // if (!defaultCoord) {
        //     
        // }
        // map.addControl(
        //     new MousePosition({
        //         coordinateFormat: function (coord) {
        //             // console.log(toStringHDMS(coord))
        //             return (toStringHDMS(coord));
        //         },
        //         projection: 'EPSG:4326',
        //     })
        // )

        // map.on('pointermove', function (event) {
        //     console.log(event)
        //     const type = map.hasFeatureAtPixel(event.pixel) ? 'pointer' : 'inherit';
        //     map.getViewport().style.cursor = type;
        // });
    });
    return (
        <div className="map" ref={mapRef} />
    )
};