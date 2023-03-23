import React, { useState, useContext } from "react";
import { Button } from "@mui/material";
import { addDoc, collection } from "firebase/firestore";
import { db } from "../../firebaseConfig";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../../context/UserContext";
import "./SignUp.css";

const SignUp = () => {
  const [usuarioNuevo, setUsuarioNuevo] = useState({ rol: "user" });

  const { finalizarRegistro, userExist } = useContext(UserContext);

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    const usersCollection = collection(db, "users");

    if (userExist(usuarioNuevo.email)) {
      alert("El email ingresado ya se encuentra asociado a una cuenta");
    } else {
      addDoc(usersCollection, usuarioNuevo)
        .then((res) => finalizarRegistro(usuarioNuevo))
        .catch((err) => console.log(err));
    }
  };

  const cancelar = () => {
    navigate("/");
  };

  return (
    <div className="registro-container">
      <div className="registro">
        <form className="formulario" onSubmit={handleSubmit}>
          <label>Nombre</label>
          <input
            type="text"
            name="nombre"
            placeholder="Ingrese su nombre"
            onChange={(e) =>
              setUsuarioNuevo({ ...usuarioNuevo, nombre: e.target.value })
            }
          />
          <label>Email</label>
          <input
            type="text"
            name="email"
            placeholder="Ingrese su email"
            onChange={(e) =>
              setUsuarioNuevo({ ...usuarioNuevo, email: e.target.value })
            }
          />
          <label>Constraseña</label>
          <input
            type="text"
            name="constraseña"
            placeholder="Ingrese su contraseña"
            onChange={(e) =>
              setUsuarioNuevo({ ...usuarioNuevo, password: e.target.value })
            }
          />
          <button>Completar registro</button>
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

export default SignUp;
