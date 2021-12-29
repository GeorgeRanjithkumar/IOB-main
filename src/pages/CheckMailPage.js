import React from "react";
import "./CheckMailPage.css";

import Header from "../components/homepage-components/Header";
import CheckEmailImage from "../assets/accounts/check-email.png";
import CheckMailForm from "../components/accounts-components/CheckMailForm";

const CheckMailPage = () => {
  return (
    <div className="check-mail-viewport">
      <Header />
      <div className="row mt-5" style={{ paddingBottom: "20em" }}>
        <div className="col-sm-12 col-md-12 col-lg-6">
          <div className="row" style={{ color: "white" }}>
            <h1 style={{ fontWeight: "600", fontSize: "3rem" }}>
              CHECK <br />
              <span style={{ fontWeight: "900" }}>EMAIL</span>
            </h1>
          </div>
          <img
            alt="login"
            src={CheckEmailImage}
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
            <CheckMailForm />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CheckMailPage;
