import React from "react";
import "./CreatePasswordPage.css";

import Header from "../components/homepage-components/Header";
import CreatePasswordImage from "../assets/accounts/create-password.png";
import CreatePasswordForm from "../components/accounts-components/CreatePasswordForm";

const CreatePasswordPage = () => {
  return (
    <div className="create-password-viewport">
      <Header />
      <div className="row mt-5" style={{ paddingBottom: "20em" }}>
        <div className="col-sm-12 col-md-12 col-lg-6">
          <div className="row" style={{ color: "white" }}>
            <h1 style={{ fontWeight: "600", fontSize: "3rem" }}>
              CREATE <br />
              <span style={{ fontWeight: "900" }}>NEW PASSWORD</span>
            </h1>
          </div>
          <img
            alt="login"
            src={CreatePasswordImage}
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
            <CreatePasswordForm />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreatePasswordPage;
