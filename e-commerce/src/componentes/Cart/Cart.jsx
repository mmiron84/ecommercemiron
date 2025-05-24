import React from 'react'
import { useContext } from 'react'
import { CarritoContext } from '../../context/CarritoContext'
import { Link } from 'react-router-dom'
import CartItem from '../CartItem/CartItem'
import { Button } from 'bootstrap'

const Cart = () => {

    const {carrito, vaciarCarrito,total,cantidadTotal}= useContext(CarritoContext)

    if(cantidadTotal === 0){
        return(
        <>
            <h2>No hay productos en su carrito, dirigase a la pagina principal</h2>
            <Link to={"/"}>ver productos</Link>
        </>
        )
    }


  return (
    <div>
      {
        carrito.map(producto => <CartItem key={producto.item.id} {...producto}/>)
      }
      
      <h3>Total:${total}</h3>
      <h3>Cantidad total:{cantidadTotal}</h3>
      <button className="btn btn-warning" onClick={()=>vaciarCarrito()}>vaciar carrito</button>
      <Link to="/checkout">
      <button className="btn btn-success">Finalizar compra</button>
      </Link>
    </div>
  )
}

export default Cart
