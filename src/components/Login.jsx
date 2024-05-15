import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export function Login() {
  const navigate = useNavigate();
  const [field1, setField1] = useState("");
  const [field2, setField2] = useState("");
  const [error, setError] = useState("");
  const [error1, setError1] = useState("");
  const [fun, setFun] = useState("");


  const handleSubmit = (event) => {
    localStorage.setItem('email',field1)
    localStorage.setItem('password',field2)
    let pattern = /^[A-Za-z._]{3,}@[A-Za-z]{3,}[.]{1}[A-Za-z.]{2,4}$/
    event.preventDefault();
    if (field1 === "" || field2 === "") {
      setError1("Please fill in all fields");
    } 
    else if (!pattern.test(field1)) {
      setError('Invalid email address');
    }
      
    else {
      const email = [
        {
          Email: field1,
          password: field2,
        },
      ];

      console.log(email);
      navigate(`/home`);
    }
  };
  return (
    <div style={{display:'flex',justifyContent:'center' }}>
      <div style={{width:'25%', backgroundColor:'white', marginTop:'10%'}}>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            flexDirection: "column",
            alignItems: "center",
            marginTop: "60px ",
            gap: "25px",
          }}
        >
          <input
            type="email"
            placeholder="Email"
            style={{ height: "35px", width: "280px" }}
            value={field1}
            onChange={(e) => setField1(e.target.value)}
            required
          />
          <input
            type="password"
            placeholder="Password"
            style={{ height: "35px", width: "280px", marginTop:'0' }}
            value={field2}
            onChange={(e) => setField2(e.target.value)}
            required
          />
          <p style={{ color: "red", marginTop:'0' }}>{error}</p>
          <p style={{ color: "red", marginTop:'0'}}>{error1}</p>
        </div>

        {/*footer*/}
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            gap: "25px",
            alignItems: "center",
            paddingBottom:'20px'
           
          }}
        >
          <button
            style={{ width: " 100px", height: "35px" }}
            onClick={handleSubmit}
          >
            Submit
          </button>
        </div>
      </div>
    </div>
  );
}
