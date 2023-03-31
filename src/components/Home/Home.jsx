import React from "react";
import Carousel from "react-material-ui-carousel";
import { Paper } from "@mui/material";
import Grid from "@mui/material/Grid";
import "./Home.css";
import Novedades from "../Novedades/Novedades";
import Banner from "../Banner/Banner";
import Navbar from "../Navbar/Navbar";
import Article from "../Article/Article";

const Home = () => {
  const items = [
    {
      name: "Explora las mejores novelas!",
      description: "Probably the most random thing you have ever seen!",
      img: "https://res.cloudinary.com/drdgu83bp/image/upload/v1678729755/Assets/libro_k6mxom.jpg",
      link: "/category/novelas",
    },
    {
      name: "A estudiar!",
      description: "Mirá todos los libros academicos disponibles aquí",
      img: "https://res.cloudinary.com/drdgu83bp/image/upload/v1678727422/Assets/fondo4_x31jv2.jpg",
      link: "/category/academicos",
    },
  ];

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
            <Carousel
              sx={{
                width: "1000px",
                height: "250px",
              }}
            >
              {items.map((item, i) => (
                <Banner key={i} item={item} />
              ))}
            </Carousel>

            <div style={{ width: "1000px" }}>
              <Grid
                container
                spacing={2}
                sx={{
                  marginTop: "20px",
                  marginBottom: "20px",
                }}
              >
                <Grid
                  item
                  xs={8}
                  sx={{
                    height: "800px",
                    boxShadow: "3px 3px 3px 1px #0000004b",
                    backgroundColor: "#b88ce065",
                  }}
                >
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
