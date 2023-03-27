import React from "react";
import Carousel from "react-material-ui-carousel";
import { Paper } from "@mui/material";
import { Link } from "react-router-dom";
import Grid from "@mui/material/Grid";
import "./Home.css";
import Novedades from "../Novedades/Novedades";

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

  function Item(props) {
    const styles = {
      paperContainer: {
        backgroundImage: `url(${props.item.img})`,
        backgroundSize: "cover",
        backgroundPosition: "center ",
      },
    };

    return (
      <Paper
        elevation="5"
        sx={{
          width: "1000px",
          height: "200px",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          paddingLeft: "20px",
        }}
        style={styles.paperContainer}
      >
        <Link
          to={props.item.link}
          style={{ textDecoration: "none", color: "black" }}
        >
          <h2>{props.item.name}</h2>
          <p>{props.item.description}</p>
        </Link>
      </Paper>
    );
  }

  return (
    <div className="home">
      <Paper elevation="12" className="home-body" sx={{ bgcolor: "#f5f5f5c5" }}>
        <div className="home-body">
          <Carousel
            sx={{
              width: "1000px",
              height: "250px",
            }}
          >
            {items.map((item, i) => (
              <Item key={i} item={item} />
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
                  backgroundColor: "white",
                  height: "800px",
                }}
              >
                <h2>Más vendidos</h2>
                <Novedades />
              </Grid>
              <Grid item xs={1}></Grid>
              <Grid item xs={3} sx={{ backgroundColor: "red" }}>
                <h3>Algo</h3>
              </Grid>
            </Grid>
          </div>
        </div>
      </Paper>
    </div>
  );
};

export default Home;
