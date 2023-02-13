import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { productos } from "../../productsMock"
import "./ItemDetailContainer.css"


const ItemDetailContainer = () => {

  const { id } = useParams();

  const [producto, setProducto] = useState({})

  useEffect(() => {
    
    let productoSeleccionado = productos.find( prod => prod.id === Number(id))
    
    setProducto(productoSeleccionado)

  },[])

  return (
    <div className='detalle'>
      <img className='imagen' src={producto.img} alt="" />
      <div className='info'>
        <h1 className='nombre'>{producto.nombre}</h1>
        <h2 className='stock'>Stock disponible: {producto.stock}</h2>
        <h2>Precio: ${producto.precio}</h2>
      </div>
    </div>
  )
}

export default ItemDetailContainer