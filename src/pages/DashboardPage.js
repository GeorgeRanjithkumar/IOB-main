import React from "react";
import BalanceStrip from "../components/dashboard-components/BalanceStrip";
import MainHeader from "../components/dashboard-components/MainHeader";
import StatStrip from "../components/dashboard-components/StatStrip";
import "./DashboardPage.css";

const DashboardPage = () => {
  return (
    <div className="dashboard">
      <MainHeader
        active={{
          color: "#1173D3",
          borderBottomWidth: "2px",
          borderBottomStyle: "solid",
          borderBottomColor: "#1173D3",
        }}
      />
      <div style={{ marginTop: "3em" }}>
        <StatStrip />
      </div>
      <div style={{ marginTop: "3em" }}>
        <BalanceStrip />
      </div>
    </div>
  );
};

export default DashboardPage;
