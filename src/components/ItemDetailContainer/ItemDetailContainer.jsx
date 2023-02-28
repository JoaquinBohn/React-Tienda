import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { db } from "../../firebaseConfig";
import ItemDetail from "../ItemDetail/ItemDetail";
import { getDoc, collection, doc } from "firebase/firestore";

const ItemDetailContainer = () => {
  const { id } = useParams();

  const [producto, setProducto] = useState({});

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

  return <ItemDetail producto={producto} />;
};

export default ItemDetailContainer;
