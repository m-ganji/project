import React, { useState } from "react";
import logo from "../assets/images/logo_login.png";
import ReCAPTCHA from "react-google-recaptcha";
import axios from "axios";

function onChange(value) {
  console.log("Captcha value:", value);
}

export default function Login() {
  const [user, setUser] = useState("Start typing and see what happens");
  const [pass, setPass] = useState("Start typing");

  function handleModalOpen() {
    axios(config)
      .then(function (response) {
        console.log(JSON.stringify(response.data));
        localStorage.setItem('cookie', JSON.stringify(response.data.cookie));
        if (JSON.stringify(response.data.result) == "true") {
          window.location.href = "/map"
        }
      })
      .catch(function (error) {
        console.log(error);
        // alert("dsada")
      });
  }
  const handleChange = (event) => {
    console.log(event.target.value);
    setUser(event.target.value);
    // setPass(event.target.value);
  };

  const handleChange2 = (event) => {
    console.log(event.target.value);
    setPass(event.target.value);
    // setPass(event.target.value);
  };

  var data = `username=${user}&password=${pass}&grecaptcha=03AD1IbLDcPDi9-5saTzc719OitCXzUAyM9M74Y5vDwwlC9qgeRSr5IdWYeVT9VFCX7U99Xe8vqYJUTH-Cjdbcr5yTF9KvxrcKZ4e5Q8idtEqNJAanamO6xEqpTYQNc0AiptytSN2XOFvcTl0wYbHeiovkawv8tjrs_pAn4cQIUX3skdrguDJP1-WBLTRImbGAMowmj_nsEkOnRdjjJ5nU9YY33xgD7rFXFxosDKensny_am8gcJXY3SrNZY_PZzQpv53dwg2uIYfAv0vW84n4AUJXRElRW0zU7SsxEU-44x20zwgLdLIRq79lF1Z_8Gvx3R8zpWlSdHWPeXbgj1px0QJ3XYvNo10IiMExCsD1MyJb9rCCTeRU_oOEFrHXoo4TUQdEaoDVLp0C5B4A6bGnJ6myIXW3zgYj1MclGtgyJLndzAZzV0M-k16d8yDj6JKiKnLdW6ehCIBincU6U11q-oLkyY1kQP-SrrTaP44nj2SY5AUzrexg0a5SIs7b_UwzY-0sKcmw6Z8ozDQeRJHCpNozz9_DTNvSsbHTOCeI-eLUPNhJbl-8w1g`;

  var config = {
    method: "post",
    url: "https://rassam-pars.ir/rassam/api/public/session",
    data: data,
  };

  return (
    <div className="d-flex justify-content-center align-items-center w-100 vh-100 col-form-label background-login">
      <div className="w-50 d-flex flex-row bg-white container-login border-1 rounded responsive-form">
        <div className="w-50 d-flex justify-content-center align-items-center flex-column">
          <p className="w-75 mt-5 d-flex mb-5 textbelow" dir="rtl">
            ورود کاربر
          </p>
          <input
            name="username"
            className="w-75 mb-1 input-height border rounded plchldr"
            dir="rtl"
            type="text"
            id="username"
            placeholder="نام کاربری"
            // autocomplete="off"
            height={200}
            onChange={handleChange}
          />
          <input
            name="password"
            className="w-75 mb-3 input-height border rounded plchldr"
            dir="rtl"
            type="password"
            id="password"
            placeholder="کلمه عبور"
            // autocomplete="off"
            onChange={handleChange2}
          />
          <div className="captcha w-75">
            <ReCAPTCHA
              sitekey="6LeNv-EjAAAAAB3P4mLppe2s4NKddzWJoUqso8VX"
              onChange={onChange}
            // className="mb-2 g-recaptcha w-100"
            />
          </div>
          <button
            className="border-0 w-75 mb-3 pt-1 pb-1 yellow rounded textlogin"
            onClick={() => {
              handleModalOpen();
              // searchURL();
            }}
          >
            ورود به سیستم{" "}
          </button>
        </div>
        <div className="w-50 yellow d-flex align-items-center justify-content-center flex-column text-black">
          <img src={logo} className="mt-5 mb-3 w-50" />
          <p className="textbelow">سامانه اطلاعات مکانی تحت وب</p>
          <p className="mb-5 textbelow">شرکت بهینه رسام پارس</p>
        </div>
      </div>
    </div>
  );
}
