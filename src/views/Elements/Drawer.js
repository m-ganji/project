import React, { useEffect } from "react";
import Hamburger from "hamburger-react";
import { useState } from "react";
import { MdHome } from "react-icons/md";
import { AiFillSetting } from "react-icons/ai";
import Popup from "reactjs-popup";
import { useDispatch } from "react-redux";
import { handleButtonSituation, systemHandler } from "../../redux/system";

export default function Drawer() {
  const [isOpen, setOpen] = useState(false);
  const [isOpenHome, setIsOpenHome] = useState(false);
  const [defaultCoord, setDefaultCoord] = useState();
  const dispatch = useDispatch();
  // const [degree, setDegree] = useState(false)

  useEffect(() => {
    dispatch(systemHandler(defaultCoord));
    dispatch(handleButtonSituation(isOpenHome));
    // dispatch(SystemHandlerDegree(degree))
  });

  function getSelectedValue(event) {
    console.log("Value: " + event.target.value);
    if (event.target.value == "degree") {
      setDefaultCoord(false)
      // setDegree(true)
    } else (event.target.value == "DEFAULT")
    setDefaultCoord(true)
    // setDegree(false)
  }

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
            trigger={
              <button
                className="smallcircle d-flex justify-content-center align-items-center border-0"
                title="تنظیمات سیستم مختصات"
                onClick={() => setIsOpenHome(!isOpenHome)}
              >
                <AiFillSetting size="1.5em" />
              </button>
            }
            modal
            nested
          >
            {(close) => (
              <div className="modal_popup" tabIndex="-1" role="dialog">
                <form
                  className="d-flex justify-content-center mb-2 gap-1"
                  action="#"
                >
                  <select name="system-coords" onChange={getSelectedValue} >
                    <option value="DEFAULT" >
                      Lat Lon
                    </option>
                    <option value="degree">درجه</option>
                  </select>
                  <label htmlFor="lang">نوع سیستم مختصات</label>
                </form>
                <div
                  className="d-flex justify-content-center gap-1"
                  role="document"
                >
                  <button
                    type="button"
                    className="btn btn-popup"
                    onClick={() => {
                      close();
                    }}
                  >
                    ثبت
                  </button>
                  <button
                    type="button"
                    className="btn btn-secondary"
                    data-dismiss="modal"
                    onClick={() => {
                      close();
                    }}
                  >
                    بستن
                  </button>
                </div>
              </div>
            )}
          </Popup>
        )}
      </div>
    </div>
  );
}