import React from 'react'
import Hamburger from 'hamburger-react'
import { useState } from 'react'
import { MdHome } from "react-icons/md";
// import { AiOutlineSearch } from "react-icons/ai";

export default function Drawer() {
    const [isOpen, setOpen] = useState(false)

    return (
        <div className="menu " >
            <div className='circle'>
                <Hamburger toggled={isOpen} toggle={setOpen} color="white" size={15} duration={0.9} />
            </div>
            <div className='d-flex flex-column align-items-center twobutton'>
                {isOpen && <button className='smallcircle d-flex justify-content-center align-items-center border-0'><MdHome size="1.5em" /></button>}
                {/* {isOpen && <button className='smallcircle d-flex justify-content-center align-items-center border-0'><AiOutlineSearch size="1.5em" /></button>} */}
            </div>
        </div>
    )
}



