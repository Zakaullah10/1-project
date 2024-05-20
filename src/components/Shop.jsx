import React, { useState } from "react";
import "../App.css";
import Card from "./Card";
import { Latestproduct } from "../constants";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { useNavigate } from "react-router-dom";
function Shop() {
 
  

  const datacomp = Latestproduct.map((data) => {
    return (
      <Card
        key={data.key}
        Images={data.Images}
        name={data.name}
        Price={data.Price}
        Id= {data.id}
        design={data.design}
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
        <h1 style={{ marginTop: " 40px",}}> LATEST PRODUCTS </h1>
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            width: "95%",
          }}
        >
          <div className="grid">{datacomp }</div>
        </div>
      </div>
    
      
      <Footer />
    </div>
  );
}

export default Shop;
