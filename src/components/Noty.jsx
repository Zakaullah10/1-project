import React, { useState } from "react";
import { FaShoppingCart } from "react-icons/fa";
import { Item } from "./Item";

const notyIconStyle = {
  position: "relative",
  display: "inline",
};
const notyNumStyle = {
  position: "absolute",
  right: "15px",
  backgroundColor: "rgb(29, 161, 242)",
  fontSize: "11px",
  color: "white",
  display: "inline",
  padding: "0px 5px",
  borderRadius: "20px",
};

export function Noty({ count, setShowModal, showModal }) {
  const handel = () => {
    setShowModal(!showModal);
  };
  return (
    <div>
      <div style={notyIconStyle} onClick={handel}>
        {<div style={notyNumStyle}>{count}</div>}
        <FaShoppingCart
          style={{ width: " 70px", color: "white", height: "25px" }}
        />
      </div>
    </div>
  );
}
