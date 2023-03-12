import Navbar from "../navbar/Navbar";
import CartWidget from "../CartWidget/CartWidget";
import "./Header.css";

import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="cabecera">
      <div className="logo">
        <Link to="/" style={{ textDecoration: "none" }}>
          <h1 className="the">The</h1>
          <h2 className="subtitulo">Book Shop</h2>
        </Link>
      </div>
      <Navbar />
      <CartWidget />
    </div>
  );
};

export default Header;
