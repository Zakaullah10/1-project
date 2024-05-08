import React from "react";
import {} from "../App.css";

function Whyuscard(props) {
  return (
   
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        width :'30%',
      
      }}
    >
      <div style={{ width: "100%" }}>
        <div className="whycard">
          <div
            style={{
              height: "30%",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              marginTop:'20px'
            }}
          >
            <img style={{ width: "25%" }} src={props.Images} />
          </div>
          <div>
            <p><b>{props.name}</b></p>
          </div>
          <div>
            <p><b>variations of passages of Lorem Ipsum<br/> available</b></p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Whyuscard;
