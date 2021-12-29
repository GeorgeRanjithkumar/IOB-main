import React, { useEffect } from "react";
import "./LoginPage.css";
import { useNavigate } from "react-router-dom";

import Header from "../components/homepage-components/Header";
import LoginImage from "../assets/accounts/login-image.png";
import LoginForm from "../components/accounts-components/LoginForm";

const LoginPage = () => {
  return (
    <div className="login-page-viewport">
      <Header />
      <div className="row mt-5" style={{ paddingBottom: "20em" }}>
        <div className="col-sm-12 col-md-12 col-lg-6">
          <div className="row" style={{ color: "white" }}>
            <h1 style={{ fontWeight: "600", fontSize: "3rem" }}>
              WELCOME <br />
              <span style={{ fontWeight: "900" }}>PLEASE LOGIN</span>
              <br /> TO CONTINUE!
            </h1>
          </div>
          <img alt="login" src={LoginImage} className="img-fluid" style={{ maxWidth: "75%" }} />
        </div>
        <div className="col-sm-12 col-md-12 col-lg-6">
          <div
            style={{
              margin: "1em",
              borderRadius: "24px",
              backgroundColor: "white",
              boxShadow: "2px 24px 24px #0000001A",
            }}
          >
            <LoginForm />
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
