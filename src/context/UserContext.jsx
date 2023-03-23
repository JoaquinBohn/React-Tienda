import React from "react";
import { createContext, useState } from "react";
import { db } from "../firebaseConfig";
import { getDocs, collection } from "firebase/firestore";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

export const UserContext = createContext();

const UserContextProvider = ({ children }) => {
  const [user, setUser] = useState({});
  const [loggedIn, setLoggedIn] = useState(false);
  const [usersList, setUsersList] = useState([]);

  const navigate = useNavigate();

  const usersCollection = collection(db, "users");

  const obtenerUsuarios = () => {
    getDocs(usersCollection)
      .then((res) => {
        const usuarios = res.docs.map((user) => {
          return {
            ...user.data(),
          };
        });
        setUsersList(usuarios);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const validarCredenciales = (credenciales) => {
    obtenerUsuarios();
    const usuario = usersList.find(
      (element) => element.email === credenciales.email
    );

    if (usuario) {
      if (usuario.password === credenciales.password) {
        setUser(usuario);
        setLoggedIn(true);
        navigate("/");
      } else {
        alert("Constraseña incorrecta");
      }
    } else {
      registrarNuevoUsuarioAlert();
    }
  };

  const userExist = (email) => {
    console.log(email);
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

  let data = {
    user: user,
    usersList: usersList,
    loggedIn: loggedIn,
    validarCredenciales,
    registrarNuevoUsuario,
    finalizarRegistro,
    userExist,
  };

  return <UserContext.Provider value={data}>{children}</UserContext.Provider>;
};

export default UserContextProvider;
