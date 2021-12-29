import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBitcoin } from "@fortawesome/free-brands-svg-icons";
const BuySellCard = () => {
  return (
    <div
      style={{
        boxShadow: "0px 10px 42px #000D7126",
        borderRadius: "10px",
        padding: "1em",
        marginBottom: "2em",
        backgroundColor: "#fff",
      }}
    >
      <div className="row" style={{ marginBottom: "1em" }}>
        <div className="col">
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              backgroundColor: "#F7931B",
              height: "50px",
              width: "50px",
              borderRadius: "50%",
              color: "white",
              fontSize: "2em",
              fontWeight: "bold",
            }}
          >
            <FontAwesomeIcon icon={faBitcoin} style={{ color: "#fff" }} />
          </div>
        </div>
        <div className="col" style={{ marginRight: "1em" }}>
          <div className="row">
            <button
              className="btn btn-outline-danger col mb-2"
              style={{
                marginLeft: "0.5em",
                color: "#4EBB20",
                backgroundColor: "#E3FBD8",
                border: "none",
              }}
            >
              Buy
            </button>
            <button
              style={{
                marginLeft: "0.5em",
                color: "#FF3E3F",
                backgroundColor: "#FFCECE",
                border: "none",
              }}
              className="btn btn-outline-success col mb-2"
            >
              Sell
            </button>
          </div>
        </div>
      </div>
      <div className="row">
        <p className="col" style={{fontWeight:"bold"}}>Bitcoin <span style={{fontWeight:"bold", paddingLeft:"10px", fontSize:"20px"}}>BTC</span></p>
      </div>
      <div className="row">
        <p className="col" style={{fontWeight:"bold"}}>68,040.00 <span style={{fontWeight:"bold", paddingLeft:"10px", fontSize:"px",color: "green"}}>-4.68</span></p>
        
      </div>
    </div>
  );
};

export default BuySellCard;
