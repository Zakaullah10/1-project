import React from "react";
import { FaQuoteLeft } from "react-icons/fa";
import { GrFormPrevious } from "react-icons/gr";
import { IoChevronForward } from "react-icons/io5";
import  '../App.css'
import { Bear } from "./assets";
import { Testimonials } from "../constants";
function Tpage() {
  return (
     <div style={{ backgroundColor: "lightgray"}}>
       
       <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          marginBottom: " 40px",
          marginTop: " 40px",
          position: "relative",
        }}
      >
        <h1> TESTIMONIAL </h1>
      </div>
      <div style={{ display: "flex ", justifyContent: "center"  }}>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            width: "95%",
            gap: "20px",
          }}
        >
          {Testimonials.map((data) => {
            return (
              <div className="ii"
                style={{
                  display: "flex",
                  justifyContent: "center",
                  width: " 33%",
                  position:'relative',
                  
                }}
              >
                <div
                  style={{
                    width: "100%",
                    height: "325px",
                    display: "flex",
                    justifyContent: "center",
                  }}
                >
                  <div
                    style={{
                      position: "absolute",
                      width: "80px",
                      height: "80px",
                      backgroundImage: `url(${Bear})`,
                      backgroundRepeat: "no-repeat",
                      backgroundSize: "cover  ",
                      objectPosition: "100%",
                      bottom: "285px",
                      borderRadius: "100%",
                      border: " solid",
                      color: "gray",
                    }}
                  ></div>
                  <div
                    style={{
                      width: "100%",
                      backgroundColor: "white",
                      height: "100%",
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      flexDirection: "column",
                    }}
                  >
                    <div
                      style={{ height: "30%", width: "100%", display: "flex" }}
                    >
                      <div
                        style={{
                          width: "100%",
                          height: "100%",
                          display: "flex",
                          justifyContent: "center",
                          alignItems: "center",
                          flexDirection: "column",
                          marginTop: "35px",
                        }}
                      >
                        <h2 style={{ margin: "0px" }}>Brad Johns</h2>
                        <h3 style={{ margin: "0px" }}>Default model text</h3>
                      </div>
                    </div>
                    <div
                      style={{
                        width: "100%",
                        height: "70%",
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                      }}
                    >
                      <h3>
                        Editors now use Lorem Ipsum as their
                        <br /> default model text, and a search for <br />
                        'lorem ipsum' will uncover many web
                        <br /> sites still in
                      </h3>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Tpage;