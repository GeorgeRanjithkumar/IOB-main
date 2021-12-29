import React from "react";

import TextField from "./TextField";
import { Link } from "react-router-dom";

const CheckMailForm = () => {
  return (
    <div style={{ padding: "15.5em 3em" }}>
      <div style={{ textAlign: "center" }}>
        <h2>Check your mail</h2>
        <h5 style={{ marginBottom: "1em", color: "#1A1A1A" }}>
          we have send a password recover instructions to your email
        </h5>
      </div>

      <div
        className="row"
        style={{
          justifyContent: "center",
          marginTop: "1.5em",
        }}
      >
        <button
          className="col-sm-12 col-md-6"
          style={{
            backgroundColor: "#0D74D7",
            borderRadius: "35px",
            color: "white",
            padding: "1em 3em",
            border: "none",
          }}
        >
          ok
        </button>
      </div>
      <div style={{ textAlign: "center", marginTop: "5em" }}>
        <h5>
          Did not receive the email? Check your spam filter
          <br /> or{" "}
          <Link to="/forgot-password" style={{ textDecoration: "none" }}>
            <span style={{ color: "#0D74D7", textDecoration: "none" }}>
              try another email address
            </span>
          </Link>
        </h5>
      </div>
    </div>
  );
};

export default CheckMailForm;
