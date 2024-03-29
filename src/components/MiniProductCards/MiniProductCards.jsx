import { Grid, Paper, styled, Button } from "@mui/material";
import React from "react";
import { useNavigate } from "react-router-dom";
import "./MiniProductCards.css";

const MiniProductCards = ({ element }) => {
  const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
    padding: theme.spacing(1),
    textAlign: "flex-start",
    color: theme.palette.text.secondary,
  }));

  const navigate = useNavigate();

  const irADetalles = (id) => {
    navigate(`/item/${id}`);
  };

  return (
    <Grid item xs={12} sm={6}>
      <Item
        className="card-box"
        sx={{ boxShadow: "2px 2px 2px 1px #00000060" }}
      >
        <Grid
          container
          direction="row"
          justifyContent="flex-start"
          spacing={2}
          className="mini-card"
        >
          <Grid item xs={6} sm={7} lg={6}>
            <img className="mini-img-product" src={element.img} alt="" />
          </Grid>
          <Grid item xs={6} sm={5} lg={6}>
            <h3 className="mini-titulo">{element.nombre}</h3>
            <hr />
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

export default MiniProductCards;
