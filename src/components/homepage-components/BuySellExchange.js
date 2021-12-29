import React from "react";
import BirdImage from "../../assets/homepage/affordable/bird.png";
import BannerImage from "../../assets/homepage/banner/banner-image.png";
import BuySellCard from "./sub-components/BuySellCard";
import "../../pages/HomePage.css";

const BuySellExchange = () => {
  return (
    <div>
      <div className="row" style={{ textAlign: "center", marginBottom: "4em" }}>
        <h1 style={{ fontWeight: "900" }} className="backgroundHeadingBuySell" style={{ marginTop: "100px" }}>
          <span style={{ fontWeight: "900", color: "#fff" }}>BUY SELL</span> <span style={{ fontWeight: "bold" }}>EXCHANGE</span>
        </h1>
        <p style={{ color: "white",zIndex:1 }}>PURCHASE BITCOIN USING A CREDIT CARD OR WITH YOUR LINKED BANK ACCOUNT</p>
      </div>
      <div className="row">
        <div className="col-sm-12 col-md-4 col-lg-3">
          <BuySellCard />
        </div>
        <div className="col-sm-12 col-md-4 col-lg-3">
          <BuySellCard />
        </div>
        <div className="col-sm-12 col-md-4 col-lg-3">
          <BuySellCard />
        </div>
        <div className="col-sm-12 col-md-4 col-lg-3">
          <BuySellCard />
        </div>
      </div>

      {/* comment */}
      <div
        className="row mt-5"
        style={{
          borderBottomWidth: "1px",
          borderBottomStyle: "solid",
          borderBottomColor: "rgba(255,255,255,0.5)",
          paddingBottom: "20px",
        }}
      >
        <div className="row-sm-12 col-md-12 col-lg-6">
          <div className="row" style={{ gap: "1em" }}>
            <h1 style={{ fontWeight: "900" }} className="crytoMarketHeading">
              <span style={{ fontWeight: "900", color: "#fff" }}>Cryptocurrency buy,sell</span> Exchange!
            </h1>
            <p style={{ color: "white" }}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
            <p style={{ color: "white" }}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,</p>
            <p style={{ color: "white" }}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,</p>
          </div>
        </div>

        <div className="col-lg-1 d-none d-lg-block"></div>
        <div className="col-sm-12 col-md-12 col-lg-5">
          <img alt="dummy" src={BannerImage} className="img-fluid" style={{ maxWidth: "100%" }} />
        </div>
      </div>

      {/* companies name */}
      <div className="row">
        <div className="col-lg-3 col-md-6 col-sm-12">
          <h3 style={{ textAlign: "center", color: "#6AB0EF", padding: "30px" }}>Company</h3>
        </div>
        <div className="col-lg-3 col-md-6 col-sm-12">
          <h3 style={{ textAlign: "center", color: "#6AB0EF", padding: "30px" }}>Company</h3>
        </div>
        <div className="col-lg-3 col-md-6 col-sm-12">
          <h3 style={{ textAlign: "center", color: "#6AB0EF", padding: "30px" }}>Company</h3>
        </div>
        <div className="col-lg-3 col-md-6 col-sm-12">
          <h3 style={{ textAlign: "center", color: "#6AB0EF", padding: "30px" }}>Company</h3>
        </div>
      </div>

      {/* Roadmap */}
      <div className="row" style={{ textAlign: "center", marginBottom: "4em" }}>
        <h1 style={{ fontWeight: "900" }} className="backgroundHeadingImplementation" style={{ marginTop: "100px" }}>
          <span style={{ fontWeight: "900", color: "#fff" }}>Roadmap</span>
        </h1>
        <p style={{ color: "white" , zIndex:1}}>
          PURCHASE BITCOIN USING A CREDIT CARD OR WITH YOUR LINKED BANK ACCOUNT <br />
          PURCHASE BITCOIN USING A CREDIT CARD OR WITH YOUR LINKED{" "}
        </p>
      </div>

      {/* stepper */}
      <div className="row" style={{paddingBottom:"100px"}}>
        <div className="col-sm-12 col-md-12 col-lg-5 order-last order-sm-last order-md-last order-lg-first">
          <img alt="dummy" src={BannerImage} className="img-fluid" style={{ maxWidth: "100%" }} />
        </div>
        <div className="col-lg-1 d-none d-lg-block"></div>
        <div className="row-sm-12 col-md-12 col-lg-6 order-first order-sm-first order-md-first order-lg-last mb-5">
          <div class="stepper d-flex flex-column mt-5 ml-2">
            <div class="d-flex mb-1">
              <div class="d-flex flex-column pr-4 align-items-center">
                <div class="rounded-circle py-2 px-3 bg-primary text-white mb-1">1</div>
                <div class="line h-100"></div>
              </div>
              <div>
                <h5 class="text-white">Do a trading</h5>
                <br />
              </div>
            </div>
            <div class="d-flex mb-1">
              <div class="d-flex flex-column pr-4 align-items-center">
                <div class="rounded-circle py-2 px-3 bg-primary text-white mb-1">2</div>
                <div class="line h-100"></div>
              </div>
              <div>
                <h5 class="text-white">Staking</h5>
                <br />
              </div>
            </div>
            <div class="d-flex mb-1">
              <div class="d-flex flex-column pr-4 align-items-center">
                <div class="rounded-circle py-2 px-3 bg-primary text-white mb-1">3</div>
                <div class="line h-100 "></div>
              </div>
              <div>
                <h5 class="text-white">Purchasing Nguvu Coin</h5>
                <br />
              </div>
            </div>
            <div class="d-flex mb-1">
              <div class="d-flex flex-column pr-4 align-items-center">
                <div class="rounded-circle py-2 px-3 bg-primary text-white mb-1">4</div>
                <div class="line h-100"></div>
              </div>
              <div>
                <h5 class="text-white">Trading with Nguvu Coin</h5>
                <br />
              </div>
            </div>
            <div class="d-flex mb-1">
              <div class="d-flex flex-column pr-4 align-items-center">
                <div class="rounded-circle py-2 px-3 bg-primary text-white mb-1">5</div>
                <div class="line h-100 d-none"></div>
              </div>
              <div>
                <h5 class="text-white">Becoming a validator for Nguvu network</h5>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BuySellExchange;
