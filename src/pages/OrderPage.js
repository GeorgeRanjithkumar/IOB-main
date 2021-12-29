import React from "react";

import "./OrderPage.css";
import MainHeader from "../components/dashboard-components/MainHeader";

const OrderPage = () => {
  return (
    <div className="order">
      <MainHeader
        active={{
          color: "#1173D3",
          borderBottomWidth: "2px",
          borderBottomStyle: "solid",
          borderBottomColor: "#1173D3",
        }}
      />
    </div>
  );
};

export default OrderPage;
