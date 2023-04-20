import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import KeyboardArrowLeftTwoToneIcon from "@mui/icons-material/KeyboardArrowLeftTwoTone";
import KeyboardArrowRightTwoToneIcon from "@mui/icons-material/KeyboardArrowRightTwoTone";
import FiberManualRecordTwoToneIcon from "@mui/icons-material/FiberManualRecordTwoTone";
import "./Carousel.css";

const Carousel = () => {
  const idList = ["item-1", "item-2", "item-3"];
  const linkList = [
    "/category/novelas",
    "/category/academicos",
    "/category/infantiles",
  ];
  const tittleList = [
    "Explore las mejores novelas!",
    "A estudiar!",
    "Mi primer libro",
  ];
  const textList = [
    "Visite nuestro catálogo y descubra las novelas que tenemos para ti",
    "Descubra todos los libros académicos de nuestro catálogo",
    "Grandes libros para pequeños lectores, visite nuestra sección de infantiles.",
  ];

  const [selectedIndex, setSelectedIndex] = useState(0);
  const [selectedId, setSelectedId] = useState(idList[0]);
  const [selectedTittle, setSelectedTittle] = useState(tittleList[0]);
  const [selectedLink, setSelectedLink] = useState(linkList[0]);
  const [selectedText, setSelectedText] = useState(textList[0]);
  const [buttonState, setButtonState] = useState([
    "activo",
    "inactivo",
    "inactivo",
  ]);

  const [loading, setLoading] = useState(false);

  const setChange = (index) => {
    setSelectedId(idList[index]);
    setSelectedLink(linkList[index]);
    setSelectedTittle(tittleList[index]);
    setSelectedText(textList[index]);
    setSelectedIndex(index);
    setTimeout(() => {
      setLoading(false);
    }, 0.5);
    setLoading(true);
  };

  const previous = () => {
    const condition = selectedIndex > 0;
    const nextIndex = condition ? selectedIndex - 1 : idList.length - 1;
    setChange(nextIndex);
  };

  const next = () => {
    const condition = selectedIndex < idList.length - 1;
    const nextIndex = condition ? selectedIndex + 1 : 0;
    setChange(nextIndex);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      next();
    }, 4500);
    return () => clearInterval(interval);
  });

  useEffect(() => {
    if (selectedIndex === 1) {
      setButtonState(["inactivo", "activo", "inactivo"]);
    } else if (selectedIndex === 2) {
      setButtonState(["inactivo", "inactivo", "activo"]);
    } else {
      setButtonState(["activo", "inactivo", "inactivo"]);
    }

    setTimeout(() => {
      setLoading(false);
    }, 0.5);
    setLoading(true);
  }, [selectedIndex]);

  return (
    <div className="carousel">
      <div className="content-carousel">
        <div
          className={loading ? "tarjeta-carousel" : "tarjeta-carousel-animada"}
          id={selectedId}
        >
          <Link to={selectedLink}>
            <h2 className="carousel-tittle">{selectedTittle}</h2>
            <p className="carousel-text">{selectedText}</p>
          </Link>
        </div>
        <div className="flechas-carousel">
          <button className="boton-carousel" onClick={previous}>
            <KeyboardArrowLeftTwoToneIcon sx={{ fontSize: "40px" }} />
          </button>
          <button className="boton-carousel" onClick={next}>
            <KeyboardArrowRightTwoToneIcon sx={{ fontSize: "40px" }} />
          </button>
        </div>
      </div>

      <div className="puntos-carousel">
        <button
          onClick={() => {
            setChange(0);
          }}
          className="boton-carousel"
        >
          <FiberManualRecordTwoToneIcon
            id={buttonState[0]}
            sx={{ fontSize: "small" }}
          />
        </button>

        <button
          onClick={() => {
            setChange(1);
          }}
          className="boton-carousel"
        >
          <FiberManualRecordTwoToneIcon
            sx={{ fontSize: "small" }}
            id={buttonState[1]}
          />
        </button>

        <button
          onClick={() => {
            setChange(2);
          }}
          className="boton-carousel"
        >
          <FiberManualRecordTwoToneIcon
            sx={{ fontSize: "small" }}
            id={buttonState[2]}
          />
        </button>
      </div>
    </div>
  );
};

export default Carousel;
