import React, { useState } from "react";
import {useNavigate} from "react-router-dom"
import "./KYCPage.css";

import Header from "../components/homepage-components/Header";
import KYCForm from "../components/accounts-components/KYCForm";
import KYCDocsForm from "../components/accounts-components/KYCDocsForm";

const KYCPage = () => {
  const navigate = useNavigate()
  const [formChange, setFormChange] = useState(false);
  return (
    <div className="kyc-viewport">
      <Header />
      <div className="row mt-5" style={{ paddingBottom: "20em" }}>
        <div className="col-sm-12 col-md-2">
          <div className="row" style={{ color: "white" }}>
            <h1 style={{ fontWeight: "900", fontSize: "3rem" }}>KYC</h1>
          </div>
        </div>
        <div className="col-sm-12 col-md-10">
          <div
            style={{
              margin: "1em",
              borderRadius: "24px",
              backgroundColor: "white",
              boxShadow: "2px 24px 24px #0000001A",
              padding: "4em 3em",
            }}
          >
            {formChange ? <KYCDocsForm /> : <KYCForm />}

            {formChange ? (
              <button
                className="btn"
                style={{
                  backgroundColor: "#0D74D7",
                  borderRadius: "35px",
                  color: "white",
                  padding: "1em 3em",
                  border: "none",
                  marginTop: "3em",
                }}
                onClick={() => navigate("/kycDocsSubmitted")}
              >
                Submit
              </button>
            ) : (
              <button
                className="btn"
                style={{
                  backgroundColor: "#0D74D7",
                  borderRadius: "35px",
                  color: "white",
                  padding: "1em 3em",
                  border: "none",
                  marginTop: "3em",
                }}
                onClick={() => setFormChange(true)}
              >
                Next
              </button>
            )}
           
          </div>
        </div>
      </div>
    </div>
  );
};

export default KYCPage;
