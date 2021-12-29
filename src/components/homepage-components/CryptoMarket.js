import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBitcoin } from "@fortawesome/free-brands-svg-icons";
import TableCell from "./sub-components/TableCell";

const CryptoMarket = () => {
  return (
    <div className="row">
      <div className="col-sm-12 col-md-12 col-lg-5 order-last order-sm-last order-md-last order-lg-first">
        <TableCell icon={<FontAwesomeIcon icon={faBitcoin} style={{ color: "#F9AF55" , fontSize:"20px"}} />} label={"BTC"} price={"721,345"} rate={"-4.68"} rateColor={"red"} cellColor={"#F9FAFF"} />
        <TableCell icon={<FontAwesomeIcon icon={faBitcoin} style={{ color: "#F9AF55" , fontSize:"20px"}} />} label={"BTC"} price={"721,345"} rate={"-4.68"} rateColor={"#21979B"} cellColor={"#FFFFFF"} />
        <TableCell icon={<FontAwesomeIcon icon={faBitcoin} style={{ color: "#F9AF55" , fontSize:"20px"}} />} label={"BTC"} price={"721,345"} rate={"-4.68"} rateColor={"red"} cellColor={"#F9FAFF"} />
        <TableCell icon={<FontAwesomeIcon icon={faBitcoin} style={{ color: "#F9AF55" , fontSize:"20px"}} />} label={"BTC"} price={"721,345"} rate={"-4.68"} rateColor={"#21979B"} cellColor={"#FFFFFF"} />
        <TableCell icon={<FontAwesomeIcon icon={faBitcoin} style={{ color: "#F9AF55" , fontSize:"20px"}} />} label={"BTC"} price={"721,345"} rate={"-4.68"} rateColor={"#21979B"} cellColor={"#F9FAFF"} />
        <TableCell icon={<FontAwesomeIcon icon={faBitcoin} style={{ color: "#F9AF55" , fontSize:"20px"}} />} label={"BTC"} price={"721,345"} rate={"-4.68"} rateColor={"#21979B"} cellColor={"#FFFFFF"} />
        <TableCell icon={<FontAwesomeIcon icon={faBitcoin} style={{ color: "#F9AF55" , fontSize:"20px"}} />} label={"BTC"} price={"721,345"} rate={"-4.68"} rateColor={"#21979B"} cellColor={"#F9FAFF"} />
        <TableCell icon={<FontAwesomeIcon icon={faBitcoin} style={{ color: "#F9AF55" , fontSize:"20px"}} />} label={"BTC"} price={"721,345"} rate={"-4.68"} rateColor={"#21979B"} cellColor={"#FFFFFF"} />
      </div>
      <div className="col-lg-1 d-none d-lg-block"></div>
      <div className="row-sm-12 col-md-12 col-lg-6 order-first order-sm-first order-md-first order-lg-last">
        <div className="row" style={{ gap: "1em" }}>
          <h1 style={{ fontWeight: "900" }} className="crytoMarketHeading">
            <span style={{ fontWeight: "900", color: "#087EE6" }}>Cryptocurrency Market</span> Capitalizations!
          </h1>
          <p className="crytoMarketHeading">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
          <p className="crytoMarketHeading">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,</p>
          <p className="crytoMarketHeading">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,</p>

        </div>
      </div>
    </div>
  );
};

export default CryptoMarket;
