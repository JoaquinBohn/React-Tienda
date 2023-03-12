import React, { useContext } from "react";
import ItemCount from "../ItemCount/ItemCount";
import "./ItemDetail.css";
import { CartContext } from "../../context/CartContext";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

const ItemDetail = ({ producto }) => {
  const { addToCart, getQuantityById } = useContext(CartContext);

  const navigate = useNavigate();

  const onAdd = (cantidad) => {
    const obj = {
      ...producto,
      quantity: cantidad,
    };

    addToCart(obj);

    Swal.fire("Producto agregado al carrito.");

    navigate("/Cart");
  };

  const quantity = getQuantityById(producto.id);

  return (
    <div className="detalle">
      <img className="imagen" src={producto.img} alt="" />
      <div className="info">
        <h1 className="nombre">{producto.nombre}</h1>
        <p>{producto.descripcion}</p>
        <h2 className="stock">Stock disponible: {producto.stock}</h2>
        <h2>Precio: ${producto.precio}</h2>
        <ItemCount stock={producto.stock} initial={quantity} onAdd={onAdd} />
      </div>
    </div>
  );
};

export default ItemDetail;
