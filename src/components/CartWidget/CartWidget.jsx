import React, { useContext } from "react";
import { BsFillCartCheckFill } from "react-icons/bs";
import { Link } from "react-router-dom";
import { CartContext } from "../../context/CartContext";

const CartWidget = () => {
  const { getTotalItems } = useContext(CartContext);

  const totalItems = getTotalItems();
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        color: "white",
        fontSize: "20px",
      }}
    >
      <p>{totalItems}</p>
      <Link to="/Cart" style={{ textDecoration: "none" }}>
        <BsFillCartCheckFill />
      </Link>
    </div>
  );
};

export default CartWidget;
