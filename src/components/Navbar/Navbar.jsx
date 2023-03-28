import { Link } from "react-router-dom";
import React from "react";
import "./Navbar.css";

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="navbar-opciones">
        <div className="opcion">
          <Link to="/" style={{ textDecoration: "none" }}>
            <h3 className="navbar-texto">Inicio</h3>
          </Link>
        </div>

        <div className="opcion">
          <Link to="/login" style={{ textDecoration: "none" }}>
            <h3 className="navbar-texto">Mi cuenta</h3>
          </Link>
        </div>

        <div className="opcion">
          <Link to="/category/todos" style={{ textDecoration: "none" }}>
            <h3 className="navbar-texto">Catalogo</h3>
          </Link>
        </div>

        <div className="opcion">
          <Link to="/category/cuentos" style={{ textDecoration: "none" }}>
            <h3 className="navbar-texto">Contacto</h3>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
