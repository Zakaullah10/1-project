import React from "react";
import Footer from "./Footer";
import Navbar from "./Navbar";
import {} from "../App.css";
import { Whycard } from "../constants/Whycard";
import Whyuscard from "./Whyuscard";

function Whyus() {
  const whycard = Whycard.map((data) => {
    return <Whyuscard key={data.key} Images={data.Images} name={data.name} />;
  });

  return (
    <div  style={{backgroundColor:"lightgray"}}>
     
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          marginBottom: " 40px",
         
        }}
      >
        <h1 style={{ marginTop: " 40px",}}>WHY SHOP WITH US</h1>
      </div>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <div style={{ width: "95%" }}>
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            {whycard}
          </div>
        </div>
      </div>
      <Footer/>
    </div>
  );
}

export default Whyus;
