import React, { useEffect, useState } from 'react';
import { useMap, useMapEvents } from "react-leaflet";
import * as WMS from "leaflet.wms";
import axios from 'axios';
import "leaflet.utm";
import { useDispatch } from 'react-redux';

function CustomWMSLayer(props) {
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
        }
    });
    return null;
}

export default CustomWMSLayer;

