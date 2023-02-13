import React from 'react'
import { Link } from "react-router-dom";
import "./ProductCard.css"

const ProductCard = ( { element } ) => {
  return (
    <div className = 'tarjeta' style = { {backgroundImage: `url(${element.img})`} }>
        <div className = 'producto'>
            <h2>{element.nombre}</h2>
            <p>Precio: ${element.precio}</p>
            <Link to={`/item/${element.id}`}>
              <button className='boton-detalles'>
                Ver más
              </button>
            </Link>
        </div>
    </div>
  )
}

export default ProductCard