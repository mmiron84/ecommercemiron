import React, { useEffect, useState } from 'react'
import { getunProducto } from '../../asynmock'
import ItemDetail from '../ItemDeatil/ItemDetail'
import { useParams } from 'react-router-dom'

const ItemDetailContainer = () => {
    const [producto, setProducto]=useState(null)

    const {idItem} = useParams() 

    useEffect(()=>{
        getunProducto(idItem)
        .then(respuesta=>setProducto(respuesta))
    },[idItem])
  return (
    <div>
        <ItemDetail {...producto}/>
      
    </div>
  )
}

export default ItemDetailContainer


