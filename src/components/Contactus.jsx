import React from "react";
import { map } from "./assets";
import Navbar from "./Navbar";
import Footer from "./Footer";

function Contactus() {
  return (
    <div style={{ backgroundColor: "lightgrey" }}>
     
      <div style={{ display: "flex", justifyContent: "center" }}>
        <div style={{ width: "95%" }}>
          <h1>CONTACT US</h1>
        </div>
      </div>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <div
          style={{
            width: "95%",
            height: "600Px",
            backgroundColor: "white",
            display: "flex",
          }}
        >
          <div style={{ width: "60%", height: "100%" }}>
            <img style={{ width: "100%", height: "100%" }} src={map} />
          </div>
          <div
            style={{
              width: "40%",
              height: "100%",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              flexDirection: "column",
              gap: "28px",
            }}
          >
            <div
              style={{
                width: "100%",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <input
                style={{ width: "80%", height: "50px" }}
                type="text"
                placeholder="  Name"
              />
            </div>
            <div
              style={{
                width: "100%",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <input
                style={{ width: "80%", height: "50px" }}
                type="text"
                placeholder="  Email"
              />
            </div>
            <div
              style={{
                width: "100%",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <input
                style={{ width: "80%", height: "50px" }}
                type="text"
                placeholder="  Phone"
              />
            </div>
            <div
              style={{
                width: "100%",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <input
                style={{ width: "80%", height: "150px" }}
                type="text"
                placeholder="  Message"
              />
            </div>
            <div
              style={{
                width: "100%",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <botton
                style={{
                  width: "30%",
                  height: "50px",
                  backgroundColor: "black",
                  color: "white",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                {" "}
                SEND
              </botton>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Contactus;
