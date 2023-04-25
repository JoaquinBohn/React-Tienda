import { Grid, Paper, styled, Button } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./ProductCard.css";

const ProductCard = ({ element }) => {
  const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: "#ffffffab",
    padding: theme.spacing(1),
    textAlign: "flex-start",
    color: theme.palette.text.secondary,
    boxShadow: "3px 3px 3px 1px #00000069",
  }));

  const navigate = useNavigate();

  const irADetalles = (id) => {
    navigate(`/item/${id}`);
  };

  const [screenWidth, setScreenWidth] = useState(0);

  useEffect(() => {
    setScreenWidth(window.innerWidth);
  }, []);

  return (
    <Grid item xs={12} lg={3} sm={6}>
      <Item className="grid-item">
        <Grid
          container
          direction={screenWidth > 480 ? "column" : "row"}
          justifyContent="flex-start"
          alignItems="center"
          spacing={2}
          className="grid-product-container"
        >
          <Grid item xs={6} lg={7} sm={7}>
            <img className="img-producto" src={element.img} alt="" />
          </Grid>
          <Grid item xs={6} lg={5} sm={5}>
            <h2 className="libro-titulo">{element.nombre}</h2>
            <h3 className="libro-detalles">{element.autor}</h3>
            <p className="libro-detalles">${element.precio}</p>
            <Button
              sx={{ width: "70px", height: "20px", fontSize: "10px" }}
              variant="contained"
              color="primary"
              size="small"
              onClick={() => irADetalles(element.id)}
            >
              Ver más
            </Button>
          </Grid>
        </Grid>
      </Item>
    </Grid>
  );
};

export default ProductCard;
