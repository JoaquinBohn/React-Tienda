import React from "react";
import { useNavigate } from "react-router-dom";
import "./FinishBuy.css";
import { Button } from "@mui/material";

const FinishBuy = ({ orderId }) => {
  const navigate = useNavigate();

  const volver = () => {
    navigate("/");
  };
  return (
    <div className="finish">
      <h2>El id de tu compra es: {orderId}</h2>
      <Button
        variant="outlined"
        color="primary"
        size="small"
        style={{ height: "20px", marginLeft: "5px" }}
        onClick={volver}
      >
        Volver a inicio
      </Button>
    </div>
  );
};

export default FinishBuy;
