import React from "react";
import TextField from "./TextField";

const KYCForm = () => {
  return (
    <div>
      <div className="row" style={{ marginBottom: "2em" }}>
        <h2 style={{ color: "#0D74D7" }}>Personal Details</h2>
        <h5>
          Enter Your Details As They Appear On Your Identification Document.
        </h5>
      </div>
      <div className="row" style={{ marginBottom: "2em" }}>
        <div className="col-lg-4 col-md-6 col-sm-12">
          <TextField
            label={"First Name"}
            placeholder={"John"}
            color={"#0D74D7"}
            type={"text"}
          />
        </div>
        <div className="col-lg-4 col-md-6 col-sm-12">
          <TextField
            label={"Last Name"}
            placeholder={"Doe"}
            color={"#0D74D7"}
            type={"text"}
          />
        </div>
        <div className="col-lg-4 col-md-6 col-sm-12">
          <TextField
            label={"Email"}
            placeholder={"johndoe@gmail.com"}
            color={"#0D74D7"}
            type={"email"}
          />
        </div>
      </div>

      <div className="row" style={{ marginBottom: "2em" }}>
        <div className="col-lg-3 col-md-12 col-sm-12">
          <TextField
            label={"Phone"}
            placeholder={"9876543210"}
            color={"#0D74D7"}
            type={"number"}
          />
        </div>
        <div className="col-lg-3 col-md-12 col-sm-12">
          <TextField
            label={"Date of Birth"}
            placeholder={""}
            color={"#0D74D7"}
            type={"date"}
          />
        </div>
        <div className="col-lg-3 col-md-12 col-sm-12">
          <TextField
            label={"Gender"}
            placeholder={"Gender"}
            color={"#0D74D7"}
            type={"dropdown"}
          />
        </div>
        <div className="col-lg-3 col-md-12 col-sm-12">
          <TextField
            label={"Address"}
            placeholder={"Address"}
            color={"#0D74D7"}
            type={"text"}
          />
        </div>
      </div>

      <div className="row" style={{ marginBottom: "2em" }}>
        <div className="col-lg-3 col-md-12 col-sm-12">
          <TextField
            label={"Country"}
            placeholder={"Choose Country"}
            color={"#0D74D7"}
            type={"text"}
          />
        </div>
        <div className="col-lg-3 col-md-12 col-sm-12">
          <TextField
            label={"State"}
            placeholder={"Choose State"}
            color={"#0D74D7"}
            type={"text"}
          />
        </div>
        <div className="col-lg-3 col-md-12 col-sm-12">
          <TextField
            label={"City"}
            placeholder={"Choose City"}
            color={"#0D74D7"}
            type={"email"}
          />
        </div>
        {/* <div className="col-lg-3 col-md-12 col-sm-12">
          <TextField
            label={"Email"}
            placeholder={"123456"}
            color={"#0D74D7"}
            type={"number"}
          />
        </div> */}
      </div>
    </div>
  );
};

export default KYCForm;
