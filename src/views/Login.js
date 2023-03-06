import React, { useState } from "react";
import logo from "../assets/images/logo_login.png";
import ReCAPTCHA from "react-google-recaptcha";
import axios from "axios";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer, toast } from "react-toastify";
import { Button } from "reactstrap";
import { useNavigate } from "react-router-dom";

// import { CommonLoading } from "react-loadingg";
// import { ProgressBar } from "react-loader-spinner";
// import {  } from "react-loader-spinner";

export default function Login() {

  const navigateTo = useNavigate();

  const [token, setToken] = useState("");
  function onChange(value) {
    setToken(value);
  }

  const [user, setUser] = useState("");
  const [pass, setPass] = useState("");
  // const [success, setSuccess] = useState(false);
  function handleLogin() {
    var data = `username=${user}&password=${pass}&grecaptcha=${token}`;
    var config = {
      method: "post",
      url: "https://rassam-pars.ir/rassam/api/public/session",
      data: data,
    };
    axios(config)
      .then(function (response) {
        console.log(
          response
        );
        if (JSON.stringify(response.data.result) == "true") {
          //       (res) => {
          //   setPokemon(res.data.results);
          // })
          // setSuccess((current) => !current);
          // console.log(success);
          localStorage.setItem("cookie", JSON.stringify(response.data.cookie));
          navigateTo("/map");
        } else {
          toast.error("!نام کاربری یا رمز عبور درست نیست", {
            position: "top-center",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "dark",
          });
        }
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  const changeUsernameHandler = (event) => {
    console.log(event.target.value);
    setUser(event.target.value);
    // setPass(event.target.value);
  };

  const changePasswordHandler = (event) => {
    console.log(event.target.value);
    setPass(event.target.value);
    // setPass(event.target.value);
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
            onChange={changeUsernameHandler}
          />
          <input
            name="password"
            className="w-75 mb-3 input-height border rounded plchldr"
            dir="rtl"
            type="password"
            id="password"
            placeholder="کلمه عبور"
            // autocomplete="off"
            onChange={changePasswordHandler}
          />
          <div className="captcha w-75">
            <ReCAPTCHA
              sitekey="6LfnFRgiAAAAAGbcWS-LcYmgftG-Ws-6DwALFQ8u"
              onChange={onChange}
            // className="mb-2 g-recaptcha w-100"
            />
            {/* <CommonLoading /> */}
          </div>
          <Button
            color="warning"
            className="border-0 w-75 mb-3 pt-1 pb-1 yellow rounded textlogin"
            onClick={() => {
              handleLogin();
            }}
          >
            ورود به سیستم{" "}
          </Button>
          <ToastContainer
            position="top-center"
            autoClose={5000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
            theme="dark"
          />
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
