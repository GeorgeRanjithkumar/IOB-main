import React from "react";

const TableCell = ({ icon, label, price, rate, rateColor, cellColor }) => {
  return (
    <div style={{ backgroundColor: cellColor, padding: "0.8em 2em", borderRadius:"8px" }}>
      <div className="row">
        <div className="col">
          <div className="row">
            <div className="col">{icon}</div>
            <div className="col">{label}</div>
          </div>
        </div>
        <div className="col" style={{ textAlign: "right" }}>
          ${price}
        </div>
        <div
          className="col"
          style={{ textAlign: "right", fontWeight: "bold", color: rateColor }}
        >
          {rate}
        </div>
      </div>
    </div>
  );
};

export default TableCell;
