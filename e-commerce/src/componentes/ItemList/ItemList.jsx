import React from 'react'
import './ItemList.css'
import Item from '../Item/Item'


const ItemList = ({productos}) => {
  return (
    <div className='contenedorProductos'>
        {productos.map(item=> <Item key={item.id} {...item}/>)}
    
      
    </div>
  )
}

export default ItemList
