import React, { useEffect } from "react";
import Hamburger from "hamburger-react";
import { useState } from "react";
import { MdHome } from "react-icons/md";
import { AiFillSetting } from "react-icons/ai";
import { handleButtonSituation, handleNotUTMSituation, handleUTMSituation } from "../../redux/layout";
import { useDispatch } from "react-redux";
import Popup from 'reactjs-popup';

export default function Drawer() {
  const [isOpen, setOpen] = useState(false);
  const [isOpenHome, setIsOpenHome] = useState(false);

  useEffect(() => {
    dispatch(handleButtonSituation(isOpenHome));
  });


  const [UTM, setUTM] = useState(false)
  const [notUTM, setNotUTM] = useState(false)

  function getSelectedValue(event) {
    console.log("Value: " + event.target.value);
    if (event.target.value === "UTM") {
      setUTM((current) => !current)
    }
    if (event.target.value === "Lat Lon") {
      setNotUTM((current) => !current)
    }
  }
  const dispatch = useDispatch();
  dispatch(handleUTMSituation(UTM));
  dispatch(handleNotUTMSituation(notUTM));

  // console.log("utm is", UTM)
  // console.log("notutm is", notUTM)

  // dispatch(handleButtonSituation(isOpenHome));

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
            // onClick={() => setIsOpenHome(!isOpenHome)}
            >
              <AiFillSetting size="1.5em" />
            </button>}
            modal
            nested
          >
            {close => (
              <div className="modal_popup" tabindex="-1" role="dialog">
                <form className="d-flex justify-content-center mb-2 gap-1" action="#">
                  <label for="lang">نوع سیستم مختصات</label>
                  <select name="languages" id="lang" onClick={getSelectedValue} >
                    <option selected disabled>--یک گزینه را انتخاب کنید--</option>
                    <option value="UTM">UTM</option>
                    <option value="Lat Lon">Lat Lon</option>
                  </select>
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
