import React, { useState } from "react";

const ItemCount = ({ stock, inicial, funcionAgregar }) => {
  const [cantidad, setCantidad] = useState(inicial);

  const incrementar = () => {
    if (cantidad < stock) {
      setCantidad(cantidad + 1);
    }
  };

  const decrementar = () => {
    if (cantidad > inicial) {
      setCantidad(cantidad - 1);
    }
  };

  return (
    <div>
      <div>
        <button onClick={incrementar}>+</button>
        {cantidad}
        <button onClick={decrementar}>-</button>
      </div>
      <div>
        <button onClick={() => funcionAgregar(cantidad)}>
          Agregar a Carrito
        </button>
      </div>
    </div>
  );
};

export default ItemCount;
