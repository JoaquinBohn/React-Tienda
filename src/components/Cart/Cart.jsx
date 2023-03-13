import { useContext, useState } from "react";
import { CartContext } from "../../context/CartContext";
import Swal from "sweetalert2";
import "./Cart.css";
import FormCheckOut from "../FormCheckOut/FormCheckOut";
import FinishBuy from "../FinishBuy/FinishBuy";
import { Link } from "react-router-dom";
import { Button } from "@mui/material";

const Cart = () => {
  const { cart, clearCart, deleteProductById, getTotalItems, getTotalPrice } =
    useContext(CartContext);

  const totalPrice = getTotalPrice();

  const totalItems = getTotalItems();

  const [buy, setBuy] = useState(false);
  const [orderId, setOrderId] = useState(null);

  const clearCartAlert = () => {
    Swal.fire({
      title: "Seguro quieres eliminar los productos del carrito?",
      showDenyButton: true,
      showCancelButton: true,
      confirmButtonText: "Si, eliminar",
      denyButtonText: `No, no eliminar`,
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire("Carrito eliminado con exito!", "", "success");
        clearCart();
      } else if (result.isDenied) {
        Swal.fire("Operacion cancelada.", "", "info");
      }
    });
  };

  if (orderId) {
    return <FinishBuy orderId={orderId} />;
  }

  return (
    <div className="cart">
      <div className="title">
        <h1>Carrito</h1>
      </div>
      {!buy ? (
        <div className="carrito">
          {cart.length < 1 ? (
            <img
              className="no-items-img"
              src="https://res.cloudinary.com/drdgu83bp/image/upload/v1678728872/Assets/no-items-removebg-preview_x2fyms.png"
              alt=""
            />
          ) : (
            <div className="products">
              {cart.map((item) => {
                return (
                  <div className="tarjeta-producto" key={item.id}>
                    <img className="imagen-producto" src={item.img} alt="" />
                    <div className="detalle-producto">
                      <h2>Titulo: {item.nombre}</h2>
                      <h3>Precio: ${item.precio}</h3>
                      <h3>Cantidad: {item.quantity}</h3>
                      <Button
                        variant="contained"
                        color="warning"
                        size="small"
                        onClick={() => deleteProductById(item.id)}
                      >
                        Quitar del carrito
                      </Button>
                    </div>
                  </div>
                );
              })}
            </div>
          )}
          {cart.length < 1 ? (
            <div>
              <h2>Carrito vacío</h2>
              <p>Aún no se han agregado productos al carrito.</p>
              <Link to="/">Ir al catálogo</Link>
            </div>
          ) : (
            <div className="descripcion-carrito">
              <h2>Detalles del carrito:</h2>
              <h3>Cantidad de productos: {totalItems}</h3>
              <h3>Precio total: ${totalPrice}</h3>
              <Button
                variant="contained"
                color="warning"
                size="small"
                onClick={clearCartAlert}
              >
                Vaciar Carrito
              </Button>
              <br />
              <Button
                variant="contained"
                color="primary"
                size="small"
                onClick={() => setBuy(true)}
              >
                Ir al CheckOut
              </Button>
            </div>
          )}
        </div>
      ) : (
        <FormCheckOut
          cart={cart}
          total={totalPrice}
          clearCart={clearCart}
          setOrderId={setOrderId}
          setBuy={setBuy}
        />
      )}
    </div>
  );
};

export default Cart;
