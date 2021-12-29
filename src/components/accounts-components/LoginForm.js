import React, { useState } from "react";
import axios from "axios";
import TextField from "./TextField";
import { Link } from "react-router-dom";

const LoginForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [msg, setMsg] = useState(null);

  function LogIn() {
    setMsg(null);
    axios
      .post(`http://13.235.67.128:3001/users/login`, {
        email: email,
        password: password,
      })
      .then((response) => {
        //after login
        console.log(response);
        if (response.data.status === 200) {
          window.location.replace("/kyc");
          localStorage.setItem("loginStatus", true);
        } else {
          setMsg(response.data.message);
        }
      })
      .catch((err) => setMsg(err.response.data.message));
  }

  return (
    <div style={{ padding: "1.5em 3em" }}>
      <div style={{ textAlign: "center" }}>
        <h2>Sign in to your account</h2>
        <h5 style={{ marginBottom: "1em", color: "#1A1A1A" }}>Don't have an account Create your account, it takes less than a minute.</h5>
        {msg && (
          <p>
            <small style={{ color: "red" }}>{msg}</small>
          </p>
        )}
      </div>
      <div style={{ marginBottom: "1em" }}>
        <TextField color={"#9FA0A3"} label={"Email Address"} placeholder={"Email@gmail.com"} type={"email"} state={(e) => setEmail(e.target.value)} />
      </div>
      <div style={{ marginBottom: "1em" }}>
        <TextField color={"#9FA0A3"} label={"Password"} placeholder={"Password"} type={"password"} state={(e) => setPassword(e.target.value)} />
      </div>
      <div
        className="row"
        style={{
          justifyContent: "space-between",
          alignItems: "center",
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
          onClick={LogIn}
        >
          Login
        </button>
        <div className="col-sm-12 col-md-6" style={{ textAlign: "right" }}>
          <Link to="/forgot-password" style={{ textDecoration: "none" }}>
            <h6>Forgot password?</h6>
          </Link>

          <h6>
            Don't have an Account?{" "}
            <Link to="/signup" style={{ textDecoration: "none" }}>
              <span style={{ color: "#0D74D7", textDecoration: "none" }}>Sign Up</span>
            </Link>
          </h6>
        </div>
      </div>
      <div style={{ textAlign: "center", margin: "1.5em 0" }}>
        <h6 style={{ color: "#9FA0A3" }}>Or connect using</h6>
        <div className="row">
          <button
            style={{
              boxShadow: "0px 5px 11px #D4D9E972",
              borderRadius: "7px",
              color: "#787878",
              border: "none",
              backgroundColor: "white",
              padding: "0.5em",
            }}
            className="col-sm-12 col-md-6"
          >
            Facebook
          </button>
          <button
            style={{
              boxShadow: "0px 5px 11px #D4D9E972",
              borderRadius: "7px",
              color: "#787878",
              border: "none",
              backgroundColor: "white",
              padding: "0.5em",
            }}
            className="col-sm-12 col-md-6"
          >
            Google
          </button>
        </div>
      </div>
    </div>
  );
};

export default LoginForm;
