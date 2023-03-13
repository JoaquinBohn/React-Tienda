import React, { useState } from "react";
import { Button } from "@mui/material";
import {
  serverTimestamp,
  addDoc,
  collection,
  doc,
  updateDoc,
} from "firebase/firestore";
import { db } from "../../firebaseConfig";
import { useNavigate } from "react-router-dom";

const FormCheckOut = ({ cart, total, clearCart, setOrderId, setBuy }) => {
  const [userInfo, setUserInfo] = useState({ email: "", phone: "" });

  const navigate = useNavigate();

  const cancelar = () => {
    setBuy(false);
    navigate("/Cart");
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const order = {
      buyer: userInfo,
      items: cart,
      total: total,
      date: serverTimestamp(),
    };

    const orderCollection = collection(db, "orders");

    addDoc(orderCollection, order)
      .then((res) => setOrderId(res.id))
      .catch((err) => console.log(err));

    cart.map((product) => {
      updateDoc(doc(db, "productos", product.id), {
        stock: product.stock - product.quantity,
      });
    });

    clearCart();
  };
  return (
    <div style={{ margin: "20px", height: "100vh" }}>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="email"
          placeholder="Ingrese su mail"
          onChange={(e) => setUserInfo({ ...userInfo, email: e.target.value })}
        />
        <input
          type="text"
          name="phone"
          placeholder="Ingrese su telefono"
          onChange={(e) => setUserInfo({ ...userInfo, phone: e.target.value })}
        />
        <button>Comprar</button>
      </form>
      <Button
        variant="contained"
        color="warning"
        size="small"
        onClick={cancelar}
      >
        Cancelar
      </Button>
    </div>
  );
};

export default FormCheckOut;
