import React from "react";

const BalanceStrip = () => {
  return (
    <div className="row" style={{ justifyContent: "space-between" }}>
      <div
        className="col-lg-4 col-md-6 col-sm-12"
        style={{
          borderRadius: "30px",
          boxShadow: "0px 10px 42px #000D7126",
          padding: "2em 4em",
        }}
      >
        <div style={{ color: "#656565", marginBottom: "1.5em" }}>
          BALANCE DETAILS
        </div>
        <h1 style={{ fontWeight: "bold" }}>$ 2,128,002.00</h1>
        <h6 style={{ color: "#656565", marginBottom: "3em" }}>
          $ 2,128,002.00
        </h6>
        <div>
          <div className="row" style={{ justifyContent: "space-between" }}>
            <div
              className="col-2"
              style={{
                backgroundColor: "#E1FED5",
                borderRadius: "10px",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                fontSize: "2em",
                color: "#4EBB20",
              }}
            >
              $
            </div>
            <div className="col-3">
              <h5>$ 2,128,002.00</h5>
              <h6>Income</h6>
            </div>
            <div
              className="col-2"
              style={{
                backgroundColor: "#FCD0D0",
                borderRadius: "10px",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                fontSize: "2em",
                color: "#FF3E3F",
              }}
            >
              $
            </div>
            <div className="col-3">
              <h5>$ 2,128,002.00</h5>
              <h6>Income</h6>
            </div>
          </div>
          <div style={{ marginTop: "3em" }}>
            <button
              type="button"
              className="btn btn-success"
              style={{
                marginRight: "3em",
                padding: "0.5em 1em",
                fontSize: "1.5em",
                fontWeight: "bold",
                backgroundColor: "#4EBB20",
              }}
            >
              RECIVE
            </button>
            <button
              type="button"
              className="btn btn-danger"
              style={{
                marginRight: "3em",
                padding: "0.5em 1em",
                fontSize: "1.5em",
                fontWeight: "bold",
                backgroundColor: "#FF3E3F",
              }}
            >
              SEND
            </button>
          </div>
        </div>
      </div>
      <div
        className="col-lg-4 col-md-6 col-sm-12"
        style={{
          borderRadius: "30px",
          boxShadow: "0px 10px 42px #000D7126",
          padding: "2em 4em",
        }}
      ></div>
      <div
        className="col-lg-3 col-md-6 col-sm-12"
        style={{
          borderRadius: "30px",
          boxShadow: "0px 10px 42px #000D7126",
          padding: "2em 4em",
        }}
      ></div>
    </div>
  );
};

export default BalanceStrip;
