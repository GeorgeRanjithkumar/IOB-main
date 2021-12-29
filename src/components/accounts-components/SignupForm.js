import React, { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import TextField from "./TextField";

const SignupForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [fullName, setFullName] = useState("");
  const [msg, setMsg] = useState(null);

  function SignUp() {
    setMsg(null);
    axios
      .post(`http://13.235.67.128:3001/users/register`, {
        email: email,
        fullName: fullName,
        password: password,
      })
      .then((response) => {
        //after register
        console.log(response);
        if (response.data.status === 200) {
          window.location.replace("/login");
        } else {
          setMsg(response.data.message);
        }
      })
      .catch((err) => setMsg(err.response.data.message));
  }

  return (
    <div style={{ padding: "1.5em 4em" }}>
      <div style={{ textAlign: "center" }}>
        <h2>Introduce Yourself</h2>
        <h5 style={{ marginBottom: "1em" }}>
          We keep this information private
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
          label={"Full Name"}
          placeholder={"Full Name"}
          type={"text"}
          state={(e) => setFullName(e.target.value)}
        />
      </div>
      <div style={{ marginBottom: "1em" }}>
        <TextField
          color={"#9FA0A3"}
          label={"Email Address"}
          placeholder={"Your email address"}
          type={"email"}
          state={(e) => setEmail(e.target.value)}
        />
      </div>
      <div style={{ marginBottom: "1em" }}>
        <TextField
          color={"#9FA0A3"}
          label={"Password"}
          placeholder={"Set a unique password"}
          type={"password"}
          state={(e) => setPassword(e.target.value)}
        />
      </div>
      <div>
        <div className="form-check" style={{ marginBottom: "1em" }}>
          <input
            className="form-check-input"
            type="checkbox"
            value=""
            id="flexCheckDefault"
          />
          <label className="form-check-label" for="flexCheckDefault">
            I have read and accept the Terms and Conditions
          </label>
        </div>
      </div>

      <div
        className="row"
        style={{
          justifyContent: "space-between",
          alignItems: "center",
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
          onClick={SignUp}
        >
          Create Account
        </button>
        <div className="col-sm-12 col-md-6" style={{ textAlign: "right" }}>
          <h6>
            Already a member?{" "}
            <Link to="/login" style={{ textDecoration: "none" }}>
              <span style={{ color: "#0D74D7" }}>Sign In</span>
            </Link>
          </h6>
        </div>
      </div>
    </div>
  );
};

export default SignupForm;
