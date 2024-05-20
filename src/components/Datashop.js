import React from "react";
import "../App.css";
import Card from "./Card";
import { Latestproduct } from "../constants";

function Datashop() {
  const datacomp = Latestproduct.map((data) => {
    return (
      <Card
        key={data.key}
        Images={data.Images}
        name={data.name}
        Price={data.Price}
        Id={data.id}
      />
    );
  });

  return (
    <div style={{ backgroundColor: "lightgray" }}>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          marginBottom: " 40px",
        }}
      >
        <h1> LATEST PRODUCTS </h1>
      </div>
      <div 
        style={{
          display: "flex",
          justifyContent: "center",
        }}
      >
        <div className="grid" >{datacomp}</div>
      </div>
    
    </div>
  );
}

export default Datashop;
