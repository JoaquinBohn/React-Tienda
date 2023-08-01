import React, { useContext, useState, useEffect } from "react";
import { UserContext } from "../../context/UserContext";
import { db } from "../../firebaseConfig";
import { getDocs, collection } from "firebase/firestore";
import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import "./Login.css";

const LogIn = () => {
  const { iniciarSesion, cargarUsuarios, darCredenciales } =
    useContext(UserContext);

  const [userInfo, setUserInfo] = useState({ email: "", password: "" });

  const navigate = useNavigate();

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

  const cancelar = () => {
    navigate(-1);
  };

  useEffect(() => {
    darCredenciales();
  }, []);

  return (
    <div className="login-container">
      <div className="login">
        <h2 className="login-tittle">Ingresar a mi cuenta</h2>
        <form className="login-form">
          <label>Email</label>
          <input
            className="login-input"
            type="text"
            placeholder="email"
            onChange={(e) =>
              setUserInfo({ ...userInfo, email: e.target.value })
            }
          />
          <label>Contraseña</label>
          <input
            className="login-input"
            type="password"
            placeholder="contraseña"
            onChange={(e) =>
              setUserInfo({ ...userInfo, password: e.target.value })
            }
          />
          <button className="login-button" onClick={handleSubmit}>
            Ingresar
          </button>
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
    </div>
  );
};

export default LogIn;
