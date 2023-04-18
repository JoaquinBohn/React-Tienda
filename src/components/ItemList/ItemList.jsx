import { Grid } from "@mui/material";
import React from "react";
import ProductCard from "../ProductCard/ProductCard";
import "./ItemList.css";

const ItemList = ({ items }) => {
  return (
    <Grid
      container
      justifyContent="center"
      alignItems="center"
      spacing={2}
      className="grid-contenedor"
    >
      {items.map((element) => {
        return <ProductCard element={element} key={element.id} />;
      })}
    </Grid>
  );
};

export default ItemList;
