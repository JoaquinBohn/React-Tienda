import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { db } from "../../firebaseConfig";
import ItemList from "../ItemList/ItemList";
import SideBar from "../SideBar/SideBar";
import { getDocs, collection, query, where } from "firebase/firestore";
import "./ItemListContainer.css";
import { LoadingSpinner } from "../LoadingSpinner/LoadingSpinner";
import Navbar from "../Navbar/Navbar";

const ItemListContainer = () => {
  const { categoryName } = useParams();

  const [items, setItems] = useState([]);

  useEffect(() => {
    const itemCollection = collection(db, "productos");

    const categorias = ["novelas", "cuentos", "academicos", "infantiles"];

    if (categoryName !== "todos") {
      const q = categorias.some((element) => element === categoryName)
        ? query(itemCollection, where("categoria", "==", categoryName))
        : query(itemCollection, where("id-autor", "==", categoryName));

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

  if (items.length < 1) {
    return <LoadingSpinner />;
  }

  return (
    <div className="item-list-container">
      <Navbar />
      <div className="item-list">
        <SideBar />
        <ItemList items={items} />
      </div>
    </div>
  );
};

export default ItemListContainer;
