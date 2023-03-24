import CartWidget from "../CartWidget/CartWidget";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../../context/UserContext";
import "./Header.css";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { Button } from "@mui/material";

const Header = () => {
  const navigate = useNavigate();

  const { loggedIn, salir } = useContext(UserContext);

  const login = () => {
    navigate("/login");
  };

  const logout = () => {
    salir();
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
      {loggedIn ? (
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
          }}
        >
          <CartWidget />
          <Button
            style={{ height: "25px", marginLeft: "15px" }}
            onClick={logout}
            variant="contained"
            color="neutral"
            size="small"
          >
            Cerrar sesión
          </Button>
        </div>
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
