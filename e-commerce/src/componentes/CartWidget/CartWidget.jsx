import React from "react"
import carritocompras from '../imagenes/carritocompras.png'
import '../CartWidget/CartWidget.css'

const CartWidget = () => {
  
  return (
    <div>
      <img className="imagencarrito" src={carritocompras} alt="" />
    </div>
  )
}

export default CartWidget
