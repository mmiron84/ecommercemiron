import React from "react"
import "../NavBar/NavBar.css"
import CartWidget from "../CartWidget/CartWidget"
import logo from'../imagenes/log.png'



const NavBar = () => {
  
  return (
    <div >
     <nav className="navbar">
        <img src={logo} alt="logo"/>
        <ul className="nav-list">
            <li className="lista">Inicio</li>
            <li className="lista">Servicios</li>
            <li className="lista">Productos</li>
            <li className="lista">Contacto</li>
        </ul>
        <CartWidget/>    
    </nav>
    </div>
  )
}

export default NavBar
