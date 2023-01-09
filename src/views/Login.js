import React from 'react'
import logo from "../assets/images/logo_login.png"
import ReCAPTCHA from "react-google-recaptcha";

function onChange(value) {
  console.log("Captcha value:", value);
}

export default function Login() {
  return (
    <div className='d-flex justify-content-center align-items-center w-100 vh-100 col-form-label background-login'>
      <div className='w-50 d-flex flex-row bg-white container-login border-1 rounded'>
        <form action="?" method="post" autocomplete="off" className='w-50 d-flex justify-content-center align-items-center flex-column'>
          <p className='w-75 mt-5 d-flex mb-5' dir='rtl'>ورود کاربر</p>
          <input name="username" className="w-75 mb-1 input-height border rounded" dir='rtl' type="text" id="username" placeholder="نام کاربری" autocomplete="off" height={200} />
          <input name="password" className="w-75 mb-3 input-height border rounded" dir='rtl' type="password" id="password" placeholder="کلمه عبور" autocomplete="off" />
          <div className="captcha w-75">
            <ReCAPTCHA
              sitekey="6LeNv-EjAAAAAB3P4mLppe2s4NKddzWJoUqso8VX"
              onChange={onChange}
              className="mb-2 g-recaptcha "
            />
          </div>
          <button className='border-0 w-75 mb-3 pt-1 pb-1 yellow rounded'>ورود به سیستم </button>
        </form>
        <div className='w-50 yellow d-flex align-items-center justify-content-center flex-column text-black'>
          <img src={logo} className="mt-5 mb-3 w-50" />
          <p>
            سامانه اطلاعات مکانی تحت وب
          </p>
          <p className='mb-5'>
            شرکت بهینه رسام پارس
          </p>
        </div>
      </div>
    </div>
  )
}
