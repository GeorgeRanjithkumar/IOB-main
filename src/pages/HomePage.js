import React from "react";
import "./HomePage.css";

import Banner from "../components/homepage-components/Banner";
import Header from "../components/homepage-components/Header";
import DataStrip from "../components/homepage-components/DataStrip";
import BitcoinCalculator from "../components/homepage-components/BitcoinCalculator";
import AffordablePackages from "../components/homepage-components/AffordablePackages";
import CryptoMarket from "../components/homepage-components/CryptoMarket";
import Footer from "../components/homepage-components/Footer";
import BuySellExchange from "../components/homepage-components/BuySellExchange";
import CorporateTeam from "../components/homepage-components/CorporateTeam";

const HomePage = () => {
  return (
    <>
      <div className="header-viewport">
        <Header />
        <Banner />
      </div>
      {/* <div className="data-strip-viewport"> */}
        <DataStrip />
      {/* </div> */}
      <div className="bitcoin-calculator-viewport">
        <BitcoinCalculator />
      </div>
      <div className="affordable-packages-viewport">
        <AffordablePackages />
      </div>
      <div className="crypto-market-viewport">
        <CryptoMarket />
      </div>
      <div className="bg-blue-viewport">
        <BuySellExchange />
      </div>
      <div className="affordable-packages-viewport">
        <CorporateTeam />
      </div>
      <br /><br />
      <div className="footer-viewport">
        <Footer />
      </div>
    </>
  );
};

export default HomePage;
