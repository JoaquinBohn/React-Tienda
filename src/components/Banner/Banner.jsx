import { Paper } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";

const Banner = (props) => {
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
};

export default Banner;
