import { hover } from "@testing-library/user-event/dist/hover";
import React from "react";
import { useNavigate } from "react-router-dom";

function Card(props) {
  const navigate = useNavigate();
  return (
    <div>
      <div className="b">
        <div className="shop">
          <div
            className="card"
            onClick={() => {
              navigate(`/items/${props.Id}`);
            }}
          >
            <div>
              <div className="card-1">
                <h3>New</h3>
              </div>
            </div>
            <div
              className="n"
              style={{
                height: "66%",
                display: "flex",
                justifyContent: "center",
              }}
            >
              <img
                style={{
                  width: "150px",
                  padding: "25px",
                }}
                src={props.Images}
              />
            </div>
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
  );
}

export default Card;
