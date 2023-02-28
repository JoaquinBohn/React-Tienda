import { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import Swal from "sweetalert2";

const Cart = () => {
  const { cart, clearCart, deleteProductById, getTotalPrice } =
    useContext(CartContext);

  const totalPrice = getTotalPrice();

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

  return (
    <div>
      <h1>Carrito</h1>

      {cart.map((item) => {
        return (
          <div key={item.id}>
            <h2>Titulo: {item.nombre}</h2>
            <h3>Precio: ${item.precio}</h3>
            <h3>Cantidad: {item.quantity}</h3>
            <button onClick={() => deleteProductById(item.id)}>
              Quitar del carrito
            </button>
          </div>
        );
      })}

      <h3>Total del carrito: ${totalPrice}</h3>

      <button onClick={clearCartAlert}>Limpiar carrito</button>
    </div>
  );
};

export default Cart;
