import React from "react";
import { createContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

export const UserContext = createContext();

const UserContextProvider = ({ children }) => {
  const [user, setUser] = useState({});
  const [loggedIn, setLoggedIn] = useState(false);
  const [usersList, setUsersList] = useState([]);

  const navigate = useNavigate();

  const cargarUsuarios = (usuarios) => {
    setUsersList(usuarios);
  };

  const iniciarSesion = (credenciales) => {
    const usuario = usersList.find(
      (element) => element.email === credenciales.email
    );

    if (usuario) {
      if (usuario.password === credenciales.password) {
        setUser(usuario);
        console.log(usuario);
        setLoggedIn(true);
        navigate(-1);
      } else {
        alert("Constraseña incorrecta");
      }
    } else {
      registrarNuevoUsuarioAlert();
    }
  };

  const validarPassword = (credenciales) => {
    if (userExist(credenciales.email)) {
      const usuario = usersList.find(
        (element) => element.email === credenciales.email
      );

      return usuario.password === credenciales.password;
    } else {
      return false;
    }
  };

  const userExist = (email) => {
    return usersList.some((element) => element.email === email);
  };

  const registrarNuevoUsuario = () => {
    navigate("/registro");
  };

  const finalizarRegistro = (usuario) => {
    setUser(usuario);
    setLoggedIn(true);
    alert("Usuario registrado");
    navigate("/");
  };

  const registrarNuevoUsuarioAlert = () => {
    Swal.fire({
      title: "El usuario no existe, desea registrarse?",
      showCancelButton: true,
      confirmButtonText: "Registrarme",
    }).then((result) => {
      if (result.isConfirmed) {
        registrarNuevoUsuario();
      }
    });
  };

  const salir = () => {
    setLoggedIn(false);
    navigate("/");
  };

  let data = {
    user: user,
    usersList: usersList,
    loggedIn: loggedIn,
    iniciarSesion,
    validarPassword,
    registrarNuevoUsuario,
    finalizarRegistro,
    userExist,
    salir,
    cargarUsuarios,
  };

  return <UserContext.Provider value={data}>{children}</UserContext.Provider>;
};

export default UserContextProvider;
