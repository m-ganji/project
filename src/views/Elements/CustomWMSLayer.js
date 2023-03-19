import React, { useState } from 'react';
import { useMap, useMapEvents } from "react-leaflet";
import * as WMS from "leaflet.wms";
import axios from 'axios';
import "leaflet.utm";
import { useDispatch } from 'react-redux';
import { handleCoordinates } from '../../redux/layout';

function CustomWMSLayer(props) {
    const dispatch = useDispatch();
    const [coordinate1, setCoordinate1] = useState()
    console.log(coordinate1)
    // if (coordinate1) {
    //     dispatch(handleCoordinates(coordinate1))
    // }
    const { url, options, layers } = props;
    const [result, setResult] = useState([])
    const [x, setX] = useState("")
    const [y, setY] = useState("")
    const [bbox, setBbox] = useState("")
    const map = useMap()
    const sourceLayer = WMS.source(
        url,
        options
    );
    for (let name of layers) {
        sourceLayer.getLayer(name).addTo(map)
    }
    const mapX = useMapEvents({
        click(e) {
            setX(e.containerPoint.x)
            setY(e.containerPoint.y)
            setBbox(map.getBounds().toBBoxString())
        },
        mousemove(e) {
            // console.log(e.latlng.utm())
            setCoordinate1(e.latlng.utm())
            // if (coordinate1) {
            //     dispatch(handleCoordinates(coordinate1))
            // }
        },
    });
    // const feat_url = `http://localhost:8080/geoserver/rassam-ws/wms?&service=WMS&request=GetFeatureInfo&version=1.1.1&layers=rassam-ws:oh_lv_line,rassam-ws:oh_mv_line,rassam-ws:pl_mdsub,rassam-ws:sp_lv_cable,rassam-ws:subscriber_cable,rassam-ws:ug_lv_line,rassam-ws:pow_distr_rigo_boundary,rassam-ws:hv_substat,rassam-ws:no_subscribers&styles=&format=image/png&transparent=true&feature_count=24&info_format=text/javascript&width=1600&height=354&srs=EPSG:4326&query_layers=rassam-ws:oh_lv_line,rassam-ws:oh_mv_line,rassam-ws:pl_mdsub,rassam-ws:sp_lv_cable,rassam-ws:subscriber_cable,rassam-ws:ug_lv_line,rassam-ws:pow_distr_rigo_boundary,rassam-ws:hv_substat,rassam-ws:no_subscribers&X=${x}&Y=${y}&bbox=${bbox}`;
    // axios.get(feat_url)
    //     .then((response) => {
    //         setResult(response.data)
    //     })
    //     .catch(error => {
    //         console.log(error);
    //     })
    return null;
}

export default CustomWMSLayer;

