// import Drawer from "./Elements/Drawer.js";
import Drawer from "./Elements/Drawer.js";
import OpenLayers from "./Elements/OpenLayers.js";

export default function MapLayout() {
  return (
    <div>
      <OpenLayers />
      <Drawer />
    </div >
  );
}