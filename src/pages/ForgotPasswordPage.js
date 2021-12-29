import React from "react";
import "./ForgotPasswordPage.css";

import Header from "../components/homepage-components/Header";
import ForgotPasswordImage from "../assets/accounts/forgot-password.png";
import ForgotPasswordForm from "../components/accounts-components/ForgotPasswordForm";

const ForgotPasswordPage = () => {
  return (
    <div className="forgot-password-viewport">
      <Header />
      <div className="row mt-5" style={{ paddingBottom: "20em" }}>
        <div className="col-sm-12 col-md-12 col-lg-6">
          <div className="row" style={{ color: "white" }}>
            <h1 style={{ fontWeight: "600", fontSize: "3rem" }}>
              FORGOT <br />
              <span style={{ fontWeight: "900" }}>PASSWORD</span>
            </h1>
          </div>
          <img
            alt="login"
            src={ForgotPasswordImage}
            className="img-fluid"
            style={{ maxWidth: "75%" }}
          />
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
            <ForgotPasswordForm />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ForgotPasswordPage;
