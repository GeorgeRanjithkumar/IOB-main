import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBitcoin } from "@fortawesome/free-brands-svg-icons";
import "../../pages/HomePage.css";
const BitcoinCalculator = () => {
  return (
    <div
    className="compoDiv"
      style={{
        boxShadow: "0px 10px 42px #000d7126",
        borderRadius: "15px 15px 15px 15px",
        textAlign: "center",
        padding: "3em 5em",
      }}
    >
      <div className="row" style={{ textAlign: "center" }}>
        <h1 style={{ fontWeight: "900" }} className="calculatorHeading">
          <span style={{ fontWeight: "900", color: "#087EE6" }}>BITCOIN</span> <span>CALCULATOR</span>
        </h1>
        <p className="calculatorTagline">FIND OUT THE CURRENT BITCOIN VALUE WITH OUR EASY-TO-USE CONVERTER</p>
      </div>
      <div className="row">
        <div className="col-md-6">
          <div
            className="input-group mb-3"
            style={{
              boxShadow: "0px 10px 42px #000d7126",
              width: "70%",
              margin: "auto",
              borderRadius: "15px",
            }}
          >
            <input type="text" className="form-control" aria-label="Text input with dropdown button" style={{ textAlign: "center", borderRadius: "15px 0 0 15px" }} />
            <button
              style={{
                backgroundColor: "#F7931B",
                color: "white",
                border: "none",
                height: "4em",
                width: "4em",
                borderRadius: "0 15px 15px 0",
                fontWeight: "bold",
              }}
              className="btn btn-outline-secondary dropdown-toggle"
              type="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              <FontAwesomeIcon icon={faBitcoin} style={{ color: "#fff" }} />
            </button>
            <ul className="dropdown-menu dropdown-menu-end">
              <li>
                <a className="dropdown-item" href="#">
                  $
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  $
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  $
                </a>
              </li>
              <li>
                <hr className="dropdown-divider" />
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  $
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="col-md-6">
          <div
            className="input-group mb-3"
            style={{
              boxShadow: "0px 10px 42px #000d7126",
              width: "70%",
              margin: "auto",
              borderRadius: "15px",
            }}
          >
            <input type="text" className="form-control" aria-label="Text input with dropdown button" style={{ textAlign: "center", borderRadius: "15px 0 0 15px" }} />
            <button
              className="btn btn-outline-secondary dropdown-toggle"
              style={{
                backgroundColor: "#F7931B",
                color: "white",
                border: "none",
                height: "4em",
                width: "4em",
                borderRadius: "0 15px 15px 0",
                fontWeight: "bold",
              }}
              type="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              AUD
            </button>
            <ul className="dropdown-menu dropdown-menu-end">
              <li>
                <a className="dropdown-item" href="#">
                  $
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  $
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  $
                </a>
              </li>
              <li>
                <hr className="dropdown-divider" />
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  $
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <p
        style={{
          fontSize: "16px",
          fontWeight: "",
          color: "#2E3650",
          fontStyle: "italic",
        }}
      >
        * Data updated every 15 minutes
      </p>
    </div>
  );
};

export default BitcoinCalculator;
