import { BrowserRouter, Link, Route, Routes, useNavigate } from "react-router-dom";

import "./App.css";
import { HomePage } from "./components";
import Shop from "./components/Shop";
import Whyus from "./components/Whyus";
import Testimonial from "./components/Testimonial";
import { Login } from "./components/Login";
import Contactus from "./components/Contactus";
import { Item } from "./components/Item";
import Navbar from "./components/Navbar";
import { useState } from "react";
import { RxCross2 } from "react-icons/rx";
import { CheckOut } from "./components/CheckOut";
import { Complete } from "./components/Complete";

function App() {
  const [num, setNum] = useState(0);
  const [data, setData] = useState([]);
  const [number, setNumber] = useState(0);
  const [counts, setCounts] = useState(1);
  const [cartCount, setCartCount] = useState();
  const [showModal, setShowModal] = useState(false);
  const removeFromCart = (index) => {
    const updatedCart = [...data];
    updatedCart.splice(index, 1);
    setData(updatedCart);
    setNum(num - 1);
  };
  const value = (id) => {
    const found = data?.find((d) => d?.id === id);
    if (found) {
      found.items = found.items + 1;
      setCartCount(found?.items);
    }
  };
  const value1 = (id) => {
    const found1 = data?.find((d) => d?.id === id);
    if (found1 && found1.items !== 1) {
      found1.items = found1.items - 1;
      setCartCount(found1?.items);
    }
  };



  // Your existing JSX code
  return (
    <BrowserRouter>
      <Navbar
        count={num}
        setCount={setNum}
        showModal={showModal}
        setShowModal={setShowModal}
      />
      <Routes>
        <Route path="/" element={<Login />} />
        <Route
          path="/home"
          element={
            <HomePage showModal={showModal} setShowModal={setShowModal} />
          }
        />
        <Route
          path="/shop"
          element={
            <Shop
              showModal={showModal}
              setShowModal={setShowModal}
              data={data}
            />
          }
        />
        <Route path="/testimonial" element={<Testimonial />} />
        <Route path="/whyus" element={<Whyus />} />
        <Route path="/contact" element={<Contactus />} />
        <Route
          path="/items/:id"
          element={
            <Item
              count={num}
              counts={counts}
              setCounts={setCounts}
              setCartCount={setCartCount}
              cartCount={cartCount}
              setNum={setNum}
              data={data}
              setData={setData}
              showModal={showModal}
              setShowModal={setShowModal}
            />
          }
        />
        <Route
          path="/checkout"
          element={<CheckOut data={data} setShowModal={setShowModal} showModal={showModal} />}
        />
        <Route path="/complete" element={<Complete />} />
      </Routes>
      {/* showModal ha ya */}

      {showModal && (
        <div style={{}}>
          <div
            style={{
              width: "500px",
              height: "100vh",
              backgroundColor: "lightgray",
              position: "absolute",
              top: "20%",
              right: "35px",
            }}
          >
            <h1>Your Cart</h1>
            {data.map((item, index) => (
              <div
                key={index}
                style={{
                  display: "flex",
                  justifyContent: "space-around",
                  alignItems: "center",
                  marginTop: "10px",
                  backgroundColor: "white",
                  height: "80px"
                }}
              >
                <img
                  src={item.image}
                  style={{ width: "75px", height: "70px" }}
                />
                <div style={{ gap: "1px" }}>
                  <button
                    style={{ height: "26px", width: "30px" }}
                    onClick={() => value1(item?.id)}
                  >
                    -
                  </button>
                  <input
                    type="text"
                    value={item?.items}
                    onChange={(e) => {
                      setCartCount(item?.items);
                    }}
                    style={{
                      width: "50px",
                      height: "20px",
                      textAlign: "center",
                    }}
                  />
                  <button
                    style={{ height: "26px", width: "30px" }}
                    onClick={() => value(item?.id)}
                  >
                    +
                  </button>
                </div>
                <div>
                  <span style={{ color: "red" }}>$</span>{" "}
                  {item.price * item.items}
                </div>
                <div>
                  <RxCross2 onClick={removeFromCart} />
                </div>
              </div>
            ))}
            <div>
              <h2>
                Total price: $
                {data.reduce((acc, curr) => acc + curr.price * curr.items, 0)}
              </h2>
            </div>
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "end",
              }}
            >
              <Link  to={'/checkout'}>ChecK Out</Link>
            </div>
          </div>
        </div>
      )}
    </BrowserRouter>
  );
}

export default App;
