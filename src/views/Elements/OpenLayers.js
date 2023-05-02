import React, { useEffect, useRef, useState } from "react";
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
import TreeView from '@mui/lab/TreeView';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import TreeItem from '@mui/lab/TreeItem';

export default function OpenLayers() {
    // console.log(wmsFeaturesInfo);
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
    const [wmsFeaturesInfo, setWmsFeaturesInfo] = useState("");
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
            const url = wmsSource.getFeatureInfoUrl(
                event.coordinate,
                map.getView().getResolution(),
                'EPSG:3857',
                { 'INFO_FORMAT': 'application/json' }
            );
            if (url) {
                fetch(url)
                    .then((response) => response.text())
                    .then((data) => {
                        const features = parseFeatureArr(JSON.parse(data).features);
                        setWmsFeaturesInfo((features))
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
    }, []
    );
    return (
        <>
            <div className="map" ref={mapRef} />
            <div id="info">
                {Object.keys(wmsFeaturesInfo).map((item, index) => {
                    return (
                        <TreeView
                            defaultCollapseIcon={<ExpandMoreIcon />}
                            defaultExpandIcon={<ChevronRightIcon />}
                            sx={{ height: 240, flexGrow: 1, maxWidth: 400, overflowY: 'auto' }}
                            key={index}
                        >
                            <TreeItem nodeId="1" label={<span>{item}: {Object.values(wmsFeaturesInfo)[index].count} </span>} >
                                {wmsFeaturesInfo[item].list.map(
                                    (childItem, childIndex) => {
                                        return (
                                            <TreeItem nodeId="2" label={<span>id: {childItem.id}</span>} key={childIndex} >
                                                <TreeItem nodeId={childItem.id} label={<span>ID: {childItem.properties.ID}</span>} />
                                                <TreeItem nodeId={childItem.id} label={<span>act_len: {childItem.properties.act_len}</span>} />
                                                <TreeItem nodeId={childItem.id} label={<span>allowed_current: {childItem.properties.allowed_current}</span>} />
                                                <TreeItem nodeId={childItem.id} label={<span>arrangement: {childItem.properties.arrangement}</span>} />
                                                <TreeItem nodeId={childItem.id} label={<span>cable_mat: {childItem.properties.cable_mat}</span>} />
                                                <TreeItem nodeId={childItem.id} label={<span>calculated_length: {childItem.properties.calculated_length}</span>} />
                                                <TreeItem nodeId={childItem.id} label={<span>class_type: {childItem.properties.class_type}</span>} />
                                                <TreeItem nodeId={childItem.id} label={<span>cndct_se_ar: {childItem.properties.cndct_se_ar}</span>} />
                                                <TreeItem nodeId={childItem.id} label={<span>cod_name: {childItem.properties.cod_name}</span>} />
                                                <TreeItem nodeId={childItem.id} label={<span>color: {childItem.properties.color}</span>} />
                                                <TreeItem nodeId={childItem.id} label={<span>conductor_temp: {childItem.properties.conductor_temp}</span>} />
                                                <TreeItem nodeId={childItem.id} label={<span>conductor_voltage: {childItem.properties.conductor_voltage}</span>} />
                                                <TreeItem nodeId={childItem.id} label={<span>description: {childItem.properties.description}</span>} />
                                                <TreeItem nodeId={childItem.id} label={<span>design_status: {childItem.properties.design_status}</span>} />
                                                <TreeItem nodeId={childItem.id} label={<span>dist_name: {childItem.properties.dist_name}</span>} />
                                                <TreeItem nodeId={childItem.id} label={<span>equ_rec: {childItem.properties.equ_rec}</span>} />
                                                <TreeItem nodeId={childItem.id} label={<span>equ_rsis: {childItem.properties.equ_rsis}</span>} />
                                                <TreeItem nodeId={childItem.id} label={<span>feeder_name: {childItem.properties.feeder_name}</span>} />
                                                <TreeItem nodeId={childItem.id} label={<span>feeder_segment_code: {childItem.properties.feeder_segment_code}</span>} />
                                                <TreeItem nodeId={childItem.id} label={<span>hrm: {childItem.properties.hrm}</span>} />
                                                <TreeItem nodeId={childItem.id} label={<span>id: {childItem.properties.id}</span>} />
                                                <TreeItem nodeId={childItem.id} label={<span>ins_type: {childItem.properties.ins_type}</span>} />
                                                <TreeItem nodeId={childItem.id} label={<span>insert_date_logical: {childItem.properties.insert_date_logical}</span>} />
                                                <TreeItem nodeId={childItem.id} label={<span>insert_user_logical: {childItem.properties.insert_user_logical}</span>} />
                                                <TreeItem nodeId={childItem.id} label={<span>manufactor: {childItem.properties.manufactor}</span>} />
                                                <TreeItem nodeId={childItem.id} label={<span>mspec_no: {childItem.properties.mspec_no}</span>} />
                                                <TreeItem nodeId={childItem.id} label={<span>net_type: {childItem.properties.net_type}</span>} />
                                                <TreeItem nodeId={childItem.id} label={<span>proj_id: {childItem.properties.proj_id}</span>} />
                                                <TreeItem nodeId={childItem.id} label={<span>spacer: {childItem.properties.spacer}</span>} />
                                                <TreeItem nodeId={childItem.id} label={<span>specific_id: {childItem.properties.specific_id}</span>} />
                                                <TreeItem nodeId={childItem.id} label={<span>update_date_logical: {childItem.properties.update_date_logical}</span>} />
                                                <TreeItem nodeId={childItem.id} label={<span>update_user_logical: {childItem.properties.update_user_logical}</span>} />
                                                <TreeItem nodeId={childItem.id} label={<span>util_year: {childItem.properties.util_year}</span>} />
                                                <TreeItem nodeId={childItem.id} label={<span>voltage: {childItem.properties.voltage}</span>} />
                                                <TreeItem nodeId={childItem.id} label={<span>z_seq_ract: {childItem.properties.z_seq_ract}</span>} />
                                                <TreeItem nodeId={childItem.id} label={<span>z_seq_res: {childItem.properties.z_seq_res}</span>} />
                                            </TreeItem>
                                        );
                                    }
                                )}
                            </TreeItem>
                        </TreeView>
                    )
                })}
            </div >
        </>
    )
};