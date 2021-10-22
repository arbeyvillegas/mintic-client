import { postProducto } from '../api';
import React, { useState } from 'react';

function Producto(props) {
  const guardarProducto = () => {
    postProducto(producto)
      .then((res) => {
        console.log(res.data);
        alert('Guardado existosamente!');
        props.setOpcion('Listado')
      })
      .catch(error => {
        alert(error.message);
        console.error(error);
      }
      );
  };

  const [producto, setProducto] = useState({ nombre: '', ean: '', precio: 0 });

  const setValorProducto = valor => {
    setProducto({ ...producto, ...valor });
  };

  return (
    <div className="container">
      <h2>Producto</h2>
      <div className="form">
        <div className="formFila">
          <div className="formLabel">
            <label>Nombre</label>
          </div>
          <div className="formInput">
            <input
              type="text"
              value={producto.nombre}
              onChange={(e) => setValorProducto({ nombre: e.target.value })}
            />
          </div>
        </div>
        <div className="formFila">
          <div className="formLabel">
            <label>EAN</label>
          </div>
          <div className="formInput">
            <input
              type="text"
              value={producto.ean}
              onChange={(e) => setValorProducto({ ean: e.target.value })}
            />
          </div>
        </div>
        <div className="formFila">
          <div className="formLabel">
            <label>Precio</label>
          </div>
          <div className="formInput">
            <input
              type="text"
              value={producto.precio}
              onChange={(e) => setValorProducto({ precio: e.target.value })}
            />
          </div>
        </div>
      </div>
      <div className="botones">
        <button onClick={guardarProducto}>Guardar</button>
        <button onClick={() => props.setOpcion('Listado')}>Cancelar</button>
      </div>
    </div>
  );
}

export default Producto;
