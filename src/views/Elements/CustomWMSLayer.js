import React from 'react';
import { useMap } from "react-leaflet";
import * as WMS from "leaflet.wms";
import { getSourceForUrl } from "leaflet.wms";

function CustomWMSLayer(props) {
    const { url, options, layers } = props;
    const map = useMap()

    // Add WMS source/layers
    const source = WMS.source(
        url,
        options
    );
    // console.log(source);

    for (let name of layers) {
        source.getLayer(name).addTo(map)
        console.log(layers)
        console.log(name)

        // if (name == rassam - ws:oh_lv_line) {

        // }

    }
    return null;
}

export default CustomWMSLayer;

