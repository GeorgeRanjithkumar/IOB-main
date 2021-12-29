import React, { useState } from "react";
import axios from "axios";
import TextField from "./TextField";
import { Link } from "react-router-dom";

const ForgotPasswordForm = () => {
  const [email, setEmail] = useState("");

  const [msg, setMsg] = useState(null);

  return (
    <div style={{ padding: "7.5em 3em" }}>
      <div style={{ textAlign: "center" }}>
        <h2>Forgot Password</h2>
        <h5 style={{ marginBottom: "1em", color: "#1A1A1A" }}>
          Enter the email associated with your account and we'll send an email
          with instructions to reset your password
        </h5>
        {msg && (
          <p>
            <small style={{ color: "red" }}>{msg}</small>
          </p>
        )}
      </div>
      <div style={{ marginBottom: "1em" }}>
        <TextField
          color={"#9FA0A3"}
          label={"Email Address"}
          placeholder={"Email@gmail.com"}
          type={"email"}
          state={(e) => setEmail(e.target.value)}
        />
      </div>

      <div
        className="row"
        style={{
          marginTop: "1.5em",
        }}
      >
        <div style={{ textAlign: "center" }}>
          <Link to="/check-email" style={{ textDecoration: "none" }}>
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
              Send Instructions
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ForgotPasswordForm;
