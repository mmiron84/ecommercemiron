import React, { useState } from 'react'
import ItemCount from '../ItemCount/ItemCount'
import { Link, Links } from 'react-router-dom'
import './itemDetail.css'

const ItemDetail = ({id,nombre,precio,img,stock}) => {

  const [agregarCantidad, setAgregarCantidad]= useState(0)

  const manejadorCantidad = (cantidad)=>{
    setAgregarCantidad(cantidad)
  }

  return (
    <div className='contenedor-principal'>
        <h2>Nombre: {nombre}</h2>
        <h3>Precio: {precio}</h3>
        <h3>ID:{id} </h3>
        <img src={img} alt={nombre} />
        <p>Lorem ipsum dolor sit amet consectetur am velit?</p>
        {
          agregarCantidad > 0 ?(<Link to="/cart" >Terminar Compra</Link>):(<ItemCount inicial={1} stock={stock} funcionAgregar={manejadorCantidad}/>)
        }
      
    </div>
  )
}

export default ItemDetail
