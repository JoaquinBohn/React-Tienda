import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { db } from "../../firebaseConfig";
import ItemDetail from "../ItemDetail/ItemDetail";
import { getDoc, collection, doc } from "firebase/firestore";
import "./ItemDetailContainer.css";

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

  return (
    <div className="item-detail">
      <ItemDetail producto={producto} />
    </div>
  );
};

export default ItemDetailContainer;
