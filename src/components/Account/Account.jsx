import React, { useContext, useState } from "react";
import { UserContext } from "../../context/UserContext";
import { useNavigate } from "react-router-dom";
import LogIn from "../LogIn/LogIn";
import { Button } from "@mui/material";
import "./Account.css";
import Navbar from "../Navbar/Navbar";

const Account = () => {
  const { user, loggedIn } = useContext(UserContext);

  const [censoredPassword, setCensoredPassword] = useState(
    "x".repeat(user.password.length)
  );

  const [activeButton, setActiveButton] = useState(true);

  const mostrar = () => {
    setCensoredPassword(user.password);
    setActiveButton(false);
  };

  const ocultar = () => {
    setCensoredPassword("x".repeat(user.password.length));
    setActiveButton(true);
  };

  const navigate = useNavigate();

  const cambiarPassword = () => {
    navigate("/changePassword");
  };

  const cambiarNombre = () => {
    navigate("/changeName");
  };

  const cambiarEmail = () => {
    navigate("/changeEmail");
  };

  if (!loggedIn) {
    return <LogIn />;
  }

  return (
    <div className="account-container">
      <Navbar />
      <div className="account">
        <div className="account-opciones">
          <div>
            <h2>Mis datos:</h2>
            <p>Nombre: {user.nombre}</p>
            <p>Email: {user.email}</p>
            <p>Contraseña: {censoredPassword}</p>
            <button
              className={activeButton ? "active-button" : "inactive-button"}
              onClick={mostrar}
            >
              Mostrar contraseña
            </button>
            <button
              className={!activeButton ? "active-button" : "inactive-button"}
              onClick={ocultar}
            >
              Ocultar contraseña
            </button>
          </div>

          <hr
            style={{
              borderLeft: "1px solid #0000004b",
              height: "200px",
              margin: "20px",
            }}
          />

          <div className="account-botones">
            <Button
              variant="outlined"
              color="primary"
              size="small"
              onClick={cambiarNombre}
            >
              Cambiar nombre
            </Button>

            <Button
              variant="outlined"
              color="primary"
              size="small"
              onClick={cambiarEmail}
            >
              Cambiar email
            </Button>

            <Button
              variant="outlined"
              color="primary"
              size="small"
              onClick={cambiarPassword}
            >
              Cambiar contraseña
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Account;
