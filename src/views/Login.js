import React from 'react'
import logo from "../assets/images/logo_login.png"

export default function Login() {
  return (
    <div className='d-flex justify-content-center align-items-center w-100 vh-100 col-form-label'>
      <div className='bg-black w-50 d-flex flex-row'>
        <div className='w-50'>1</div>
        <div className='w-50 yellow d-flex align-items-center justify-content-center flex-column'>
          <img src={logo} height={50} className="mt-5 mb-3" />
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
