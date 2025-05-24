import React from 'react'
import mensajeerror from "/img/error.jpg"
import './ItemError.css'

const ItemError = () => {
  return (
    <div className="contenedor-error">
      <img className="imagen" src={mensajeerror} alt="error" />
    </div>
  );
};

export default ItemError;
