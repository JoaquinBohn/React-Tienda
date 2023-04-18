import React from "react";
import { Paper } from "@mui/material";
import Grid from "@mui/material/Grid";
import "./Home.css";
import Novedades from "../Novedades/Novedades";
import Navbar from "../Navbar/Navbar";
import Article from "../Article/Article";
import Carousel from "../Carousel/Carousel";

const Home = () => {
  return (
    <div className="home">
      <Navbar />
      <div className="home-body">
        <Paper
          elevation="12"
          className="paper-body"
          sx={{ bgcolor: "#f5f5f5c5" }}
        >
          <div className="home-body">
            <Carousel />
            <div className="home-content">
              <Grid
                container
                spacing={2}
                sx={{
                  marginTop: "20px",
                  marginBottom: "20px",
                }}
              >
                <Grid item xs={8} className="grid-vendidos">
                  <h2 className="mas-vendidos">Más vendidos</h2>
                  <Novedades />
                </Grid>
                <Grid item xs={1}></Grid>
                <Grid item xs={3}>
                  <Article />
                </Grid>
              </Grid>
            </div>
          </div>
        </Paper>
      </div>
    </div>
  );
};

export default Home;
