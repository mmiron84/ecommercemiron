import React from "react"
import carritocompras from '/img/carritocompras.png'
import '../CartWidget/CartWidget.css'

const CartWidget = () => {
  
  return (
    <div>
      <img className="imagencarrito" src={carritocompras} alt="" />
    </div>
  )
}

export default CartWidget
