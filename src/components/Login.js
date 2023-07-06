import React from "react";
import Logo from "../assets/logo.svg";
import socialImg from "../assets/social-button-image.svg";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();

  const handlePage = () => {
    navigate("./Dashboard");
  };
  return (
    <>
      <div className="main-container">
        <div className="container">
          <div className="logo-image">
            <img src={Logo} alt="" />
          </div>
          <div className="form">
            <div className="form-details">
              <h2 className="login-form-heading">Welcome Back</h2>
              <h4 className="login-form-heading">Please enter your details</h4>
              <label htmlFor="email">Email</label>
              <input
                className="form-input-login"
                type="email"
                placeholder="Enter your email"
              />

              <label htmlFor="password">Password</label>
              <input className="form-input-login" type="password" placeholder="" />

              <button className="login-button" onClick={handlePage}>
                Login
              </button>

              <button className="social-button">
                <img src={socialImg} alt="" />
                <span>Sign in with VPN</span>{" "}
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
