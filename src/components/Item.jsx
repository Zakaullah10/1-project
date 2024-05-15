import React, { useEffect, useState } from "react";

import Navbar from "./Navbar";
import { Latestproduct } from "../constants";
import Footer from "./Footer";

import { TiTick } from "react-icons/ti";
export const Item = () => {
  const [showModal, setShowModal] = useState(false);
  const [selectedImage, setSelectedImage] = useState(""); // State to store selected image URL
  const currentUrl = window.location.href;
  console.log(currentUrl);
  const currentId = currentUrl.split("items")[1].split("")[1];
  console.log(currentId);
  const filterData = Latestproduct.filter((item) => item.id == currentId);
  console.log(filterData);
  const [count, setCount] = useState(0);
  const [counts, setCounts] = useState(1);

  const handleImageClick = (imageUrl) => {
    // Function to handle image click and update selected image state
    setSelectedImage(imageUrl);
    console.log(imageUrl);
  };
  
 const hello = ()=>{
  if(counts !==1){
    setCounts(counts -1)
  }
 }
  return (
    <div>
      <Navbar count={count} setCount={setCount}/>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <div
          style={{
            marginTop: "50px",
            width: "95%",
            height: "500px",
            backgroundColor: "white",
            display: "flex",
          }}
        >
          <div
            style={{
              width: "10%",
              height: "100%",
              display: "flex",
              justifyContent: "center",
              alignItems: "start",
              flexDirection: "column",
              marginLeft: "50px",
            }}
          >
            {filterData[0].design.map((item, index) => (
              <img
                key={index}
                src={item}
                onClick={() => handleImageClick(item)} // Pass the image URL to the click handler
                style={{ cursor: "pointer", marginBottom: "10px", width:'100px' }}
              />
            ))}
          </div>
          <div
            style={{
              width: "35%",
              height: "100%",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <img
              src={selectedImage || filterData[0].design[0]}
              style={{ width: "350px", height: "400px" }}
            />
          </div>

          <div
            style={{
              width: "55%",
              height: "100%",
            }}
          >
            <div
              style={{
                display: "flex",

                flexDirection: "column",

                marginTop: "40px",
              }}
            >
              <h3 style={{ marginBottom: "10px" }}>
                <b>CERAMIC, CERAMIC COATINGS, CERAMIC KITCHENWARE</b>
              </h3>
              <h1 style={{ margin: "0px", marginBottom: "10px" }}>
                Ceramic Cup
              </h1>
              <h1
                style={{
                  display: "flex",
                  margin: "0px",
                  marginRight: "40px",
                }}
              >
                <span style={{ color: "red" }}>$</span> {filterData[0].Price}
                <p
                  style={{
                    margin: "0px",
                    color: "gray",
                    display: "flex",
                    alignItems: "center",
                    fontSize: "17px",
                  }}
                >
                  & Free Shipping
                </p>
              </h1>
              <h3>
                Discover the beauty of ceramics with our handcrafted. This
                exquisite <br/>piece combines artistry and function, making it a
                versatile addition to any<br/> space. Whether used as a decorative
                accent or a practical item, this ceramic<br/> creation adds a touch
                of elegance to your surroundings.
              </h3>
              <div
                style={{
                  display: "flex",
                  gap : '20px'
                 
                }}
              >
                <div style={{
                  display: "flex",
                  alignItems: "center",
                  gap : '1px'
                 
                }}>
                  <button
                    style={{ height: "26px", width: "30px" }}
                    onClick={hello}
                  >
                    -
                  </button>
                  <input
                    type="text"
                    value={counts}
                    onChange={(e) => {
                      setCount(e.target.value);
                    }}
                    style={{
                      width: "100px",
                      height: "20px",
                      textAlign: "center",
                    }}
                  />
                  <button
                    style={{ height: "26px", width: "30px" }}
                    onClick={() => setCounts(counts + 1)}
                  >
                    +
                  </button>
                </div>
                <button style={{ width: "120px", height: "40px",}} onClick={() => setCount(count + 1)}>
                  Add Cart
                </button>
              </div>
              <h2>Free shipping on orders over $50!</h2>
              <div style={{margin:'0px'}}> <p><TiTick /> No-Risk Money Back Guarantee!</p>
              <p><TiTick />  No Hassle Refunds</p>
              <p> <TiTick /> Secure Payments</p></div>
             
            </div>
          </div>
        </div>
      </div>
      {showModal && (
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <label
            style={{
              display: "flex",
              marginRight: "85px",
              gap: "25px",
              marginBottom: "20px",
              marginTop: "20px",
            }}
          >
            <h2>Payment Method </h2>{" "}
            <input type="text" style={{ width: "300px" }}></input>
          </label>
          <label
            style={{
              display: "flex",
              marginRight: "65px",
              gap: "25px",
              marginBottom: "20px",
            }}
          >
            <h2>Phone Number </h2>{" "}
            <input type="text" style={{ width: "300px" }}></input>
          </label>
          <label style={{ display: "flex", gap: "25px", marginBottom: "20px" }}>
            <h2>Address </h2>{" "}
            <input type="text" style={{ width: "300px" }}></input>
          </label>
          <label
            style={{
              display: "flex",
              marginLeft: "25px",
              gap: "25px",
              marginBottom: "20px",
            }}
          >
            <h2>Email </h2>{" "}
            <input type="text" style={{ width: "300px" }}></input>
          </label>
        </div>
      )}
      <Footer />
    </div>
  );
};
