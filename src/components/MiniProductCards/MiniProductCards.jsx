import { Grid, Paper, styled, Button } from "@mui/material";
import React from "react";
import { useNavigate } from "react-router-dom";

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
    <Grid item xs={4}>
      <Item
        sx={{
          border: "1px solid blueviolet",
          width: "150px",
          backgroundColor: "rgb(221, 221, 221)",
        }}
      >
        <Grid
          container
          direction="column"
          justifyContent="flex-start"
          spacing={2}
          sx={{ height: "280px", width: "100%", marginBottom: "2px" }}
        >
          <Grid item xs={10}>
            <img className="img-producto" src={element.img} alt="" />
          </Grid>
          <Grid item xs={2}>
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
