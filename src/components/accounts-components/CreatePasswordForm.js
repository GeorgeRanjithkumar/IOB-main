import React from "react";

import TextField from "./TextField";
import { Link } from "react-router-dom";

const CreatePasswordForm = () => {
  return (
    <div style={{ padding: "8.5em 5em" }}>
      <div style={{ textAlign: "center" }}>
        <h2>Create new password</h2>
        <h5 style={{ marginBottom: "1em", color: "#1A1A1A" }}>
          Your new password must be different from previous used password
        </h5>
      </div>
      <div style={{ marginBottom: "2em" }}>
        <TextField
          color={"#9FA0A3"}
          label={"Password"}
          placeholder={"Password"}
          type={"password"}
        />
        <h6 style={{ color: "#9FA0A3" }}>Must be at least 8 characters.</h6>
      </div>
      <div style={{ marginBottom: "1em" }}>
        <TextField
          color={"#9FA0A3"}
          label={"Confirm Password"}
          placeholder={"Password"}
          type={"password"}
        />
        <h6 style={{ color: "#9FA0A3" }}>Both passwords must match.</h6>
      </div>
      <div
        className="row"
        style={{
          justifyContent: "center",
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
        >
          Reset Password
        </button>
      </div>
    </div>
  );
};

export default CreatePasswordForm;
