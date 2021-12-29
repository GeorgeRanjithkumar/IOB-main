import React from "react";

import BannerImage from "../../assets/homepage/banner/banner-image.png";
import "../../pages/HomePage.css"

const Banner = () => {
  return (
    <div style={{ padding: "0 1em" }}>
      <div className="row">
        <div className="col-lg-6" style={{ marginTop: "5em 0", padding: "0 0em 0 0" }}>
          <p
            style={{
              fontSize: "24px",
              color: "white",
              fontWeight: "",
              marginTop: "3em",
            }}
          >
            WELCOME
          </p>
          <p
            style={{
              fontSize: "58px",
              color: "white",
              fontWeight: "bold",
            }}
            className="bannerHeading"
          >
            The world’s most popular way to buy, sell, and trade crypto
          </p>
          <p className="bannerTagline" style={{ fontSize: "28px", color: "white", fontWeight: "300" }}>Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit</p>
          <button
            style={{
              color: "white",
              borderColor: "white",
              marginRight: "1em",
            }}
            type="button"
            className="btn btn-outline-primary mb-2"
          >
            DOWNLOAD WHITEPAPER
          </button>
          <button
            style={{
              color: "#0D74D7",
              borderColor: "white",
              backgroundColor: "white",
            }}
            type="button"
            className="btn btn-outline-danger mb-2"
          >
            SETUP A NODE
          </button>
        </div>
        <div className="col-lg-6">
          <img alt="banner" src={BannerImage} w style={{ maxWidth: "100%" }} className="img-fluid" />
        </div>
      </div>
    </div>
  );
};

export default Banner;
