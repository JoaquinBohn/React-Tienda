import React, { useContext, useState, useEffect } from "react";
import { UserContext } from "../../context/UserContext";
import { db } from "../../firebaseConfig";
import { getDocs, collection } from "firebase/firestore";
import "./Login.css";

const LogIn = () => {
  const { iniciarSesion, cargarUsuarios } = useContext(UserContext);

  const [userInfo, setUserInfo] = useState({ email: "", password: "" });

  useEffect(() => {
    const usersCollection = collection(db, "users");
    getDocs(usersCollection)
      .then((res) => {
        const usuarios = res.docs.map((user) => {
          return {
            ...user.data(),
            id: user.id,
          };
        });
        cargarUsuarios(usuarios);
      })
      .catch((error) => {
        console.log(error);
      });
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    iniciarSesion(userInfo);
  };

  return (
    <div className="login-container">
      <div className="login">
        <h2>Ingresar a mi cuenta</h2>
        <form className="login-form">
          <label>Email</label>
          <input
            type="text"
            placeholder="email"
            onChange={(e) =>
              setUserInfo({ ...userInfo, email: e.target.value })
            }
          />
          <label>Contraseña</label>
          <input
            type="password"
            placeholder="contraseña"
            onChange={(e) =>
              setUserInfo({ ...userInfo, password: e.target.value })
            }
          />
          <button onClick={handleSubmit}>Ingresar</button>
        </form>
      </div>
    </div>
  );
};

export default LogIn;
