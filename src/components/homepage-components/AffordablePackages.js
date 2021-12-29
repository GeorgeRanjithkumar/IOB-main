import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import BirdImage from "../../assets/homepage/affordable/bird.png";
import BuySellCard from "./sub-components/BuySellCard";
import "../../pages/HomePage.css"

const AffordablePackages = () => {
  return (
    <div className="">
      <div className="row" style={{ textAlign: "center", marginBottom: "4em" }}>
        <h1 style={{ fontWeight: "900" }} className="backgroundHeading">
          <span style={{ fontWeight: "900", color: "#087EE6" }}>
            AFFORDABLE
          </span>{" "}
          PACKAGES
        </h1>
        <p style={{zIndex:1}}>
          PURCHASE BITCOIN USING A CREDIT CARD OR WITH YOUR LINKED BANK ACCOUNT
        </p>
      </div>
      <div className="row">
        <div className="col-sm-12 col-lg-6">
          <div className="row">
            <div className="col-sm-12 col-md-6">
              <BuySellCard />
            </div>
            <div className="col-sm-12 col-md-6">
              <BuySellCard />
            </div>
          </div>
          <div className="row">
            <div className="col-sm-12 col-md-6">
              <BuySellCard />
            </div>
            <div className="col-sm-12 col-md-6">
              <BuySellCard />
            </div>
            <div className="col-12" style={{display:"flex", justifyContent:"right"}}>
              <p>View More Prices <FontAwesomeIcon icon={faArrowRight} style={{ color: "#000" }} /></p>
            </div>
          </div>
        </div>
        <div className="col-sm-12 col-lg-6">
          <img
            alt="bird"
            src={BirdImage}
            className="img-fluid"
            style={{ maxWidth: "100%" }}
          />
        </div>
      </div>
    </div>
  );
};

export default AffordablePackages;
