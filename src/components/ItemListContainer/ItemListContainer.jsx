import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { productos } from "../../productsMock";
import ItemList from "../ItemList/ItemList";

const ItemListContainer = ()=> {

    const { categoryName } = useParams();

    const [items, setItems] = useState([])

    useEffect(()=>{
        const productosFiltrados = productos.filter( (producto) => producto.categoria === categoryName)

        const task = new Promise((resolve, reject) => {
            resolve( categoryName ? productosFiltrados : productos);
        });

        task
            .then((res) => {setItems(res)})
            .catch((error) => console.log("Rechazado: ", error))
    }, [categoryName])

    return (
        <div>
            <ItemList items={items}/>
        </div>
    )

}

export default ItemListContainer