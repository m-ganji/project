import React, { useState } from "react";
import Map from "./Map";
import { Layers, TileLayer, VectorLayer } from "./Layers";
import { Style, Icon } from "ol/style";
import Feature from "ol/Feature";
import Point from "ol/geom/Point";
import { osm, vector } from "./Source";
import { fromLonLat, get } from "ol/proj";
import { Controls, FullScreenControl } from "./Controls";

import mapConfig from "./config.json";
import Drawer from "./Elements/Drawer.js";

const markersLonLat = [mapConfig.kansasCityLonLat, mapConfig.blueSpringsLonLat];

export default function MapLayout() {
  const [center, setCenter] = useState(mapConfig.center);
  const [zoom, setZoom] = useState(13);

  // const [showLayer1, setShowLayer1] = useState(true);
  // const [showLayer2, setShowLayer2] = useState(true);
  // const [showMarker, setShowMarker] = useState(false);

  // const [features, setFeatures] = useState(addMarkers(markersLonLat));

  return (
    <div>
      <Drawer />
      <Map center={fromLonLat(center)} zoom={zoom}>
        <Layers>
          <TileLayer source={osm()} zIndex={0} />
          {/* {showLayer1 && (
            <VectorLayer
              source={vector({
                features: new GeoJSON().readFeatures(geojsonObject, {
                  featureProjection: get("EPSG:3857"),
            />
          )} */}
        </Layers>
        <Controls>
          <FullScreenControl />
        </Controls>
      </Map>
    </div>
  );
}



