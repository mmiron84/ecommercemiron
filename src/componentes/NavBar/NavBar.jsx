import React from "react"
import "../NavBar/NavBar.css"
import CartWidget from "../CartWidget/CartWidget"
import logo from'/img/log.png'
import { Link, NavLink } from "react-router-dom"



const NavBar = () => {
  
  return (
    <div>

    <Link to="/">
      <img src={logo} alt="logo"/>
    </Link>
   <nav className="navbar">
      <ul className="nav-list">
          <li className="lista">Inicio</li>
          <li className="lista">Servicios</li>
          <li className="lista">Productos
            <ul>
              <li>
                <NavLink to="categoria/original" className="lista">Original</NavLink> 
              </li>
              <li>
                <NavLink to="categoria/noOriginal" className="lista" >No Original</NavLink> 
              </li>  
            </ul>
          </li> 
          <li className="lista">Contacto</li>
      </ul>
      <CartWidget/>    
  </nav>
</div>
)
}

export default NavBar
