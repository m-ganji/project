// import Drawer from "./Elements/Drawer.js";
import OpenLayers from "./Elements/OpenLayers.js";

export default function MapLayout() {
  // var persianDigits = "۰۱۲۳۴۵۶۷۸۹";
  // var persianMap = persianDigits.split("");

  // function convertToPersianNumber(input) {
  //   return input.replace(/\d/g, function (m) {
  //     return persianMap[parseInt(m)];
  //   });
  // }
  return (
    <div>
      <OpenLayers />
    </div >
  );
}





