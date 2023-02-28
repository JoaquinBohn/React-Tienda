import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { db } from "../../firebaseConfig";
import ItemList from "../ItemList/ItemList";
import { getDocs, collection, query, where } from "firebase/firestore";

const ItemListContainer = () => {
  const { categoryName } = useParams();

  const [items, setItems] = useState([]);

  useEffect(() => {
    const itemCollection = collection(db, "productos");

    if (categoryName) {
      const q = query(itemCollection, where("categoria", "==", categoryName));
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
    } else {
      getDocs(itemCollection)
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
    }
  }, [categoryName]);

  return (
    <div>
      <ItemList items={items} />
    </div>
  );
};

export default ItemListContainer;
