import { createContext, useState } from "react";
import Swal from "sweetalert2";

export const CartContext = createContext();

const CartContextProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  const addToCart = (producto) => {
    const enCarrito = estaEnCarrito(producto.id);

    if (enCarrito) {
      let carritoNuevo = cart.map((item) => {
        if (item.id === producto.id) {
          let nuevoProducto = {
            ...item,
            quantity: producto.quantity,
          };
          return nuevoProducto;
        } else {
          return item;
        }
      });

      setCart(carritoNuevo);
    } else {
      setCart([...cart, producto]);
    }
  };

  const estaEnCarrito = (id) => {
    return cart.some((element) => element.id === id);
  };

  const clearCart = () => {
    setCart([]);
  };

  const deleteProductById = (id) => {
    let carritoNuevo = cart.filter((producto) => producto.id !== id);

    setCart(carritoNuevo);

    Swal.fire("Producto eliminado del carrito.");
  };

  const getQuantityById = (id) => {
    let producto = cart.find((element) => element.id === id);

    return producto?.quantity;
  };

  const getTotalItems = () => {
    const total = cart.reduce((acc, element) => {
      return acc + element.quantity;
    }, 0);

    return total;
  };

  const getTotalPrice = () => {
    const precioTotal = cart.reduce((acc, element) => {
      return acc + element.precio * element.quantity;
    }, 0);

    return precioTotal;
  };

  let data = {
    cart: cart,
    addToCart,
    clearCart,
    deleteProductById,
    getQuantityById,
    getTotalItems,
    getTotalPrice,
  };

  return <CartContext.Provider value={data}>{children}</CartContext.Provider>;
};

export default CartContextProvider;
