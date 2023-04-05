import React, { useEffect } from "react";
import Hamburger from "hamburger-react";
import { useState } from "react";
import { MdHome } from "react-icons/md";
import { AiFillSetting } from "react-icons/ai";
import Popup from 'reactjs-popup';
import { useDispatch } from "react-redux";
import { SystemHandler, SystemHandlerLatLon } from "../../redux/system";
import { handleButtonSituation } from "../../redux/system";

export default function Drawer() {
  const [isOpen, setOpen] = useState(false);
  const [isOpenHome, setIsOpenHome] = useState(false);

  console.log(isOpenHome)
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(handleButtonSituation(isOpenHome));
  });

  const [UTM, setUTM] = useState(true)
  const [notUTM, setNotUTM] = useState(false)
  dispatch(SystemHandler(UTM))
  dispatch(SystemHandlerLatLon(notUTM))

  function getSelectedValue(event) {
    console.log("Value: " + event.target.value);
    if (event.target.value === "UTM") {
      setUTM((current) => !current)
      setNotUTM((current) => !current)
    }
    if (event.target.value === "Lat Lon") {
      setNotUTM((current) => !current)
      setUTM((current) => !current)
    }
  }

  dispatch(handleButtonSituation(isOpenHome));

  return (
    <div className="menu ">
      <div className="circle">
        <Hamburger
          toggled={isOpen}
          toggle={setOpen}
          color="white"
          size={15}
          duration={0.9}
        />
      </div>
      <div className="d-flex flex-column align-items-center twobutton">
        {isOpen && (
          <button
            className="smallcircle d-flex justify-content-center align-items-center border-0"
            onClick={() => setIsOpenHome(!isOpenHome)}
            title="موقعیت اولیه"
          >
            <MdHome size="1.5em" />
          </button>
        )}
        {isOpen && (
          <Popup
            trigger={<button
              className="smallcircle d-flex justify-content-center align-items-center border-0"
              title="تنظیمات سیستم مختصات"
              onClick={() => setIsOpenHome(!isOpenHome)}
            >
              <AiFillSetting size="1.5em" />
            </button>}
            modal
            nested
          >
            {close => (
              <div className="modal_popup" tabindex="-1" role="dialog">
                <form className="d-flex justify-content-center mb-2 gap-1" action="#">
                  <select name="languages" id="lang" onClick={getSelectedValue} >
                    {/* <option selected disabled>--یک گزینه را انتخاب کنید--</option> */}
                    <option value="UTM" selected>UTM</option>
                    <option value="Lat Lon">Lat Lon</option>
                  </select>
                  <label for="lang">نوع سیستم مختصات</label>
                </form>
                <div className="d-flex justify-content-center gap-1" role="document">
                  <button type="button" className="btn btn-popup" onClick={
                    () => {
                      console.log("1");
                      close();
                    }
                  }
                  >
                    ثبت
                  </button>
                  <button type="button" className="btn btn-secondary" data-dismiss="modal" onClick={
                    () => {
                      console.log("2");
                      close();
                    }
                  }
                  >بستن</button>
                </div>
              </div>
            )}
          </Popup>
        )}
      </div>
    </div >
  );
}
