import React from "react";
import "./SignupPage.css";

import Header from "../components/homepage-components/Header";
import SignupImage from "../assets/accounts/signup-image.png";
import SignupForm from "../components/accounts-components/SignupForm";

const SignupPage = () => {
  return (
    <div className="signup-page-viewport">
      <Header />
      <div className="row mt-5" style={{ paddingBottom: "20em" }}>
        <div className="col-sm-12 col-md-12 col-lg-6">
          <div className="row" style={{ color: "white" }}>
            <h1 style={{ fontWeight: "600", fontSize: "3rem" }}>
              FIRST TIME <br />
              <span style={{ fontWeight: "900" }}>THESE DETAILS</span>
              <br /> ARE REQUIRED
            </h1>
          </div>
          <img
            alt="login"
            src={SignupImage}
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
            <SignupForm />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignupPage;
