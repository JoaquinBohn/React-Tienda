import Navbar from "../navbar/Navbar";
import CartWidget from "../CartWidget/CartWidget";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../../context/UserContext";
import "./Header.css";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { Button } from "@mui/material";

const Header = () => {
  const navigate = useNavigate();

  const { loggedIn } = useContext(UserContext);

  const login = () => {
    navigate("/login");
  };

  const registro = () => {
    navigate("/registro");
  };

  return (
    <div className="cabecera">
      <div className="logo">
        <Link to="/" style={{ textDecoration: "none" }}>
          <h1 className="the">The</h1>
          <h2 className="subtitulo">Book Shop</h2>
        </Link>
      </div>
      <Navbar />
      {loggedIn ? (
        <CartWidget />
      ) : (
        <div className="botones">
          <Button
            onClick={login}
            variant="contained"
            color="neutral"
            size="small"
          >
            Ingresar
          </Button>
          <Button
            onClick={registro}
            variant="contained"
            color="secondary"
            size="small"
          >
            Registrarme
          </Button>
        </div>
      )}
    </div>
  );
};

export default Header;
