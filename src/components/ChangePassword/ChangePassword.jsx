import React, { useContext, useState } from "react";
import { UserContext } from "../../context/UserContext";
import { doc, updateDoc } from "firebase/firestore";
import { db } from "../../firebaseConfig";
import { useNavigate } from "react-router-dom";
import { Button } from "@mui/material";
import Swal from "sweetalert2";

const ChangePassword = () => {
  const { user, validarPassword } = useContext(UserContext);

  const [usuario, setUsuario] = useState({
    email: "",
    password: "",
    newPassword: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();

    if (validarPassword(usuario)) {
      console.log(user.id);
      updateDoc(doc(db, "users", user.id), {
        password: usuario.newPassword,
      });
      Swal.fire(
        "Cambio exitoso. Cierre sesión y vuelva a ingresar para visualizar los cambios efectuados."
      );
      navigate(-1);
    } else {
      console.log("no funca");
    }
  };

  const navigate = useNavigate();

  const cancelar = () => {
    navigate(-1);
  };

  return (
    <div style={{ margin: "20px", height: "100vh" }}>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="email"
          placeholder="Ingrese su email"
          onChange={(e) => setUsuario({ ...usuario, email: e.target.value })}
        />
        <input
          type="text"
          name="password"
          placeholder="Ingrese su contraseña actual"
          onChange={(e) => setUsuario({ ...usuario, password: e.target.value })}
        />
        <input
          type="text"
          name="newPassword"
          placeholder="Ingrese su nueva contraseña"
          onChange={(e) =>
            setUsuario({ ...usuario, newPassword: e.target.value })
          }
        />
        <button>Cambiar contraseña</button>
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

export default ChangePassword;
