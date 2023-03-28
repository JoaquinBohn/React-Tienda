import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { db } from "../../firebaseConfig";
import ItemDetail from "../ItemDetail/ItemDetail";
import { getDoc, collection, doc } from "firebase/firestore";
import { Button } from "@mui/material";
import "./ItemDetailContainer.css";

const ItemDetailContainer = () => {
  const navigate = useNavigate();

  const { id } = useParams();

  const [producto, setProducto] = useState({});

  const volver = () => {
    navigate(-1);
  };

  useEffect(() => {
    const itemCollection = collection(db, "productos");
    const ref = doc(itemCollection, id);
    getDoc(ref)
      .then((res) => {
        setProducto({
          ...res.data(),
          id: res.id,
        });
      })
      .catch((error) => {
        console.log(error);
      });
  }, [id]);

  return (
    <div className="item-detail">
      <Button
        sx={{ width: "150px", height: "50px" }}
        variant="contained"
        color="neutral"
        size="small"
        onClick={volver}
      >
        Volver al catálogo
      </Button>
      <hr />
      <ItemDetail producto={producto} />
    </div>
  );
};

export default ItemDetailContainer;
