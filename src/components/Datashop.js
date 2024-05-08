import React from "react";
import "../App.css";
import Card from "./Card";
import { Latestproduct } from "../constants";

function Datashop() {
  const datacomp = Latestproduct.map((data) => {
    return <Card key={data.key} 
    Image={data.Image}
     name={data.name}
     Price ={data.Price} />;
  });

  return (
    <div style={{backgroundColor:"lightgray",}}>
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        marginBottom:" 40px"
      }}
    >
      <h1> LATEST PRODUCTS </h1>
    </div>
    <div  style={{
        display: "flex",
        justifyContent: "center",
        
      }}>
    <div className="grid">
            {datacomp}
        </div></div>
        <div  style={{
        display: "flex",
        justifyContent: "center",
        height :'160px',
        alignItems:" center"
  
        
      }} >
            <div style={{width :'15%'}}>
            <button className="btn1">View All Product</button></div>
        </div>
    </div>

  )
}

export default Datashop