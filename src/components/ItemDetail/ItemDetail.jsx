import React, { useContext } from "react";
import ItemCount from "../ItemCount/ItemCount";
import "./ItemDetail.css";
import { CartContext } from "../../context/CartContext";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { UserContext } from "../../context/UserContext";

const ItemDetail = ({ producto }) => {
  const { addToCart, getQuantityById } = useContext(CartContext);
  const { loggedIn } = useContext(UserContext);

  const navigate = useNavigate();

  const onAdd = (cantidad) => {
    if (loggedIn) {
      const obj = {
        ...producto,
        quantity: cantidad,
      };

      addToCart(obj);

      Swal.fire("Producto agregado al carrito.");

      navigate("/Cart");
    } else {
      navigate("/login");
    }
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
        {producto.stock > 0 ? (
          <ItemCount stock={producto.stock} initial={quantity} onAdd={onAdd} />
        ) : (
          <h3 className="agotado">Producto agotado</h3>
        )}
      </div>
    </div>
  );
};

export default ItemDetail;
