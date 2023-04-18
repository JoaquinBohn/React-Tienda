import React from "react";
import "./SideBar.css";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { Link } from "react-router-dom";

const SideBar = () => {
  return (
    <div className="sidebar">
      <h2 className="titulo-catalogo">Catálogo</h2>
      <Accordion className="acordeon">
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography className="tipografia">Categorías</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography className="categorias">
            <ul className="lista-categorias">
              <Link to="/category/todos" style={{ textDecoration: "none" }}>
                <li>Todos</li>
              </Link>

              <Link to="/category/novelas" style={{ textDecoration: "none" }}>
                <li>Novelas</li>
              </Link>

              <Link to="/category/cuentos" style={{ textDecoration: "none" }}>
                <li>Cuentos</li>
              </Link>

              <Link
                to="/category/academicos"
                style={{ textDecoration: "none" }}
              >
                <li>Academicos</li>
              </Link>

              <Link
                to="/category/infantiles"
                style={{ textDecoration: "none" }}
              >
                <li>Infantiles</li>
              </Link>
            </ul>
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion className="acordeon">
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography className="tipografia">Autores</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography className="categorias">
            <ul className="lista-categorias">
              <Link to="/category/todos" style={{ textDecoration: "none" }}>
                <li>Todos</li>
              </Link>

              <Link to="/category/exupery" style={{ textDecoration: "none" }}>
                <li>Antoine de Saint-Exupéry</li>
              </Link>

              <Link to="/category/rotzank" style={{ textDecoration: "none" }}>
                <li>Dross Rotzank</li>
              </Link>

              <Link to="/category/poe" style={{ textDecoration: "none" }}>
                <li>Edgar Allan Poe</li>
              </Link>

              <Link to="/category/hobsbawm" style={{ textDecoration: "none" }}>
                <li>Eri J. Hobsbawm</li>
              </Link>

              <Link to="/category/kafka" style={{ textDecoration: "none" }}>
                <li>Franz Kafka</li>
              </Link>

              <Link to="/category/marquez" style={{ textDecoration: "none" }}>
                <li>Gabriel García Marquez</li>
              </Link>

              <Link to="/category/orwell" style={{ textDecoration: "none" }}>
                <li>George Orwell</li>
              </Link>

              <Link to="/category/lovecraft" style={{ textDecoration: "none" }}>
                <li>H. P. Lovecraft</li>
              </Link>

              <Link to="/category/goldstein" style={{ textDecoration: "none" }}>
                <li>H. Goldstein</li>
              </Link>

              <Link to="/category/hesse" style={{ textDecoration: "none" }}>
                <li>Hermann Hesse</li>
              </Link>

              <Link to="/category/vaughn" style={{ textDecoration: "none" }}>
                <li>Joe Vaughn</li>
              </Link>

              <Link to="/category/covelo" style={{ textDecoration: "none" }}>
                <li>Laura Covelo</li>
              </Link>

              <Link to="/category/carroll" style={{ textDecoration: "none" }}>
                <li>Lewis Carroll</li>
              </Link>

              <Link to="/category/alcott" style={{ textDecoration: "none" }}>
                <li>Louisa May Alcott</li>
              </Link>

              <Link to="/category/garcia" style={{ textDecoration: "none" }}>
                <li>María García</li>
              </Link>
            </ul>
          </Typography>
        </AccordionDetails>
      </Accordion>
    </div>
  );
};

export default SideBar;
