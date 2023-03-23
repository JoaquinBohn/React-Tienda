import React, { useContext, useState } from "react";
import { UserContext } from "../../context/UserContext";
import "./Login.css";

const LogIn = () => {
  const { validarCredenciales } = useContext(UserContext);

  const [userInfo, setUserInfo] = useState({ email: "", password: "" });

  const handleSubmit = (e) => {
    e.preventDefault();

    validarCredenciales(userInfo);
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
