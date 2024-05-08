import React from 'react'

function Card(props) {
  return (
    <div >
        <div className="b">
        <div className="shop">
          <div className="card">
            <div>
            <div className="card-1">
              <h3>New</h3>
            </div></div>
            <div style={{height : '66%',display : "flex", justifyContent: 'center'}}>
            <img
              style={{
                width: "150px",
                padding: "60px",
              }}
              src={props.Image}
            /></div>
            <div
              style={{
                display: "flex",
                justifyContent: "space-around",
                gap: "100px",
              }}
            >
              <h3>{props.name}</h3>
              <h3>
                Price <span style={{ color: "red" }}>${props.Price}</span>
              </h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Card