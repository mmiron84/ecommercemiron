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
        <button className="btn btn-primary" onClick={incrementar}>
          +
        </button>
        {cantidad}
        <button className="btn btn-primary" onClick={decrementar}>
          -
        </button>
      </div>
      <div>
        <button
          className="btn btn-primary"
          onClick={() => funcionAgregar(cantidad)}
        >
          Agregar a Carrito
        </button>
      </div>
    </div>
  );
};

export default ItemCount;
