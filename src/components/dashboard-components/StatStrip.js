import React from "react";

const StatStrip = () => {
  return (
    <div className="row" style={{ margin: 0, justifyContent: "space-between" }}>
      <div
        className="col-lg-7 col-md-12 col-sm-12"
        style={{
          borderRadius: "30px",
          boxShadow: "0px 10px 42px #000D7126",
          padding: "2em 4em",
        }}
      >
        <div
          className="row"
          style={{ justifyContent: "space-between", marginBottom: "1em" }}
        >
          <div className="col-3" style={{ color: "#656565" }}>
            STATISTICS
          </div>
          <div className="col-3" style={{ color: "#656565", textAlign: "right" }}>
            Updated 1 month ago ...
          </div>
        </div>
        <div className="row">
          <div className="col-lg-3 col-md-6 col-sm-12">
            <div className="row">
              <div
                className="col-6"
                style={{
                  backgroundColor: "#FCDFBC",
                  borderRadius: "10px",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  fontSize: "2em",
                  color: "#F7931B",
                }}
              >
                $
              </div>
              <div className="col-6">
                <h5>37%</h5>
                <h6>BTC</h6>
                <h6>Bitcoin</h6>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 col-sm-12">
            <div className="row">
              <div
                className="col-6"
                style={{
                  backgroundColor: "#DFDFDF",
                  borderRadius: "10px",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  fontSize: "2em",
                  color: "#141414",
                }}
              >
                $
              </div>
              <div className="col-6">
                <h5>37%</h5>
                <h6>BTC</h6>
                <h6>Bitcoin</h6>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 col-sm-12">
            <div className="row">
              <div
                className="col-6"
                style={{
                  backgroundColor: "#DBDCFF",
                  borderRadius: "10px",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  fontSize: "2em",
                  color: "#7174FF",
                }}
              >
                $
              </div>
              <div className="col-6">
                <h5>37%</h5>
                <h6>BTC</h6>
                <h6>Bitcoin</h6>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 col-sm-12">
            <div className="row">
              <div
                className="col-6"
                style={{
                  backgroundColor: "#C8FFF0",
                  borderRadius: "10px",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  fontSize: "2em",
                  color: "#50AF95",
                }}
              >
                $
              </div>
              <div className="col-6">
                <h5>37%</h5>
                <h6>BTC</h6>
                <h6>Bitcoin</h6>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        className="col-lg-2 col-md-6 col-sm-12"
        style={{
          borderRadius: "30px",
          boxShadow: "0px 10px 42px #000D7126",
          padding: "1.5em 3em",
          textAlign: "center",
        }}
      >
        <h5>CUSTOMERS</h5>
        <h4>80%</h4>
        <h6>Daily Customer</h6>
      </div>
      <div
        className="col-lg-2 col-md-6 col-sm-12"
        style={{
          borderRadius: "30px",
          boxShadow: "0px 10px 42px #000D7126",
          padding: "1.5em 3em",
          textAlign: "center",
        }}
      >
        <h5>CUSTOMERS</h5>
        <h4>80%</h4>
        <h6>Daily Customer</h6>
      </div>
    </div>
  );
};

export default StatStrip;
