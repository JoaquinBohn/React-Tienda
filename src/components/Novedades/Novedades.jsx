import { Grid } from "@mui/material";
import { collection, getDocs, query, where } from "firebase/firestore";
import React from "react";
import { useEffect, useState } from "react";
import { db } from "../../firebaseConfig";
import { LoadingSpinner } from "../LoadingSpinner/LoadingSpinner";
import MiniProductCards from "../MiniProductCards/MiniProductCards";

const Novedades = () => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    const itemCollection = collection(db, "productos");

    const q = query(itemCollection, where("vendidos", ">", 45));

    getDocs(q)
      .then((res) => {
        const productos = res.docs.map((producto) => {
          return {
            ...producto.data(),
            id: producto.id,
          };
        });
        setItems(productos);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [items]);

  if (items.length < 1) {
    return <LoadingSpinner />;
  }

  return (
    <div>
      <Grid container justifyContent="center" alignItems="center" spacing={2}>
        {items.map((element) => {
          return <MiniProductCards element={element} key={element.id} />;
        })}
      </Grid>
    </div>
  );
};

export default Novedades;
