import React, { useState } from "react";
import Navbar from "./Navbar";
import { Latestproduct } from "../constants";
import Footer from "./Footer";
import { TiTick } from "react-icons/ti";
import { RxCross2 } from "react-icons/rx";
import Card from "./Card";
import { Swiper, SwiperSlide } from "swiper/react";
import { useNavigate } from "react-router-dom";

export const Item = ({
  count,
  data,
  setData,
  setNum,
  counts,
  setCounts,
  found,
  setCartCount,
  
}) => {
  const navigate = useNavigate();
  const [selectedImage, setSelectedImage] = useState("");
  const currentUrl = window.location.href;
  const currentId = currentUrl.split("items")[1].split("")[1];
  const filterData = Latestproduct.filter((item) => item.id == currentId);

  const handleImageClick = (imageUrl) => {
    setSelectedImage(imageUrl);
  };

  const hello = () => {
    if (counts !== 1) {
      setCounts(counts - 1);
    }
  };


  const hello1 = () => {
    
    // Check if an item with the same ID already exists in the cart
    const existingItem = data.find((item) => item.id === filterData[0].id);
    const sum = data

    console.log("Existing Item:", existingItem);

    // If the item already exists, do not add it again
    if (existingItem) {
      // You can show a message or handle it in any way you prefer
      console.log("Item already exists in the cart!");
      return;
    }
    console.log(data);
    // If the item does not exist, add it to the cart
    const newItem = {
      image: filterData[0].design[0],
      items: counts,
      price: filterData[0].Price,
      id: filterData[0].id,
      name :filterData[0].name
       // Make sure to include the ID
      
    };
     setCartCount(counts);
    setData([...data, newItem]);
    setNum(count + 1);
    setCounts(1);
  };
  console.log(data)

  return (
    <div>
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
                onClick={() => handleImageClick(item)}
                style={{
                  cursor: "pointer",
                  marginBottom: "10px",
                  width: "100px",
                }}
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
                exquisite <br />
                piece combines artistry and function, making it a versatile
                addition to any
                <br /> space. Whether used as a decorative accent or a practical
                item, this ceramic
                <br /> creation adds a touch of elegance to your surroundings.
              </h3>
              <div
                style={{
                  display: "flex",
                  gap: "20px",
                }}
              >
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "1px",
                  }}
                >
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
                      setCounts(e.target.value);
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
                <button
                  style={{ width: "120px", height: "40px" }}
                  onClick={hello1}
                >
                  Add Cart
                </button>
              </div>
              <h2>Free shipping on orders over $50!</h2>
              <div style={{ margin: "0px" }}>
                {" "}
                <p>
                  <TiTick /> No-Risk Money Back Guarantee!
                </p>
                <p>
                  <TiTick /> No Hassle Refunds
                </p>
                <p>
                  {" "}
                  <TiTick /> Secure Payments
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div style={{ marginLeft: "35px", fontSize: "20px" }}>
        {" "}
        <h1>Related products</h1>
      </div>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <Swiper style={{ width: "95%" }} spaceBetween={20} slidesPerView={4}>
          {Latestproduct.map((data, index) => (
            <SwiperSlide key={index}>
              <Card
                Images={data.Images}
                name={data.name}
                Price={data.Price}
                Id={data.id}
                design={data.design}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      <Footer />
    </div>
  );
};
