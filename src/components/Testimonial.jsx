import React from "react";
import { FaQuoteLeft } from "react-icons/fa";
import { GrFormPrevious } from "react-icons/gr";
import { IoChevronForward } from "react-icons/io5";
import Navbar from "./Navbar";
import Footer from "./Footer";
function Testimonial() {
  return (
     <div style={{ backgroundColor: "lightgray"}}>
       <Navbar/>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          marginBottom: " 40px",
          marginTop: " 40px",
        }}
      >
        <h1> TESTIMONIAL </h1>
      </div>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <div
          style={{
            width: "95%",
            height: "300px",
           
            display: "flex",
          }}
        >
          <div
            style={{
              width: "5%",
              backgroundColor: "white",
              height: "100%",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <div
              style={{
                height: "50%",
                width: "100%",
                backgroundColor: "black",
                color: "white",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              {" "}
              <GrFormPrevious style={{ fontSize: "50px" }} />{" "}
            </div>
          </div>
          <div
            style={{
              width: "90%",
              backgroundColor: "white",
              height: "100%",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              flexDirection:'column' 
            }}
          >
            <div style={{ height: "30%", width: "100%",display:'flex' }}>
              <div style={{ width: "90%", height: "100%",marginLeft:' 50px' }}>
                <h2>Brad Johns</h2>
                <h3>Default model text</h3>
              </div>
              <div style={{width: "10%", height: "100%", display: "flex",
              justifyContent: "center",
              alignItems: "center",}}>
              <FaQuoteLeft  style={{ fontSize: "50px" }} />
              </div>
            </div>
            <div style={{width: "100%",height: "70%",display: "flex",
              justifyContent: "center",
              alignItems: "center",}}>
              <h3>Editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will 
              uncover many web sites still in <br/>their infancy. Variouseditors now use Lorem Ipsum as their default
               model text, and a search for 'lorem ipsum' will uncover<br/> many web sites still in their infancy.
                Variouseditors now use Lorem Ipsum as their default model text, and a search <br/>for 'lorem ipsum' will 
                uncover many web sites still in their infancy. Various</h3>
            </div>
          </div>
          <div
            style={{
              width: "5%",
              backgroundColor: "white",
              height: "100%",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <div
              style={{
                height: "50%",
                width: "100%",
                backgroundColor: "black",
                color: "white",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              {" "}
              <IoChevronForward style={{ fontSize: "50px" }} />{" "}
            </div>
          </div>
        </div>
      </div>
      <Footer/>
    </div>
  );
}

export default Testimonial;
