import React, { useEffect, useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import "../App.css";
import { RxCross2 } from "react-icons/rx";

export const CheckOut = ({ data, setShowModal, showModal }) => {
  const [error, setError] = useState(false);
  const [error1, setError1] = useState();
  const [error2, setError2] = useState();
  const [error3, setError3] = useState();
  const [order, setOrder] = useState();

  const navigate = useNavigate();
  let pattern = /^[A-Za-z._]{3,}@[A-Za-z]{3,}[.]{1}[A-Za-z.]{2,4}$/;
  const [formdata, setFormData] = useState({
    FirstName: "",
    LastName: "",
    Email: "",
    phoneNumber: "",
    Address: "",
    city: "",
    postalcode: "",
  });
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const message = ({ data }) => {
    setError(
      "Make your payment directly into our bank account. Please use your Order ID as the payment reference. Your order will not be shipped until the funds have cleared in our account."
    );
    setError1(false);
  };
  const message1 = () => {
    setError(false);
    setError1("Pay with cash upon delivery.");
  };
  useEffect(() => {
    console.log(data);
  }, [data]);
  const handleSubmit = (e) => {
    if(formdata.Email==''||formdata.Address==''||formdata.FirstName==''||formdata.LastName==''||formdata.city||formdata.phoneNumber||formdata.postalcode){
      setError3('fill the all inputs fileds')
      setTimeout(() => setError3(""), 3000);
      setOrder(false)
    }
    else if(formdata){
      setOrder(true)

    }
    
  
    if (!pattern.test(formdata.Email)) {
      setError2("invalid emailfiled");
      setTimeout(() => setError2(""), 3000);
    }

    e.preventDefault();
    // Save form data to local storage
    localStorage.setItem("formData", JSON.stringify(formdata));
    // Alternatively, you can send the data to a server using fetch or axios
  };
  setShowModal(false);

  console.log(formdata);
 const hello =()=>{
    setOrder(false)
  }
  return (
    <div>
      <div style={{ display: "flex", backgroundColor: "lightgray" }}>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            width: "60%",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <>{error3}</>
          <h1 style={{ marginTop: "40px" }}>Customer information</h1>
          <input
            style={{
              width: "70%",
              height: "50px",
              borderRadius: "10px",
              border: "none",
              paddingLeft : "20px"
            }}
            type="Email"
            placeholder="   Email"
            name="Email"
            value={formdata.Email}
            onChange={handleChange}
            required
            
          />
          <div style={{ color: "red" }}>{error2}</div>
          <h1>Billing details</h1>
          <select
            style={{
              width: "73%",
              height: "50px",
              borderRadius: "10px",
              border: "none",
              paddingLeft : "20px"
            }}
          >
            <option> pakistan</option>
          </select>
          <div
            style={{
              width: " 73%",
              display: " flex",
              marginTop: "30px",
              gap: "20px",
             
            }}
          >
            {" "}
            <input
              style={{
                width: "50%",
                height: "50px",
                border: "none",
                borderRadius: "10px",
                paddingLeft : "20px"
              }}
              placeholder="First Name"
              name="FirstName"
              value={formdata.FirstName}
              onChange={handleChange}
            />
            <input
              style={{
                width: "50%",
                height: "50px",
                border: "none",
                borderRadius: "10px",
                paddingLeft : "20px"
              }}
              placeholder="Last Name"
              name="LasttName"
              onChange={handleChange}
              value={formdata.FirstName}
            />
          </div>
          <input
            style={{
              width: "70%",
              height: "50px",
              borderRadius: "10px",
              border: "none",
              marginTop: "30px",
              paddingLeft : "20px"
            }}
            type="text"
            placeholder=" Address"
            name="Address"
            onChange={handleChange}
            value={formdata.Address}
          />
          <div
            style={{
              width: " 73%",
              display: " flex",
              marginTop: "30px",
              gap: "20px",
              
            }}
          >
            {" "}
            <input
              style={{
                width: "50%",
                height: "50px",
                border: "none",
                borderRadius: "10px",
                paddingLeft : "20px"
              }}
              placeholder="City"
              name="city"
              onChange={handleChange}
              value={formdata.city}
            />
            <input
              style={{
                width: "50%",
                height: "50px",
                border: "none",
                borderRadius: "10px",
                paddingLeft : "20px"
              }}
              placeholder="Postal Code"
              name="postalcode"
              onChange={handleChange}
              value={formdata.postalcode}
            />
          </div>
          <input
            style={{
              width: "70%",
              height: "50px",
              borderRadius: "10px",
              border: "none",
              marginTop: "30px",
              paddingLeft : "20px"
            }}
            type="text"
            placeholder=" Phone Number"
            name="phoneNumber"
            onChange={handleChange}
            value={formdata.phoneNumber}
          />
          <h1>Payment</h1>
          <div
            style={{
              display: "flex",
              width: "70%",
              backgroundColor: "white",
              alignItems: "center",
              height: "50px",
              borderRadius: "10px",
              border: "none",
              marginTop: "30px",
              height: "60px",
              paddingLeft : "20px"
            }}
          >
            {" "}
            <input
              type="radio"
              id="html"
              name="fav_language"
              onClick={message}
            />{" "}
            <label>Direct bank transfer</label>
          </div>{" "}
          <div style={{ width: "73%", backgroundColor: "wheat" }}>
            <p style={{ margin: "0px", fontSize: "18px" }}>{error}</p>
          </div>
          <div
            style={{
              display: "flex",
              width: "70%",
              backgroundColor: "white",
              alignItems: "center",
              height: "50px",
              borderRadius: "10px",
              border: "none",
              marginTop: "10px",
              height: "60px",
              paddingLeft : "20px"
            }}
          >
            {" "}
            <input
              type="radio"
              id="css"
              name="fav_language"
              value="CSS"
              onClick={message1}
            />{" "}
            <label >Cash on delivery</label>
          </div>
          <div style={{ width: "73%", backgroundColor: "wheat" }}>
            <p style={{ margin: "0px", fontSize: "18px" }}>{error1}</p>
          </div>
          <div style={{ width: "73%" }}>
            <button
              style={{
                padding: "10px 20px",

                transition: "background-color 0.3s ease",
                display: "flex",
                width: "100%",
                backgroundColor: "white",
                alignItems: "center",
                height: "50px",
                borderRadius: "10px",
                border: "none",
                marginTop: "10px",
                height: "60px",
                justifyContent: "center",
              }}
              onMouseOver={(e) => {
                e.target.style.backgroundColor = "lightgreen";
              }}
              onMouseOut={(e) => {
                e.target.style.backgroundColor = "white";
              }}
              onClick={handleSubmit}
            >
              Place Order<span style={{ color: "red" }}>$</span>{" "}
              {data.reduce((acc, curr) => acc + curr.price * curr.items, 0)}
            </button>
          </div>
        </div>
        <div style={{ width: "40%" }}>
          {" "}
          <div
            style={{
              marginTop: " 13%",
              background: " black",
              width: "93%",
              display: " flex",

              flexDirection: "column",
              alignItems: "center",
              height: " 100vh",
            }}
          >
            <h1 style={{ color: "white" }}> Your Order</h1>
            <div style={{ display: "flex", gap: " 90px" }}>
              <h2 style={{ color: "white" }}>Name</h2>
              <h2 style={{ color: "white" }}>Quantity</h2>
              <h2 style={{ color: "white" }}>Price</h2>
            </div>{" "}
            {data.map((item, index) => (
              <div
                style={{
                  width: "93%",
                  backgroundColor: "white",
                  display: "flex",
                  marginTop: "10px",
                  justifyContent: "space-around",
                  height:'80px'
                }}
              >
                {" "}
                <div
                  key={index}
                  style={{
                    display: "flex",

                    alignItems: "center",
                    width: "30%",
                    backgroundColor: "white",
                    // justifyContent: "center",
                  }}
                >
                  {" "}
                  <img src={item.image} style={{ width: "70px" }} />
                  <div style={{ display: "flex", alignItems: "center" }}>
                    {" "}
                    <h2> {item.name}</h2>
                  </div>
                </div>
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    width: "30%",
                    justifyContent: "center",
                  }}
                >
                  {" "}
                  <h2>
                    {item.items}
                    <span>x</span>
                  </h2>
                </div>
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    width: "30%",
                    justifyContent: "center",
                  }}
                >
                  <h2>
                    <span style={{ color: "red" }}>$</span>
                    {item.price * item.items}
                  </h2>
                </div>
              </div>
            ))}
            <div style={{ color: "white", marginTop: "20px" }}>
              <h2>
                Total price: $
                {data.reduce((acc, curr) => acc + curr.price * curr.items, 0)}
              </h2>
            </div>
          </div>
        </div>
      </div>
      {order && (
        <div
          style={{
            position: "absolute",
            width: "36%",
            height: "50%",
            backgroundColor: " #616161",
            top: "80%",
          right: "25%",
          }}
        >
          <div style={{color:'white', display:'flex', justifyContent:'center', flexDirection:'column', alignItems:'center', marginTop:'20px'}}> <h1>GIFTOS  </h1>
          <h2>Thank you. Your order has been received.</h2>
          <button style={{marginTop :'20px'}} onClick={hello}>Confrim Order</button></div>
         
        </div>
      )}
    </div>
  );
};
