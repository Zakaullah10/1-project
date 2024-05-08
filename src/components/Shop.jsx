import React from "react";
import "../App.css";
import Card from "./Card";
import { Latestproduct } from "../constants";
import Navbar from "./Navbar";
import Footer from "./Footer";
function Shop() {
  const datacomp = Latestproduct.map((data) => {
    return <Card key={data.key} 
    Image={data.Image}
     name={data.name}
     Price ={data.Price} />;
  });

  return (
    <div style={{backgroundColor:"lightgray"}}>
    <Navbar/>
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        marginBottom:" 40px",
        marginTop:" 40px"
      }}
    >
      <h1> LATEST PRODUCTS </h1>
    </div>
    <div style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }} >
    <div  style={{
        display: "flex",
        justifyContent: "center",
        width :'95%'
      }}>
    <div className="grid">
            {datacomp}
        </div></div></div>
        <div  style={{
        display: "flex",
        justifyContent: "center",
        height :'160px',
        alignItems:" center"
  
        
      }} >
            <div style={{width :'15%'}}>
            <button className="btn1">View All Product</button></div>
        </div>
        <Footer/>
    </div>
  );
}

export default Shop;
