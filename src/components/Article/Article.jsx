import { Link } from "react-router-dom";
import React from "react";
import "./Article.css";

const Article = () => {
  return (
    <div className="articulo">
      <h2 className="autor-titulo">Hermann Hesse</h2>
      <p className="aclaracion">AUTOR DESTACADO</p>
      <div className="img-container"></div>
      <p>
        Novelista alemán cuya obra indagó en temas como la búsqueda de la
        autorrealización y la espiritualidad. Destacada figura de la narrativa
        alemana de la primera mitad del siglo XX. Ganador del premio Nobel de
        Literatura en 1946.
      </p>
      <p className="frase">
        "El pájaro lucha para salir del huevo. El huevo es el mundo. Quien vaya
        a nacer debe destruir un mundo."
      </p>

      <Link to="/category/hesse" style={{ textDecoration: "none" }}>
        <h4>Ver más de este autor</h4>
      </Link>
    </div>
  );
};

export default Article;
