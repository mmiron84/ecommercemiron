import React, { useState } from 'react'
import ItemCount from '../ItemCount/ItemCount'
import { Link, Links } from 'react-router-dom'
import './itemDetail.css'
import { CarritoContext } from '../../context/CarritoContext'
import { useContext } from 'react'
import { toast } from 'react-toastify'

const ItemDetail = ({ id, nombre, precio, img, stock,detalle }) => {
  const [agregarCantidad, setAgregarCantidad] = useState(0);

  const { agregarAlcarrito } = useContext(CarritoContext);

  const manejadorCantidad = (cantidad) => {
    setAgregarCantidad(cantidad);
    const item = { id, nombre, precio };
    agregarAlcarrito(item, cantidad);
    toast.success("Su compra ya se encuentra en el carrito!",{autoClose:1500,theme: "light",position: "top-center"})
  };

  return (
    <div className="contenedor-detail">
      <h2>{nombre}</h2>
      <h3>Precio: {precio}</h3>
      <h3>ID:{id} </h3>
      <img src={img} alt={nombre} />
      <p>{detalle}</p>
      {agregarCantidad > 0 ? (
        <Link to="/cart">
         <button className="btn btn-success">Terminar Compra</button> 
        </Link>
      ) : (
        <ItemCount
          inicial={1}
          stock={stock}
          funcionAgregar={manejadorCantidad}
        />
      )}
    </div>
  );
};

export default ItemDetail;
