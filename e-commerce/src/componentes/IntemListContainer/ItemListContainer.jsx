import React, { useEffect, useState } from 'react';
import '../IntemListContainer/ItemListContainer.css';
import { getProductos, getProductosPorCategoria } from '../../asynmock';
import ItemList from '../itemList/ItemList';
import { useParams } from 'react-router-dom';


const ItemListContainer = () => {
  const [productos, setProductos]= useState([])

  const {idCategoria} = useParams()

  useEffect(()=>{
    const funcionProductos = idCategoria ? getProductosPorCategoria : getProductos;
    funcionProductos(idCategoria)
      .then(res=>setProductos(res))

  },[idCategoria])

  return (
    <div className='productos'>
      <h2>Mis Productos</h2>
      <ItemList productos={productos}/>

    </div>
  )
}

export default ItemListContainer
