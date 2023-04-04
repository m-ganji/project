import React, { useEffect } from "react";
import Hamburger from "hamburger-react";
import { useState } from "react";
import { MdHome } from "react-icons/md";
import { AiFillSetting } from "react-icons/ai";
import { handleButtonSituation } from "../../redux/layout";
import { useDispatch } from "react-redux";
import Popup from 'reactjs-popup';
// import PopupButton from "./PopupButton";
// import Popup from 'reactjs-popup';


export default function Drawer() {
  const dispatch = useDispatch();

  const [isOpen, setOpen] = useState(false);
  const [isOpenHome, setIsOpenHome] = useState(false);


  useEffect(() => {
    dispatch(handleButtonSituation(isOpenHome));
  });

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
          >
            <MdHome size="1.5em" />
          </button>
        )}
        {isOpen && (

          <Popup
            trigger={<button
              className="smallcircle d-flex justify-content-center align-items-center border-0"
            // onClick={() => setIsOpenHome(!isOpenHome)}
            >
              <AiFillSetting size="1.5em" />
            </button>}
            modal
            nested
          >
            {close => (
              <div >
                <button className="close" onClick={close}>
                  &times;
                </button>
                <div className="header"> Modal Title </div>
                <div className="content">
                  {' '}
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque, a nostrum.
                  Dolorem, repellat quidem ut, minima sint vel eveniet quibusdam voluptates
                  delectus doloremque, explicabo tempore dicta adipisci fugit amet dignissimos?
                  <br />
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequatur sit
                  commodi beatae optio voluptatum sed eius cumque, delectus saepe repudiandae
                  explicabo nemo nam libero ad, doloribus, voluptas rem alias. Vitae?
                </div>
                <div className="actions">
                  <Popup
                    trigger={<button className="button"> Trigger </button>}
                    position="top center"
                    nested
                  >
                    <span>
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Beatae
                      magni omnis delectus nemo, maxime molestiae dolorem numquam
                      mollitia, voluptate ea, accusamus excepturi deleniti ratione
                      sapiente! Laudantium, aperiam doloribus. Odit, aut.
                    </span>
                  </Popup>
                  <button
                    className="button"
                    onClick={() => {
                      console.log('modal closed ');
                      close();
                    }}
                  >
                    close modal
                  </button>
                </div>
              </div>
            )}
          </Popup>


        )}
        {/* {isOpen && <button className='smallcircle d-flex justify-content-center align-items-center border-0'><AiOutlineSearch size="1.5em" /></button>} */}
      </div>
    </div>
  );
}
