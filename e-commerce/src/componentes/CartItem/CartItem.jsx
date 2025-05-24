import React from 'react'
import { useContext } from 'react'
import { CarritoContext } from '../../context/CarritoContext'


const CartItem = ({item,cantidad}) => {

    const {eliminarProducto}= useContext(CarritoContext)

  return (
    <div>
        <h4>{item.nombre}</h4>
        <p>Cantidad:{cantidad}</p>
        <p>Precio: {item.precio}</p>
        <button className="btn btn-danger" onClick={()=>eliminarProducto(item.id)}>Eliminar Producto</button>
      
    </div>
  )
}

export default CartItem
