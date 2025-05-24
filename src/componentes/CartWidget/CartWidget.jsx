import React from "react"
import carritocompras from '/img/carritocompras.png'
import '../CartWidget/CartWidget.css'
import { useContext } from "react"
import {CarritoContext} from "../../context/CarritoContext"
import { Link } from "react-router-dom"

const CartWidget = () => {

  const {cantidadTotal}=useContext(CarritoContext);
  
  return (
    <div>
      <Link className="carritolink" to="/cart">
      <img className="imagencarrito" src={carritocompras} alt="" />
      {
        cantidadTotal > 0 && <strong>{cantidadTotal}</strong>
      }      
      </Link>
    </div>
  )
}

export default CartWidget
