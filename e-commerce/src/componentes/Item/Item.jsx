import React from 'react'
import './Item.css'
import { Link } from 'react-router-dom'


const Item = ({id, nombre,precio,img}) => {
  return (
    <div className='cardProducto'>
        <img className='imagen-producto' src={img} alt={nombre}/>
        <h3>{nombre}</h3>
        <p>$:{precio}</p>
        <p>ID:{id}</p>
        <Link to={`/item/${id}`}>
        <button>Mas detalles</button>      
        </Link>
    </div>
  )
}

export default Item
