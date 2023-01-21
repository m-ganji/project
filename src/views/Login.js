import React, { useState } from 'react'
import logo from "../assets/images/logo_login.png"
import ReCAPTCHA from "react-google-recaptcha";
import axios from 'axios';

function onChange(value) {
  console.log("Captcha value:", value);
}

function handleModalOpen() {
  axios(config)
    .then(function (response) {
      console.log(JSON.stringify(response.data));
    })
    .catch(function (error) {
      console.log(error);
    });
}

export default function Login() {

  const [user, setUser] = useState("")
  const [pass, setPass] = useState("")

  return (
    <div className='d-flex justify-content-center align-items-center w-100 vh-100 col-form-label background-login'>
      <div className='w-50 d-flex flex-row bg-white container-login border-1 rounded responsive-form'>
        <div className='w-50 d-flex justify-content-center align-items-center flex-column'>
          <p className='w-75 mt-5 d-flex mb-5 textbelow' dir='rtl'>ورود کاربر</p>
          <input name="username" className="w-75 mb-1 input-height border rounded plchldr" dir='rtl' type="text" id="username" placeholder="نام کاربری" autocomplete="off" height={200} onchange={() => setUser(value)} />
          <input name="password" className="w-75 mb-3 input-height border rounded plchldr" dir='rtl' type="password" id="password" placeholder="کلمه عبور" autocomplete="off" onchange={() => setPass(value)} />
          <div className="captcha w-75">
            <ReCAPTCHA
              sitekey="6LeNv-EjAAAAAB3P4mLppe2s4NKddzWJoUqso8VX"
              onChange={onChange}
            // className="mb-2 g-recaptcha w-100"
            />
          </div>
          <button className='border-0 w-75 mb-3 pt-1 pb-1 yellow rounded textlogin' onClick={() => {
            handleModalOpen();
            searchURL()
          }
          }>ورود به سیستم </button>
        </div>
        <div className='w-50 yellow d-flex align-items-center justify-content-center flex-column text-black'>
          <img src={logo} className="mt-5 mb-3 w-50" />
          <p className='textbelow'>
            سامانه اطلاعات مکانی تحت وب
          </p>
          <p className='mb-5 textbelow'>
            شرکت بهینه رسام پارس
          </p>
        </div>
      </div>
    </div >
  )
}
